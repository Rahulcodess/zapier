"use client";
import { AppNavbar } from "@/components/ui/navbar";
import { Cover } from "@/components/ui/cover";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  const navItems = [
    {
      name: "Products",
      link: "#products",
    },
    {
      name: "Solutions",
      link: "#solutions",
    },
    {
      name: "Resources",
      link: "#resources",
    },
    {
      name: "Enterprise",
      link: "#enterprise",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
  ];

  return (
    <div className="relative w-full bg-black min-h-screen">
      <AppNavbar items={navItems} showAuthButtons />

      {/* Landing Page Content */} 
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center gap-12 mb-20">
            {/* Text Content */}
            <div className="w-full text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-300 leading-tight">
              Automate your work at <br /> <Cover>warp speed</Cover>
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                Automate your workflows and connect your favorite apps seamlessly.
              </p>
            </div>
            
            {/* Main Lottie Animation */}
            <div className="w-full flex items-center justify-center mt-2">
              <div className="w-full max-w-3xl">
                <DotLottieReact
                  src="https://lottie.host/fc117669-aed4-4fea-9fe0-f322d6873fa6/8fl4muC5dO.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Secondary Animation Section */}
          <div className="flex flex-col items-center justify-center mt-20 pt-20 border-t border-neutral-800">
            <div className="w-full max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Powerful Automation Made Simple
                </h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                  Connect your apps and automate repetitive tasks with ease
                </p>
              </div>
              <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
                <DotLottieReact
                  src="https://lottie.host/ab6d2886-f34f-4a32-8b0d-59044b672aa3/eG9kA84J55.lottie"
                  stateMachineId="StateMachine1"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
