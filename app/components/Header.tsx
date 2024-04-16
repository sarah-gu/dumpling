"use client";

import { useRouter } from "next/navigation";


export const Header = ({ name }: { name: string }) => {
  const router = useRouter();


  return (
    <header className="flex flex-col">
      <div className="fixed top-0 left-0 w-full h-16 bg-gray-100 z-50 p-4 text-sm flex flex-row justify-between">
        <div className="font-sans text-xl text-blue-700 font-bold"> 
          Dumpling.AI
        </div>
        <div className="">
        <button
          onClick={() => {
            router.push("/");
          }}
          className="text-sm md:text-l mr-10"
        >
          About
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="text-sm md:text-l"
        >
          Features
          </button>
          </div>
        </div>
    </header >
  );
};
