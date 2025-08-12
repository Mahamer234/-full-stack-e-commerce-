import product1 from "@assets/e-commerceImage/product1.jpg";
import product2 from "@assets/e-commerceImage/product2.jpeg";
import product3 from "@assets/e-commerceImage/product3.avif";
import clsx from "clsx";
import { useState } from "react";

const FeaturedProducts = () => {
  const images = [product1, product2, product3];
  const prices = [49.99, 59.99, 69.99];

  // حالة منفصلة لكل زر
  const [disabledButtons, setDisabledButtons] = useState<{
    [key: number]: boolean;
  }>({});

  const handleClickButton = (index: number) => {
    // عطل الزر اللي اتضغط عليه فقط
    setDisabledButtons((prev) => ({ ...prev, [index]: true }));

    // هنا ممكن تضيف dispatch(addToCart) لو عندك سلة مشتريات

    // فعل الزر تاني بعد شوية
    setTimeout(() => {
      setDisabledButtons((prev) => ({ ...prev, [index]: false }));
    }, 300);
  };

  return (
    <div className="bg-white text-gray-800">
      <section className="py-16 px-4 sm:px-8 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-10 font-Inter">
          Best Sellers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((productImage, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={productImage}
                alt={`Product ${i + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 font-Inter">
                  Product {i + 1}
                </h3>
                <p className="text-gray-500 mb-4">${prices[i]}</p>
                <button
                  disabled={disabledButtons[i]}
                  className={clsx(
                    "bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition",
                    disabledButtons[i] && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={() => handleClickButton(i)}
                >
                  {disabledButtons[i] ? "Adding..." : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
