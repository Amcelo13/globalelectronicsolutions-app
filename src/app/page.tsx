'use client'
import { Carousel, CarouselMainContainer, CarouselNext, CarouselPrevious, SliderMainItem } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import DialogQuoate from "./_components/dialog-quote";
import ProductAndCompaniesAssociated from '@/data/product-and-brand-associated.json'
import { ExternalLink } from "lucide-react"
import TalkToExperts from "./_components/homepage-components/talk-to-experts";
import ListOfManufacturers from "./_components/homepage-components/list-of-manufacturers";
import Advantages from "./_components/homepage-components/advantages";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <title>Global Electronics Solutions</title>
      <div className="relative">
        <Carousel className="h-full absolute -z-10 " plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
          <CarouselPrevious className="top-2/3 -translate-y-[60px] translate-x-3" />
          <CarouselNext className="top-2/3 -translate-y-[60px] -translate-x-3" />
          <CarouselMainContainer className="h-full">
            {Array.from({ length: 2 }).map((_, index) => (
              <SliderMainItem key={index} className="bg-transparent">
                 {
                  index === 0 ?   <Image src='/Home Page 1.png' alt="logo" width={1280} height={853} className="w-full h-full object-cover" />
                   :
                    <Image src='/Home Page.png' alt="logo" width={1280} height={853} className="w-full h-full object-cover" />
                 }
              </SliderMainItem>
            ))}
          </CarouselMainContainer>
        </Carousel>
        <div className="py-20 lg:py-32 bg-black/10" >
          <div className=" mx-[30px] sm:max-w-[600px]  bg-black/55 rounded-md p-2 sm:p-4 text-white">
            <h1 className="text-[32px] lg:text-[48px] font-bold ">
              Cooling Fans Distributor in India
            </h1>
            <p className="mb-3">With dozens of reputed and dependable market-leading distributorships, Global Eletronic Solutions is your one-stop sourcing base.
              We supply best quality cooling fans, with the price far lower than the market rates.</p>
            <DialogQuoate title="Contact Us" triggerTxt='Contact Us' />
          </div>
        </div>
      </div>
      <div>
        <p className="p-4 bg-white flex items-center justify-center w-full text-[36px] font-bold text-black">
          Brand Products We Supply
        </p>
        <div id="product-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 p-3">
          {
            ProductAndCompaniesAssociated.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-md transition-all hover:border">
                <Image src={product.image} alt={''} width={300} height={300} className="w-full aspect-square object-cover rounded-lg" />
                <p className="text-[18px] font-bold py-3">{product.type}</p>
                <p className="text-[14px]">
                  {
                    Object.keys(product.companies[0]).map((key:any, index) => {
                      return <Link href={`/companies${(product.companies[0] as any)[key]}`}  className="flex items-center gap-2 cursor-pointer hover:underline hover:text-yellow-500" key={index}> 
                      <ExternalLink className="text-gray-400" />
                      <p> {key}</p>
                    </Link>
                    }
                    )
                  }</p>
              </div>
            ))}
        </div>
        <TalkToExperts />
        <ListOfManufacturers />
        <Advantages />
      </div>
    </>
  );
}
