import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import Coaches from '../components/Coaches';
import About from '../components/About';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function App(){
    return (
        <div className="min-h-screen bg-white">
    
        <Navbar/>
        <main>
            <Hero/>
            <Partners/>
            <Stats/>
            <Coaches/>
            <About/>
            <Schedule/>
            <FAQ/>
        </main>
            <Footer/>

        </div>
    )
}

export default App