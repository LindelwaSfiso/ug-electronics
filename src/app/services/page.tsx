import HomeSlider from "@/components/home/HomeSlider";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";

export default function Home() {
    return (
        <div>

            {/* slider section */}
            <HomeSlider/>

            {/* services grid */}
            <ServicesGrid/>

            {/* brands section */}
            <BrandsSection/>

            {/* brands section */}
            <ServicesMarquee/>

        </div>
    );
}
