'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the IOI Bootcamp?",
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
