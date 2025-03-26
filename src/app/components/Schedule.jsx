'use client'
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      date: "December 4ㅤ",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          clock:0,
          description1: "Registration and onboarding with",
          description2: "some introductory session and some",
          description3:"ice breakers to know each other."
          // description1: "Registration and onboarding with",
          // description2: "some introductory session and some",
          // description3: "ice breakers to know each other.",
          
          // instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          clock:1,
          description1: "Registration and onboarding with",
          description2: "some introductory session and some",
          description3:"ice breakers to know each other."
          // description1: "2 hour Advanced CP Session",
          // description2: "5 hour Thematic Contest",
          // description3: "2 hour discussion",
          // instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 5-8",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Training Sessions",
          description3:"ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
          // description1: "2 hour Expert Session",
          // description2: "5 hour contest",
          // description3: "2 hour Contest Discussion",
          // instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Training Sessions",
          description3:"ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
          // description1: "2 hour Advanced CP Session",
          // description2: "5 hour Thematic Contest",
          // description3: "2 hour discussion",
          // instructor: "Michael son ",
        },
      ],
    },
    //{
    //   date: "December 6",
    //   events: [
    //     {
    //       time: "1 hour ",
    //       title: "DIV 1",
    //       clock:1,
    //       description1: "2 hour Expert Session",
    //       description2: "5 hour contest",
    //       description3: "2 hour Contest Discussion",
    //       // instructor: "Sarah Chen",
    //     },
    //     {
    //       time: "2 hour",
    //       title: "DIV 2",
    //       clock:1,
    //       description1: "2 hour Advanced CP Session",
    //       description2: "5 hour Thematic Contest",
    //       description3: "2 hour discussion",
    //       // instructor: "Michael son ",
    //     },
    //   ],
    // },
    // {
    //   date: "December 7",
    //   events: [
    //     {
    //       time: "1 hour ",
    //       title: "DIV 1",
    //       clock:1,
    //       description1: "2 hour Expert Session",
    //       description2: "5 hour contest",
    //       description3: "2 hour Contest Discussion",
    //       // instructor: "Sarah Chen",
    //     },
    //     {
    //       time: "2 hour",
    //       title: "DIV 2",
    //       clock:1,
    //       description1: "2 hour Advanced CP Session",
    //       description2: "5 hour Thematic Contest",
    //       description3: "2 hour discussion",
    //       // instructor: "Michael son ",
    //     },
    //   ],
    // },
    // {
    //   date: "December 8",
    //   events: [
    //     {
    //       time: "1 hour ",
    //       title: "DIV 1",
    //       clock:1,
    //       description1: "2 hour Expert Session",
    //       description2: "5 hour contest",
    //       description3: "2 hour Contest Discussion",
    //       // instructor: "Sarah Chen",
    //     },
    //     {
    //       time: "2 hour",
    //       title: "DIV 2",
    //       clock:1,
    //       description1: "2 hour Advanced CP Session",
    //       description2: "5 hour Thematic Contest",
    //       description3: "2 hour discussion",
    //       // instructor: "Michael son ",
    //     },
    //   ],
    // }
    {
      date: "December 9",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Leisure Day",
          description3: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          // instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Leisure Day",
          description3: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          // instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 10",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Training Sessions",
          description3: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          // instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Training Sessions",
          description3: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          // instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 11",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Training with Prize Distribution",
          description3: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          // instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          clock:1,
          description1: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          description2: "Training with Prize Distribution",
          description3: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
          // instructor: "Michael son ",
        },
      ],
    },
  ];

  return (
    <div id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 gap-4 ">
          <h2 className='text-4xl font-bold mt-2'>About the Bootcamp</h2>

        <div className=' lg:w-[40vw] mx-auto mt-5 mb-8'>
        <p>The Go For Gold Bootcamp is a unique opportunity for India’s top ICPC teams and competitive programming enthusiasts. Participants will train with India’s best minds, guided by internationally recognized experts, to build the skills and mindset necessary to excel on the world stage.</p>
        </div>


          <h2 className="text-4xl font-bold mb-4">Bootcamp Schedule</h2>
          <p className="text-xl text-gray-600">Three days of intensive training with industry experts</p>
        </div>
        
        <div className="grid gap-8 ">

          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-xl shadow-lg overflow-hidden flex sm:flex-row flex-col">
              <div className="bg-yellow-500 text-white p-4 min-w-[220px] md:max-w-[230px] flex items-center">
                <h3 className="text-xl font-semibold text-center whitespace-pre-line w-full items-center"><p className=' w-full mx-auto text-center ml-[-10px] mr-[10px]'>ㅤㅤㅤ{day.date}ㅤㅤㅤ</p></h3>
              </div>
              <div className="divide-y divide-gray-100 flex flex-row items-center justify-center md:px-7 lg:px-9">

                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className=" py-4 px-4 sm:p-6">
                    <div className="flex flex-wrap gap-6 items-center border rounded-lg border-gray-500 p-3 lg:px-8 ">
                      <div className="flex-1">
                        <div className='text-center font-bold mb-2'>{event.title}</div>
                        {/* <p className="text-black mb-4 text-center whitespace-pre-line"><Clock className="h-4 w-4" />{event.description1}</p>
                        <p className="text-black mb-4 text-center whitespace-pre-line"><Clock className="h-4 w-4 " />{event.description2}</p>
                        <p className="text-black mb-4 text-center whitespace-pre-line"><Clock className="h-4 w-4 " />{event.description3}</p> */}
                        <div className="flex flex-wrap flex-col gap-4 text-sm text-black text-center">
                          <div className="flex items-center mx-auto">
                            {/* {event.clock==1?(<><Clock className="h-4 w-4 mr-2 text-gray-600" /> </>):<> </>} */}
                            
                            {event.description1}
                          </div>
                          <div className="flex items-center mx-auto">
                          {/* {event.clock==1?(<><Clock className="h-4 w-4 mr-2 text-gray-600" /> </>):<> </>} */}
                            {event.description2}
                          </div>
                          <div className="flex items-center mx-auto">
                            {/* {event.clock==1?(<><Clock className="h-4 w-4 mr-2 text-gray-600" /> </>):<> </>} */}
                            {event.description3}
                          </div>


                          {/* <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            Instructor: {event.instructor}
                          </div> */}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}