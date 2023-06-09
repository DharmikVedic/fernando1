import React from "react";
import { TarotCard } from "..";

export default function TarotPrediction() {
  return (
    <div className='bg-[url("/imgs/bg1.png")] md:py-24 py-14 md:px-5 bg-cover bg-center min-h-screen w-full'>
      <div className=" max-w-xl mx-auto px-5">
        <div className="flex flex-col  items-center gap-14">
          <h1 className="md:text-6xl  font-bold text-white sm:text-5xl text-4xl text-center ">
            Yes/No Tarot Prediction
          </h1>
          <TarotCard
            link="/yes-no-tarot/prediction"
            bg="bg-gradient-to-r from-blue-200 to-purple-200"
            img="/imgs/yes-no-tarot.png"
            title="Yes / No Tarot Prediction"
            desc="This popular reading gives you a simple yes or no answer with actionable advice."
            button="Pick Up Card"
          />
        </div>
      </div>
    </div>
  );
}
