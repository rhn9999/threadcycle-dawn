import DawnAccordion from "@/components/threadcycle/DawnAccordion";

const faqItems = [
  { title: "How do I know the condition of an item?", content: "Every listing includes a condition rating (Like New, Excellent, Very Good, or Good) along with detailed photos and a written description of any flaws. We inspect every item before listing." },
  { title: "What is your return policy?", content: "All sales are final on thrift items since each piece is one-of-a-kind. We recommend reviewing measurements and photos carefully. If you receive a damaged item, contact us within 24 hours." },
  { title: "How long does shipping take?", content: "We dispatch within 48 hours. Standard delivery takes 5–7 business days. Express shipping (2–3 days) is available at checkout for an additional fee." },
  { title: "How do measurements work?", content: "All measurements are taken flat. Pit-to-pit is across the chest under the arms. Length is from the highest shoulder point to the hem. Compare with a garment you own for best results." },
  { title: "Can I reserve an item before buying?", content: "Unfortunately, we can't hold items. All pieces are first-come, first-served. If it's in your cart, someone else can still check out before you — so act fast!" },
  { title: "What payment methods do you accept?", content: "We accept all major credit/debit cards, UPI, net banking, and popular digital wallets. All transactions are secure and encrypted." },
  { title: "How are items sourced and cleaned?", content: "We source from trusted vintage dealers, estate sales, and sustainable suppliers. Every item is cleaned, steamed, and inspected before being listed on the store." },
  { title: "Is everything really one of a kind?", content: "Yes! Every item is a single unique piece. Once it's sold, it's gone forever. That's the beauty of thrifting — your wardrobe is truly yours." },
];

const FAQPage = () => (
  <div className="dawn-section">
    <div className="dawn-container">
      <div className="faq-page">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <DawnAccordion items={faqItems} />
      </div>
    </div>
  </div>
);

export default FAQPage;
