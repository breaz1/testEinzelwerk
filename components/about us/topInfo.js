
export default function TopInfo({data}) {
    return (
        <div className="flex gap-16 items-center relative">
            <div className="flex flex-col px-12 gap-12 relative">
                <div className="flex flex-col gap-6 min-w-min">
                    <h2 className="font-arboriaMedium text-5xl leading-56 text-gray-50 relative z-10 tracking-tight">
                        {data.title}
                    </h2>
                    <p className="font-arboriaBook text-xl text-gray-200 leading-30 relative z-10 tracking-tight">
                        {data.description}
                    </p>
                </div>
                <div className=" font-arboriaMedium text-lg flex h-12 w-48 text-left items-center gap-3 py-3.5 relative z-10">
                    <a className="flex relative text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink gap-3">
                    All campaigns
                    <span className="absolute inset-0 bg-gradient-to-r from-purple to-pink opacity-0"></span>
                    <img src='./arrowRight.svg' alt='arrow' /> 
                    </a>
                </div>
            
                <div className="absolute top-0 left-0 -translate-y-1/2 rotate-90"><img src='./border.svg' alt="image"/></div>
                <div className="absolute bottom-0 right-0 -rotate-90"><img src='./border.svg' alt="image"/></div>
            </div>
            <video autoPlay playsInline muted className="rounded-3xl h-3xl w-3xl object-cover">
                <source src={'https://testapi.einzelwerk.io/'+data.video.url} type="video/mp4" />
            </video> 
            
                   
        </div>
    )
  }
  