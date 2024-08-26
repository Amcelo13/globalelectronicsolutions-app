import Image from "next/image";
import companies from '@/data/company-names.json'
import Link from "next/link";

export default function Companies() {
    return (
        <div>
            <Image src='/companies.png' alt="logo" width={1280} height={853} className="w-full h-full object-cover" />
            <p className="mb-3 mt-5 p-4 bg-white flex items-center justify-center w-full text-[36px] font-bold text-black">
                Our a Strong Servomotor Distributors
            </p>
            <div className="grid mb-4 gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                {
                    //just to show the data - name and image
                    companies.map((company, index) => {
                        return (
                            <Link href= {`/companies${company.link}`} key={index} className="cursor-pointer bg-white p-4 rounded-md transition-all hover:border">
                                <Image src={company.image} alt={''} width={200} height={200} className="w-full aspect-video object-cover rounded-lg" />
                                <p className="text-[18px] text-center font-bold py-3">{company.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}