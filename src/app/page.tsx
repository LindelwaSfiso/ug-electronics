import HomeSlider from "@/components/home/HomeSlider";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesMarquee from "@/components/home/ServicesMarquee";

export default function Home() {
    return (
        <div>

            {/* slider section */}
            <HomeSlider/>

            {/* brands section */}
            <BrandsSection />

            {/* brands section */}
            <ServicesMarquee />

        </div>
    );
}
