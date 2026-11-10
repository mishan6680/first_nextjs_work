"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Rahim",
      text: "This tutorial was really helpful! Thanks for sharing.",
      date: "2 hours ago",
    },
    {
      id: 2,
      name: "Sara",
      text: "Can you make a video on VBA basics next?",
      date: "5 hours ago",
    },
  ]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      name: "Guest User", 
      text: commentText,
      date: "Just now",
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      
      
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0f7b46] rounded-sm flex items-center justify-center text-white font-bold text-lg">X</div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">OCT_DEMY</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-[15px] text-gray-600 font-medium">
            <Link href="/courses" className="hover:text-[#0f7b46]">Courses</Link>
            <Link href="/tutorials" className="hover:text-[#0f7b46]">Tutorials</Link>
            <Link href="/community" className="hover:text-[#0f7b46]">Community</Link>
            <Link href="/about" className="hover:text-[#0f7b46]">About Us</Link>
          </nav>
        </div>
      </header>

    
      <main className="flex-grow">
        
        
        <section className="bg-white py-20 px-4 lg:px-8 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learn Excel, Automate Your Work, <br className="hidden md:block" />
              <span className="text-[#0f7b46]">Become a Data Pro.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Free tutorials, downloadable templates, and step-by-step guides to help you master Excel and data analysis from scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="px-8 py-3.5 bg-[#0f7b46] text-white font-semibold rounded-md hover:bg-green-800 transition-colors">
                Browse Free Courses
              </Link>
            </div>
          </div>
        </section>

        
        <section className="py-16 px-4 lg:px-8 max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Learn With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step-by-Step Tutorials</h3>
              <p className="text-gray-600 text-sm">Learn complex formulas through easy-to-follow examples.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Templates</h3>
              <p className="text-gray-600 text-sm">Save hours of work with our pre-built Excel templates.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600 text-sm">Stuck? Ask questions and share ideas with other learners.</p>
            </div>
          </div>
        </section>

        
        <section className="py-12 px-4 lg:px-8 bg-gray-100">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comments ({comments.length})
            </h2>

            
            <form onSubmit={handleCommentSubmit} className="mb-10 flex flex-col gap-3">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f7b46] focus:border-transparent resize-none h-28 text-gray-800 bg-gray-50 text-sm"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!commentText.trim()}
                  className={`px-6 py-2.5 rounded-md font-semibold text-white transition-colors ${
                    commentText.trim()
                      ? "bg-[#0f7b46] hover:bg-green-800"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-[#0f7b46] flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {comment.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-900 text-sm">{comment.name}</h3>
                      <span className="text-xs text-gray-400">{comment.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {comment.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-1 md:col-span-1">
              <span className="text-xl font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <div className="w-6 h-6 bg-[#0f7b46] rounded-sm flex items-center justify-center text-white text-xs">X</div>
                OCT_DEMY
              </span>
              <p className="text-sm text-gray-400 mt-4">Learn Excel, data analysis, and automation with our free tutorials.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} ExcelDemy. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}