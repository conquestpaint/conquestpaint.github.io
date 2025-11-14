import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function WestKelowna() {
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
                          Painting Services in West Kelowna
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
                      When homeowners and businesses in West Kelowna need reliable, high-quality painting services, they turn to Conquest Paint. As a trusted local painting company, we deliver exceptional workmanship, clear communication, and results designed to last in West Kelowna’s unique climate.
<br/><br/>
                      We provide a full range of residential and commercial painting services, including interior painting, exterior painting, cabinet refinishing, drywall repair, and small restorations. Whether you&apos;re updating a single room or giving your entire property a fresh new look, our skilled painters ensure clean lines, smooth finishes, and vibrant colours using premium, eco-friendly products.
                      <br/><br/>
                      From Lakeview Heights and Rose Valley to Shannon Lake, Westbank, and surrounding neighbourhoods, we proudly serve clients throughout West Kelowna. Our goal is to enhance your space while improving curb appeal, comfort, and long-term value.
                      <br/><br/>
                      At Conquest Paint, customer satisfaction is always our top priority. We show up on time, keep your home or business clean throughout the project, and communicate clearly from start to finish. No hidden fees—just dependable service and craftsmanship you can trust.
                      <br/><br/>
                      If you’re looking for professional painters in West Kelowna, Conquest Paint is here to help. Contact us today for a free estimate and discover the difference quality painting can make.
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
