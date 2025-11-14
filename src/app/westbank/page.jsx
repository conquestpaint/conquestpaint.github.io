import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Westbank() {
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
                Painting Services in Westbank
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
                For property owners in Westbank looking to elevate their home or business, Conquest Paint provides reliable painting services backed by craftsmanship you can see and quality you can trust. We create clean, modern, long-lasting finishes that bring new life to interior and exterior spaces throughout the community.
<br/><br/>
                Our experienced team offers a full suite of painting and surface improvement services, including interior repaints, exterior protection coatings, cabinet refinishing, drywall and patch repairs, and detailed trim work. Whether you’re refreshing your home, updating a rental, or improving your commercial space, we tailor every project to your style, timeline, and budget.
                <br/><br/>
                Serving all areas of Westbank—from family neighbourhoods to waterfront properties and commercial districts—we understand the demands of the local climate. That’s why we use premium-grade, eco-friendly paints that resist fading, peeling, and wear, ensuring your surfaces stay vibrant and protected.
                <br/><br/>
                At Conquest Paint, we pride ourselves on professionalism. We show up on schedule, take care to protect your property, and keep our workspace tidy throughout the project. Our team communicates clearly so you always know what’s happening, and our pricing is honest and straightforward.
                <br/><br/>
                When you want dependable painters in Westbank who prioritize quality and customer care, Conquest Paint is your trusted choice. Contact us today for a free estimate and let us transform your space with a fresh, flawless finish.
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
