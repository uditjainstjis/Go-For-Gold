'use client'
import React from 'react';

export default function About() {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Y-0lVuayomg"
              title="About Go For Gold"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Go For Gold</h2>
            <h2 className='text-[1.35rem] font-semibold mt-2'>Our Vision</h2>

            <p className="text-lg text-gray-600 mb-8 mt-2">
              With structured guidance, expert mentorship, and a dedicated community, we believe India can become a global contender. This is why we’ve launched Go For Gold—an initiative by Newton School of Technology (NST) to foster a culture of competitive programming excellence.
            </p>
<h2 className='text-[1.35rem] font-semibold mt-4'>Why It Matters</h2>

            <p className="text-lg text-gray-600 mb-6 mt-2">
Through this bootcamp, we aim to build a supportive, vibrant ecosystem for top programmers in India, and drive them to success in global competitions.

            </p>
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">5000+</h4>
                <p className="text-gray-600">Global Participants</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">100+</h4>
                <p className="text-gray-600">Countries Represented</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">50+</h4>
                <p className="text-gray-600">Expert Coaches</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">95%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}