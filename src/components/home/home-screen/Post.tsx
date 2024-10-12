"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { user } from "@/dummy-data"
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Heart, ImageIcon, LockKeyholeIcon, MessageCircle, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Post = ({post, isSubscribed, admin}: {post: any, isSubscribed: boolean, admin: any}) => {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-3 border-t">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={admin.image || "/user-placeholder.png"}/>
            <AvatarFallback>cn</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-sm md:text-md">{admin.name}</span>
          </div>
        </div>
          <div className="flex gap-2 items-center">
            <p className="text-zinc-400 text-xs md:text-sm tracking-tighter">17.06.2024</p>
            {admin.id === user.id && (
              <Trash className="w-5 h-5 text-muted-foreground hover:text-red-500 cursor-pointer" />
            )}
          </div>
      </div>
      <p className="text-sm md:text-md">{post.text.slice(0, 200)}...</p>
      {(post.isPublic || isSubscribed) && post.mediaUrl && post.mediaType === "image" && (
        <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
          <Image 
          src={post.mediaUrl}
          alt="post image"
          className="rounded-lg object-cover"
          fill
          />
        </div>
      )}
      {/* todo handle this part */}
      {/* {(post.isPublic || isSubscribed) && post.mediaUrl && post.mediaType === "video" && ()} */}
      {!isSubscribed && !post.isPublic && (
        <div className="w-full bg-slate-800 relative h-96 rounded-md bg-of flex flex-col justify-center items-center px-5 overflow-hidden">
          <LockKeyholeIcon className="w-16 h-16 text-zinc-400 mb-20 z-0" />
          <div className="opacity-60 absolute top-0 left-0 w-full h-full bg-stone-800" aria-hidden="true" />
          <div className="flex flex-col gap-2 z-10 border p-2 border-gray-500 w-full rounded">
            <div className="flex gap-1 items-center mb-2">
              <ImageIcon className="w-6 h-6 text-white"/>
              <span className="text-xs text-white">1</span>
            </div>
          <Link href={"/pricing"} className={buttonVariants({className: "rounded-full w-full font-bold text-white"})}>Subscribe to Unlock</Link>
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <div className="flex gap-1 items-center">
          {isLiked 
          ? <HeartFilledIcon
          onClick={() => setIsLiked(!true)} 
          className="w-6 h-6 text-red-600 cursor-pointer" /> 
          : <Heart
          onClick={() => setIsLiked(true)} 
          className="w-6 h-6 text-zinc-400 cursor-pointer" />
          }
          <span className="text-xs text-zinc-400 tracking-tighter">55</span>
        </div>
        <div className="flex gap-1 items-center">
          <MessageCircle className="w-6 h-6 text-zinc-400 cursor-pointer" />
          <span className="text-xs text-zinc-400 tracking-tighter">11</span>
        </div>
      </div>
    </div>
  )
}

export default Post