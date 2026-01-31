
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="space-y-12">
      <div className="glass p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tight">Let's build <br /><span className="text-blue-400">something great</span> together.</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I'm always open to discussing new projects, internship opportunities, or even just chatting about technology.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:madhanakant@email.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-medium text-gray-200">madhan@hicet.ac.in</p>
                </div>
              </a>
            </div>
          </div>

          <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest ml-1">Name</label>
                <input type="text" className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest ml-1">Email</label>
                <input type="email" className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-sm" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-widest ml-1">Message</label>
              <textarea rows={4} className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-sm resize-none" placeholder="What's on your mind?"></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
