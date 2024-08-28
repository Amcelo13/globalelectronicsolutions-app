'use client'

import Link from 'next/link'
import Products from '@/data/product-and-brand-associated.json'
import React from 'react'
import CompanyNames from '@/data/company-names.json'
import { Mail, Navigation, PhoneCall } from 'lucide-react';
import Image from 'next/image';
const Footer = () => {
    const address = "Plot No 180-181 Village Dhankot Global Electronic Solutions, Gurgaon - 122505, Gurugram, Haryana, India";
    const encodedAddress = encodeURIComponent(address);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleClickProductSection = () => {
        const productSection = document.getElementById('product-section');
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div className='bg-[#16bed4] text-white p-8'>
            <div className='mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {/* Contact Us Column */}
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
                        <div className="mb-3">
                            <Mail size={20} className='text-white text-[20px]' />
                            <Link target='_blank' href="mailto:globalelectronicsggn@gmail.com" className="overflow-clip break-words text-ellipsis hover:underline hover:text-bold">
                                globalelectronicsggn@gmail.com
                            </Link>
                        </div>
                        <div className="mb-3">
                            <PhoneCall size={20} className='text-white text-[20px]' />
                            <Link href="tel:08046042702" className="hover:underline">
                                08046042702
                            </Link>
                        </div>
                        <div className="mb-3">
                            <Navigation size={20} className='text-white text-[20px]' />
                            <Link href={directionsUrl} target='_blank' rel="noopener noreferrer" className="hover:underline mt-2 overflow-clip break-words text-ellipsis">Get Directions</Link>
                            <p>Plot No 180-181 Village Dhankot Global Electronic Solutions, Gurgaon - 122505, Gurugram, Haryana, India</p>

                        </div>
                    </div>

                    {/* Home Column */}
                    <div className='flex flex-col gap-y-2'>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <Link onClick={handleClick}
                            href='/' className={`hover:underline`}>Home</Link>
                        <Link href='/about' className={`hover:underline`} >About</Link>
                    </div>

                    {/* Manufacturer Column */}
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Manufacturers</h2>
                        {
                            CompanyNames.map((company, index) => {
                                return (
                                    <Link href={`/companies/${company.link}`} key={index} className={`cursor-pointer hover:underline text-left py-2`}>
                                        <p key={index} className={`cursor-pointer hover:underline text-left py-2`}>{company.name}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    {/* Products Column */}
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Products</h2>
                        {
                            Products.map((product, index) => {
                                return (
                                    <Link href='/' key={index} onClick={handleClickProductSection}>
                                        <p key={index} className={`cursor-pointer hover:underline text-left py-2`}>{product.type}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pl-2 font-medium gap-x-2 border-t border-white mt-2 pt-2 pb-2">
                <div className='flex justify-between w-full gap-2 items-center flex-wrap'>
                    <div className='flex justify-between gap-2 items-center flex-wrap'>
                        <Image src='/company-logo.png' alt="logo" width={60} height={60}
                            className="rounded-full p-1" />
                        <p className="text-[24px] leading-none font-bold">
                            Global Electronics Solutions
                            <p className="m-1 text-[12px] text-gray-500"> Global Electronic Solutions, Gurgaon, Gurugram, Haryana</p>
                        </p>
                    </div>
                    <div className='max-w-[250px]'>
                        Copyright© 2024 Global Electronics Solutuons Co.,LTD All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer