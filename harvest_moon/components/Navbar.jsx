"use client"
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="flex-between flex w-full mb-8 pt-8 pb-8 px-8 navbar">
      <div className="mr-auto">
        <Link href="/" className="flex gap-4 flex-center">
            <Image
                src="/assets/Animal_Crossing_Leaf.png"
                alt="Harvest Moon Logo"
                width={40}
                height={40}
                className="object-contain"
            />
            <p className="logo_text hover:text-emerald-800">Harvest Moon</p>
        </Link>
      </div>

    <div className="sm:flex hidden">
      {(pathname === "/petaniPertumbuhan" || pathname === "/petaniHama") && (
        <div className="flex-between gap-4 md:gap-8">
          <Link href="/petaniPertumbuhan" className="text-white text-3xl mx-4 hover:text-emerald-800 font-semibold">Kondisi Pertumbuhan</Link>
          <Link href="/petaniHama" className="text-white text-3xl mx-4 hover:text-emerald-800 font-semibold">Kondisi Hama</Link>
        </div>
      )}

      {(pathname === "/peternakKesehatan" || pathname === "/peternakSiklus") && (
        <div className="flex-between gap-4 md:gap-8">
          <Link href="/peternakKesehatan" className="text-white text-3xl mx-4 hover:text-emerald-800 font-semibold">Kondisi Kesehatan Hewan</Link>
          <Link href="/peternakSiklus" className="text-white text-3xl mx-4 hover:text-emerald-800 font-semibold">Kondisi Siklus Produksi</Link>
        </div>
      )}
    </div>
      
    </nav>
  )
}

export default Navbar