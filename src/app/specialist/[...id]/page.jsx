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
  const doctorId = Array.isArray(id) ? id[id.length - 1] : id;

  const doctor = SAMPLE_DOCTORS.find(
    (item) =>
      item.id === doctorId ||
      item.id.toLowerCase() === decodeURIComponent(doctorId).toLowerCase()
  );

  if (!doctor) {
    notFound();
  }

  return <DoctorProfileView doctor={doctor} />;
}
