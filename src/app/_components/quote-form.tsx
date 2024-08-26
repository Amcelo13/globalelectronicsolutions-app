'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QuoteFormData, quoteSchema } from "@/schema/quote-schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"


export const QuoteForm = () => {
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
        console.log(data)
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
                    <Input placeholder="Message"  {...register('message')} />
                    {
                        errors.message && <p className="text-red-500 text-[12px] pl-[3px]">{errors.message.message}</p>
                    }
                    <p className="text-[12px] pl-[3px] text-gray-900">If you have any reference, please upload images or files here</p>
                    <Input type="file" {...register('file')} />
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </FormProvider>
    )

}