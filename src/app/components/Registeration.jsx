import React from 'react';
import { Check } from 'lucide-react';
export default function Registration() {
  function Handleregisterclick() {
    window.open('https://forms.gle/yLzb8rNCDyNSfwbj9', '_blank');
  }
  return (
    <div id="registration" className="py-20 bg-gradient-to-r from-yellow-50 to-white bg-[length:25px_25px]">
      <img className='bg-white bg-opacity-75  w-[150px]   m:p-12 md:w-[220px] hidden sm:block  lg:w-[180px] ml-16 md:ml-12 p-4 mt-[-30px] sm:ml-8  lg:ml-16 rounded-lg mix-blend-multiply' src='newton4.png' ></img>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className='group '>

          <img className='bg-white rounded-lg  bg-opacity-75  w-[50vw] md:w-[240px] block sm:hidden  lg:w-[270px] mx-auto p-4  mix-blend-multiply   mb-[60px]' src='newton4.png' ></img>
          <div className='w-[25vw] h-[9vw] absolute none rounded-xl bg-transparent md:block z-10 mt-[-60px] group '>
{/* changing the webpage now */}
            <div className='absolute left-0  bg-white border  group-hover:block  border-black rounded-xl p-6 md:w-[45vw] md:left-7 md:mt-[410px] mt-[200px] hidden md:block w-[90vw] lg:w-[52vw]  shadow-2xl'>
              <h2 className='text-2xl'>About NST</h2>
              Newton School of Technology (NST) is redefining tech education in
              India by nurturing a generation of problem-solvers and innovators.
              With a strong focus on real-world skills in software development,
              data science, AI, and competitive programming, NST is driving a
              movement that challenges students to go beyond classroom learning.
              Flagship programs like the ICPC Winter Camp showcase our dedication
              to raising the bar for programming in India, inspiring students to
              compete, collaborate, and excel at the highest levels.

            </div>
          </div>

        </div>

        <h2 className="text-4xl font-bold text-center mt-[-17px]">Register Now</h2>

        <div className='flex sm:flex-row flex-col'>

          <div className='sm:w-[40vw] md:w-[50vw] w-[90vw]  items-center justify- ml-[4vw]'>
            <h3 className='text-3xl text-blue-400 mt-20'>
              Type of participation:
              On-site
            </h3>
            <p className='mt-10 mb-8 whitespace-pre-line'>This is a not for profit initiative and this is a heavily subsidised cost to cover the logistics of experts, accommodation, food etc.
            </p>
            <p className='mt-10 mb-8 whitespace-pre-line'>(Scholarships available)
            </p>
          </div>


          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mt-16">
            <div className="bg-yellow-500 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 ">Food and Lodging Cost</h3>
              <p className="text-xl">₹8000</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {[
                  "Access to all bootcamp sessions",
                  "1-on-1 mentoring with experts",
                  "Exclusive study materials",
                  "Certificate of completion",
                  "Connect with top coders from India",
                  "Accommodation Included",
                  "4 meals on all 7 days included",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button onClick={Handleregisterclick} className="w-full bg-yellow-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}