import parse from 'html-react-parser';

export default function SelectTab({data}) {

return (
    <div className="flex flex-wrap gap-6 px-8 justify-center">
        {data.map((item) => (
            <div className="flex flex-col gap-12 border border-gray-400 rounded-3xl py-8 px-12 max-w-md" key={item.title}>
                <h2 className="text-3xl text-gray-950 leading-40 tracking-tighter font-arboriaMedium">{item.title}</h2>
                <div className="flex flex-col gap-4 text-base text-gray-700 leading-24 tracking-tighter font-arboriaBook">
                    {parse(item.description, {
                        replace: (domNode) => {
                            if (domNode.type === 'text') {
                                return domNode.data;
                            } 
                            else if (domNode.type === 'tag' && domNode.name=='li') {
                            return <li className="list-disc list-inside text-blue-600"><span className='text-gray-950'>{domNode.children[0].data}</span></li>;
                            }
                        },
                    })}
                </div>
            </div>
        ))}
        <div className="flex flex-col gap-12 border border-gray-400 rounded-3xl py-8 px-12 max-w-md  bg-blue-500 overflow-hidden relative">
            <h2 className="text-3xl text-white leading-40 tracking-tighter font-arboriaMedium z-20">Schedule a call</h2>
            <div className="flex flex-col gap-5 items-start z-20">
                <p className="text-base text-gray-200 leading-24 tracking-tighter font-arboriaBook">Familiarity with visual effects techniques like particle systems, compositing.</p>
                <button className="text-gray-950 bg-white rounded-2xl py-3 px-5 font-arboriaMedium text-base leading-24">Book a call</button>
            </div>
            <div className=' bg-gradient-to-tr from-pinkCircle to-purpleCircle w-96 h-96 rotate-45 absolute blur-[50px] z-10 right-8'/>   
        </div>
    </div>
  );
}