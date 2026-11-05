import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with your actual image: <Image src="/excel-logo.png" width={36} height={36} alt="Logo" /> */}
          <div className="w-8 h-8 bg-[#0f7b46] rounded-sm flex items-center justify-center text-white font-bold text-lg">
            X
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            oct_excel
          </span>
        </Link>

        {/* RIGHT: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] text-gray-600 font-medium">
          
          <Link href="/courses" className="hover:text-green-600 flex items-center gap-1.5 transition-colors">
            Free Excel Courses
            <svg className="w-3.5 h-3.5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>

          <Link href="/tutorials" className="hover:text-green-600 flex items-center gap-1.5 transition-colors">
            Tutorials
            <svg className="w-3.5 h-3.5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>

          <Link href="/community" className="hover:text-green-600 transition-colors">
            Community
          </Link>

          <Link href="/templates" className="hover:text-green-600 transition-colors">
            Templates
          </Link>

          <Link href="/about" className="hover:text-green-600 transition-colors">
            About Us
          </Link>

          {/* Search Icon */}
          <button className="text-green-600 hover:text-green-700 ml-2 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </nav>

      </div>
    </header>
  );
}