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
import {  Accordion, AccordionContent, AccordionItem,  AccordionTrigger,} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-black/10">
            <div className="flex justify-between p-2 items-center">
                <div className="flex items-center pl-2 font-medium gap-x-2">
                    <Image src='/company-logo.png' alt="logo" width={60} height={60}
                        className="rounded-full p-1" />
                    <div>
                        <p className="text-[24px] leading-none font-bold">
                            Global Electronics Solutions </p>
                        <p className="text-[12px] text-gray-500"> Global Electronic Solutions, Gurgaon, Gurugram, Haryana</p>
                    </div>
                </div>
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
                               <Button variant={'ghost'}>
                               <Link href="/about" className="text-[14px] font-medium">About</Link>
                               </Button>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="relative pl-3 flex items-center gap-x-2">
                        <Input size={40} className="border border-white bg-transparent" placeholder="Search products or by company name" />
                        <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
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
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Companies</AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-y-2 p-4">
                                                {
                                                    CompanyNames.map((company, index) => (
                                                        <p className="hover:text-yellow-500 hover:underline font-medium" key={index}>
                                                            <Link href={`/company/${company.name.toLowerCase()}`}>{company.name}</Link>
                                                        </p>
                                                    ))
                                                }
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Link href="/about" className="text-[14px] font-medium">About</Link>
                                </div>

                            {/* </SheetClose> */}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

        </div>
    )
}