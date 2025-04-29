'use client'; // This directive is important for App Router or specific client-side features

import React, { useState } from 'react';
import Image from 'next/image';
import Partners from '../components/Partners';
import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Code2,
  Instagram,
  Youtube,
  Mail,
  Twitter,
  X,
  Plus,
  Minus,
  Star, // Using Star for top performers? Or Trophy?
  Trophy, // Trophy seems better for winners
  Award, // Award can also work
  Sparkles, // For highlighting learnings
  Dumbbell, // For training/rigor
  Brain, // For algorithmic thinking
  Puzzle, // For problem-solving/teamwork
  MessageSquare, // For discussions/testimonials
} from 'lucide-react'; // Import relevant icons
import { ChevronRight } from 'lucide-react';
// Assuming Navbar and Footer components exist in the specified paths
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer'; // Will include footer code directly for simplicity unless specified otherwise

function WinterEliteCampPage() {
  const [openIndex, setOpenIndex] = useState(null);

  // Re-using the FAQs from the IOI page as requested
  const faqs = [
    {
      question: "What is the IOI Bootcamp?", // You might want to generalize or create new FAQs for this page
      answer: "The GoForGold IOI Bootcamp is an intensive training program designed to prepare India's bright young minds for the International Olympiad in Informatics (IOI). Our goal is to expand India's competitive programming talent pool from 40 to over 100 IOI-ready students, enabling the younger members of the CP community to excel at a global stage."
    },
    {
      question: "Who can attend the Bootcamp?",
      answer: "Anyone who's practiced competitive programming and wants to improve and take their skills to the next level can apply."
    },
    {
      question: "Who are the Trainers?",
      answer: "Our programs are led by International Grand Masters, IOI Medalists & ICPC World Finalists, including founders Deepak Gour and Ashwin Krishnamoorthy. All trainers are highly-rated competitive programmers with significant contest experience."
    },
    {
      question: "Is accommodation available?",
      answer: "Yes, accommodation is arranged for all participants attending the IOI Bootcamp. The accommodation and food costs are covered in the registration fee. Further details will be shared with accepted applicants."
    },
    {
      question: "How to reach the campus?",
      answer: "The campus is accessible by several transportation options. The nearest train station is Sonipat railway station, which is well-connected to other major cities. If you're travelling by metro, the closest station is Jahangirpuri Metro Station in Delhi. From either location, local transportation options are available to reach the campus. Detailed directions and assistance will be provided to accepted participants for a smooth arrival."
    },
    {
      question: "How can I apply for the IOI Bootcamp?",
      answer: "Attend Codechef Start182 / Start184 and fill out the registration form. Based on your performance, you will get shortlisted and get an Invite."
    },
    {
      question: "Where can I ask my queries?",
      answer: "If you have any questions or need assistance, you can reach out to us via email at goforgold@newtonschool.co or through our contact form on the website. We aim to respond to all inquiries as promptly as possible."
    }
  ];

  // Instructor data for the winter camp (placeholders and Jaskaran added)
  const instructors = [
    {
      name: "AmirReza Pourakhavan",
      role: "2x ICPC World Finalist\nInternational Grand Master\n",
      image: 'amir.png',
      // company: "Ex-Google",
    },
    {
      name: "Shreyan Ray ",
      role: "IOI silver medalist\nICPC World Finalist\nInternational Grand Master",
      image: 'shreyan.png',

      // company: "Ex-Google",
    },
    {
      name: "Aryan Choudhary",
      role: "2x ICPC World Finalist\nGrand Master on CodeForces",
      image: 'aryan.jpeg',

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Utkarsh Gupta",
      role: "2x ICPC World Finalist\nGrand Master",
      image: 'utkarsh.png',

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Himanshu Singh",
      role: " ICPC World Finalist\nGrandmaster",
      image: 'himanshu.jpeg',

      //company: "Ex-Amazon",
    },
    {
      name: "Priyansh Agrawal",
      role: " ICPC World Finalist",
      image: 'priyanshu.png',

      //company: "Ex-Amazon",
    },
    {
      name: "Vivek Gupta",
      role: " ICPC World Finalist\nMaster on CodeForces\n7 Star on CodeChef",
      image: 'vivek.jpeg',

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Deepak Gour",
      role: "ICPC World Finalist",
      image: 'deepak-gour.jpeg',

      //company: "Ex-Amazon",
    },
    {
      name: "Gaurish Baliga",
      role: "Master on CodeForces",
      image: 'gaurish.png',
      //company: "Ex-Amazon",
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Winter Camp Intro Section */}
      <div className="relative pt-16 bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className='text-[#FFD700]'>GoForGold</span> ICPC Winter Camp 2024–25
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              The GoForGold ICPC Winter Camp 2024–25 was a defining chapter in our mission to make India a global powerhouse in Competitive Programming. Held over 7 days, the camp brought together some of the brightest ICPC aspirants for a week of rigorous training, unforgettable camaraderie, and massive personal growth.
            </p>
            <p className="text-md md:text-lg mb-8 font-semibold text-[#FFD700]">
              A high-pressure, high-reward experience that pushed 70 participants toward peak performance in Competitive Programming.
            </p>
            <p className="text-md md:text-lg mb-8">
              <span className="font-bold">9 out of the 33 teams</span> that trained at this camp qualified for the Asia West Continent Finals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                 onClick={() => {
                    // Assuming a section exists with id="winter-details" or similar
                    const detailsSection = document.getElementById("winter-details");
                    if (detailsSection) {
                      detailsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition hover:cursor-pointer text-center"
              >
                Learn More
              </button>
              {/* Link to Codeforces Post - Update URL */}
              <a href="https://codeforces.com/blog/entry/XXXXX" target="_blank" rel="noopener noreferrer"
                 className="px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#F4C430] transition hover:cursor-pointer text-center inline-block" // Use inline-block for button styling on <a>
              >
                Codeforces Post
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Carousel Placeholder */}
      {/* <div className="bg-[#FFF8DC] py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Images from the Camp</h2>
          <div className="border border-dashed border-gray-400 p-12 rounded-lg text-gray-600">
            [ Placeholder for Image Carousel of Camp Photos ]
            <p className="mt-4 text-sm italic">Integrate a React carousel component here.</p>
          </div>
        </div>
      </div> */}

      {/* Winter Camp Details Section */}
      <div id="winter-details" className="py-20 bg-white">
        <div className="container mx-auto  px-6">
           <h2 className="text-4xl font-bold text-center mb-12">Camp Details</h2> {/* Added a heading for clarity */}
          <div className="grid md:grid-cols-2 mb-32 lg:grid-cols-2 gap-8">
            {/* Dates */}
            <div className="bg-[#FFF8DC]/30 p-8 rounded-xl shadow-lg border border-[#FFD700]/20 flex flex-col items-center text-center">
              <Calendar className="w-10 h-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dates</h3>
              <p>December 4th - 11th, 2024</p>
            </div>

            {/* Venue */}
            <div className="bg-[#FFF8DC]/30 p-8  rounded-xl shadow-lg border border-[#FFD700]/20 flex flex-col items-center text-center">
              <MapPin className="w-10 h-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p>Newton School of Technology RU Campus, Sonipat</p>
            </div>



          </div>

          <Partners/>

          {/* What the camp covered */}
          <div className="mt-16 bg-slate-900 text-white p-10 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-300">What the camp covered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Daily ICPC-style contests",
                "Advanced Division-based lectures",
                "Post-contest deep dives",
                "1-on-1 mentoring sessions",
                "Team-building games & excursions",
                "Closing awards and celebration",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Code2 className="w-6 h-6 text-[#FFD700] shrink-0 mt-1 mr-3" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

           {/* Who it was for */}
           <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20">
            <h3 className="text-2xl font-bold mb-4">Who it was for</h3>
            <p className="mb-6 text-gray-700">
              The camp was designed for competitive programmers training for ICPC World Finals level, and featured two divisions:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FFF8DC]/50 p-6 rounded-lg shadow-md border border-[#FFD700]/20">
                <h4 className="text-xl font-semibold mb-2 text-[#ffc800]">Division 1</h4>
                <p className="text-gray-700">For advanced ICPC participants</p>
                 <p className="text-sm italic mt-2 text-gray-600">[Equivalent rating indication if available]</p>
              </div>
              <div className="bg-[#FFF8DC]/50 p-6 rounded-lg shadow-md border border-[#FFD700]/20">
                <h4 className="text-xl font-semibold mb-2 text-[#ffc800]">Division 2</h4>
                 <p className="text-gray-700">For aspiring ICPC participants</p> {/* Assuming this based on context */}
                 <p className="text-sm italic mt-2 text-gray-600">[Equivalent rating indication if available]</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The Camp Experience Section */}
      <div className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">The Camp Experience</h2>

          {/* Schedule Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">Schedule Overview</h3>
            <div className="space-y-6">
              {[
                { date: "4th December", activity: "Registration and Induction" },
                { date: "5th - 8th December", activity: "Training Sessions" },
                { date: "9th December", activity: "Team Building Activities" },
                { date: "10th December", activity: "Training Sessions" },
                { date: "11th December", activity: "Finale Contest with Prize Distribution" }
              ].map((item, index) => (
                <div key={index} className="bg-slate-700 rounded-lg flex flex-col sm:flex-row overflow-hidden shadow-md border border-[#FFD700]/30">
                  <div className="w-full sm:w-1/3 bg-slate-600 p-5 flex items-center justify-center text-center font-semibold text-[#FFD700] shrink-0">
                    {item.date}
                  </div>
                  <div className="w-full sm:w-2/3 p-5 flex items-center justify-center text-center">
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Covered */}
          <div className="mb-16">
             <h3 className="text-2xl font-bold mb-8 text-gray-300 text-center">Topics We Covered</h3>
             <div className="max-w-3xl mx-auto">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
                   {[
                    "Sack", "HLD", "FFT & NTT", "Network Flow", "Treap", "Geometry", "Game Theory", "and more..."
                   ].map((topic, index) => (
                      <li key={index} className="flex items-center">
                         <BookOpen className="w-5 h-5 text-[#FFD700] mr-2 shrink-0" />
                         {topic}
                      </li>
                   ))}
                </ul>
             </div>
          </div>


          {/* Activities & Closing Placeholders */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-300 text-center">Team-Building & Leisure</h3>
                <div className="border border-dashed border-gray-400 p-2 rounded-lg text-gray-600 h-72 flex items-center justify-center">
                <Image
                  src='/team.JPG'
                  alt='Team Building Photo'
                  width={900}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              </div>
               <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-300 text-center">Closing Ceremony</h3>
                <div className="border border-dashed border-gray-400 p-2 rounded-lg text-gray-600 h-72 flex items-center justify-center">
                <Image
                  src='/closing.JPG'
                  alt='Closing Ceremony Photo'
                  width={900}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              </div>
          </div>

        </div>
      </div>

      {/* Instructors Section */}
      <div className="py-20 bg-[#FFF8DC]">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-bold text-center mb-12">Meet the Instructors</h2>

            {/* Instructor Gallery */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
                 {instructors.map((trainer, index) => (
                    <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-6 w-[180px] sm:w-[200px] text-center shrink-0"
                    >
                    <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-[#FFD700]"
                    />
                    <h3 className="text-lg font-semibold mb-1">{trainer.name}</h3>
                    <p className="text-xs text-gray-700 whitespace-pre-line">{trainer.role}</p>
                    </div>
                ))}
            </div>


           <h2 className="text-4xl font-bold text-center mb-12 mt-20">Hear From the Instructors</h2>

           {/* Testimonials */}
           <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Arpa Testimonial */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20 flex flex-col items-center text-center">
                    <img src="/amir.png" alt="AmirReza Pourakhavan (arpa)" className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-[#FFD700]" />
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                        “We grow under pressure, and a camp is the place to train under pressure. Every day having contests, post-contest discussions, and lecture sessions creates a high pressure that leads to incredible growth. I also experienced the same situation in the Moscow camp in 2020.”
                    </blockquote>
                    <p className="font-semibold mb-2">AmirReza Pourakhavan (arpa)</p>
                    <p className="text-sm text-gray-600">2x ICPC World Finalist, International Grandmaster</p>
                    {/* Link to Codeforces Blog - Update URL */}
                    <a href="https://codeforces.com/blog/entry/137331" target="_blank" rel="noopener noreferrer"
                        className="mt-6 text-[#FFD700] hover:underline font-semibold flex items-center">
                        Check out the full blog <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                {/* Ashwin Testimonial */}
                 <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20 flex flex-col items-center text-center">
                    <img src="/Ashwin@2x.png" alt="Ashwin Krishnamoorthy" className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-[#FFD700]" />
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                        “This initiative continues to grow as we work towards elevating India's competitive programming ecosystem to world-class levels. This edition had an impressive turnout with: 9 teams qualifying for Asia West Continent Finals (out of 33 total qualifiers).”
                    </blockquote>
                    <p className="font-semibold mb-2">Ashwin Krishnamoorthy (Ash1794)</p>
                    <p className="text-sm text-gray-600">ICPC World Finalist</p>
                     {/* Link to Codeforces Blog - Update URL */}
                    <a href="https://codeforces.com/blog/entry/142129" target="_blank" rel="noopener noreferrer"
                        className="mt-6 text-[#FFD700] hover:underline font-semibold flex items-center">
                        Check out the full blog <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                {/* Jaskaran Testimonial */}
                 <div className="bg-white p-8 rounded-xl shadow-lg border border-[#FFD700]/20 flex flex-col items-center text-center">
                    <img src="/jaskaran.jpeg" alt="Jaskaran Singh" className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-[#FFD700]" />
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                         “This camp aims to train the candidates for performing better and get better ranks at ICPC WF by providing necessary exposure and community building. The main aim is to get Gold medals in the near future and I really think this initiative would make that possible.”
                    </blockquote>
                    <p className="font-semibold mb-2">Jaskaran Singh (s_jaskaran_s)</p>
                    <p className="text-sm text-gray-600">ICPC World Finalist, Master on Codeforces</p>
                     {/* Link to Hear more from Jaskaran - Update URL */}
                    <a href="https://www.linkedin.com/posts/jaskaran-singh-8b8450200_icpc-goforgold-camp-this-is-an-icpc-training-activity-7273650943638831104-xFuy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXdvAgB6IP4jK9N4aPISqKjjXUvpaQZkw4" target="_blank" rel="noopener noreferrer"
                        className="mt-6 text-[#FFD700] hover:underline font-semibold flex items-center">
                        Hear more from Jaskaran <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                </div>
           </div>

        </div>
      </div>

      {/* Participants POV Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What The Participants Learned</h2>

          {/* Learnings Grid */}
           <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="bg-[#FFF8DC]/50 p-6 rounded-lg shadow-md border border-[#FFD700]/20 flex flex-col items-center text-center">
                   <Dumbbell className="w-10 h-10 text-[#FFD700] mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Real ICPC-style pressure handling</h3>
                </div>
                 <div className="bg-[#FFF8DC]/50 p-6 rounded-lg shadow-md border border-[#FFD700]/20 flex flex-col items-center text-center">
                    <Brain className="w-10 h-10 text-[#FFD700] mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Advanced algorithms and data structures</h3>
                </div>
                 <div className="bg-[#FFF8DC]/50 p-6 rounded-lg shadow-md border border-[#FFD700]/20 flex flex-col items-center text-center">
                    <Puzzle className="w-10 h-10 text-[#FFD700] mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Team coordination & strategy</h3>
                </div>
           </div>


          <h2 className="text-4xl font-bold text-center mb-12 mt-12">Top Performers</h2>

          {/* Winners Lists */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[#ffc800]">Division 1 Winners</h3>
              <ul className="space-y-4 text-center">
                {/* Gold */}
                <li className="flex items-center justify-center bg-[#FFD700]/10 p-4 rounded-lg border border-[#FFD700]/30 shadow-sm">
                  <Trophy className="w-6 h-6 text-[#FFD700] mr-3 shrink-0" />
                  <div>
                      <span className="font-bold">🥇 404_solution_not_found</span>
                      <p className="text-sm text-gray-700">P.V.Sekhar, sai-17, nishkarsh</p>
                  </div>
                </li>
                 {/* Silver */}
                <li className="flex items-center justify-center bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-sm">
                  <Award className="w-6 h-6 text-gray-500 mr-3 shrink-0" />
                  <div>
                    <span className="font-bold">🥈 poocha kya</span>
                    <p className="text-sm text-gray-700">_helloLad, Atekichan, sv1shan</p>
                   </div>
                </li>
                 {/* Bronze */}
                <li className="flex items-center justify-center bg-[#cd7f32]/10 p-4 rounded-lg border border-[#cd7f32]/30 shadow-sm"> {/* Using a bronze-like color */}
                   <Award className="w-6 h-6 text-[#cd7f32] mr-3 shrink-0" />
                   <div>
                    <span className="font-bold">🥉 SoloTree</span>
                    <p className="text-sm text-gray-700">Dragokj03, Divine_Spark, evenvalue</p>
                   </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[#ffc800]">Division 2 Winners</h3>
               <ul className="space-y-4 text-center">
                 {/* Gold */}
                <li className="flex items-center justify-center bg-[#FFD700]/10 p-4 rounded-lg border border-[#FFD700]/30 shadow-sm">
                  <Trophy className="w-6 h-6 text-[#FFD700] mr-3 shrink-0" />
                   <div>
                      <span className="font-bold">🥇 Wowwies</span>
                      <p className="text-sm text-gray-700">jenil0108, UzuHa_NaruSuke</p>
                   </div>
                </li>
                 {/* Silver */}
                <li className="flex items-center justify-center bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-sm">
                  <Award className="w-6 h-6 text-gray-500 mr-3 shrink-0" />
                   <div>
                      <span className="font-bold">🥈 Haigure Haigure</span>
                      <p className="text-sm text-gray-700">wiseeldrich2004, 73501, sojabhai</p>
                   </div>
                </li>
                 {/* Bronze */}
                <li className="flex items-center justify-center bg-[#cd7f32]/10 p-4 rounded-lg border border-[#cd7f32]/30 shadow-sm">
                   <Award className="w-6 h-6 text-[#cd7f32] mr-3 shrink-0" />
                    <div>
                      <span className="font-bold">🥉 Last moment</span>
                      <p className="text-sm text-gray-700">CatFirstSearch, Jrke, Prady</p>
                   </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Tuned Section */}
      <div className="py-20 bg-[#FFF8DC]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Tuned!</h2>
          <p className="text-lg mb-8 text-gray-800">🚀 Missed this one? Check out all upcoming camps:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             {/* Link to IOI Bootcamp (assuming it's the page you provided) */}
              <a href="/ioi" className="px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-lg hover:bg-[#FFD700] hover:text-black transition hover:cursor-pointer inline-block">
                IOI Bootcamp
              </a>
               {/* Link to ICPC Elite Camp (the section below) */}
              <a href="#elite-camp" className="px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#F4C430] transition hover:cursor-pointer inline-block">
                ICPC Elite Camp
              </a>
          </div>
        </div>
      </div>


       {/* Elite Camp Section */}
      <div id="elite-camp" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8">GoForGold ICPC Elite Camp</h2>
          <p className="text-lg mb-6 text-gray-700">
            The GoForGold ICPC Elite Camp is an exclusive training camp for teams qualified for Asia-West or World Finals.
          </p>

          <div className="bg-[#FFF8DC]/50 p-8 rounded-xl shadow-lg border border-[#FFD700]/20 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#ffc800]">Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-800">
              <div className="flex items-center justify-center sm:justify-start">
                 <Calendar className="w-6 h-6 text-[#FFD700] mr-2" />
                 <span>Dates: Mid July (Tentative)</span>
              </div>
               <div className="flex items-center justify-center sm:justify-start">
                <MapPin className="w-6 h-6 text-[#FFD700] mr-2" />
                 <span>Location: NST ADYPU Campus, Pune</span>
               </div>
            </div>
          </div>


          <p className="text-md mb-8 text-gray-700">
            Don’t fit the eligibility criteria? Fill in the interest form and we’ll evaluate your profile.
          </p>

          {/* Apply Now Button */}
           <button
              onClick={() => {
                window.open(
                  'https://forms.gle/uJtZoSjqopL33h3h6', // Elite Camp Interest Form URL
                  '_blank'
                );
              }}
              className="px-10 py-4 bg-[#FFD700] text-black font-semibold rounded-lg text-xl hover:bg-[#F4C430] transition hover:cursor-pointer"
            >
              Apply Now
            </button>

        </div>
      </div>


      {/* FAQs Section (copied from IOI page) */}
      {/* You might want to review if these FAQs are appropriate for *both* camps or if you need separate/generalized ones */}
      <div id="faq" className="py-20 bg-[#FFF8DC]"> {/* Changed background to match IOI faq section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden border-[#FFD700]/20 shadow-sm"> {/* Added styling */}
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition" // Changed background to white inside cream section
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span> {/* Adjusted text color */}
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-yellow-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-white border-t border-gray-200"> {/* Added border-t */}
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Footer (copied/adapted from IOI page) */}
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
              {/* Assuming this image exists and is the Newton School logo */}
              <img src='/newton3.png' alt="Newton School" className='h-8 ml-1 lg:ml-0 sm:ml-3'></img>
            <br></br>
            <p className="text-gray-400">
              Go for Gold: Uniting India's Top Coders to Conquer the ICPC Stage!
            </p>
          </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {/* Update these links based on where they should go on this specific page or elsewhere */}
                <li><a href="#elite-camp" className="hover:text-[#FFD700] hover:cursor-pointer">Apply for Elite Camp</a></li>
                 <li><a href="#winter-details" className="hover:text-[#FFD700] hover:cursor-pointer">Winter Camp Details</a></li>
                <li><a href="#faq" className="hover:text-[#FFD700]">FAQs</a></li>
                <li><a href="/ioi-bootcamp" className="hover:text-[#FFD700]">IOI Bootcamp</a></li> {/* Link to the other page */}
              </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
               {/* Ensure these links are correct */}
              <a href="mailto:goforgold@newtonschool.co" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Mail className="h-7 w-7" />
              </a>
              <a href=" https://www.youtube.com/@GoForGold-NST" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Youtube className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/goforgold_nst/" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/goforgold_nst" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© 2025 Go For Gold. All rights reserved.</p> {/* Update year if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WinterEliteCampPage;