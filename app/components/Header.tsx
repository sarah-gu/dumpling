"use client";

import { useRouter } from "next/navigation";


export const Header = () => {
  const router = useRouter();


  return (
    <header className="flex flex-col">
      <div className="fixed top-0 left-0 w-full h-20 bg-gray-100 z-50 p-4 text-sm flex flex-row justify-between">
        <img src="./goji.png" className=" h-auto"/> 
        <div className="mt-4">
          <a href="mailto:gojihealthinfo@gmail.com" >Contact sales</a> 
          </div>
        </div>
    </header >
  );
};
