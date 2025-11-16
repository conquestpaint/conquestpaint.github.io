import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function HouseInterior() {
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
                Interior House Painting Services in Kelowna
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professional Interior Painter at Work"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              A fresh, well-painted interior can completely transform the feel of your home. At Conquest Paint, we specialize in professional interior house painting that brings comfort, style, and renewed energy to every room. Whether you`&apos;re updating a single space or refreshing your entire home, our team delivers clean, modern, and long-lasting results.
<br/><br/>
              We provide a full range of interior painting services, including wall and ceiling painting, trim and door refinishing, feature walls, cabinet painting, drywall patching, texture repairs, and full prep work. Using high-quality, low-VOC paints, we ensure a smooth finish that’s safe for your family and designed to stand up to everyday living.
              <br/><br/>
              Every project begins with proper preparation—covering floors and furniture, repairing imperfections, and ensuring surfaces are ready for paint. Our painters work with precision, creating crisp lines, even coverage, and flawless finishes tailored to your preferred colours and style.
              <br/><br/>
              At Conquest Paint, we understand the importance of professionalism inside your home. We maintain a tidy workspace, work around your schedule, and treat your property with the highest level of care. Communication is clear and consistent, and our pricing is honest with no unexpected costs.
              <br/><br/>
              If you`&apos;re ready to refresh your home`&apos;s interior, Conquest Paint is the trusted choice. Contact us today for a free estimate and let us help bring your vision to life.
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
