import { Inter, Noto_Sans_Bengali, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Medoji AI — Connected Healthcare Platform for Bangladesh",
  description:
    "Find trusted doctors and counsellors, follow up on care, and manage genuine prescriptions in one place. Designed specifically for Bangladesh.",
  keywords: [
    "Medoji AI",
    "Bangladesh Healthcare",
    "Doctor Appointment Bangladesh",
    "Mental Health Counselling Dhaka",
    "Online Pharmacy Bangladesh",
    "Telemedicine Bangladesh",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansBengali.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFDFD] text-[#42534A] selection:bg-[#E1F0E6] selection:text-[#174433]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
