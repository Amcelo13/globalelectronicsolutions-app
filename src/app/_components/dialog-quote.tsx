'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { QuoteForm } from './quote-form'

interface DialogProps {
    triggerTxt: string
    positionFixed?: boolean
    title: string
    triggerTxtBg?: boolean
    selectedProduct? : {
        name: string
        quantity: number    
    }
}

const DialogQuoate = (props: DialogProps) => {
    const [open, setOpen]  = useState(false)
    const { triggerTxt, title, positionFixed = false, triggerTxtBg = false, selectedProduct } = props
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className={`${positionFixed ? 'fixed' : ''} right-4 bottom-4`}>
                <p className={`${triggerTxtBg? "bg-black" : "bg-[#16bed4]"} text-[14px] font-medium p-3 rounded-lg text-white position-absolute right-0 top-0 hover:bg-black hover:text-white`} >
                    {triggerTxt}
                </p>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Our product expert is standing by to give 24/7 consultation.
                    </DialogDescription>
                    <QuoteForm selectedProduct={selectedProduct} onClose={() => setOpen(false)} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DialogQuoate