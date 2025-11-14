import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Kelowna() {
  return (
    <>
      <Header />
      <main>
          <section
              id="get-started-today"
              className="relative overflow-hidden bg-conquestSecondary py-10"
          >
              {/*<Image*/}
              {/*  className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"*/}
              {/*  src={backgroundImage}*/}
              {/*  alt=""*/}
              {/*  width={2347}*/}
              {/*  height={1244}*/}
              {/*  unoptimized*/}
              {/*/>*/}
              <Container className="relative">
                  <div className="mx-auto max-w-3xl text-center">
                      <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                          Painting Services in Kelowna
                      </h1>
                      {/*<p className="mt-4 text-lg tracking-tight text-white">*/}
                      {/*  Im Terry. I am fully licensed and insured. I have been painting homes in the Okanagan for over 20 years.*/}
                      {/*</p>*/}
                      {/*<Button href="/register" color="white" className="mt-10">*/}
                      {/*  Get 6 months free*/}
                      {/*</Button>*/}
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
                For homeowners and businesses in Kelowna, Conquest Paint delivers professional painting services designed to elevate and protect your property. Our team combines skill, reliability, and high-quality materials to produce finishes that complement Kelowna’s modern architecture and vibrant Okanagan lifestyle.
<br/><br/>
                We provide a comprehensive range of interior and exterior painting services, including whole-home repaints, commercial refreshes, cabinet refinishing, siding and trim updates, and drywall repairs. Whether you’re aiming to brighten your living space, enhance curb appeal, or update your business with a fresh, inviting look, our painters bring precision and care to every project. We use durable, eco-friendly paints built to withstand Kelowna’s hot summers and seasonal temperature shifts.
                <br/><br/>
                Serving communities throughout Kelowna—from the Lower Mission and Glenmore to Rutland, Dilworth, Upper Mission, and the downtown core—we take pride in helping local properties look their best. Our work is rooted in clean preparation, detailed application, and results that stand the test of time.
                <br/><br/>
                At Conquest Paint, professionalism guides every step. We protect your home or business, keep our workspace tidy, and maintain open communication from start to finish. With transparent, fair pricing, you’ll always know exactly what to expect.
                <br/><br/>
                If you’re looking for experienced painters in Kelowna, Conquest Paint is ready to help. Contact us today for a free estimate and discover how a fresh coat of paint can transform your space.
            </p>
            {/* Add more content specific to Kelowna */}
          </div>
        </Container>
          <section
              id="get-started-today"
              className="relative overflow-hidden bg-conquestThird py-10"
          >
              {/*<Image*/}
              {/*  className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"*/}
              {/*  src={backgroundImage}*/}
              {/*  alt=""*/}
              {/*  width={2347}*/}
              {/*  height={1244}*/}
              {/*  unoptimized*/}
              {/*/>*/}
              <Container className="relative">
                  <div className="mx-auto max-w-3xl text-center">
                      <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                          Call Us Today! 250-869-9819
                      </h1>
                      {/*<p className="mt-4 text-lg tracking-tight text-white">*/}
                      {/*  Im Terry. I am fully licensed and insured. I have been painting homes in the Okanagan for over 20 years.*/}
                      {/*</p>*/}
                      {/*<Button href="/register" color="white" className="mt-10">*/}
                      {/*  Get 6 months free*/}
                      {/*</Button>*/}
                  </div>
              </Container>
          </section>
      </main>
      <Footer />
    </>
  )
}
