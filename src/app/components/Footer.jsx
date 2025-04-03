'use client'
import React from 'react';
import { Code2, Instagram, Youtube, Mail, Twitter, X } from 'lucide-react';
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-wrap items-center mb-4 gap-4">
              <div className='flex flex-row items-center'>
              <Code2 className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">Go For Gold</span>
              </div>

              <img src='trans-newton.png' className='h-8 ml-1 lg:ml-0 sm:ml-3'></img>
            </div>
            <p className="text-gray-400">
              Go for Gold: Uniting India’s Top Coders to Conquer the ICPC Stage!
            </p>
          </div>
        
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500">Home</a></li>
              <li><a href="#coaches" className="text-gray-400 hover:text-yellow-500">Coaches</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-500">About</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-yellow-500">Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: <a href="mailto:goforgold@newtonschool.co" target="_blank" className='hover:text-red-500'>goforgold@newtonschool.co</a></li>
              <li className="text-gray-400">Phone: <a href='tel:+918982365919' className='hover:text-red-500' target='_blank'>+91 8982365919</a></li>
              <li className="text-gray-400 whitespace-pre-line" ><span>Location:</span><a href ="https://www.google.com/maps/place/Newton+School+of+Technology,+Delhi+NCR/@28.9829162,77.0852504,17z/data=!3m1!4b1!4m6!3m5!1s0x390db15c164f0a91:0xcab7be79bc1b3bac!8m2!3d28.9829116!4d77.0901213!16s%2Fg%2F11v0jv3503?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='hover:text-red-500 text-blue-500 w-12'>Newton School of  Technology, Rishihood University, Delhi</a></li>
              <li className="text-gray-400">Website: <a target="_blank" href='www.newtonschool.co' className='hover:text-red-500'>www.newtonschool.co</a></li>
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
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Go For Gold. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}