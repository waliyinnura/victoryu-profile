import { ResizeableNavbar } from "@/components/Navbar";
import ShapeHero from "@/components/ui/kokonutui/shape-hero";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center overflow-hidden md:overflow-visible bg-white dark:bg-black">
      <div className="w-full">
        <ResizeableNavbar />
        <ShapeHero title1="Victoryu" title2="We Create an Art." />
      </div>
    </main>
  );
}
