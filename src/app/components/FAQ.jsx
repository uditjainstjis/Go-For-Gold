'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is GoForGold?",
    answer: "GoForGold is an initiative to improve India's Competitive Programming ecosystem by uniting and supporting the CP community. We aim to produce more high-rated coders and secure gold medals in international contests like ICPC and IOI."
  },
  {
    question: "What programs does GoForGold offer?",
    answer: "GoForGold offers training camps for ICPC teams, monthly Long Challenges, Campus Chapters, and the IOI Parallel Camp for school students."
  },
  {
    question: "Who can participate in GoForGold programs?",
    answer: "Our programs serve both college students (through camps) and school students in grades 7-12 (IOI Bootcamp). Anyone interested in competitive programming, regardless of skill level, can join our appropriate programs."
  },
  {
    question: "What has GoForGold accomplished?",
    answer: "Nine teams out of 33 that qualified for the Asia West Continent Finals of ICPC were Go For Gold camp participants. We've successfully completed our first training camp and regularly conduct long challenges to improve CP enthusiasts’ learning."
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
    answer: "Yes, accommodation is arranged for all participants attending the Go for Gold Camp and is covered. Further details will be shared with accepted applicants."
  },
  {
    question: "How to reach the campus?",
    answer: "The campus is accessible by several transportation options. The nearest train station is Sonipat railway station, which is well-connected to other major cities. If you're travelling by metro, the closest station is Jahangirpuri Metro Station in Delhi. From either location, local transportation options are available to reach the campus. Detailed directions and assistance will be provided to accepted participants for a smooth arrival."
  },
  {
    question: "How can I apply to the Go for Gold Camp?",
    answer: "The Go for Gold Camp is an exclusive, invite-only program. To apply, simply fill out the application form at https://forms.gle/yLzb8rNCDyNSfwbj9 and take the first step toward joining us in the pursuit of ICPC gold! Shortlisted Candidates will get their invite by 20th Nov."
  },
  {
    question: "How can I get in touch with you?",
    answer: "If you have any questions or need assistance, you can reach out to us via email at goforgold@newtonschool.co or through our contact form on the website. We aim to respond to all inquiries as promptly as possible."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
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
  );
}
