import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Fences() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-conquestSecondary py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Fence Staining & Painting in Kelowna
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professionally Stained Fence"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              A well-finished fence not only enhances your property’s appearance—it also protects it from the elements. Conquest Paint provides professional fence painting and staining services designed to maintain durability, boost curb appeal, and extend the life of your outdoor structures.
<br/><br/>
              We work with all fence materials, including wood, cedar, pressure-treated lumber, metal, vinyl, and composite surfaces. Our process begins with proper preparation: cleaning, sanding, power-washing (if needed), and repairing damaged boards or sections. This ensures the stain or paint bonds properly and delivers an even, long-lasting finish.
              <br/><br/>
              Whether you want a natural, transparent stain that highlights the wood grain, a rich semi-transparent finish, or a solid-colour coating for full coverage, we offer options to match your style and your home’s exterior. Our team uses premium outdoor products designed to resist UV fading, moisture, cracking, and peeling—ideal for the Okanagan’s intense sun and weather changes.
              <br/><br/>
              From residential properties to strata complexes and commercial spaces, we provide clean, efficient service with minimal disruption. We protect surrounding landscaping, work with precision, and clean up thoroughly once the job is complete.
              <br/><br/>
              At Conquest Paint, we’re committed to quality and reliability. If your fence needs a fresh, protective finish, we’re here to help. Contact us today for a free estimate and restore your fence with professional painting or staining.
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
