import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
   </div>
  );
}
