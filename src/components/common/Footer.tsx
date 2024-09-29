import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white pb-8">

            <div className="container-padding mx-auto text-center">

                <a href="/" className="flex items-center justify-center">
                    <img src="/logo.jpg" className="mr-3 h-12"
                         alt="UG Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        UG Electronics
                    </span>
                </a>

                <p className="my-6 text-gray-500 max-w-5xl mx-auto">
                    We specialize in security (CCTV, intercoms, alarm systems, biometrics, gate motors, garage
                    motors), technology (pc and laptops repair), safety (fire detection systems, fire
                    extinguisher and fire blankets) products and services.
                </p>

                <ul className="flex flex-wrap justify-center items-center mb-4 text-gray-900">
                    <li>
                        <a href="/about" className="mr-4 hover:underline md:mr-6 ">About Us</a>
                    </li>
                    <li>
                        <a href="/services" className="mr-4 hover:underline md:mr-6">Services</a>
                    </li>
                    <li>
                        <a href="/products" className="mr-4 hover:underline md:mr-6 ">Products</a>
                    </li>
                </ul>

                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©2024 <a href="/" className="hover:underline">UG Electronics™</a>. All Rights Reserved.
                </span>

                <div className="flex mt-4 space-x-6 justify-center">
                    <a href="https://www.facebook.com/UmfeziGroup/" target="_blank"
                       className="text-gray-500 hover:text-red-600 dark:hover:text-white">
                        <FaFacebook className="w-5 h-5"/>
                    </a>

                    <a href="https://www.facebook.com/UmfeziGroup/" target="_blank"
                       className="text-gray-500 hover:text-red-600 dark:hover:text-white">
                        <FaTwitter className="w-5 h-5"/>
                    </a>

                    <a href="https://www.facebook.com/UmfeziGroup/" target="_blank"
                       className="text-gray-500 hover:text-red-600 dark:hover:text-white">
                        <FaInstagram className="w-5 h-5"/>
                    </a>
                </div>

            </div>

        </footer>
    )
}