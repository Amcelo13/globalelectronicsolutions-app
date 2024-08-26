'use client'
import { useParams } from "next/navigation";
import companies from '@/data/company-names.json'
export default function Company() {
    const { company } = useParams();
    const companyFound = companies.find((c) => c.link === `/${company}`);
    
    return (
        <div>
            <p className="mb-3 mt-5 p-4 bg-white flex items-center justify-center w-full text-[36px] font-bold text-black">
                A Professional {companyFound?.name} distrubutor
            </p>
            <p className="mb-3 mt-5 p-4 bg-white flex w-full text-[36px] font-bold text-black">
            We carry the following products from {companyFound?.name} but not limited to
            </p>
        </div>
    )
}