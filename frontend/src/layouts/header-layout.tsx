import ThemeToggle from '@/components/theme-toggle-button';
import AddIcon from '@/assets/svg/add-icon-white.svg';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/hero';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative -mt-2 h-[460px] bg-[url('https://vaishnavyejju.vercel.app/assets/img/hero-bg.png')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col px-4 py-8 text-slate-50 md:px-16">
        <div className="flex w-full justify-between">
          <div className="cursor-text text-2xl font-semibold">Vaishnav Yejju</div>

          {/* Nav Links + Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop buttons */}
            <button
              className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
              onClick={() => navigate('/')}
            >
              Home
            </button>
            <button
              className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
              onClick={() => navigate('/about-page')}
            >
              About
            </button>
            <button
              className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
              onClick={() => navigate('/contact-page')}
            >
              Contact
            </button>
            <button
              className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
              onClick={() => navigate('/add-blog')}
            >
              Create post
            </button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile: Sidebar open button */}
            <button
              className="px-2 py-2 hover:bg-slate-500/25 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/60">
            <div className="absolute top-0 left-0 h-full w-64 bg-slate-800 text-white shadow-lg p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={() => setSidebarOpen(false)}>✕</button>
              </div>

              <button
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
                onClick={() => {
                  navigate('/');
                  setSidebarOpen(false);
                }}
              >
                Home
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
                onClick={() => {
                  navigate('/about-page');
                  setSidebarOpen(false);
                }}
              >
                About
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
                onClick={() => {
                  navigate('/contact-page');
                  setSidebarOpen(false);
                }}
              >
                Contact
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
                onClick={() => {
                  navigate('/add-blog');
                  setSidebarOpen(false);
                }}
              >
                Create Post
              </button>
            </div>
          </div>
        )}

        {/* Hero */}
        <Hero />
      </div>
    </div>
  );
};

export default Header;
