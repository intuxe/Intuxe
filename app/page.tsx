
import HalftoneWaves from "@/app/components/halftone-waves";
import RainingLetters from "@/app/components/rainingletters";
import indigma from '@/app/components/indigma';
import IndigmaContent from "@/app/components/indigma";
import VideoComponent from '@/app/components/video1';

export default function Home() {
    return (
        <main className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black">
            {/* HalftoneWaves directly as the first viewport */}
            <HalftoneWaves />
            <IndigmaContent />
            <VideoComponent />
            
        </main>
    );
}