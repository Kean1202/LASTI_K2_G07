import Image from 'next/image'
import MainButton from "@/components/MainButton"
import KesehatanTable from './kesehatanTable'
import { promises as fs } from 'fs';

export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/app/dataHewan.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div className="flex flex-col max-w-full items-center mx-auto">
      <h1 className="headline_text gradient_green justify-center"> Kondisi Kesehatan Hewan </h1>
      <div className="flex flex-col w-full items-center mx-auto mt-12 mb-8">
        <KesehatanTable dataHewan={data.dataHewan}/>
      </div>
    </div>
    
  )
}
