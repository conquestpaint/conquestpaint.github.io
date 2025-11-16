import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Wallpaper() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-conquestSecondary py-10">
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Wallpaper Installation and Removal
              </h1>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="prose prose-slate">
            <div className="relative h-64 w-64 float-left mr-6 mb-4 overflow-hidden">
              <Image
                src={painterImage}
                alt="Professional Wallpaper Installation"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-lg text-slate-600">
              Wallpaper can add personality, texture, and style to any room, and Conquest Paint offers professional wallpaper installation and removal services to help you achieve a flawless finish. Whether you`&apos;re updating your home with modern patterns or removing old wallpaper to prepare for fresh paint, our team delivers clean, precise, and long-lasting results.
<br/><br/>
              We work with all types of wallpaper, including vinyl, peel-and-stick, traditional paste-applied, textured designs, murals, and specialty prints. For installation, we carefully measure, cut, and align each panel to ensure perfect seams and a smooth, bubble-free appearance. Our attention to detail ensures patterns match seamlessly, giving your walls a polished, designer-quality look.
              <br/><br/>
              If you need wallpaper removed, our technicians use safe, effective methods to lift old material without damaging the underlying drywall. We handle every step—stripping, washing residue, repairing imperfections, sanding, and priming—so your walls are completely prepped for painting or new wallpaper.
              <br/><br/>
              At Conquest Paint, we understand that wallpaper work can be messy and time-consuming, which is why we prioritize cleanliness and efficiency. We protect your home, communicate clearly, and provide honest, straightforward pricing with no surprises.
              <br/><br/>
              Whether you`&apos;re adding a feature wall or refreshing an entire home, Conquest Paint is here to help. Contact us today for a free estimate and experience professional wallpaper services done right.
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
