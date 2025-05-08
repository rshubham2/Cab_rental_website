import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does your pricing work?",
    answer: "Our pricing is transparent and depends on the type of service you choose. For outstation trips, we charge based on kilometers traveled plus a driver allowance. Local packages have fixed hourly rates with kilometer limits. Airport transfers and one-way drops have fixed rates. All pricing details are provided before booking confirmation."
  },
  {
    question: "Can I modify my booking after confirmation?",
    answer: "Yes, you can modify your booking up to 24 hours before the scheduled pickup time. For any changes, please contact our customer support team at 9045450000 or through the email provided in your booking confirmation."
  },
  {
    question: "What happens if I need to cancel my booking?",
    answer: "We have a flexible cancellation policy. Cancellations made 48 hours before the scheduled pickup receive a full refund. Cancellations within 24-48 hours receive a 50% refund. Cancellations less than 24 hours before pickup are non-refundable. For emergency situations, please contact our support team."
  },
  {
    question: "Are your drivers experienced with different terrains?",
    answer: "Absolutely! All our drivers undergo rigorous training and have extensive experience navigating various terrains, from mountain roads to city traffic. We assign drivers based on the specific route and requirements of your journey to ensure the best experience."
  },
  {
    question: "What types of vehicles do you offer?",
    answer: "We offer a diverse fleet of well-maintained vehicles, including sedans (Swift Dzire, Honda City), SUVs (Toyota Innova, Mahindra XUV), luxury cars (Mercedes, BMW), and larger vehicles like Tempo Travellers for group travel. All vehicles are regularly serviced and equipped with essential amenities."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our cab rental services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="font-sans font-medium text-lg">{faq.question}</span>
                  <ChevronDown className={`text-primary transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 pb-6 ${activeIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
