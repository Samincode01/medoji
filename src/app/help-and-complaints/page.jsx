
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Wallet,
  Stethoscope,
  MessageSquareWarning,
  MessageCircle,
  Clock3,
  FileText,
  ShieldCheck,
  Phone,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/8801604502782";

export default function HelpAndComplaintsPage() {
  const supportTopics = [
    {
      icon: CalendarDays,
      title: "Booking & appointments",
      description:
        "Help with appointment requests, booking confirmation, cancellations or rescheduling.",
    },
    {
      icon: Wallet,
      title: "Payments & refunds",
      description:
        "Questions about payment verification, transaction issues or refund requests.",
    },
    {
      icon: Stethoscope,
      title: "Consultation support",
      description:
        "Assistance with online sessions, Google Meet links or your consultation experience.",
    },
    {
      icon: MessageSquareWarning,
      title: "Complaints & feedback",
      description:
        "Tell us about a problem or share feedback about your experience with Medoji.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#17352A]">
      <div className="mx-auto max-w-[1080px] px-5 pb-16 pt-8 sm:px-8 sm:pt-12">

        {/* BACK LINK */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#64766C] transition hover:text-[#174433]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to home
        </Link>

        {/* HERO */}
        <section className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_0.8fr] md:gap-16 lg:mt-16">

          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#19815C]">
              MEDOJI HEALTHCARE · SUPPORT
            </p>

            <h1 className="mt-5 max-w-[600px] text-[42px] font-semibold leading-[1.1] tracking-[-0.055em] text-[#17352A] sm:text-[54px] lg:text-[62px]">
              We're here
              <br />
              to help<span className="text-[#19A069]">.</span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[14px] leading-7 text-[#64766C] sm:text-[15px] sm:leading-8">
              Questions about a booking, payment or consultation? Need to
              report an issue? Our support team is here to listen and help.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#174433] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#103629]"
            >
              <MessageCircle size={18} />
              Contact us on WhatsApp
              <ArrowUpRight size={15} />
            </a>

            <p className="mt-4 text-[12px] text-[#829287]">
              WhatsApp support · 01604 502782
            </p>
          </div>

          {/* SUPPORT CONTACT PANEL */}
          <div className="relative overflow-hidden rounded-[22px] bg-[#F0F5EF] p-7 sm:p-9">
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#19815C]">
                <MessageCircle size={23} />
              </div>

              <p className="mt-7 text-[11px] font-bold tracking-[0.16em] text-[#64816E]">
                TALK TO OUR TEAM
              </p>

              <h2 className="mt-3 text-[27px] font-semibold tracking-[-0.04em] text-[#17352A]">
                Let's sort it out.
              </h2>

              <p className="mt-3 text-[13px] leading-7 text-[#64766C]">
                Reach out through WhatsApp and tell us what you need help
                with. Include your booking details if your question is
                appointment-related.
              </p>

              <div className="mt-7 border-t border-[#D7E4D9] pt-5">
                <p className="text-[11px] text-[#829287]">
                  SUPPORT WHATSAPP
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-[#174433] transition hover:text-[#19815C]"
                >
                  01604 502782
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full border border-[#D7E4D9]" />
            <div className="pointer-events-none absolute -bottom-8 -right-4 h-28 w-28 rounded-full border border-[#D7E4D9]" />
          </div>
        </section>

        {/* SUPPORT TOPICS */}
        <section className="mt-20 sm:mt-24">
          <div className="max-w-[550px]">
            <p className="text-[10px] font-bold tracking-[0.18em] text-[#19815C]">
              HOW CAN WE HELP?
            </p>

            <h2 className="mt-3 text-[27px] font-semibold tracking-[-0.04em] sm:text-[34px]">
              What do you need help with?
            </h2>

            <p className="mt-3 text-[13px] leading-7 text-[#718278]">
              Whatever the issue, let us know. Here are some common reasons
              people contact our team.
            </p>
          </div>

          <div className="mt-9 grid gap-x-12 md:grid-cols-2">
            {supportTopics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <div
                  key={topic.title}
                  className="flex gap-5 border-t border-[#DCE7DF] py-6"
                >
                  <span className="mt-1 shrink-0 text-[12px] font-medium text-[#9AAA9F]">
                    0{index + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        className="text-[#19815C]"
                      />

                      <h3 className="text-[15px] font-semibold text-[#17352A]">
                        {topic.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-[13px] leading-6 text-[#718278]">
                      {topic.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* BEFORE CONTACTING SUPPORT */}
        <section className="mt-14 border-t border-[#DCE7DF] pt-8">
          <div className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <FileText size={19} className="text-[#19815C]" />
                <h2 className="text-[17px] font-semibold">
                  Before contacting us
                </h2>
              </div>

              <p className="mt-3 text-[13px] leading-7 text-[#718278]">
                To help us understand your issue, please have your booking
                reference, appointment date and a short description ready
                when relevant.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={19} className="text-[#19815C]" />
                <h2 className="text-[17px] font-semibold">
                  Your privacy matters
                </h2>
              </div>

              <p className="mt-3 text-[13px] leading-7 text-[#718278]">
                Please avoid sharing unnecessary sensitive medical
                information in your initial support message.
              </p>
            </div>
          </div>
        </section>

        {/* POLICY LINKS */}
        <section className="mt-14 flex flex-col justify-between gap-5 border-t border-[#DCE7DF] pt-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-[15px] font-semibold">
              Looking for our policies?
            </h2>

            <p className="mt-1 text-[12px] text-[#829287]">
              Read the information about bookings and service terms.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/booking-refund-policy"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#174433] transition hover:text-[#19815C]"
            >
              Booking & Refund Policy
              <ArrowUpRight size={13} />
            </Link>

            <Link
              href="/terms-and-conditions"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#174433] transition hover:text-[#19815C]"
            >
              Terms & Conditions
              <ArrowUpRight size={13} />
            </Link>

            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#174433] transition hover:text-[#19815C]"
            >
              Privacy Policy
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-[#E8EEE9] pt-5 text-center text-[11px] text-[#9AA79F]">
         © Medoji Healthcare
        </footer>
      </div>
    </main>
  );
}
