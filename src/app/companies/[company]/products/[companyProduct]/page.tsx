'use client'
import { useParams } from "next/navigation";
import companies from '@/data/company-names.json'
import Image from "next/image";
import { Carousel as ShadCNCarousel, CarouselMainContainer, CarouselThumbsContainer, SliderMainItem, SliderThumbItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import DialogQuoate from "@/app/_components/dialog-quote";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CompanyProduct() {
    const { company, companyProduct } = useParams();
    const companyFound = companies.find((c) => c.link === `/${company}`);
    const productFound = companyFound && companyFound.products.find((p) => p.name == decodeURIComponent(companyProduct as string))
    const [quantity, setQuantity] = useState(1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const increaseQuantity = () => {
        if (quantity < 200) setQuantity(quantity + 1);
    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <title>{productFound?.name}</title>
            <div className="flex flex-col custom-1:flex-row gap-x-16 gap-y-10 p-10 w-full">
                <ShadCNCarousel className="custom-1:w-[300px] w-full" plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}>
                    {/* <CarouselNext />
                    <CarouselPrevious /> */}
                    <CarouselMainContainer className="h-80">
                        {productFound && (productFound as any).image.map((img: any, index: any) => (
                            <SliderMainItem key={index} className="bg-transparent">
                                <Image src={img} alt="logo" width={400} height={400} className="object-cover aspect-square rounded-xl" />
                            </SliderMainItem>
                        ))}
                    </CarouselMainContainer>
                    <CarouselThumbsContainer className="custom-1:h-60 basis-1/4">
                        {productFound && (productFound as any).image.map((_: any, index: any) => (
                            <SliderThumbItem
                                key={index}
                                index={index}
                                className="rounded-md bg-transparent"
                            >
                                <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
                                    <Image src={productFound.image[index]} alt="logo" width={100} height={100} className="object-cover aspect-square rounded-xl" />
                                </span>
                            </SliderThumbItem>
                        ))}
                    </CarouselThumbsContainer>
                </ShadCNCarousel>

                <div className="flex flex-col gap-6 p-6 bg-white border rounded-lg shadow-lg flex-1">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-2">{productFound?.name}</h1>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center">
                            <span className="text-base font-semibold text-gray-900 mr-4">Quantity:</span>
                            <button onClick={decreaseQuantity} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l-md hover:bg-gray-300 transition-colors">
                                -
                            </button>
                            <Input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-12 h-8 text-center border-t border-none focus:outline-none"
                                max={200}
                            />
                            <button onClick={increaseQuantity} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors">
                                +
                            </button>
                        </div>
                        <DialogQuoate title="Request for Enquiry" triggerTxt="Add to Enquiry Cart" triggerTxtBg selectedProduct={
                            {
                                name: productFound?.name!,
                                quantity: quantity
                            }
                        } />
                    </div>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Part Number:</span> {productFound?.part_number}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Fan Type:</span> {productFound?.type}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Voltage:</span> {productFound?.voltage}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Current Type:</span> {productFound?.ac_dc}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Air Flow:</span> {productFound?.airflow}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">RPM:</span> {productFound?.rpm}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Termination:</span> {productFound?.termination}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Current:</span> {productFound?.current}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Size:</span> {productFound?.size}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Material:</span> {productFound?.material}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Color:</span> {productFound?.color}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">Warranty:</span> {productFound?.warranty}
                    </p>
                    <p className="text-base font-medium text-gray-700 mb-1">
                        <span className="font-semibold text-gray-900">In Stock:</span> {productFound?.instock}
                    </p>
                </div>
            </div>

            <div className="mt-2 p-6 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-4 flex-wrap">
                    <h2 className="text-2xl font-semibold">Specifications</h2>
                    <Button variant="outline" className="bg-cyan-300 hover:bg-cyan-400">
                        <Download className="mr-2 h-4 w-4" /> Download A Manual
                    </Button>
                </div>
                <Table>
                    <TableBody>
                        {[
                            { label: "Fan Type", value: productFound?.type },
                            { label: "Part Number", value: productFound?.part_number },
                            { label: "AC/DC", value: productFound?.ac_dc },
                            { label: "Size", value: productFound?.size },
                            { label: "Voltage", value: productFound?.voltage },
                            { label: "Current", value: productFound?.current },
                            { label: "Termination", value: productFound?.termination },
                            { label: "Material", value: productFound?.material },
                            { label: "Color", value: productFound?.color },
                            { label: "Warranty", value: productFound?.warranty },
                            { label: "RPM", value: productFound?.rpm },
                            { label: "Airflow", value: productFound?.airflow },
                            { label: "Instock", value: productFound?.instock }
                        ].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium bg-[#16bed4] hover:bg-cyan-400 text-black">{item.label}</TableCell>
                                <TableCell>{item.value || "None"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-2 p-6 bg-white rounded-lg flex flex-col custom-1:flex-row gap-y-4 gap-x-6">
                <div className="bg-[#16bed4] rounded-r-lg basis-[70%] -ml-9 p-5">
                    <p className="text-[36px] font-bold text-white">Unmatched customer Service</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col justify-center items-center gap-3 shadow-lg p-6 rounded-md cursor-pointer transition-all hover:scale-95">
                        <Image src='/c-1.png' width={100} height={100} className="rounded-full " alt='' />
                        <p>After Hours Shipping</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 shadow-lg p-6 rounded-md cursor-pointer transition-all hover:scale-95">
                        <Image src='/c-2.png' width={100} height={100} className="rounded-full " alt='' />
                        <p>Real Time Order Tracking</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 shadow-lg p-6 rounded-md cursor-pointer transition-all hover:scale-95">
                        <Image src='/c-3.png' width={100} height={100} className="rounded-full " alt='' />
                        <p>Flexible Delivery Options</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 shadow-lg p-6 rounded-md cursor-pointer transition-all hover:scale-95">
                        <Image src='/c-4.png' width={100} height={100} className="rounded-full " alt='' />
                        <p>Intact Technical Supports</p>
                    </div>
                </div>
            </div>

            {companyFound && companyFound?.products.length > 1 && <div>
                <div className="p-4 bg-white flex items-center justify-between w-full text-[36px] font-bold text-black">
                    <p className="flex-1 p-3">Products You May Also Like</p>
                    <Separator className="basis-[40%] bg-yellow-300 h-2 w-2" />
                </div>
                <Carousel className="flex gap-6 p-8"
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={[]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                        {
                            companyFound?.products.filter((obj: any) => obj.name != productFound?.name).map((product, index) => (
                                <Link href={`/companies/${company}/products/${product.name}`} key={index} className="bg-white p-4 hover:scale-105 transition-all rounded-md cursor-pointer flex flex-col justify-center items-center">
                                    <Image src={product.image[0]} alt={''} width={300} height={300} className="w-[250px] aspect-square object-cover rounded-lg" />
                                    <p className="text-[18px] w-full text-center font-bold py- overflow-clip text-ellipsis break-words py-3">{product.name} <ExternalLink className="text-gray-400  w-full" /></p>
                                </Link>
                            ))
                        }
                </Carousel>
            </div>}

        </div>
    )
}