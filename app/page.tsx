
import HalftoneWaves from "@/app/components/halftone-waves";
import RainingLetters from "@/app/components/rainingletters";
import indigma from '@/app/components/indigma';
import IndigmaContent from "@/app/components/indigma";

export default function Home() {
    return (
        <main className="relative w-full min-h-screen flex flex-col items-center justify-start">
            {/* HalftoneWaves directly as the first viewport */}
            <HalftoneWaves />
            <IndigmaContent />
               {/* RainingLetters Component */}
            
        </main>
    );
}