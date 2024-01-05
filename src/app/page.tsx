
import Nav from '../components/Nav'
import {
  // CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  // Services,
  // SpecialOffer,
  // Subscribe,
  // SuperQuality,
} from "../sections";
export default function Home() {
  return (
    <main className='relative'>
        <Nav/>
        <section className='xl:padding-l'>
          <Hero></Hero>
        </section>
        <section className='padding'>
        <PopularProducts />
      </section>
      <section className=' bg-black px-10 pt-5 pb-8'>
        <Footer />
      </section>
    </main>
  );


}