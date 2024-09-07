export default function StickyHeader() {
    return (
        <div
            className="h-10 w-full border-b border-red-200 bg-red-50">

            <div className="h-full container mx-auto flex flex-row items-center justify-between">
                <div className="flex gap-5 flex-row items-center">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span
                            className="inline-flex p-1 me-3 bg-red-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="w-3 h-3 text-red-500 dark:text-gray-400">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                                <path d="M15 7a2 2 0 0 1 2 2"/>
                                <path d="M15 3a6 6 0 0 1 6 6"/>
                            </svg>
                            <span className="sr-only">Phone</span>
                        </span>
                        <a href="tel:26834500836">+268 3450 0836</a>
                    </p>

                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span
                            className="inline-flex p-1 me-3 bg-red-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="w-3 h-3 text-red-500 dark:text-gray-400">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path
                                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path
                                d="M3 7l9 6l9 -6"/>
                            </svg>
                            <span className="sr-only">Email</span>
                        </span>
                        <a href="mailto:ugelectronics7@gmail.com">ugelectronics7@gmail.com</a>
                    </p>

                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span
                            className="inline-flex p-1 me-3 bg-red-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="w-3 h-3 text-red-500 dark:text-gray-400">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                                <path
                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
                            </svg>
                            <span className="sr-only">Location</span>
                        </span>
                        <span>Mbabane, Opposite HiFiCorp</span>
                    </p>
                </div>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/UmfeziGroup/" className="text-gray-500 group transition-all p-1 bg-red-200 hover:bg-gray-900 rounded-full">
                        <svg className="w-4 h-4 text-red-500 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd"
                                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="https://www.facebook.com/UmfeziGroup/" className="text-gray-500 group transition-all hover:bg-gray-900 ms-5 p-1 bg-red-200 rounded-full">
                        <svg className="w-4 h-4 text-red-500 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 20 17">
                            <path fillRule="evenodd"
                                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

