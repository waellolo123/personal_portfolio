import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import HomeScreen from "@/components/home/home-screen/HomeScreen";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UnderlinedText from "@/components/decorators/UnderlinedText";
import HeroSection from "@/components/home/auth-screen/HeroSection";
import TodaysHighlight from "@/components/home/auth-screen/TodaysHighlight";
import RotatedText from "@/components/decorators/RotatedText";
import MasonaryGrid from "@/components/home/auth-screen/MasonaryGrid";
import Features from "@/components/home/auth-screen/Features";
import PricingPage from "@/components/Pricing";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/home/auth-screen/Testimonials";
import Team from "@/components/home/auth-screen/Team";


export default async function Home() {

 const {getUser} = getKindeServerSession();
 const user = await getUser();

  // return <main>{user ? <HomeScreen /> : <AuthScreen />}</main>
  return (
    <div className="flex flex-col">
    <HeroSection />
    <div className="mb-20 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center">
          Today's Highlight
          <span className="text-2xl md:text-4xl ml-1">👇</span>
        </p>
        {/* featured post */}
        <div className="flex flex-col gap-10 mt-10">
          <TodaysHighlight />
          <div className="mt-24 ">
            <p className="text-2xl md:text-5xl text-center tracking-tighter font-bold">
              Follow All Domains you Want
            </p>
            <MasonaryGrid />
          </div>
          <Features />
          <Testimonials />
          <Pricing />
          <Team />
        </div>
      </div>
    </div>
  </div>
  )
}
