'use client'
import { useParams } from "next/navigation";
import companies from '@/data/company-names.json'
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Company() {
    const { company } = useParams();
    const companyFound = companies.find((c) => c.link === `/${company}`);

    return (
        <div>
             <title>{companyFound?.name}</title>
            <div className="relative">
                <Image className="w-full h-full object-contain absolute -z-10" src={companyFound?.extraIMG ?? ""} alt="logo" width={1280} height={853} />
                <div className="bg-gray-400/80 custom-1:p-32 p-10 text-white font-bold text-5xl overflow-clip text-ellipsis break-words">
                    {companyFound?.name}
                </div>
            </div>
            <p className="mb-3 mt-5 p-4 bg-white flex items-center justify-center w-full text-[36px] font-bold text-black">
                A Professional {companyFound?.name} distrubutor
            </p>
            <div className="flex flex-col custom-1:flex-row gap-20">
                <div className="bg-[#16bed4] py-5 flex flex-row-reverse w-full rounded-r-lg">
                    <Image src={companyFound?.image!} alt={''} width={300} height={300} className="object-center shadow-md rounded-lg custom-1:-mr-6 h-[250px] bg-white" />
                </div>
                <p className="basis-[98%] p-3">
                    {companyFound?.desc}
                </p>
                <div></div>
            </div>
            <p className="mb-3 mt-5 p-4 bg-white flex w-full text-[36px] font-bold text-black">
                We carry the following products from {companyFound?.name} but not limited to
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 p-4">
                {
                    companyFound?.products.map((product, index) => (
                        <Link href={`/companies/${company}/products/${product.name}`} key={index} className="bg-white p-4 rounded-md transition-all hover:border cursor-pointer">
                            <Image src={product.image[0]} alt={''} width={300} height={300} className="w-full aspect-square object-cover rounded-lg" />
                            <p className="text-[18px] font-bold py-3">{product.name} <ExternalLink className="text-gray-400  w-full" />
                            </p> 
                        </Link >
                    ))}
            </div>

        </div>
    )
}