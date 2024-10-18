import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CoverImage from "./CoverImage"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/db/prisma";
import { getUserProfileAction } from "@/app/update-profile/actions";


const UserProfile = async () => {


  const admin = await prisma.user.findUnique({
    where: {
      email: process.env.ADMIN_EMAIL!
    }
  });

  const currentUser = await getUserProfileAction();
   
  return (
    <div className="flex flex-col">
      <CoverImage />
      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Avatar className="w-20 h-20 border-2 -mt-12">
           <AvatarImage src={admin?.image || "/user-placeholder.png"} className="object-cover"/>
           <AvatarFallback>cn</AvatarFallback>
          </Avatar>
          <div className="flex">
            {currentUser?.isSubscribed 
            ? 
            (<Button className="rounded-full flex gap-10" variant={"outline"}>
              <span className="uppercase font-semibold tracking-wide text-white">Subscribed</span>
            </Button>) 
            : 
            (<Button asChild className="rounded-full flex gap-10">
              <Link href="/pricing"><span className="uppercase font-semibold tracking-wide text-white">Subscribe</span></Link>
            </Button>) 
            }
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-lg font-semibold">{admin?.name}</p>
          <p className="text-sm md:text-md">Discover daily tips and tricks for cook health and coffees, alogn with insights into my personal routine with my dishes and receipes. Subscribe now to gain access to exclusive content and become part of the community.</p>
        </div>
      </div>
      <div className="h-2 w-full bg-muted" aria-hidden="true"/>
    </div>
  )
}

export default UserProfile;
