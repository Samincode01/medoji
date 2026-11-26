
import { notFound } from "next/navigation";
import { SAMPLE_DOCTORS } from "@/data/doctors";
import DoctorProfileView from "@/components/doctors/DoctorProfileView";

export function generateStaticParams() {
  return SAMPLE_DOCTORS.map((doctor) => ({
    id: [doctor.id],
  }));
}

export default async function DoctorProfilePage({ params }) {
  const { id } = await params;

  // Supports the [...id] catch-all route.
  const routeId = Array.isArray(id) ? id.join("/") : id;

  let decodedId = routeId;

  try {
    decodedId = decodeURIComponent(routeId);
  } catch {
    notFound();
  }

  const normalizedId = decodedId.toLowerCase();

  const doctor = SAMPLE_DOCTORS.find((item) => {
    return (
      item.id?.toLowerCase() === normalizedId ||
      item.profileId?.toLowerCase() === normalizedId
    );
  });

  if (!doctor) {
    notFound();
  }

  return <DoctorProfileView doctor={doctor} />;
}
