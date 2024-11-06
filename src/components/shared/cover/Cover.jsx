import React from 'react';
import { Parallax } from 'react-parallax';



const Cover = ({img,coverTitle,coderDes}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
         <div
  className="hero  h-[50vh] lg:h-[80vh]"
 >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content font-Cinzel h-60 text-center rounded-lg bg-[#00000052] lg:w-[700px]">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold  uppercase">{coverTitle}</h1>
      <p className="mb-5 uppercase font-bold ">
        {coderDes}
      </p>
      
    </div>
  </div>
</div>
    </Parallax>
       
    );
};

export default Cover;
