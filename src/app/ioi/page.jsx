'use client'
import React,{useState} from 'react';
import { Award, Calendar, MapPin, Users, BookOpen, Ticket, Trophy, ChevronRight, GraduationCap, Code2, Instagram, Youtube, Mail, Twitter, X, Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';


function App() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "What is GoForGold?",
    answer: "GoForGold is an initiative to improve India's Competitive Programming ecosystem by uniting and supporting the CP community. We aim to produce more high-rated coders and secure gold medals in international contests like ICPC and IOI."
  },
  {
    question: "What is IOI?",
    answer: "The GoForGold IOI Bootcamp is an intensive program to prepare India’s brightest students for the International Olympiad in Informatics (IOI). It offers early, advanced CP training that also supports ICPC readiness, aiming to grow India’s pool of IOI-ready talent and help young coders excel globally."
  },
  {
    question: "Who are the trainers?",
    answer: "Our programs are led by ICPC World Finalists, including founders Deepak Gour and Ashwin Krishnamoorthy. All trainers are highly-rated competitive programmers with significant contest experience."
  },
  {
    question: "Is GoForGold connected to ICPC and IOI?",
    answer: "GoForGold works alongside official ICPC and IOI programs as a complementary initiative. Newton School of Technology has partnered with ICPC regionals, and we're working toward formal associations with both organizations."
  },
  {
    question: "Is there Accommodation Provided?",
    answer: "Yes, accommodation is arranged for all participants attending the IOI Camp and is covered. Further details will be shared with accepted applicants."
  },
  {
    question: "How to reach the campus?",
    answer: "The campus is accessible by several transportation options. The nearest train station is Sonipat railway station, which is well-connected to other major cities. If you're travelling by metro, the closest station is Jahangirpuri Metro Station in Delhi. From either location, local transportation options are available to reach the campus. Detailed directions and assistance will be provided to accepted participants for a smooth arrival."
  },
  {
    question: "How can I apply to the IOI Camp?",
    answer: "To apply, simply fill out the application form at the apply button at the top of the page."
  },
  {
    question: "How can I get in touch with you?",
    answer: "If you have any questions or need assistance, you can reach out to us via email at goforgold@newtonschool.co or through our contact form on the website. We aim to respond to all inquiries as promptly as possible."
  }
];
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
              <h1 className="text-5xl font-bold mb-6">The <span className='text-[#FFD700]'>GoForGold</span> IOI BootCamp</h1>
              <p className="text-2xl mb-8">Cultivating India's Future Olympiad Champions</p>
              <p className="text-lg mb-8 opacity-90">
              The GoForGold IOI Bootcamp is an intensive program to prepare India’s brightest students for the International Olympiad in Informatics (IOI). It offers early, advanced CP training that also supports ICPC readiness, aiming to grow India’s pool of IOI-ready talent and help young coders excel globally.
              </p>
              <div className="flex gap-4">
              <button
                onClick={() => {
                  window.open(
                    'https://docs.google.com/forms/d/1-v5UACY4I_jraxX4qDMEGV9VTinodJ61d6A3NzIcd_E/viewform?edit_requested=true',
                    '_blank'
                  );
                }}
                className="px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#F4C430] transition hover:cursor-pointer"
              >
                Apply Now
              </button>

              <button 
  onClick={() => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  }} 
  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition hover:cursor-pointer"
>
  Learn More
</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF8DC] py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">Registration Deadline</h2>
    <p className="text-lg text-gray-800">
      Don’t miss out! Registrations close on{" "}
      <span className="text-[#ffb300] font-semibold">27th April,2025</span>.
    </p>
  </div>
</div>

      {/* Camp Details */}
  <div className="py-20 bg-gradient-to-b from-[#FFF8DC] to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
            <Calendar className="w-10 h-10 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dates</h3>
            <p>May 25th – June 6th, 2025</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
            <MapPin className="w-10 h-10 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>Newton School of Technology, Bengaluru/Delhi Campus</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
            <Ticket className="w-10 h-10 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Registration Fee</h3>
            <p className="font-bold">₹ 1000</p>
            <p className="text-sm mt-2">
              Includes all sessions, meals,<br/>
              accommodation & mentoring materials
            </p>
            <p className="text-xs italic mt-2">*Scholarship's available</p>
            <p className="text-xs italic mt-2">*Please note, travel costs are not included.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
            <Users className="w-10 h-10 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
            <p>Currently a student in Grade 6 - 12<br/>
            Basic understanding of competitive programming<br/>
            Algorithmic problem-solving potential</p>
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
      <div className="py-12 sm:py-20 bg-[#FFF8DC]">
  <div className="container mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold text-center mb-12 sm:mb-16">Expert Trainers</h2>

    {/* Horizontal scroll on mobile, flex-wrap + center on larger screens */}
    <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth">
      {[
        {
          name: "Deepak Gour",
          title: "ICPC World Finalist",
          image: "/Deepak@2x.png"
        },
        {
          name: "Ashwin Krishnamoorthy",
          title: "ICPC World Finalist",
          image: "/Ashwin@2x.png"
        },
        {
          name: "Vivek Gupta",
          title: "ICPC World Finalist, Master on CodeForces, 7 Star on CodeChef",
          image: "/Vivek@2x.png"
        },
        {
          name: "Arjun Arul",
          title: "IOI Medalist, Trainer for Indian IOI Teams",
          image: "/Arjun@2x.png"
        },
        {
          name: "Jaskaran Singh",
          title: "ICPC World Finalist, Master on CodeForces",
          image: "/Jaskaran@2x.png"
        },
        {
          name: "Himanshu Singh",
          title: "ICPC World Finalist, Grandmaster",
          image: "/Himanshu@2x.png"
        },
        {
          name: "Utkarsh Gupta",
          title: "2x ICPC World Finalist, Grandmaster",
          image: "/Utkarsh@2x.png"
        },
      ].map((trainer, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 w-[260px] sm:w-[300px] text-center snap-start shrink-0 sm:shrink"
        >
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
          <p className="text-sm text-gray-700 whitespace-pre-line">{trainer.title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* faqs */}

<div id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Plus className="h-5 w-5 text-yellow-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
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