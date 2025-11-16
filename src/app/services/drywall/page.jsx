import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Drywall() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-conquestSecondary py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Professional Drywall Repair and Finishing
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professional Drywall Installation and Repair"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              Smooth, properly finished walls are essential for a polished interior, and Conquest Paint provides expert drywall repair and finishing services to restore your home to its best condition. Whether you’re dealing with dents, cracks, water damage, or larger holes, our team delivers clean, seamless results that blend perfectly with your existing walls.
<br/><br/>
              We handle all types of drywall repairs, including patching holes, fixing stress cracks, repairing corner beads, addressing water-damaged sections, and retexturing surfaces. Our process includes precise cutting, secure backing installation, taping, mudding, sanding, and priming to ensure a uniform, ready-to-paint surface. No matter the size of the repair—small touch-ups or full wall replacements—we approach every job with skill and attention to detail.
              <br/><br/>
              If your walls have outdated or inconsistent textures, we can apply or match knockdown, orange peel, smooth finishes, or custom textures to create a consistent look throughout your home.
              <br/><br/>
              At Conquest Paint, we know that drywall work can be dusty and disruptive, which is why we prioritize cleanliness and care. We protect your space, use proper dust control methods, and keep you informed every step of the way. Our transparent pricing and reliable service ensure high-quality results with no surprises.
              <br/><br/>
              When your walls need professional repair or finishing, Conquest Paint is the team you can trust. Contact us today for a free estimate and restore your home with confidence.
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
