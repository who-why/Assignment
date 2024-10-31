"use client";

import React from 'react';
import Image from 'next/image';
import card from '../Images/card.jpeg';
import fav from '../Images/fav.jpeg';
import fish from '../Images/fish.jpeg';
import pikaso from '../Images/pikaso.jpeg';
import slots from '../Images/slot.jpeg';
import Sidebarbg from '../Images/sidebarBg.png';

const sidebarItems = [
  { src: pikaso, alt: "All Icon", label: "ALL" },
  { src: fav, alt: "Favorite Icon", label: "FAVORITE" },
  { src: slots, alt: "Slots Icon", label: "SLOTS" },
  { src: fish, alt: "Fishing Icon", label: "FISHING" },
  { src: card, alt: "Other Icon", label: "OTHER" }
];

const Sidebar = () => {
  return (
    <div
      className="w-[120px] min-h-[600px] mt-4 flex flex-col justify-between bg-no-repeat bg-center rounded-full items-center py-6 shadow-lg"
      style={{
        backgroundImage: `url(${Sidebarbg.src})`,
        backgroundSize: '100% 100%',
      }}
    >
      {sidebarItems.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col items-center p-2 gap-1 mb-4 cursor-pointer
            active:bg-slate-300  rounded-md
          ">
            <Image src={item.src} width={60} height={40} alt={item.alt}
              className="rounded-t-lg"
            />
            <span className="text-[#C5A880] font-medium text-base">
              {item.label}
            </span>
          </div>
          {index < sidebarItems.length - 1 && (
            <div className="border-b-[1px] border-[#8B5E3C] w-[80%] mb-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
