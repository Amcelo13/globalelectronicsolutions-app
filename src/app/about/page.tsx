'use client'
import SvgComponent from "@/arrow";
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <title>About Us</title>
            <div className="p-10">
                <div className="flex gap-10 flex-col-reverse md:flex-row">
                    <div className="fixed right-2 z-10 bottom-[40px]">
                        <SvgComponent stroke="#FAD5A5" rotate={90} />
                    </div>
                    <div className="md:flex-1 ">
                        <h2 className="text-2xl font-bold mb-4">Reach Us</h2>
                        <div className="relative w-[100%] md:h-[550px] pt-[75%]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1189535830185!2d76.95522327461053!3d28.47596407575066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d176b504919d5%3A0x3ff792f76d020d74!2sGlobal%20Electronic%20Solutions!5e0!3m2!1sen!2sin!4v1724814163272!5m2!1sen!2sin"
                                style={{ position: 'absolute', border: "none", top: 0, left: 0, width: '100%', height: '100%' }}
                                aria-hidden="false"
                            ></iframe>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-4">About The Company</h1>
                        {/* Add the Company Brand Logo here */}
                        <Image src='/Global Logo.png' width={200} height={200} alt='Company Logo' className='mb-4 rounded-lg' />
                        <p className="mb-4">
                            Established in year 2020, Global Electronic Solution is the leading Wholesale Trader of Cooling Fans, Duct Fans, Axial Fans, Cooling Fan, Centrifugal Fans, Inline Fan, Inflatable Blower, also engaged in Trading and Supplying an exceptional quality array of Electrical Capacitor, Integrated Circuit And Component, Electrical Connector, SMD Capacitor And Fuse, Power Mosfet Transistor, Rectifier And Diode, Electronic Resistors, Electrical Transistors, Industrial Relays, etc We have an advanced infrastructural base that is equipped with all the essential amenities. Thus, we aim to understand the diverse needs of our clients and offer suitable range of products . We are known to make use of the best quality components, coupled with the latest technology.. We are known to make use of the best quality components, coupled with the latest technology. Being a client-centric firm, our main aim is to accomplish the customers needs very competently.
                        </p>
                    </div>
                </div>
                <div className="flex-1 pt-5">
                    <h2 className="text-2xl font-bold mb-4">Company Details</h2>
                    <p><strong>CEO:</strong> Naresh</p>
                    <p><strong>Registered Address:</strong> Plot No 180-181 Village Dhankot, Behind Om Indu Eyes Hospital, Global Electronic Solution, Gurugram- 122505, Haryana, India</p>
                    <p><strong>Total Number of Employees:</strong> Upto 10 People</p>
                    <p><strong>Year of Establishment:</strong> 2020</p>
                    <p><strong>Legal Status of Firm:</strong> Partnership Firm</p>
                    <p><strong>GST No:</strong> 06AAVFG5510A1ZO</p>

                    <h2 className="text-2xl font-bold mt-4">Why Us?</h2>
                    <p className="mb-4">
                        Since our commencement, we have been indulged in providing top quality products to our clients and ensure their utmost satisfaction. Following are the facts for which we are the preferred choice of our clients:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Timely delivery</li>
                        <li>State-of-art manufacturing unit</li>
                        <li>Fair business policy</li>
                        <li>Qualitative range of products</li>
                        <li>Wide distribution network</li>
                        <li>Affordable price structure</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-4">Our Team</h2>
                    <p>
                        Our teams of highly skilled and experienced professionals help us in the attainment of a number of the firms targets, predefined. The team, for reasons of better and highly effective management of operations, has been parted into several highly operational units. These units, in the most effective and efficient manner, boost the firms production capacity. The division of these professionals is done as per their area of expertise. Further, regular training sessions are provided, for maximum employee satisfaction.
                    </p>

                    <h2 className="text-2xl font-bold mt-4 pb-2">Packaging/Payment and Shipment Details</h2>
                    <p><strong>Payment Mode:</strong> Cash, Credit Card, Cheque, DD, Online</p>
                    <p><strong>Shipment Mode:</strong> By Road</p>
                </div>
            </div>
        </div>
    );
}