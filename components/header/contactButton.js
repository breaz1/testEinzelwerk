'use client'
import { useState, useEffect} from "react"
import usePopup from "../../hooks/usePopUp";
import Form from "../form";
export default function ContactButton() {

    const {isOpen: isOpen, togglePopup:setIsOpen, popupRef: showRef} = usePopup(false)

    return (
        <div className="">
        <button className="bg-blue-600 py-3.5 px-5 w-full  h-12  rounded-2xl hover:bg-blue-500 text-white text-base leading-6 transition" onClick={()=>setIsOpen()}>
        Contact us
        </button>       
           {isOpen ? <Form showRef={showRef} />:""}   
        </div>
      
    )
  }
  