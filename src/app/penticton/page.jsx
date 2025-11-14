import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import painterImage from '@/images/painter.jpg'

export default function Penticton() {
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
                          Painting Services in Penticton
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
                      For homeowners and businesses in Penticton seeking dependable, high-quality painting services, Conquest Paint is the trusted choice. With a strong focus on craftsmanship and customer care, our team delivers beautiful, long-lasting results tailored to the unique climate and style of the South Okanagan.
<br/><br/>
                      We offer a full range of residential and commercial painting solutions, including interior painting, exterior painting, cabinet refinishing, drywall repair, and small restoration work. Whether you’re refreshing your living space or upgrading the appearance of your business, our skilled painters provide smooth finishes, crisp lines, and vibrant colours using premium, eco-friendly paints.
                      <br/><br/>
                      From Wiltse and Uplands to Columbia, Downtown Penticton, and the surrounding areas, we proudly serve clients throughout the community. Our mission is to enhance your property while boosting curb appeal, comfort, and long-term value.
                      <br/><br/>
                      At Conquest Paint, we prioritize professionalism and communication. We arrive on time, maintain a clean work environment, and keep you informed throughout every stage of the project. With transparent pricing and no hidden fees, you can expect reliable service and exceptional workmanship from start to finish.
                      <br/><br/>
                      If you’re looking for experienced painters in Penticton, Conquest Paint is ready to bring your vision to life. Contact us today for a free estimate and experience painting done right.
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
