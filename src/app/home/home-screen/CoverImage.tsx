import prisma from "@/db/prisma";
import { Heart, ImageDown, Video } from "lucide-react";
import Image from "next/image";


const CoverImage = async () => {

  const imageCount = await prisma.post.count({
    where: {
      mediaType: "image"
    }
  });

  const videoCount = await prisma.post.count({
    where: {
      mediaType: "video"
    }
  });

  // const totalLikes = await prisma.post.like.count()

  const totalLikes = await prisma.post.aggregate({
    _sum: {
      likes: true
    }
  });

  function foramtNumber(num: number){
    if(num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if(num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }

  return (
    <div className="h-44 overflow-hidden relative">
      <Image 
      fill
      className="h-full w-full object-cover select-none pointer-events-none"
      src={"/fff.jpg"} 
      alt="cover-image" 
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" aria-hidden="true"/> */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" aria-hidden="true"/>

      <div className="flex justify-center items-center absolute top-0 left-0 px-2 py-1 z-20 w-full h-full">
        <div className="flex items-center w-full justify-center">
          <div className="flex flex-col gap-2 text-white items-center justify-center">
            <p className="font-bold text-2xl md:text-3xl">John Doe</p>
            <div className="flex gap-2 items-center">

                <div className="flex items-center gap-1">
                    <ImageDown className=" w-6 h-6"/>
                    <span className="text-sm font-bold">{imageCount}</span>
                </div>

                <span className="text-sm font-bold">|</span>

                <div className="flex items-center gap-1">
                    <Video className=" w-6 h-6"/>
                    <span className="text-sm font-bold">{videoCount}</span>
                </div>

                <span className="text-sm font-bold">|</span>

                <div className="flex items-center gap-1">
                  <Heart className=" w-6 h-6"/>
                  <span className="text-sm font-bold">{foramtNumber(totalLikes._sum.likes || 0)}</span>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverImage