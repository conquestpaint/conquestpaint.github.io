import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Peachland() {
  return (
    <>
      <Header />
      <main>
        <section
          id="get-started-today"
          className="relative overflow-hidden bg-conquestSecondary py-10"
        >
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Painting Services in Peachland
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professional Painter at Work"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              For homeowners and businesses in Peachland, Conquest Paint offers professional painting services designed to enhance both beauty and value. With a commitment to reliable workmanship and friendly service, we bring fresh colour and long-lasting finishes to properties throughout this scenic lakeside community.
              <br/><br/>
              Our team specializes in a full range of interior and exterior painting services, including home repaints, commercial upgrades, trim and woodwork coatings, cabinet refinishing, and drywall repairs. Peachland’s sunny climate and waterfront exposure require durable, high-quality paint products, and we use only premium, eco-friendly materials built to withstand the elements while maintaining stunning results.
              <br/><br/>
              From Beach Avenue and Ponderosa to Trepanier and other surrounding areas, we understand Peachland’s unique character and work hard to complement it with clean, precise painting. Whether you’re modernizing your home, preparing a property for sale, or giving your business a fresh, inviting look, our team delivers a finish you’ll be proud of.
              <br/><br/>
              At Conquest Paint, professionalism is standard. We respect your time, maintain a tidy workspace, and communicate clearly so you always know what to expect. With fair, transparent pricing, you can trust us to provide exceptional value and top-tier results.
              <br/><br/>
              If you need skilled painters in Peachland, Conquest Paint is your local choice. Contact us today for a free estimate and let us help bring your vision to life.
            </p>
          </div>
        </Container>

        <section
          id="contact-us"
          className="relative overflow-hidden bg-conquestThird py-10"
        >
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
