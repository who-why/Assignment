import React from 'react';
import Image from 'next/image';
import circle from '../Images/circle.png';
import plusCircle from '../Images/PlusCircle.png';
import chip from '../Images/chip.png';
import logo from '../Images/logo1.png';
import rectangle from '../Images/rectangle.png';
import arrow from '../Images/Arrow.png';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-transparent mb-4">

      <div className="flex items-center gap-7">
        <Image src={circle} width={40} height={40} alt="User Icon" />

        <div className="flex items-center gap-4 ml-3">
           <Image src={chip} width={30} height={20} alt="Coin Icon" />
            <span className="text-white font-semibold text-sm">0.00</span>
           <Image src={plusCircle} width={30} height={20} alt="Add Coins Icon" />
        </div>

      </div>

      <div className="flex justify-center items-center">
        <Image src={logo} width={190} height={60} alt="Logo" />
      </div>

      <div className="flex items-center gap-7">
        <div className="p-2 rounded-md border border-orange-500 bg-black/50 shadow-inner shadow-orange-700">
          <Image src={arrow} width={25} height={25} alt="Fullscreen Icon" />
        </div>
        
        <div className="p-2 rounded-md border
         border-orange-500 bg-black/50 shadow-inner
           
          shadow-orange-700">
          <Image src={rectangle} width={25} height={25} alt="Menu Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
