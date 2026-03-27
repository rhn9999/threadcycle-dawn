import { Product, formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => (
  <div className="product-card" onClick={onClick}>
    <div className="product-card__image-wrapper">
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "hsl(0 0% 70%)", fontSize: 13 }}>
        {product.title}
      </div>
      {product.soldOut && <span className="badge badge--sold-out">Sold out</span>}
      {product.isNew && <span className="badge badge--new">New</span>}
    </div>
    <div className="product-card__info">
      <p className="product-card__vendor">{product.vendor}</p>
      <p className="product-card__title">{product.title}</p>
      <p className={`product-card__price ${product.soldOut ? "product-card__price--sold-out" : ""}`}>
        {product.soldOut ? <s>{formatPrice(product.price)}</s> : formatPrice(product.price)}
      </p>
    </div>
  </div>
);

export default ProductCard;
