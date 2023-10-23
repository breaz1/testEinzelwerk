import DownInfo from "./downInfo";
import TopInfo from "./topInfo";

export default function aboutUs({data}) {
    return (
        <div className="bg-gradient-to-b from-UpDarkBLue to-DownDarkBlue flex flex-col py-36 px-14 items-center gap-32">
              <div>
                <TopInfo data={data.values.items[0]} />           
              </div>
              <div >
                <DownInfo data={data.values.items[1]} />  
              </div>
            </div>          
  )}
  