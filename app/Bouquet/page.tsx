import React from 'react'
import Link from 'next/link'
import { Bouquet } from '../data/productdata'
import WhatsAppButton from '../components/WhatsAppButton'

function page() {
  return (
    <section className='text-blue-900 body-font'>

      <div className='container px-5 py-10 mx-auto'>

        <div className='flex flex-wrap -m-2'>

          {Bouquet.map((item) => (

            <div
              key={item.id}
              className='p-4 lg:w-1/3 sm:w-1/2 w-full md:w-1/2'
            >

              <div className='h-full rounded-lg overflow-hidden text-center shadow-md hover:shadow-xl transition duration-300'>

                <Link href={`/Bouquet/${item.id}`} className='block'>
                  <img
                    className="lg:h-80 md:h-60 w-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>
                
                <div className='p-5'>
                  <Link href={`/Bouquet/${item.id}`} className='title-font sm:text-xl text-sm font-semibold text-blue-900 mb-3 block'>
                    {item.name}
                  </Link>
                </div>
                <WhatsAppButton/>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default page