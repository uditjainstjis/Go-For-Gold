'use client'
import React, {useState} from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [

    {
      question: "Is there Accommodation Provided?",
      answer: "Yes, accommodation is arranged for all participants attending the Go for Gold Camp and is covered. Further details will be shared with accepted applicants.",
    },
    {
      question: "How to reach the campus?",
      answer: "The campus is accessible by several transportation options. The nearest train station is Sonipat railway station, which is well-connected to other major cities. If you're travelling by metro, the closest station is Jahangirpuri Metro Station in Delhi. From either location, local transportation options are available to reach the campus. Detailed directions and assistance will be provided to accepted participants for a smooth arrival.",
    },
    {
      question: "What are the technical requirements?",
      answer: "Participants should bring a personal laptop capable of running coding environments smoothly, with a stable internet connection and updated software for competitive programming (such as IDEs, compilers, and version control). It’s also recommended to have a few essential tools installed, like code editors, and be familiar with platforms used for ICPC training. More specific requirements or setup instructions will be shared before the camp begins.",
    },
    {
      question: "Is scholarship available?",
      answer: "Yes, scholarships are available for participants, awarded on a merit basis according to ICPC prelims performance. High-performing candidates may qualify for these scholarships to support their attendance at the camp.",
    },
    {
      question: "Is food included?",
      answer: "Yes, Vegetarian 4 meals will be provided for all participants during the Go for Gold Camp. Breakfast, Lunch, Snacks, and Dinner.",
    },
    {
      question: "What is the refund policy?",
      answer: "If you are unable to attend the Go for Gold Camp, please notify us via email before November 30th to be eligible for a refund. Unfortunately, we cannot process refunds for cancellations made after this date.",
    },
    {
      question: "How can I get in touch with you?",
      answer: "If you have any questions or need assistance, you can reach out to us via email at goforgold@newtonschool.co or through our contact form on the website. We aim to respond to all inquiries as promptly as possible.",
    },
];


  return (
    <div id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
                      <div key={8} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100"
                onClick={() => setOpenIndex(openIndex === 8 ? null : 8)}
              >
                <span className="font-medium">How can I apply to the Go for Gold Camp?</span>
                {openIndex === 8 ? (
                  <Minus className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Plus className="h-5 w-5 text-yellow-500" />
                )}
              </button>
              {openIndex === 8 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600">The Go for Gold Camp is an exclusive, invite-only program. To apply, simply fill out the <a className="text-blue-400" target='_blank' href='https://forms.gle/yLzb8rNCDyNSfwbj9'>application form.</a>  and take the first step toward joining us in the pursuit of ICPC gold! Shortlisted Candidates will get their invite by 20th Nov.</p>
                  
                </div>
              )}
            </div>
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