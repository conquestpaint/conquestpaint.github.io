import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Summerland() {
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
                Painting Services in Summerland
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
              Summerland homeowners and businesses trust Conquest Paint for professional, high-quality painting services. Nestled between the mountains and Okanagan Lake, we understand the unique needs of properties in this picturesque community.
              <br/><br/>
              Our comprehensive painting services include interior and exterior painting, cabinet refinishing, drywall repair, and small restoration work. Whether you&apos;re protecting your home from Summerland&apos;s varied climate or refreshing your commercial space, we use premium, eco-friendly paints designed to last.
              <br/><br/>
              From the historic downtown to the lakeshore properties and orchards, we serve all of Summerland with the same dedication to quality and customer service. Our team is familiar with the local architecture and the specific challenges of the area&apos;s climate.
              <br/><br/>
              At Conquest Paint, we pride ourselves on clear communication and professional service. We respect your time and property, arriving as scheduled and maintaining a clean work area. With transparent pricing and no hidden fees, you can trust us to deliver exceptional results.
              <br/><br/>
              If you&apos;re looking for reliable painters in Summerland, Conquest Paint is here to help. Contact us today for a free estimate and see how we can enhance your property&apos;s beauty and protection.
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
