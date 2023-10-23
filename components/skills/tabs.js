'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SelectTab from './selectTab';

export default function AllTabs({data}) {
    const selected = false;
    return (
        <div>
            <Tabs defaultIndex={1}  className='flex flex-col' >
                <TabList className="flex items-center justify-center gap-4 mb-20">
                            {data.map((item, i)=>(
                                <Tab className={`border rounded-2xl py-3.5 px-4 h-tab leading-26 focus:border-blue-500  border-gray-400 `} key={i}>
                                    <button className='mt-1'>{item.title}</button>
                                </Tab>
                        ))}
                </TabList>
                {data.map((item,i)=>(
                                <TabPanel key={i}>
                                    <SelectTab data={item.items}/>
                                </TabPanel>
                        ))}
            </Tabs>
        </div>
    );
}