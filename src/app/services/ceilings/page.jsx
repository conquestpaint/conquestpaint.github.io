import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Ceilings() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-conquestSecondary py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Professional Ceiling Painting in the Okanagan
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professional Ceiling Painter at Work"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              A freshly painted ceiling can brighten your home, improve overall room appearance, and create a clean, polished look. At Conquest Paint, we offer professional ceiling painting services designed to refresh and elevate any interior space. Whether your ceilings are textured, smooth, stained, or simply outdated, our team delivers flawless, uniform results every time.
<br/><br/>
              Ceiling painting requires precision, proper equipment, and expert technique. We begin by protecting your floors, furniture, and fixtures, ensuring your home remains clean throughout the process. Our painters repair cracks, stains, and imperfections before applying high-quality paint formulated to resist yellowing and enhance brightness. From standard flat ceilings to vaulted and high ceilings, we have the experience to handle projects of any size.
              <br/><br/>
              We work with all ceiling types, including popcorn texture, knockdown, drywall, and plaster surfaces. Whether you want to refresh your existing finish or remove outdated texture for a smoother, more modern look, we can help bring your vision to life.
              <br/><br/>
              At Conquest Paint, professionalism and care are part of every project. We communicate clearly, work efficiently, and treat your home with respect from start to finish. With transparent pricing and dependable service, you can trust us to deliver exceptional results.
              <br/><br/>
              If your ceilings need a clean, updated appearance, Conquest Paint is ready to help. Contact us today for a free estimate and experience the difference of expert ceiling painting.
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
