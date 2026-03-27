import { useState } from "react";
import { products } from "@/data/products";
import AnnouncementBar from "@/components/threadcycle/AnnouncementBar";
import Header from "@/components/threadcycle/Header";
import CartDrawer from "@/components/threadcycle/CartDrawer";
import MobileNavDrawer from "@/components/threadcycle/MobileNavDrawer";
import Footer from "@/components/threadcycle/Footer";
import HomePage from "@/components/threadcycle/HomePage";
import ShopPage from "@/components/threadcycle/ShopPage";
import ProductDetailPage from "@/components/threadcycle/ProductDetailPage";
import AboutPage from "@/components/threadcycle/AboutPage";
import FAQPage from "@/components/threadcycle/FAQPage";

const Index = () => {
  const [page, setPage] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const navigate = (p: string) => {
    setPage(p);
    setSelectedProductId(null);
    window.scrollTo(0, 0);
  };

  const viewProduct = (id: string) => {
    setSelectedProductId(id);
    setPage("detail");
    window.scrollTo(0, 0);
  };

  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <div>
      <AnnouncementBar />
      <Header
        activePage={page}
        onNavigate={navigate}
        onOpenCart={() => setCartOpen(true)}
        onOpenNav={() => setNavOpen(true)}
      />

      <main>
        {page === "home" && <HomePage onNavigate={navigate} onViewProduct={viewProduct} />}
        {page === "shop" && <ShopPage onNavigate={navigate} onViewProduct={viewProduct} />}
        {page === "detail" && selectedProduct && (
          <ProductDetailPage product={selectedProduct} onNavigate={navigate} />
        )}
        {page === "about" && <AboutPage />}
        {page === "faq" && <FAQPage />}
      </main>

      <Footer onNavigate={navigate} />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onContinueShopping={() => navigate("shop")}
      />
      <MobileNavDrawer
        open={navOpen}
        onClose={() => setNavOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
};

export default Index;
