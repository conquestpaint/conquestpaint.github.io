import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function KitchenCabinets() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-conquestSecondary py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Cabinet Painting and Refinishing in Kelowna
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professionally Painted Kitchen Cabinets"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              Transform your kitchen, bathroom, or built-in storage with professional cabinet painting and refinishing from Conquest Paint. Updating your cabinets is one of the most effective ways to modernize your home without the cost and disruption of a full renovation. Our team delivers smooth, factory-quality finishes that make old cabinets look brand new again.
<br/><br/>
              We specialize in painting and refinishing all types of cabinetry, including wood, MDF, laminate, and custom-built units. Our process includes thorough cleaning, sanding, filling, priming, and applying durable coatings designed specifically for high-touch surfaces. We use premium, low-VOC paints and professional-grade sprayers to achieve a flawless, streak-free finish that stands up to daily use.
              <br/><br/>
              Whether you want a bright, modern white kitchen, a stylish two-tone design, or a bold colour that makes a statement, we tailor the look to your style and space. We also offer hardware upgrades, minor repairs, and finishing touches to complete the transformation.
              <br/><br/>
              At Conquest Paint, precision and care are at the core of our work. We protect your home, work cleanly and efficiently, and keep you updated throughout the entire process. Our transparent pricing ensures excellent value with no surprises.
              <br/><br/>
              If you’re ready to refresh your cabinets and elevate your space, Conquest Paint is here to help. Contact us today for a free estimate and discover the difference professional cabinet refinishing can make.
            </p>
          </div>
        </Container>
        
        <section className="relative overflow-hidden bg-conquestThird py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Call Us Today! 250-869-9819
              </h1>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
