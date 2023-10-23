import EmblaCarousel from "./emblaCarousel";

export default function firstBLock({data}) {
    return (
      <div id="FirstComponentId">
        <EmblaCarousel  data={data.values.items}/> 
      </div>
    )
  }
  