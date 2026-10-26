function Footer() {
  return (
    <footer className="bg-[#111] text-white py-10 px-8 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            FitZone
          </h2>

          <p className="text-gray-400">
            Push Your Limits. Build Your Best Self.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Classes</li>
            <li>Membership</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            Lahore, Pakistan
          </p>

          <p className="text-gray-400">
            +92 300 1234567
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        © 2026 FitZone. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;

