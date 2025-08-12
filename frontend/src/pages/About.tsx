import delivery from "../assets/e-commerceImage/delivery.png";
import quality from "../assets/e-commerceImage/quality .png";
import support from "../assets/e-commerceImage/support.png";
const About = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-8 mb-8 text-center">
          Welcome to our online fashion store! We specialize in providing the
          latest clothing trends for men and women with premium quality and
          affordable prices. Our goal is to help you express your unique style
          with confidence and comfort.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <img
              src={quality}
              alt="High Quality"
              className="w-20 h-20 mx-auto mb-4"
              draggable={false}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              We use high-quality fabrics to ensure long-lasting and comfortable
              wear.
            </p>
          </div>

          <div className="text-center">
            <img
              src={delivery}
              alt="Fast Delivery"
              className="w-20 h-20 mx-auto mb-4"
              draggable={false}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable shipping to all regions — local and
              international.
            </p>
          </div>

          <div className="text-center">
            <img
              src={support}
              alt="Customer Support"
              className="w-20 h-20 mx-auto mb-4"
              draggable={false}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Our team is here to assist you with any questions or concerns at
              any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
