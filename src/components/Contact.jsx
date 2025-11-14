'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import painterImage from "@/images/painter.jpg";

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

        function onMediaQueryChange({matches}) {
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
            <Container className="relative py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {/* First column - Image */}
                    <div className="relative aspect-square w-full max-w-sm mx-auto md:mx-0">
                        <Image
                            src={painterImage}
                            alt="Professional Painter at Work"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    {/* Second and third columns - Content */}
                    <div className="md:col-span-2 space-y-6 text-center md:text-left">
                        <div className="prose prose-slate mx-auto md:mx-0">
                            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
                                Get Your Free Quote Today
                            </h2>

                            <p className="text-lg text-slate-600">
                                Hi, I&apos;m Terry, your local painting expert. I&apos;m available 7 days a week to provide you with a
                                free, no-obligation estimate for your painting project.
                            </p>
                        </div>

                        <div className="flex flex-col space-y-4 pt-4 w-full max-w-md mx-auto md:mx-0">
                            <div className="w-full px-6 py-4 bg-conquestThird rounded-xl shadow-lg hover:bg-conquestSecondary transition-colors">
                                <a href="tel:250-869-9819" className="flex space-x-3">
                                    <svg className="h-8 w-8 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <span id="phone2" className="text-2xl md:text-2xl font-semibold text-white">
                                        250-869-####
                                    </span>
                                </a>
                            </div>

                            <div className="w-full px-6 py-4 bg-conquestThird rounded-xl shadow-lg hover:bg-conquestSecondary transition-colors">
                                <a href="mailto:conquestpainting1@gmail.com"
                                   className="flex space-x-3">
                                    <svg className="h-8 w-8 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span id="email2" className="text-2xl md:text-2xl font-semibold text-white">
                                        #################@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
