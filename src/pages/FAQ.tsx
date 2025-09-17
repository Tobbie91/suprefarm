import { useState } from "react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);



  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  const accordionItems = [
    {
      icon: "🌱",
      question: "Who owns the land and palm trees?",
      answer:
        "You legally own the acre, hectare, or portion you buy, along with all palm trees and produce. Suprefarm manages the farm for a fee using climate-smart practices and technology to ensure sustainable growth and measurable environmental impact. Your legal agreement is available on your dashboard after completing KYC and payment.",
    },
    {
      icon: "🌱",
      question: "I can’t afford to buy an acre — can I still participate?",
      answer:
        "Yes! You can co-own a portion of an acre, which is merged with other co-owners’ portions to form a full acre. Produce and maintenance responsibilities are shared proportionally. You still enjoy legal ownership, dashboard updates, and climate benefits for your share.",
    },
    {
      icon: "📍",
      question: "How do I know my allocated land?",
      answer:
        "Your plot is physically marked with your name and displayed on your dashboard with maps, images, videos, and blog updates. You also have physical access anytime.",
    },
    {
      icon: "👩‍🌾",
      question: "Who manages the farm?",
      answer:
        "Suprefarm’s team of agricultural professionals manages all operations using climate-smart practices, supported by AI and satellite monitoring. Local community labourers assist on-site, ensuring continuous care, sustainability, and productivity — while you remain the legal owner.",
    },
    {
      icon: "⏱",
      question: "What happens during a 3-month shutdown?",
      answer:
        "Palm trees are perennial crops and continue producing. Local labourers nearby perform essential care tasks legally allowed under government regulations:\n\n- Tree maintenance & pruning\n- Irrigation & soil care\n- Pest & disease monitoring\n- Equipment preparation for harvest\n\nHarvests may be slightly delayed, but ownership and climate benefits continue.",
    },
    {
      icon: "🛢",
      question: "Can the palm kernels be processed into palm oil during a shutdown?",
      answer:
        "No. Processing is a commercial activity and only occurs when permitted by law. Kernels are safely stored until processing is allowed.",
    },
    {
      icon: "📦",
      question: "Will the palm kernels spoil during a shutdown?",
      answer:
        "Suprefarm prevents spoilage through:\n\n- Staggered harvesting to avoid over-ripening\n- Local storage in ventilated, temperature-appropriate facilities\n- Climate-smart monitoring for maturity and moisture levels\n- Rapid processing once permitted\n\nYour produce remains secure and valuable.",
    },
    {
      icon: "🌿",
      question: "How does Suprefarm protect ownership and climate impact?",
      answer:
        "Crop insurance, resilience funds, AI monitoring, and local community labour ensure your trees, produce, and carbon sequestration remain secure even during disruptions.",
    },
    {
      icon: "🔄",
      question: "Can I transfer or partially exit my co-ownership?",
      answer:
        "Land and trees can be transferred or sold via Suprefarm’s secondary market or buy-back programme. Partial exits are possible through harvest share transfer, letting you sell or transfer a portion of your harvest while keeping ownership of the land and remaining trees.",
    },
    {
      icon: "🛠",
      question: "What happens when the palm kernels are due for harvest?",
      answer:
        "When kernels are ready, Suprefarm and local labourers collect, process, and prepare them. Co-owners can:\n\n- Receive their share\n- Sell through Suprefarm’s network\n\nOperations are tracked using climate-smart technology for transparency and accurate yields.",
    },
    {
      icon: "📊",
      question: "How do I know the amount I will make from my farm?",
      answer:
        "You can estimate your farm’s produce and potential proceeds using Suprefarm’s Simulation Calculator. It provides projections based on your co-ownership size, palm tree yield, and market prices.",
    },
    {
      icon: "🌍",
      question: "How does Suprefarm select land for agriculture?",
      answer:
        "Suprefarm ensures every hectare is safe, productive, and dispute-free using a combination of technology, environmental analysis, soil testing, and community verification:\n\n- Predictive environmental analysis\n- Soil testing\n- Community validation\n- Legal checks",
    },
    {
      icon: "✅",
      question: "How is Suprefarm different from past Covid-era schemes?",
      answer:
        "Unlike promise-based crowdfunding, co-owners legally hold the land, trees, and produce. Suprefarm manages the farm for a fee and ensures resilience through technology and local labour, keeping operations running even during emergencies.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200"
        >
          <div
            className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{item.icon} {item.question}</span>
            <span className="text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-white">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

