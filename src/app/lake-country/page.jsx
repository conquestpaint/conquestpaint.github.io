import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function LakeCountry() {
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
                Painting Services in Lake Country
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
              If you’re searching for dependable, detail-oriented painters in Lake Country, Conquest Paint is here to deliver exceptional results. We provide high-quality painting services designed to refresh, protect, and enhance properties throughout this beautiful Okanagan community.
<br/><br/>
              Our team handles a full range of interior and exterior painting projects, including home makeovers, commercial repaints, cabinet refinishing, siding and trim updates, and minor repairs. We use premium paints that perform well in Lake Country’s warm summers and cool winters, ensuring a finish that stays vibrant and durable year after year.
              <br/><br/>
              We proudly serve neighbourhoods across Lake Country, from Carr’s Landing and Okanagan Centre to Winfield and Oyama. Whether you’re updating a lakeside home, preparing a property for sale, or giving your business a cleaner, more polished appearance, we bring precision, care, and expertise to every brushstroke.
              <br/><br/>
              What sets Conquest Paint apart is our commitment to professionalism. We take care to protect surfaces, minimize disruptions, and maintain a tidy workspace from start to finish. With clear communication, honest pricing, and a customer-first approach, we make the painting experience smooth and stress-free.
              <br/><br/>
              If you need skilled painters in Lake Country, Conquest Paint is ready to help transform your space. Contact us today for a free estimate and discover what quality craftsmanship can do for your home or business.
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
