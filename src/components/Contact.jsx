'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    name: 'Interiors and Exteriors',
    description:
        'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'New Construction',
    description:
        'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Kitchen Cabinets',
    description:
        'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Ceilings',
    description:
        'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Decks and Fences with Staining',
    description:
        'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Wallpaper Installation',
    description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
  {
    name: 'Fireplaces',
    description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
  {
    name: 'Railings',
    description:
        'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Drywall Repair or Replace',
    description:
        'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Epoxy Garage Floors',
    description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
  {
    name: 'Guaranteed Craftsmanship',
    description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
  {
    name: 'Guaranteed Craftsmanship',
    description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
  {
    name: 'Seniors Discount',
    description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]

export function Contact() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  // use component did mount
  useEffect(() => {
    console.log('Component mounted')
    const testId = document.getElementById('phone2');
    testId.innerHTML = '&#x32;&#x35;&#x30;&#x2d;&#x38;&#x36;&#x39;&#x2d;&#x39;&#x38;&#x31;&#x39';
    const testId2 = document.getElementById('email2');
    testId2.innerHTML = '&#99;&#111;&#110;&#113;&#117;&#101;&#115;&#116;&#112;&#97;&#105;&#110;&#116;&#105;&#110;&#103;&#49;&commat;&#103;&#109;&#97;&#105;&#108;&period;&#99;&#111;&#109;';
  }, []);


  return (
    <section
      id="contact"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-white pb-10 pt-20 sm:py-32"
    >
      {/*<Image*/}
      {/*  className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"*/}
      {/*  src={backgroundImage}*/}
      {/*  alt=""*/}
      {/*  width={2245}*/}
      {/*  height={1636}*/}
      {/*  unoptimized*/}
      {/*/>*/}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Call or text for a free quote now!
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            Hi Im Terry. Contact me 7 days a week to get a free competitive estimate. 🙂
          </p>
        </div>
        <div className="p-5 m-10 max-w-xs mx-auto text-center bg-conquestThird rounded-2xl">
          <h2 id='phone2' className="font-display text-3xl tracking-tight text-white">
            250-869-####
          </h2>
        </div>

        <div className="p-5 m-10 max-w-md mx-auto text-center bg-conquestThird rounded-2xl">
          <h2 id='email2' className="font-display text-2xl tracking-tight text-white">
            #################@gmail.com
          </h2>
        </div>
      </Container>
    </section>
  )
}
