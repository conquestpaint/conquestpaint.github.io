'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import HeaderLogo from '@/images/header-img.jpg'
import Image from "next/image";
import {useEffect} from "react";

export function Header() {

    // use component did mount
    useEffect(() => {
      console.log('Component mounted')
      const testId = document.getElementById('phone1');
      testId.innerHTML = '&#x32;&#x35;&#x30;&#x2d;&#x38;&#x36;&#x39;&#x2d;&#x39;&#x38;&#x31;&#x39';

      const testId2 = document.getElementById('email1');
      testId2.innerHTML = '&#99;&#111;&#110;&#113;&#117;&#101;&#115;&#116;&#112;&#97;&#105;&#110;&#116;&#105;&#110;&#103;&#49;&commat;&#103;&#109;&#97;&#105;&#108;&period;&#99;&#111;&#109;';
    }, []);


  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-0">
            <Link href="#" aria-label="Home">
              <Image src={HeaderLogo} alt="Voodoo AI" className="w-56 md:w-72" />
            </Link>
            {/*<div className="hidden md:flex md:gap-x-6">*/}
            {/*  <NavLink href="#features">Features</NavLink>*/}
            {/*  <NavLink href="#testimonials">Testimonials</NavLink>*/}
            {/*  <NavLink href="#pricing">Pricing</NavLink>*/}
            {/*</div>*/}
          </div>
          <div className="flex-row sm:flex  sm:items-center gap-x-4 space-y-2 sm:space-y-0">
            {/*<div className="hidden md:block">*/}
            {/*  <NavLink href="/login">Sign in</NavLink>*/}
            {/*</div>*/}
            <div className="flex items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden sm:block size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <p id='phone1'>250-869-####</p>
            </div>
            <div className="flex items-center gap-x-1">
              <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">

                <g id="Mail">
                  <path  d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"/>
                </g>
              </svg>
              <p id='email1'>#################@gmail.com</p>
            </div>
            <Button href="#contact" className="bg-conquestPrimary">
              <span>
                Get a quote <span className="hidden lg:inline">now</span>
              </span>
            </Button>
            {/*<div className="-mr-1 md:hidden">*/}
            {/*  <MobileNavigation />*/}
            {/*</div>*/}
          </div>
        </nav>
      </Container>
    </header>
  )
}
