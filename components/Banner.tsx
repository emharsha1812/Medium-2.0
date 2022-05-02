import Image from 'next/image'
import smalllogo from '../public/smalllogo.svg'

const Banner = () => {
  return (
    <div className=" py mx-auto flex max-w-7xl items-center justify-between border-y border-x  border-black bg-yellow-400 py-10">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className=" underline underline-offset-1">Flash</span> is a
          place to write,read and connect
        </h1>
        <h2 className="text-xl ">Where good ideas find you</h2>
      </div>
      <div className=" hidden h-32 bg-transparent md:inline-flex lg:h-64">
        <Image src={smalllogo} alt="F" />
      </div>
      <div></div>
    </div>
  )
}

export default Banner
