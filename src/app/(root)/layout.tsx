"use client";
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/shared/NavBar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSideBar from '@/components/shared/RightSidrBar'
import BottomBar from '@/components/shared/BottomBar'
import Loading from './loading'
import { use, useState } from 'react'
import { useEffect } from 'react'
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata={
  title:"camp-aurora",
  description:"Hello World!",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const loading=false;
  // useEffect(()=>{
  //   const html=document.querySelector('html');
  //   if(html){
  //     html.classList.add(inter.className);
  //   }
  //   return ()=>{
  //     if(html){
  //       html.classList.remove(inter.className);
  //     }
  //   }
  // },[])
  return (
    <ClerkProvider>
      <html>
        <body className={inter.className}>
          <NavBar/>
            <main className='flex flex-row'>
              <LeftSideBar />
              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>
              <RightSideBar />
            </main> 
          <BottomBar/>
        </body>
      </html>
    </ClerkProvider>
  )
}
