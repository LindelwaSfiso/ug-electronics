import {cn} from "@/lib/utils";

export default function ContactUs({className}: { className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-0", className)}>
            <div className="py-8 px-4 md:px-8 bg-slate-800">
                <div className="flex flex-row items-center justify-center md:justify-start gap-x-3">
                    <span
                        className="inline-flex p-1 bg-white rounded-full items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="text-red-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                                <path d="M15 7a2 2 0 0 1 2 2"/>
                                <path d="M15 3a6 6 0 0 1 6 6"/>
                            </svg>
                            <span className="sr-only">Phone</span>
                        </span>
                    <div className="flex flex-col text-base font-bold text-white">
                        <p className="uppercase text-xs font-normal text-gray-300 break">Call Us At:</p>
                        <a href="tel:26834500836" className="hover:text-red-600">+268 3450 0836</a>
                    </div>
                </div>
            </div>

            <div className="py-8 px-4 md:px-8 bg-red-600">
                <div className="flex flex-row items-center justify-center md:justify-start  gap-x-3">
                    <span
                        className="inline-flex p-1 bg-white rounded-full items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="text-red-500">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                                <path
                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
                            </svg>
                            <span className="sr-only">Location</span>
                        </span>
                    <div className="flex flex-col text-base font-bold text-white/80">
                        <p className="uppercase text-xs font-normal">Office Address</p>
                        <p>Mbabane, Opposite HiFiCorp</p>
                    </div>
                </div>
            </div>

            <div className="py-8 px-4 md:px-8 bg-slate-800">
                <div className="flex flex-row items-center justify-center md:justify-start  gap-x-3">
                    <span
                        className="inline-flex p-1 bg-white rounded-full items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="text-red-600">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path
                                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path
                                d="M3 7l9 6l9 -6"/>
                            </svg>
                            <span className="sr-only">Email</span>
                        </span>
                    <div className="flex flex-col text-base font-bold text-white">
                        <p className="uppercase text-xs font-normal text-gray-300">Email Address:</p>
                        <a href="mailto:ugelectronics7@gmail.com"
                           className="hover:text-red-600">ugelectronics7@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}