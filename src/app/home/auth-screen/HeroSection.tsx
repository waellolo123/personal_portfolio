import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeScreen from "../home-screen/HomeScreen";


const HeroSection = () => {
  return (
    <div className="flex h-screen w-full">
     <div className="flex-1 flex overflow-hidden bg-[#00b0f0a6] relative justify-center items-center z-10  bg-noise">
      {/* left */}
      {/* <img src="/of-logo.svg" alt="onlygraphlogo" className="absolute opacity-15 -left-1/4 -bottom-52 lg:scale-150 xl:scale-105 scale-[2] pointer-events-none select-none"/> */}
      <div className="flex flex-col gap-2 px-4 text-center md:text-start font-semibold">
        <Image src={"/onlyhorse.png"} alt="onlygraphlogo" width={769} height={182} className="mt-20 w-[420px] z-0 pointer-events-none select-none" />
        <h1 className="text-2xl md:text-3xl text-balance">Hey! Learn <span className="bg-stone-800 px-2 font-bold text-white">Follow</span> and Support.</h1>
        <p className="text-2xl md:text-3xl mb-32 leading-snug text-balance">Follow <span className="bg-sky-400 font-bold px-2 text-white">Creators</span> And <span className="bg-red-500 px-2 font-bold text-white"> Professionals</span></p>
        {/* auth buttons */}
        {/* <AuthButtons /> */}
        {/* go to my home page button */}
        <Button>
          <Link href="/">Go to my Home page</Link>
        </Button>
      </div>
     </div> 
     <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex">
     {/* right */}
      <Image src={"/artist2.jpeg"} alt="horse" fill className="object-cover opacity-90 pointer-events-none select-none h-full"/>
     </div> 
    </div>
  )
}

export default HeroSection;