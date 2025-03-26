import Link from "next/link";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home(){
    return (
        <div className="min-h-screen bg-white">
    
        <Navbar/>
        <main>
            <Hero/>
            <section className="py-20 bg-[#FFF8DC] flex justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Explore Our Competitions</h2>
        <p className="text-lg text-gray-700 mb-10">
          Visit our Campaigns for IOI and GoforGold !
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* IOI Button */}
          <Link href="/ioi" passHref>
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg 
                              hover:bg-blue-700 transition duration-300 hover:cursor-pointer">
              IOI
            </button>
          </Link>

          {/* GoForGold Button */}
          <Link href="/goforgold" passHref>
            <button className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg 
                              hover:bg-yellow-600 transition duration-300 hover:cursor-pointer">
              GoForGold
            </button>
          </Link>
        </div>
      </div>
    </section>
            <About/>
            <FAQ/>
        </main>
            <Footer/>

        </div>
    )
}
