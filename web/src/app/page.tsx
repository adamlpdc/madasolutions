import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { JobsWeTake } from "@/components/sections/jobs-we-take";
import { WhyMada } from "@/components/sections/why-mada";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhatWeDo />
      <JobsWeTake />
      <WhyMada />
      <Contact />
    </>
  );
}
