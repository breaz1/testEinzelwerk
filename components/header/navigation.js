export default function Navigation({config}) {
  return (
    <nav className="flex text-gray-200 gap-10 text-base line leading-6 justify-center items-center">
      {config.map((item)=><a href={item.uri} key={item.uri}>{item.pagetitle}</a>)}
    </nav>
  )
}
