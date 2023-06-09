import React from "react";
import { TarotCard } from "..";

export default function SpreadTarot() {
  return (
    <div className='bg-[url("/imgs/bg1.png")] md:py-24 py-14 md:px-5 bg-cover bg-center min-h-screen w-full'>
      <div className=" max-w-xl mx-auto px-5">
        <div className="flex flex-col  items-center gap-14">
          <h1 className="md:text-6xl  font-bold text-white sm:text-5xl text-4xl text-center ">
            9 Spread Tarot
          </h1>
          <TarotCard
            link="/9-spread-tarot/prediction"
            bg="bg-gradient-to-r from-rose-100 to-blue-200"
            img="/imgs/yes-no-tarot.png"
            title="Discovering Insights: The 9-Card Spread Tarot"
            desc="Revealing invaluable insights on various aspects of life using the 9-card tarot spread."
            button="Pick Up Card"
          />
        </div>
      </div>
    </div>
  );
}
