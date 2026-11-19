
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

export default function DoctorCard({ doctor }) {
  const {
    id,
    name,
    title,
    qualifications,
    experience,
    image,
    verified,
  } = doctor;

  return (
    <Link
      href={`/doctors/${id}`}
      aria-label={`View profile of ${name}`}
      className="group block h-full rounded-[20px] outline-none focus-visible:ring-2 focus-visible:ring-[#19A069] focus-visible:ring-offset-4"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E7ECE8] bg-white p-3.5 shadow-[0_3px_14px_rgba(19,47,37,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#B8CCBE] group-hover:shadow-[0_14px_35px_rgba(19,47,37,0.10)]">

        {/* DOCTOR PORTRAIT */}
        <div className="relative aspect-[1/1.02] w-full overflow-hidden rounded-[15px] bg-[#EEF2EF]">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-5xl font-semibold text-[#8CA596]">
                {name?.charAt(0)}
              </span>
            </div>
          )}

          {/* VERIFIED INDICATOR */}
          {verified && (
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-white/95 text-[#198052] shadow-sm">
              <BadgeCheck size={18} strokeWidth={2} />
            </div>
          )}
        </div>

        {/* DOCTOR INFORMATION */}
        <div className="flex flex-1 flex-col items-center px-2 pb-2 pt-4 text-center">

          {/* PROFESSIONAL TITLE */}
          <p className="font-bengali text-[17px] font-semibold leading-[1.6] text-[#17352A]">
            {title}
          </p>

          {/* NAME */}
          <h3 className="mt-0.5 text-[15px] font-semibold leading-snug text-[#132F25] transition-colors group-hover:text-[#26704F]">
            {name}
          </h3>

          {/* EXPERIENCE & QUALIFICATIONS */}
          <p className="mt-1.5 line-clamp-2 text-[12px] leading-[1.7] text-[#66776C]">
            {experience ? `${experience} years experience, ` : ""}
            {qualifications}
          </p>

          {/* VIEW PROFILE */}
          <div className="mt-auto flex items-center gap-1.5 pt-4 text-[11px] font-semibold text-[#26704F]">
            View profile
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
