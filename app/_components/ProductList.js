"use client";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffled, setShuffled] = useState([]);
  const productsPerPage = 10;

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    if (products.length > 0) {
      const filtered =
        activeCategory === "الكل"
          ? products.flatMap((c) =>
              c.items.map((item) => ({ ...item, category: c.category }))
            )
          : products
              .filter((c) => c.category === activeCategory)
              .flatMap((c) =>
                c.items.map((item) => ({ ...item, category: c.category }))
              );

      setShuffled(shuffleArray(filtered));
      setCurrentPage(1); // يرجع للصفحة الأولى
    }
  }, [products, activeCategory]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = shuffled.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(shuffled.length / productsPerPage);

  return (
    <div className="product-list-container font-cairo" dir="rtl">
      {/* أزرار الفلترة */}
      <div className="filter-buttons">
        {[
          "الكل",
          "الأجهزه المنزلية",
          "مستلزمات السيارات",
          "إلكترونيات",
          "العناية الشخصية",
          "العطور",
          "ملابس رجالي",
          "ملابس حريمي",
          "أحذية",
          "إكسسوارات",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* شبكة المنتجات */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <a
            key={`${product.category}-${product.id}`}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card block"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name font-cairo-card">{product.name}</h3>

            <div className="price-container">
              {product.oldPrice && (
                <span className="current-price ">{product.price} ر.س</span>
              )}
              <span className="old-price">{product.oldPrice} ر.س</span>
            </div>

            <p className="availability">
              {product.available ? "✅ متوفر" : "❌ غير متوفر"}
            </p>
          </a>
        ))}
      </div>

      {/* أزرار الصفحات */}
<div className="pagination">
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      onClick={() => {
        setCurrentPage(i + 1);
        window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ يرجعك لفوق
      }}
      className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
    >
      {i + 1}
    </button>
  ))}
</div>

    </div>
  );
}
