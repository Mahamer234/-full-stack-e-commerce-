const NewsletterCTA = () => {
  return (
    <section className="bg-green-400 text-center py-16 px-4">
      <h2 className="text-3xl font-bold mb-4 font-Inter">
        Join Our Newsletter
      </h2>
      <p className="mb-6 text-gray-800">
        Be the first to get updates on new collections and offers!
      </p>
      <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded w-full sm:w-auto flex-1 outline-none"
        />
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterCTA;
