function Footer() {
    return (
        <footer className="bg-black text-gray-300 px-8 md:px-32 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left: Brand */}
          <div>
            <h2 className="text-4xl font-bold tracking-wide text-[#E6B400] drop-shadow-[0_0_4px_#E6B400] font-serif">
              WOOBLY
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              Curating timeless luxury for visionaries, dreamers, and legends. Where elegance meets imagination.
            </p>
          </div>
      
          {/* Middle: Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-[#E6B400] mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#E6B400] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#E6B400] transition">About</a></li>
              <li><a href="#" className="hover:text-[#E6B400] transition">Services</a></li>
              <li><a href="#" className="hover:text-[#E6B400] transition">Contact</a></li>
            </ul>
          </div>
      
          {/* Right: Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#E6B400] mb-4">Connect</h3>
            <p className="text-sm">luxury@woobly.com</p>
            <p className="text-sm mt-2">+91 99999 99999</p>
          </div>
        </div>
      
        {/* Bottom bar */}
        <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2025 <span className="text-[#E6B400] font-semibold">Woobly</span>. All Rights Reserved.
        </div>
      </footer>
      
    );
  }
  
  export default Footer