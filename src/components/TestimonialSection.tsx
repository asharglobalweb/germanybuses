"use client";
import { Star } from "lucide-react";
import { useState } from 'react';

export default function TestimonialSection() {
  const testimonials = [
    // Passengers testimonials
    {
      key: 'passengers',
      name: "Anna Müller",
      role: "Regular Commuter, Berlin",
      avatar: "avatar1",
      message:
        "I travel frequently between Berlin and Munich for work. Germany Buses is always on time, and the coaches are spotless. The WiFi makes it easy to stay productive on the road.",
    },
    {
      key: 'passengers',
      name: "Lukas Schneider",
      role: "University Student, Frankfurt",
      avatar: "avatar2",
      message:
        "As a student travelling between Frankfurt and Cologne, Germany Buses has been reliable and affordable. The drivers are polite and always willing to help with luggage.",
    },
    {
      key: 'passengers',
      name: "Sophie Becker",
      role: "Family Traveller, Hamburg",
      avatar: "avatar3",
      message:
        "We booked Germany Buses for our family trip to the North Sea coast. The coach was modern and very comfortable, and our driver made the journey pleasant from start to finish.",
    },
    // Corporate testimonials
    {
      key: 'corporate',
      name: "Michael Hofmann",
      role: "Operations Manager, Munich",
      avatar: "avatar4",
      message:
        "Our company has used Germany Buses for several corporate events around Munich and Berlin. Their service is professional, flexible, and always punctual.",
    },
    {
      key: 'corporate',
      name: "Isabel Neumann",
      role: "HR Director, Frankfurt",
      avatar: "avatar5",
      message:
        "Germany Buses organised the transport for our annual conference. The entire experience was seamless, and the drivers were extremely professional and courteous.",
    },
    {
      key: 'corporate',
      name: "Jonas Richter",
      role: "Event Coordinator, Cologne",
      avatar: "avatar6",
      message:
        "We hired Germany Buses for an international summit in Cologne. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
    },
    // School testimonials
    {
      key: 'school',
      name: "Frau Schmidt",
      role: "Primary School Teacher, Dresden",
      avatar: "avatar7",
      message:
        "Our school trip to the historical sites in Dresden went perfectly thanks to Germany Buses. The driver was kind and attentive, and the children were very comfortable throughout.",
    },
    {
      key: 'school',
      name: "Herr Weber",
      role: "Sports Coach, Stuttgart",
      avatar: "avatar8",
      message:
        "We use Germany Buses for all our sports competitions. They understand how important timing is and always get our teams to matches safely and on schedule.",
    },
    {
      key: 'school',
      name: "Frau Keller",
      role: "Headmistress, Bonn",
      avatar: "avatar9",
      message:
        "Safety and reliability are top priorities for our school, and Germany Buses delivers both. Parents appreciate how professional and friendly the service is for school transport.",
    },
  ];

  const categories = ['passengers', 'corporate', 'school'];
  const [active, setActive] = useState(categories[0]);
  const filtered = testimonials.filter(t => t.key === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold ">
            Client Testimonials
          </h3>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>
        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {categories.map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={
                `px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border 
                ${active === key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600'}`
              }
            >
              {key === 'passengers'
                ? 'From passengers'
                : key === 'corporate'
                  ? 'From companies'
                  : 'From schools'}
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-xl shadow-md p-6 text-left h-full"
            >
              <p className="text-gray-700 mb-6 flex-grow">{t.message}</p>
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                    />
                  ))}
              </div>
              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
