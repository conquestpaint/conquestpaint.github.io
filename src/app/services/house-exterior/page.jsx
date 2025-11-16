import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function HouseExterior() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-conquestSecondary py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Exterior House Painting in Kelowna
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professional Exterior Painter at Work"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              A beautifully finished exterior not only boosts curb appeal—it protects your home for years to come. At Conquest Paint, we specialize in professional exterior house painting designed to withstand the unique weather patterns of the Okanagan. From sun exposure to seasonal temperature changes, our high-quality products and skilled application ensure your home stays vibrant and protected.
<br/><br/>
              Our exterior painting services include full-house repaints, siding and trim coatings, fascia and soffit painting, deck and fence staining, exterior wood restoration, and surface preparation such as sanding, caulking, and minor repairs. We work with premium, eco-friendly paints engineered for durability, fade resistance, and long-term performance.
              <br/><br/>
              Every project begins with a thorough assessment of your home`&apos;s exterior. Our team identifies any problem areas, prepares surfaces properly, and applies paint using proven techniques that deliver smooth, even coverage. Whether your home features stucco, wood, Hardie board, vinyl, or brick accents, we have the experience to achieve flawless results.
              <br/><br/>
              At Conquest Paint, we prioritize professionalism and communication. We maintain a clean jobsite, respect your property, and keep you informed from start to finish. Our process is efficient, transparent, and focused on delivering a finish that stands the test of time.
              <br/><br/>
              If you`&apos;re ready to refresh your home`&apos;s exterior, Conquest Paint is here to help. Contact us today for a free estimate and discover how high-quality exterior painting can transform and protect your home.
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
