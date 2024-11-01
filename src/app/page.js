"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ImageSwiper from '@/components/ImageSwiper';
import Slider from '@/components/Slider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/Login'); 
    }
  }, [router]);


  return (
    <div className="flex flex-col p-3">
            <Navbar/>
            <div className="flex flex-wrap items-center gap-7 md:gap-2">
                <Sidebar/>
                <div className="w-[300px] ml-4 mr-3 h-auto">
                    <ImageSwiper/>
                </div>
                
                <div className="w-[1000px] h-[500px] overflow-x-hidden ml-6">
                   <Slider/>
                </div>
            </div>
    </div>
  );
}

export default Page;
