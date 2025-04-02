import React from 'react';
import { Award, Calendar, MapPin, Users, BookOpen, Trophy, ChevronRight, GraduationCap, Code2, Instagram, Youtube, Mail, Twitter, X } from 'lucide-react';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* Hero Section */}
      <div 
        className="relative pt-16 bg-cover bg-center h-screen" 
        style={{
          backgroundImage: 'url("/youth.png")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">IOI Bootcamp Camp</h1>
              <p className="text-2xl mb-8">Cultivating India's Future Olympiad Champions</p>
              <p className="text-lg mb-8 opacity-90">
                The IOI Bootcamp Camp is an initiative to expand competitive programming training to talented school students across India, increasing the pool of IOI-ready students from 40 to more than 100.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#F4C430] transition hover:cursor-pointer">
                  Apply Now
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition hover:cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camp Details */}
      <div className="py-20 bg-gradient-to-b from-[#FFF8DC] to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
              <Calendar className="w-10 h-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dates</h3>
              <p>May 24 - June 7, 2025</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
              <MapPin className="w-10 h-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>Newton School of Technology, Bengaluru/Delhi Campus</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
              <Users className="w-10 h-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
              <p>Students in grades 7-12 with strong algorithmic problem-solving potential</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Structure */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Training Structure</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Foundational Algorithms",
                desc: "Learn essential data structures and algorithms"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Daily Contests",
                desc: "Practice with competitive programming challenges"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "1:1 Mentoring",
                desc: "Personal guidance from IOI medalists"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Team Building",
                desc: "Fun activities and collaborative projects"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-[#FFF8DC] transition duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#FFD700]/10 rounded-full flex items-center justify-center text-[#FFD700]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Trainers */}
      <div className="py-20 bg-[#FFF8DC]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Expert Trainers</h2>
          <div className="grid sm:grid-cols-2  gap-8">
            {[
              {
                name: "Deepak Gour",
                title: "ICPC World Finalist",
                image: "/deepak-gour.jpeg"
              },
              {
                name: "Ashwin Krishnamoorthy",
                title: "ICPC World Finalist",
                image: "/ashwin-krish.jpeg"
              },
            ].map((trainer, index) => (
              <div key={index} className="bg-white max-w-[400px] md:ml-24 rounded-xl shadow-lg overflow-hidden p-6 text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#FFD700]">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-gray-600">{trainer.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex flex-wrap items-center mb-4 gap-4">
              <div className='flex flex-row items-center'>
              <Code2 className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">Go For Gold</span>
              </div>

            </div>
              <img src='/newton3.png' className='h-8 ml-1 lg:ml-0 sm:ml-3'></img>
            <br></br>
            <p className="text-gray-400">
              Go for Gold: Uniting India's Top Coders to Conquer the ICPC Stage!
            </p>
          </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#FFD700] hover:cursor-pointer">Apply Now</a></li>
                <li><a href="#" className="hover:text-[#FFD700]">Program Details</a></li>
                <li><a href="#" className="hover:text-[#FFD700]">FAQs</a></li>
              </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="mailto:goforgold@newtonschool.co" target='_blank' className="text-gray-400 hover:text-yellow-500">
                <Mail className="h-7 w-7" />
              </a>
              <a href=" https://www.youtube.com/@GoForGold-NST" target='_blank' className="text-gray-400 hover:text-yellow-500">
                <Youtube className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/goforgold_nst/" target='_blank' className="text-gray-400 hover:text-yellow-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/goforgold_nst" target='_blank' className="text-gray-400 hover:text-yellow-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Go For Gold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;