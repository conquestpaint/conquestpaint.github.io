import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Railings() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-conquestSecondary py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Railing Painting & Refinishing
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professionally Painted Railings"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              Your railings play a major role in both safety and style, and Conquest Paint offers professional railing painting and refinishing services to keep them looking their best. Whether your railings are worn, peeling, outdated, or simply need a colour change, our team delivers clean, durable finishes that enhance your home’s overall appearance.
<br/><br/>
              We work with all types of railings, including wood, metal, wrought iron, aluminum, and interior staircase systems. Our process begins with thorough preparation—sanding, cleaning, rust removal (for metal), and filling imperfections—to ensure the new finish bonds properly and lasts longer. We then apply high-quality primers and coatings designed to withstand frequent contact, foot traffic, and environmental wear.
              <br/><br/>
              From restoring classic wooden staircase railings to refreshing exterior deck railings and balconies, we bring precision and care to every project. Whether you prefer a modern black, crisp white, natural wood tone, or a custom colour, we create a smooth, professional finish that elevates the look of your home.
              <br/><br/>
              At Conquest Paint, professionalism and clean workmanship come standard. We protect surrounding surfaces, minimize disruption, and keep you updated throughout the entire process. With straightforward pricing and dependable service, you’ll always know what to expect.
              <br/><br/>
              If your railings need a fresh, high-quality finish, Conquest Paint is ready to help. Contact us today for a free estimate and transform your railings with expert refinishing.
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
