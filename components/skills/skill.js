import Title from "./title"
import Tabs from "./tabs"
export default function Skills({data}) {
    return (

        <div className="bg-gray-100 py-32 px-14 flex flex-col gap-8">
              <div className="flex flex-col">
                <Title data={data.values} />         
              </div>
              <div > 
                <Tabs data={data.values.items}/>
              </div>
        </div>          
  )}
  