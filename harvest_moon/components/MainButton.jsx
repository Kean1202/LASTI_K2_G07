"use client"
import Link from "next/link";
import Image from "next/image";

const MainButton = ({buttonText, link}) => {
  return (
    <div className="mx-2 my-8 rounded-3xl border border-black button_bg h-32 w-1/4 transition-all font-inter
    hover:bg-yellow hover:text-white text-center text-5xl flex items-center justify-center">
        <Link
            href={link}
            type="button"
            onClick={() => signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/auth/SignIn`
            })}
        >
            {buttonText}
        </Link>
    </div>
    
  )
}

export default MainButton