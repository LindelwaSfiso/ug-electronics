import HomeSlider from "@/components/home/HomeSlider";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import CompanyOverview from "@/components/home/CompanyOverview";
import {ServicesSummary} from "@/components/home/ServicesSummary";
import FrequentlyAskedQuestions from "@/components/home/FrequentlyAskedQuestions";
import ContactUs from "@/components/home/ContactUs";
import UgMapLocation from "@/components/common/UgMapLocation";

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
            <ServicesMarquee/>

            {/* services summary */}
            <ServicesSummary/>

            {/* brands section */}
            <BrandsSection/>

            <UgMapLocation/>

            {/* frequently asked questions */}
            <FrequentlyAskedQuestions/>


            <ContactUs className="mb-10"/>

        </div>
    );
}
