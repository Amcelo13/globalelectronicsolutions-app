import React, { useMemo } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import CompanyNames from '@/data/company-names.json'
import Link from 'next/link'
import Image from 'next/image'


interface SearchResultsProps {
    value: string
    onClose: () => void
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchResults = (props: SearchResultsProps) => {
    const { value, onClose, setOpen } = props
    const allProducts = useMemo(() => CompanyNames.flatMap(company =>
        company.products.map(product => ({
            ...product,
            companyLink: company.link,
            companyName: company.name
        }))
    ),
        []
    )
    const filteredProducts = useMemo(() =>
        allProducts.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase()) ||
            product.part_number.toLowerCase().includes(value.toLowerCase()) ||
            product.type.toLowerCase().includes(value.toLowerCase()) ||
            product.size.toLowerCase().includes(value.toLowerCase()) ||
            product.material.toLowerCase().includes(value.toLowerCase()) ||
            product.color.toLowerCase().includes(value.toLowerCase())
        ),
        [allProducts, value]
    );
    return (
        <ScrollArea className={`${filteredProducts.length > 0 ? "h-[450px]" : "h-[50px]"} sm:w-[350px] w-full p-4 transition-all fade-in-70`} >
            {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
                <Link onClick={() => {
                    onClose()
                    setOpen && setOpen(false)
                }} href={`/companies/${product.companyLink}/products/${product.name}`} key={index} className="flex gap-2 p-4 bg-white border-b rounded-md transition-all hover:scale-105 hover:border cursor-pointer">
                    <Image src={product.image[0]} alt={''} width={20} height={20} className="w-16 h-16 aspect-square object-cover rounded-lg" />
                    <p className='text-sm'>
                        <b>{product.name} </b>{product.companyName} {product.part_number} {product.type} {product.size} {product.material} {product.color}
                    </p>
                </Link>
            ))
                :
                <p className="text-center">No results found</p>}
        </ScrollArea>
    )
}

export default SearchResults