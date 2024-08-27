import { Button } from '@/components/ui/button'
import React from 'react'
import { Wrench } from 'lucide-react'
import DialogQuoate from '../dialog-quote'
const TalkToExperts = () => {
    return (
        <div className='above-sm:grid above-sm:grid-cols-3 w-full'>
            <div className='bg-[#ced3dc] col-span-2 my-[30px] p-10 items-center justify-center '>
                <p className='text-[36px] font-bold max-w-[490px] overflow-clip break-words text-ellipsis'>Still Not Finding What You Are Looking For?</p>
                <div className='mt-3 flex flex-col gap-y-2'>
                    <p className='flex gap-2 text-left items-center'><Wrench /> Tell Us Your Ideal Brand</p>
                    <p className='flex  gap-2 text-left items-center'><Wrench />  Tell Us Your Ideal Product(Type, Series & Code)</p>
                </div>
            </div>

            <div className=' md:bg-[#16bed4] sm:-ml-16 flex items-center justify-center rounded-l-full'>
               <DialogQuoate triggerTxt='Talk to Experts' title='Request for Enquiry' triggerTxtBg/>
            </div>

        </div>
    )
}

export default TalkToExperts