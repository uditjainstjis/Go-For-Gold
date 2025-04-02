import Link from "next/link";
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home(){
    return (
        <div className="min-h-screen bg-white">
    
        <Navbar/>
        <main>
            <HeroCarousel/>
            <About/>
            <FAQ/>
        </main>
            <Footer/>

        </div>
    )
}
