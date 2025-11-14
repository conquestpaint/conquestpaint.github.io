import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Vernon() {
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
                Painting Services in Vernon
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
              If you’re looking for reliable, detail-driven painters in Vernon, Conquest Paint is the team you can count on. We bring years of experience, premium materials, and a dedication to quality that helps homes and businesses throughout the North Okanagan look their best.
              <br/><br/>
              Our company provides a wide range of interior and exterior painting services tailored to your needs. From full home repaints and commercial refreshes to cabinet refinishing, drywall repairs, and touch-ups, we approach every project with precision and care. We use top-tier, eco-friendly paints designed to handle Vernon’s weather variations while maintaining vibrant colour and durability.
              <br/><br/>
              We proudly serve neighbourhoods across Vernon, including East Hill, Bella Vista, Okanagan Landing, Middleton Mountain, and surrounding areas. Whether you want to modernize your home, brighten your office, or boost your property’s curb appeal, our team is committed to delivering results that stand out.
              <br/><br/>
              At Conquest Paint, professionalism guides every step of our process. We respect your space, keep our work areas tidy, and provide consistent updates so you always know what to expect. Our pricing is clear and straightforward—no surprises, just dependable service and high-quality workmanship.
              <br/><br/>
              When you need skilled painters in Vernon, Conquest Paint is ready to help transform your space. Contact us today for a free estimate and start your next project with confidence.
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
