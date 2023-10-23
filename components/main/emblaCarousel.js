'use client'
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './carouselDot';
import Autoplay from 'embla-carousel-autoplay';
import '../../app/embla.css'
const EmblaCarousel = ({data}) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({loop:false}, []);

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );
  
  useEffect(() => {
    const handleVideoEnded = () => {
      emblaApi.scrollNext()
    };

    const videos = document.querySelectorAll('.embla__video')
    videos.forEach((video) => {
      video.addEventListener('ended', handleVideoEnded)
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener('ended', handleVideoEnded)
      })
    }
  }, [emblaApi])

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data && data.map((item)=>(
              <div className="embla__slide " key={item.object_id}>
                <div className="embla__content">
                <div className="absolute bg-black opacity-60  shrink-0 w-full h-full z-20 "></div>
                  <video autoPlay playsInline muted className="embla__video z-10">
                    <source src={'https://testapi.einzelwerk.io/'+item.video.url} type="video/mp4" />
                  </video>  
                  <div className="text-center text-white absolute top-1/3 py-[20.75rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 h-[17.25rem] w-[56.25rem] inline-flex flex-col items-center gap-6 ">
                    <h1 className="font-arboriaMedium text-7xl leading-96 tracking-tight">
                      {item.title}
                    </h1>
                    <p className=" w-[41.25rem] font-arboriaBook text-xl leading-30 text-gray-200 tracking-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
              </div>       
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot w-12 rounded-full h-2 bg-white transparent'.concat(
              index === selectedIndex ? ' embla__dot--selected opacity-100 w-20' : ' opacity-25'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
