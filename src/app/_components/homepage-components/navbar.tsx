"use client"
import Image from "next/image"
import * as React from "react"
import Link from "next/link"
import CompanyNames from '@/data/company-names.json'
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Cross, Phone, SearchIcon, X } from "lucide-react"
import SearchResults from "./search-results"
import { usePathname } from "next/navigation"

export const Navbar = () => {
    const [value, setValue] = React.useState("");
    const pathName = usePathname()
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const [open, setOpen] = React.useState(false)
    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-black/10">
            <div className="flex justify-between p-2 items-center">
                <Link href="/" className="flex items-center pl-2 font-medium gap-x-2">
                    <Image src='/company-logo.png' alt="logo" width={60} height={60}
                        className="rounded-full p-1" priority />
                    <div>
                        <p className="text-[24px] leading-none font-bold">
                            Global Electronics Solutions </p>
                        <p className="text-[12px] text-gray-500"> Global Electronic Solutions, Gurgaon, Gurugram, Haryana</p>
                    </div>
                </Link>
                <div className="hidden md:flex items-center gap-x-2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">Companies</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink className="flex flex-col gap-3 p-4 w-[220px] rounded-lg">
                                        {
                                            CompanyNames.map((company, index) => (
                                                <p className="hover:text-yellow-500 hover:underline font-medium" key={index}>
                                                    <Link className="bg-transparent" href={`/companies/${company.link}`}>{company.name}</Link>
                                                </p>
                                            ))
                                        }
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <Button variant={'ghost'} className={`${pathName === '/about' ? 'bg-white' : ''}`}>
                                <Link href="/about" className="text-[14px] font-medium">About</Link>
                            </Button>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="relative pl-3 flex items-center gap-x-2">
                        <Input size={40} onChange={onChange} value={value} className="border border-white bg-transparent" placeholder="Search products or by company name" />
                        {value === '' ? (
                            <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
                        ) : (
                            <X
                                onClick={() => setValue('')}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                            />
                        )}
                    </div>

                </div>
                <div className="flex md:hidden pr-3">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <HamburgerMenuIcon />
                        </SheetTrigger>
                        <SheetContent side={"right"}>
                            {/* <SheetClose asChild> */}
                            <div className="flex flex-col gap-y-2 p-4">
                                {
                                    Array.from({ length: 2 }).map((_, index) => {
                                        if(index === 0) return(
                                            <SheetClose className="hover:text-yellow-500 hover:underline text-left font-medium" key={index}>
                                                    <Link onClick={() => setOpen(false)} href="/">Home</Link>
                                            </SheetClose>
                                         )
                                         else return(
                                            <SheetClose className="hover:text-yellow-500 hover:underline text-left font-medium" key={index}>
                                                <Link onClick={() => setOpen(false)} href="/about">About</Link>
                                            </SheetClose>
                                         )
                                    })
                                }
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Companies</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-y-2 p-4">
                                            {
                                                CompanyNames.map((company, index) => (
                                                    <SheetClose className="hover:text-yellow-500 hover:underline text-left font-medium" key={index}>
                                                        <Link onClick={() => setOpen(false)} href={`/companies/${company.link}`}>{company.name}</Link>
                                                    </SheetClose>
                                                ))
                                            }
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="absolute text-white font-bold flex items-center gap-3 -bottom-[37.5px] left-0 bg-[#16bed4] p-2 rounded-lg">
                    <Phone size={18} />
                    <Link href='tel:+91 9992828527' className="text-[14px]">+91 9992828527
                    </Link>
                    <Link href='tel:+91 9115513907' className="text-[14px]">+91 9115513907
                    </Link>
                </div>
                <div className="absolute top-[60px] right-2 bg-white rounded-lg shadow-lg">
                    {value && <SearchResults value={value} onClose={() => setValue('')} />}
                </div>
            </div>
        </div>
    )
}