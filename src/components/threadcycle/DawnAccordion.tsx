import { useState } from "react";

interface AccordionProps {
  items: { title: string; content: string }[];
}

const DawnAccordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div className={`accordion-item ${openIndex === i ? "open" : ""}`} key={i}>
          <button className="accordion-trigger" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span>{item.title}</span>
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className="accordion-content">
            <p style={{ margin: 0 }}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DawnAccordion;
