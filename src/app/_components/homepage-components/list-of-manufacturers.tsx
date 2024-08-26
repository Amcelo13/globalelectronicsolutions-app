import React from 'react'
import CompanyNames from '@/data/company-names.json'

const ListOfManufacturers = () => {
  return (
    <div>
      <p className="mb-3 mt-5 p-4 bg-white flex items-center justify-center w-full text-[36px] font-bold text-black">
        A Partial List of Manufacturers
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
         {
          CompanyNames.map((company, index) => {
            return (
              <div>
                <p  key={index} className={`flex items-center justify-center cursor-pointer text-center
                  hover:bg-[#16bed4] hover:underline hover:text-white text-[25px] font-bold py-3 h-[200px] ${index % 2 === 0 ? 'bg-[#e0e8f0]' : 'bg-[#cbd5e1]'}`}>{company.name}</p>
              </div>
            )
          })
         }
      </div>
    </div>
  )
}

export default ListOfManufacturers