// until 37 min

import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Image from "next/image";



// Exporting Home
export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero/>
      </Main>
    </div>
  );
}
