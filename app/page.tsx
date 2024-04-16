import Image from "next/image";
import Head from "next/head"
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { Header } from "./components/Header";

export default function Home() {
  return (
    
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
      <Header/>     
      <div className="snap-always snap-center" id="page1">
                <Page1 />
            </div>
            <div className="snap-always snap-center" id="page2">
                <Page2 />
            </div>
        </div>

  );
}
