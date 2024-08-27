'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QuoteFormData, quoteSchema } from "@/schema/quote-schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"

interface QuoteFormProps {
    selectedProduct?: {
        name: string
        quantity: number
    }
}

export const QuoteForm = (props: QuoteFormProps) => {
    const { selectedProduct = {} } = props
    const method = useForm<QuoteFormData>({
        resolver: yupResolver(quoteSchema),
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
            file: ''
        }
    })
    const { formState: { errors }, handleSubmit, register } = method
    const submit = (data: QuoteFormData) => {
        const payload:any = {...data}
        if(Object.keys(selectedProduct).length > 0){
            payload.productName = (selectedProduct as {name: string}).name
            payload.quantity = (selectedProduct as {quantity: number}).quantity
        }
        console.log(payload)
    }
    return (
        <FormProvider {...method}>
            <form onSubmit={handleSubmit(submit)}>
                <div className="flex flex-col gap-4 mt-[20px]">
                    <Input type="text" placeholder="Name" {...register('name')} />
                    {
                        errors.name && <p className="text-red-500 text-[12px] pl-[3px]">{errors.name.message}</p>
                    }
                    <Input type="email" placeholder="Email" {...register('email')} />
                    {
                        errors.email && <p className="text-red-500 text-[12px] pl-[3px]">{errors.email.message}</p>
                    }
                    <Input type="tel" placeholder="Phone Number" {...register('phoneNumber')} />
                    {
                        errors.phoneNumber && <p className="text-red-500 text-[12px] pl-[3px]">{errors.phoneNumber.message}</p>
                    }
                    {

                        (Object.keys(selectedProduct).length > 0) && <div className="">
                            <Label>Product Name</Label>
                            <Input type="text" value={(selectedProduct as { name: string }).name} disabled />
                            <span className="font-bold"><span className="font-medium">Quantity: </span> {(selectedProduct as {quantity: number}).quantity}</span>
                        </div>
                    }
                    <Input placeholder="Message"  {...register('message')} />
                    {
                        errors.message && <p className="text-red-500 text-[12px] pl-[3px]">{errors.message.message}</p>
                    }
                    <p className="text-[12px] pl-[3px] text-gray-900">If you have any reference, please upload images or files here</p>
                    <Input type="file" {...register('file')} />
                    <Button type="submit" className="bg-[#16bed4] text-white">Submit</Button>
                </div>
            </form>
        </FormProvider>
    )

}