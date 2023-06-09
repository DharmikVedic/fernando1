import React from "react";
import { TarotCard } from "..";

export default function TarotPrediction() {
  return (
    <div className='bg-[url("/imgs/bg1.png")] md:py-24 py-14 md:px-5 bg-cover bg-center min-h-screen w-full'>
      <div className=" max-w-xl mx-auto px-5">
        <div className="flex flex-col  items-center gap-14">
          <h1 className="md:text-6xl  font-bold text-white sm:text-5xl text-4xl text-center ">
            Tarot Prediction
          </h1>
          <TarotCard
            link="/tarot-prediction/prediction"
            bg="bg-gradient-to-r from-lime-100 to-blue-200"
            img="/imgs/tarot3.png"
            title="Tarot Prediction"
            desc="Insight into Your Future: Get a Free Tarot Reading for Your Love, Career, and Financial Path"
            button="Pick Up Card"
          />
        </div>
      </div>
    </div>
  );
}
