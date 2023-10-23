import EmblaCarousel from "./emblaCarousel";

export default function firstBLock({data}) {
    return (
      <div>
        <EmblaCarousel  data={data.values.items}/> 
      </div>
    )
  }
  