import ThemeToggle from '@/components/theme-toggle-button';
import AddIcon from '@/assets/svg/add-icon-white.svg';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/hero';
function header() {
  const navigate = useNavigate();

  return (
    <div className="relative -mt-2 h-[460px] bg-[url('https://vaishnavyejju.vercel.app/assets/img/hero-bg.png')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col px-4 py-8 text-slate-50 md:px-16">
        <div className="flex w-full justify-between">
          <div className="cursor-text text-2xl font-semibold">Vaishnav Yejju</div>

  {/* Nav Links + Toggle */}
  <div className="flex items-center gap-4">
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
     {/* Create post button */}
    <button
      className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
      onClick={() => {
        navigate('/add-blog');
      }}
    >
      Create post
    </button>

    {/* Theme toggle */}
    <ThemeToggle />

   

    <button
      className="px-2 py-2 hover:bg-slate-500/25 md:hidden"
      onClick={() => {
        navigate('/add-blog');
      }}
    >
      <img className="h-8 w-8" src={AddIcon} />
    </button>
  </div>
        </div>
        <Hero />
      </div>
    </div>
  );
}

export default header;
