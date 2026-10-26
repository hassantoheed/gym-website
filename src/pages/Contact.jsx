function Contact() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-8">

      <h1 className="text-5xl font-bold text-center text-orange-500 mb-12">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Gym Information
          </h2>

          <p className="mb-4">
            📍 DHA Phase 6, Lahore, Pakistan
          </p>

          <p className="mb-4">
            📞 +92 300 1234567
          </p>

          <p className="mb-4">
            🕒 Mon - Sat: 6 AM - 11 PM
          </p>

          <p className="mb-4">
            ✉ fitzone@gmail.com
          </p>

        </div>

        {/* Right Side */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Membership Inquiry
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-black border border-gray-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-black border border-gray-700"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded bg-black border border-gray-700"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded bg-black border border-gray-700"
            ></textarea>

            <button
              className="bg-orange-500 py-3 rounded hover:bg-orange-600 transition"
            >
              Send Inquiry
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;