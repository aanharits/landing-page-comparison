import { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq_items.js';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Header */}
          <div className="animate-on-scroll fade-right">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sagedark mb-4">
              FAQ
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-onyx mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-onyx/70 leading-relaxed">
              Everything you need to know about our services. Can&apos;t find the answer you&apos;re looking for? Feel free to contact our friendly team.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="animate-on-scroll fade-left" style={{ animationDelay: "200ms" }}>
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="border-b border-onyx/10">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-base font-semibold text-onyx pr-4">
                    {item.question}
                  </span>
                  <span className={`faq-icon text-onyx/60 flex-shrink-0 ${openIndex === index ? 'open' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                  <p className="pb-6 text-sm text-onyx/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
