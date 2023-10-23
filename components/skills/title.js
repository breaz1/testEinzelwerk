
export default function Title({data}) {
    return (

        <div>
            <div className="flex items-center justify-center gap-6  ">
            <h1 className="text-6xl text-gray-950 leading-72 font-arboriaMedium tracking-tighter">Our skillset</h1>
            <div className="w-round h-round relative">
                <video autoPlay playsInline muted className="rounded-full w-full h-full object-cover p-1.5">
                    <source src={'https://testapi.einzelwerk.io/' + data.video.url} type="video/mp4" />
                </video>
                <div className="border-dashed border-2 border-blue-600 absolute top-0 left-0 w-full h-full rounded-full animate-spin-slow"></div>
            </div>
            <h1 className="text-6xl text-gray-950 leading-72 font-arboriaMedium tracking-tighter"> better than</h1>
        </div> 
        <h1 className="text-6xl text-center text-gray-950 leading-72 font-arboriaMedium tracking-tighter">other companies have</h1>
        </div>
                 
  )}
  