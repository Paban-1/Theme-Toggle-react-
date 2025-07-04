import React from "react";
import welcome from "../assets/WelcomeScan.jpg";

const Card = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white rounded-xl p-2 border">
      <img src={welcome} alt="" className="rounded-xl"/>
      <div className="mt-2 text-xl">
        <h1>Img of Sunflower 🌻</h1>
        <p className=" mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magnam
          quam, in odio accusamus dolor, atque vel unde assumenda reprehenderit
          facere. Debitis inventore vero eius voluptate neque delectus sequi
          labore.
        </p>
      </div>
    </div>
  );
};

export default Card;
