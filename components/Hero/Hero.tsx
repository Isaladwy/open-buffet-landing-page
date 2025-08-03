'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import Link from 'next/link';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-[50vh] lg:min-h-[90vh] flex flex-col overflow-hidden"
    >
      {/* Full-page background image */}
      <Image
        fill
        priority
        src="/hero.jpg"
        alt="Buffet Food"
        className=" inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Dark overlay for readability */}
      <div className=" inset-0 bg-black/40 " />
      {/* Content */}
      <div className=" flex flex-col xl:flex-row w-[80%]">
        <div className="z-20 absolute flex flex-col bottom-8 rounded-2xl bg-black/35 text-[#fff] drop-shadow-md p-5 mr-5 items-start ">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-center ">
            أطلب أول بوفيه الآن
          </h1>
          <p className="text-3xl lg:text-5xl text-center font-medium">
            وخلنا نهتم بكل التفاصيل!
          </p>
        </div>
        <div className="absolute top-0 z-20 w-full flex justify-end">
          <a
            href="https://wa.me/+966593366301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={isHovered ? { scale: 1, rotate: 0 } : { 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: isHovered ? 0 : Infinity,
                ease: "easeInOut"
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Image
                src="/Offer-Shape1.png"
                alt="Buffet Food"
                width={220}
                height={250}
                className="object-fill z-20 xl:w-[500px] xl:h-[580px] lg:w-[400px] lg:h-[480px] w-[220px] h-[250px]"
              />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
