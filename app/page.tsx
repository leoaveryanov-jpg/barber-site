export default function BarbershopTemplate() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-serif">
      {/* Header */}
      <header className="sticky top-0 bg-[#111] border-b border-amber-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-amber-200">Iron Cut Barbers</h1>
          <nav className="hidden md:flex gap-6 text-sm text-amber-100">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#booking" className="hover:text-white">Book</a>
            <a href="#location" className="hover:text-white">Location</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button className="px-4 py-2 rounded bg-amber-700 text-white font-semibold hover:bg-amber-600 transition">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="uppercase tracking-[0.4em] text-amber-500 mb-4">Est. 1998</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Traditional Cuts. Timeless Style.
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          A classic barbershop experience with skilled hands, straight razors, and attention to detail.
        </p>
        <button className="px-8 py-3 bg-amber-700 hover:bg-amber-600 transition text-white font-semibold">
          Book Appointment
        </button>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold mb-10 text-center text-amber-200">Services & Pricing</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Classic Haircut', price: '$25' },
            { name: 'Beard Trim', price: '$15' },
            { name: 'Full Service', price: '$35' }
          ].map((item) => (
            <div key={item.name} className="border border-amber-900 p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
              <p className="text-amber-400">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6 text-amber-200">Book Your Appointment</h3>
        <form className="grid gap-4">
          <input className="p-3 bg-[#111] border border-amber-900" placeholder="Your Name" />
          <input className="p-3 bg-[#111] border border-amber-900" placeholder="Phone Number" />
          <input type="date" className="p-3 bg-[#111] border border-amber-900" />
          <input type="time" className="p-3 bg-[#111] border border-amber-900" />
          <select className="p-3 bg-[#111] border border-amber-900">
            <option>Select Service</option>
            <option>Classic Haircut</option>
            <option>Beard Trim</option>
            <option>Full Service</option>
          </select>
          <button className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white font-semibold">
            Confirm Booking
          </button>
        </form>
      </section>

      {/* Location & Hours */}
      <section id="location" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-200">Location</h3>
          <p className="text-gray-300">123 Main Street, Downtown</p>
          <p className="text-gray-500 mt-2">(Map integration)</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-200">Hours</h3>
          <p className="text-gray-300">Mon - Fri: 9AM – 7PM</p>
          <p className="text-gray-300">Saturday: 10AM – 6PM</p>
          <p className="text-gray-300">Sunday: Closed</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-amber-900">
        <h3 className="text-3xl font-bold mb-4 text-amber-200">Contact</h3>
        <p className="text-gray-300">Phone: (555) 987-6543</p>
        <p className="text-gray-300">Email: info@ironcut.com</p>
      </section>
    </div>
  );
}
