import HomeSlider from "@/components/home/HomeSlider";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import CompanyOverview from "@/components/home/CompanyOverview";
import {ServicesSummary} from "@/components/home/ServicesSummary";

export default function Home() {
    return (
        <div>

            {/* slider section */}
            <HomeSlider/>

            {/* services grid */}
            <ServicesGrid/>

            {/* company overview */}
            <CompanyOverview/>

            {/* brands section */}
            <BrandsSection/>

            {/* brands section */}
            <ServicesMarquee/>

            {/* services summary */}
            <ServicesSummary/>

        </div>
    );
}
