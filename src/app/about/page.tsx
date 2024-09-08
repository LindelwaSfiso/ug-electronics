import HomeSlider from "@/components/home/HomeSlider";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutHeaderImage from "@/components/about/AboutHeaderImage";
import CompanyOverview from "@/components/about/CompanyOverview";

export default function Home() {
    return (
        <section>

            {/* header image */}
            <AboutHeaderImage/>

            <CompanyOverview/>


        </section>
    );
}
