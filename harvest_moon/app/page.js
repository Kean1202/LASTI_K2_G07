import Image from 'next/image'
import MainButton from "@/components/MainButton"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="flex flex-col max-w-full items-center mx-auto">
      <h1 className="headline_text gradient_green justify-center"> Welcome to your Smart Farm Dashboard!</h1>
      <div className="flex flex-col w-full items-center mx-auto my-8">
        <MainButton buttonText= "Petani" link="/petaniPertumbuhan"/>
        <MainButton buttonText= "Peternak" link="/peternakKesehatan"/>
      </div>
    </div>
    
  )
}
