import React from "react";
import SectionHolder from "./ui/sectionHolder";
import { HypeSquadIcon } from "./ui/icons";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Moto() {
  return (
    <div className="flex flex-col items-center md:items-start justify-center md:max-w-[50%] md:px-0 px-[10px] text-center md:text-left  ">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        <span className="text-primary">Building Brands</span> in the{" "}
        <span className="text-primary">gaming</span> industry
      </h1>
      <p className="text-white text-xl mt-4">
        We connect businesses with audiences through Influencers, Events, PR,
        Socials, Ads and Creatives.{" "}
        <span className="text-primary hover:underline">
          <Link href="/"> Nestling Network </Link>
        </span>
        helps you build the quirky campaigns who stand out from the competition.
      </p>
      <Link href="#contact">
        <Button
          variant={"secondary"}
          className=" py-5 gap-3 w-[180px] mt-5 bg-primary rounded-full"
        >
          <EnvelopeClosedIcon className="mr-2" />
          <span>Contact us</span>
        </Button>
      </Link>
    </div>
  );
}

function MainLogo() {
  return (
    <div className="min-w-[40%] flex flex-col gap-10  hover:scale-105 transition-all duration-500 ease-in-out">
      <Image
        src="/tnn.png"
        width={1000}
        height={1000}
        alt="the networking network"
        className="max-w-[500px]"
      />
    </div>
  );
}

function HeroSection() {
  return (
    <SectionHolder
      bgImage="/main.png"
      imageOpacity={0.2}
      parentClassName="bg-black"
      id="home"
    >
      <div className="flex flex-col-reverse justify-between items-center md:flex-row px-10 py-20 md:py-40 md:px-20 gap-10 w-full">
        <Moto />
        <MainLogo />
      </div>
    </SectionHolder>
  );
}

export default HeroSection;
