import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Product.scss"; // Создайте этот файл для стилей

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const products = [
    {
      id: 1,
      title: "Аммиак",
      description: "Один из важнейших продуктов химической промышленности.",
    },
    {
      id: 2,
      title: "Карбамид",
      description: "Высокосортированное азотное удобрение.",
    },
    {
      id: 3,
      title: "ККП",
      description: "Выступает для деградации смыва и удобрений.",
    },
  ];

  return (
    <section className="product-section">
        <div className="container">
            <div className="product__header">
                <h2 data-aos="fade-right">Продукция ПАО Тольяттиазот</h2>
                <p data-aos="fade-left">Экологическая чистота. Собственные биологические очистные сооружения Тольяттиазота обеспечивают такую степень очистки сточных вод предприятия 
                и нескольких районов города.</p>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id} data-aos="fade-up">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Product;