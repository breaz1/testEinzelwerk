'use client'
import Navigation from "./navigation"
import Image from "next/image"
import Logo from './svg/logo.svg?url'
import Languages from "./languages"
import ContactButton from "./contactButton"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

async function getData (lang){
  const responseCfg = await fetch(`https://testapi.einzelwerk.io/api/${lang}/config`);
  return await responseCfg.json();
}
export default function Header({scrolled }) {

  const [config, setConfig ]=useState()
  const router = usePathname(); 
  const lang = router == '/' ? 'en' : 'de';
  useEffect(()=>{
    const fetcgConfig = async ()=> {
      const responseCfg = await fetch(`https://testapi.einzelwerk.io/api/${lang}/config`);
      const cfg = await responseCfg.json();
      setConfig(cfg)
    }
    fetcgConfig()
  },[])

    return (
        <header className={` fixed left-1/2 transform -translate-x-1/2 flex justify-between z-50
       ${scrolled ? ' h-20 h px-10 py-4 bg-backHeader rounded-full backdrop-blur-sm w-moveHeader mt-4 transition-all duration-700 '
       :' px-14 py-10 w-full transition-all duration-700 h-header'}items-center z-10 font-arboriaBook`}>
        <div className="align-middle flex items-center">
            <Image src={Logo} alt="logo"/>
        </div>
        {config && <Navigation config={config.menu} />}
        <div className="flex gap-2 items-center">
            <Languages lang={lang}/>
            <ContactButton />        
        </div>
      </header>
      
      
    )
  }
