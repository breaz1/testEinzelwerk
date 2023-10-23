import FirstBlock from "../../components/main/firstBlock";
import AboutUs from "../../components/about us/aboutUs";
import Skills from "../../components/skills/skill";
import Picture from "../../components/picture/picture";
import './embla.css'
import { getConfig } from "@/getConfig";
import { getData } from "@/getData";
export async function generateMetadata(){

  const cfg = await getConfig('de')

  return{
    title: cfg.site_name,
  }

}

export default async function Home() {


  const data = await getData('de');

  return (<>
    {data && <FirstBlock data={data.blocks[0]} />}
    {data && <AboutUs data={data.blocks[1]} />}
    {data && <Skills data={data.blocks[2]} />}
    {data && <Picture data={data.blocks[3]} />}
  </>
    
  );
}

