async function getData (lang){
    const responseCfg = await fetch(`https://testapi.einzelwerk.io/api/${lang}/config`);
    return responseCfg.json();
}

export default async function Footer({lang}) {

    const config = await getData(lang);

    return (
      <footer className='flex flex-col pt-20 pb-7 px-14 gap-32 h-footer relative overflow-hidden'>

        <div className="flex flex-col text-[160px] leading-[140px] font-arboriaMedium z-40" >
            <div className="flex gap-10  items-center">
                <h1>Global Media</h1>
                <button className="bg-blue-500 rounded-full w-32 h-32">
                    <img src='./arrow.svg' alt="arrow" className="ml-auto mr-auto"></img>
                </button>
            </div>
            <h1>Production</h1>
        </div>
        <div className="flex justify-between font-arboriaBook text-base z-50">
            <div className="flex gap-6">
                <p className="text-gray-500">GMP © 2023</p>
                <div className="flex gap-4">
                    {Object.keys(config.social).map(item=>
                        <img src={`./${item}.svg`} width={20} height={20} className="ml-auto mr-auto" key={item} alt="social"></img>
                    )}
                </div>
            </div>
            
            <div className="flex gap-5 text-gray-950">
                {config.footer.map((item)=>
                    <a key={item.pagetitle}>{item.pagetitle}</a>
                )}
            </div>
        </div>
        <div className="absolute h-full bg rotate-90 right-0 w-1/4 top-0">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
        </div>
      </footer> 
    )
  }
  /*
  <div className="flex justify-between font-arboriaBook text-base z-50">
  <div className="flex gap-6">
      <p className="text-gray-500">GMP © 2023</p>
      <div className="flex gap-4">
          {Object.keys(config.social).map(item=>
              <Image src={`./${item}.svg`} width={20} height={20} className="ml-auto mr-auto" key={item} alt="image"></Image>
          )}
      </div>
  </div>
  
  <div className="flex gap-5 text-gray-950">
      {config.footer.map((item)=>
         <a key={item.pagetitle}>{item.pagetitle}</a>
      )}
  </div>
</div>*/