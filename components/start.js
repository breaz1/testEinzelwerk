import FirstBlock from "./main/firstBlock";
import AboutUs from "./about us/aboutUs";
import Skills from "./skills/skill";
import Picture from "./picture/picture";
import { getData } from "@/getData";

export default async function Start() {

  const data = await getData();

  return (
    <div>
      {data && <FirstBlock data={data.blocks[0]} />}
      {data && <AboutUs data={data.blocks[1]} />}
      {data && <Skills data={data.blocks[2]} />}
      {data && <Picture data={data.blocks[3]} />}
    </div>
  );
}
