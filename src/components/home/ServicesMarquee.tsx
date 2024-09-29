import Marquee from "react-fast-marquee";

const servicesOffered: string[] = [
    "CCTV Camera Systems",
    "Gate Motors",
    "Alarm Systems",
    "Access Control-Biometrics",
    "Garage Motors",
    "Strong Rooms",
    "It Networking",
    "DSTV Installation"
]

export default function ServicesMarquee() {
    return (
        <Marquee
            loop={0}
            speed={150}
            className="h-[300px] bg-[url('/home/home-8.jpg')] bg-cover bg-no-repeat bg-center-top bg-scroll lg:bg-fixed items-end">
            {
                servicesOffered.map((service, index) => (
                    <p className="py-10 text-4xl md:text-5xl lg:text-6xl font-extrabold w-[100%] px-16 bg-gradient-to-t from-black/50"
                       style={{
                           color: 'color',
                           WebkitTextFillColor: "transparent",
                           WebkitTextStrokeWidth: "2px",
                           WebkitTextStrokeColor: "white",
                           fontFamily: "Poppins"
                       }}
                       key={index}>
                        {service}
                    </p>
                ))
            }
        </Marquee>
    )
}