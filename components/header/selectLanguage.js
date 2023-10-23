import Image from "next/image";
import { getData } from "../../getData";

export default function SelectLanguage({ active, handleClick, data}) {
    const switchLanguage =(language)=>{
        handleButtonClick(language)
        handleClick(language)
    }
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    const handleButtonClick = async (language) => {
        getData(language)
    }

    return (
        <div className='mt-2 absolute h-24 text-black'>
            <a  href="/de" locale="de">
            <button  onClick={()=>switchLanguage(capitalizeFirstLetter(data[1].key))} className={` w-32 flex h-12 py-3 px-4 gap-3 items-start ${active =='De'? "bg-white":"bg-gray-100"} rounded-t-2xl border border-gray-200 border-b-0  font-arboriaBook`}> <img src={`./${data["1"].key}.svg`} alt='countryFlag' />{capitalizeFirstLetter(data[1].key)}</button>
            </a>
            <div className="h-px bg-gray-200"></div>
            <a href="/" locale="en">
            <button onClick={()=>switchLanguage(capitalizeFirstLetter(data[2].key))} className={` w-32 flex h-12 py-3 px-4 gap-3 items-start ${active =='Ee'? "bg-white":"bg-gray-100"}  rounded-b-2xl border border-gray-200 border-t-0  font-arboriaBook`}><img src={`./${data["2"].key}.svg`} alt='countryFlag' />{capitalizeFirstLetter(data[2].key)}</button>  
            </a>     
        </div>
    )
} 
  