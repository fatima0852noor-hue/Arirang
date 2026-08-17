import Image from "next/image";
import { Calligraphy } from "./data/productdata";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <section className='text-blue-900 body-font'>

      <div className='container px-5 py-10 mx-auto'>

        <div className='flex flex-wrap -m-2'>

          {Calligraphy.map((item, index) => (

            <div
              key={index}
              className='p-4 lg:w-1/3 sm:w-1/2 w-full md:w-1/2'
            >

              {/* Card */}
              <div className='h-full rounded-lg overflow-hidden text-center shadow-md hover:shadow-xl transition duration-300'>

                <img
                  className="lg:h-80 md:h-60 w-full object-cover"
                  src={item.image}
                  alt={item.name}
                />

                <div className='p-5'>
                  <h1 className='title-font  text-sm font-semibold text-black mb-3'>
                    {item.name}
                  </h1>
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
