import Image from 'next/image'
import MainButton from "@/components/MainButton"
import HamaTable from './hamaTable'

export default function Home() {
  return (
    <div className="flex flex-col max-w-full items-center mx-auto">
      <h1 className="headline_text gradient_green justify-center"> Kondisi Hama Tanaman</h1>
      <div className="flex flex-col w-full items-center mx-auto mt-12 mb-8">
        <HamaTable/>
      </div>
    </div>
    
  )
}
