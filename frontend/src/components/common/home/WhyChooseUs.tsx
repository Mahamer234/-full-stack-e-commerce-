const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-10 font-Inter">
        Why Shop With Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2 font-Inter">
            High Quality
          </h3>
          <p className="text-gray-600">
            We offer top-notch fabric and materials for your comfort.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 font-Inter">
            Fast Shipping
          </h3>
          <p className="text-gray-600">
            Get your order delivered in 1-3 working days.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 font-Inter">
            24/7 Support
          </h3>
          <p className="text-gray-600">
            Our team is ready to assist you at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
