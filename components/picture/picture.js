'use client'
import { useState } from "react"
import BasicAccordion from "./accordion"


export default function Picture({data}) {
  const [index, setIndex] =  useState(0)
    return (
      <div className="bg-gray-900 flex flex-col py-32 px-14 items-center gap-24">
        <h1 className="text-center relative text-transparent bg-clip-text bg-gradient-to-r from-grayToWhite to-white text-6xl leading-72 tracking-tight font-arboriaMedium max-w-2xl">
            {data.values.title}
            <span className="absolute inset-0 bg-gradient-to-r from-grayToWhite to-white opacity-0"></span>
        </h1>
        <div className="flex gap-24">
            <div>
                <BasicAccordion data={data.values.items} index={index} setIndex={setIndex} />
            </div>
            <div className="">
                <img className='rounded-3xl w-3xl h-picture' src={`https://testapi.einzelwerk.io/${data.values.items[index].image.url}`}/>
            </div>
        </div>
      </div>
    )
  }
  