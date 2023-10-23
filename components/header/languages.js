'use client'
import { useState, useEffect} from "react"
import usePopup from "../../hooks/usePopUp";
import SelectLanguage from "./selectLanguage";
import Image from "next/image"

export default function Languages({lang}) {

  const [data, setData] = useState(null);
   const {isOpen: selectLanguage, togglePopup:setSelectLanguage, popupRef: showSortedRef} = usePopup(false)
   const [language,setLanguage] = useState(lang);

   function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://testapi.einzelwerk.io/api/languages");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  }, []);

  
  if(!data){
    return <div></div>
  }
    return (
      <button onClick={()=>{setSelectLanguage()}} ref={showSortedRef}>
          <div className="w-32 text-white flex items-center h-12 py-3.5 px-5 gap-3 rounded-2xl border border-transparent hover:border-gray-500 transition font-arboriaBook">

              {capitalizeFirstLetter(language)==capitalizeFirstLetter(data["1"].key)? <Image width={24} height={24} src={`./${data["1"].key}.svg`} alt='countryFlag'/>:<Image width={24} height={24} src={`./${data["2"].key}.svg`} alt='countryFlag'/>}
              {capitalizeFirstLetter(language)}
              {selectLanguage ? <img src='./arrowDown.svg' alt='arrow' />:<img src='./arrowUp.svg' alt='arrow' />}
          </div>  
        {selectLanguage ?  <SelectLanguage active={language} handleClick={setLanguage}  data={data} /> : " "}       
      </button>
    )
  }
  