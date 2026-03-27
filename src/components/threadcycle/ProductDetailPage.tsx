import { useState } from "react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import DawnAccordion from "@/components/threadcycle/DawnAccordion";

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: string) => void;
}

const accordionItems = [
  { title: "Measurements Guide", content: "All measurements are taken flat and doubled where applicable. Pit-to-pit is measured across the chest under the arms. Length is measured from the highest point of the shoulder to the hem. We recommend comparing to a garment you already own for best fit." },
  { title: "Shipping Information", content: "We dispatch within 48 hours of order placement. Standard shipping takes 5–7 business days. Express shipping (2–3 days) is available at checkout. Free shipping on all orders over ₹1,500." },
  { title: "Returns Policy", content: "All sales are final on thrifted items. Since each piece is one-of-a-kind, we cannot accept returns or exchanges. Please review measurements and photos carefully before purchasing. If you receive a damaged item, contact us within 24 hours." },
];

const ProductDetailPage = ({ product, onNavigate }: ProductDetailPageProps) => {
  const [activeThumb, setActiveThumb] = useState(0);
  const { add } = useCart();

  const specs = [
    { label: "Size", value: product.size },
    { label: "Condition", value: product.condition },
    { label: "Era", value: product.era },
    { label: "Pit-to-Pit", value: product.pitToPit },
    { label: "Length", value: product.length },
    { label: "Stock", value: "1 of 1" },
  ];

  return (
    <div className="dawn-section">
      <div className="dawn-container">
        <div className="breadcrumb">
          <button onClick={() => onNavigate("home")}>Home</button> / <button onClick={() => onNavigate("shop")}>Shop</button> / {product.title}
        </div>

        <div className="product-detail">
          {/* Gallery */}
          <div>
            <div className="product-detail__main-image">
              View {activeThumb + 1}
            </div>
            <div className="product-detail__thumbnails">
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`thumbnail ${activeThumb === i ? "thumbnail--active" : ""}`}
                  onClick={() => setActiveThumb(i)}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="product-detail__vendor">{product.vendor.toUpperCase()}</p>
            <h1 className="product-detail__title">{product.title}</h1>
            <p className="product-detail__price">{formatPrice(product.price)}</p>

            <hr className="dawn-hr" />

            <div className="specs-grid">
              {specs.map(s => (
                <div className="spec-cell" key={s.label}>
                  <p className="spec-cell__label">{s.label}</p>
                  <p className="spec-cell__value">{s.value}</p>
                </div>
              ))}
            </div>

            <hr className="dawn-hr" />

            <p className="product-detail__description">{product.description}</p>

            {product.soldOut ? (
              <button className="dawn-btn dawn-btn--full dawn-btn--disabled" disabled>
                Sold out
              </button>
            ) : (
              <button className="dawn-btn dawn-btn--full" onClick={() => add(product)}>
                Add to Cart — {formatPrice(product.price)}
              </button>
            )}

            <p className="final-sale-notice">⚠️ All sales are final. No returns on thrift items.</p>

            <div style={{ marginTop: 32 }}>
              <DawnAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
