import Image from 'next/image'
import React from 'react'
import Services from '@/data/services.json'
const Advantages = () => {
    return (
        <div className='mt-[120px]'>
            <div className="mx-10 flex-col custom-1:flex-row flex gap-6">
                <Image src='/warehouse.jpg' alt="logo" width={580} height={386} className="w-full basis-[45%] object-cover" />
                <div className='flex flex-col gap-y-3 justify-center'>
                    <p className='text-[#16bed4] text-[25px] font-bold'>India`&apos;s #1</p>
                    <p className='text-[32px] font-bold py-4'> Wholesale Trader of Cooling Fans</p>
                    A multi-brands supplier offering in-stock products and sourcing you-required products.
                </div>
            </div>

            <div className='flex mt-8 flex-row-reverse text-white'>
                <p className='rounded-lg custom-1:basis-[70%] p-8 bg-[#16bed4]'>
                    Global Electronic Solutions is a one-stop sourcing base that supplies all types of cooling fans, including state-of-the-art or hard-to-find products.
                    <br />
                    <br />
                    Serving customers in and out of India, we have gained recognition with a strong commitment to helping customers improve productivity and profitability.
                    <br />
                    <br />
                    With direct relationships with brand suppliers, we get more preferential pricing for genuine products.
                    <br />
                    <br />
                    Dedicated to building long-term relationships with global customers, We can guarantee a preferential quotation with the price lower than the market price, allowing you to achieve higher market margins.
                </p>
            </div>

            <div>
                <p className="mb-3 mt-5 p-4 bg-white flex items-center justify-center w-full text-[36px] font-bold text-black">
                    Unbeatable Advantages
                </p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <div>
                        {
                            Services.left.map((service, index) => <div key={index} className='p-7'>
                                <p className='font-bold'>{service.title}</p>
                                <p>{service.desc}</p>
                            </div>)
                        }
                    </div>
                    <div className='custom-1:p-5'>
                        <Image src='/warehouse-2.jpg' alt="logo" width={580} height={400} className="w-full h-full rounded-lg object-cover" />
                    </div>
                    <div>
                        {
                            Services.right.map((service, index) => <div key={index} className='p-7'>
                                <p className='font-bold'>{service.title}</p>
                                <p>{service.desc}</p>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Advantages