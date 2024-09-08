import Image from "next/image";

export default function AboutHeaderImage() {
    return (
        <div className="w-full overflow-hidden">
            <Image
                width={1800}
                height={1800}
                className="h-[400px] w-full object-cover animate-zooming-slow origin-top"
                src={"/company/ug-electronics-group.jpg"}
                alt={"UG Electronics Group Photo"}/>
        </div>
    )
}