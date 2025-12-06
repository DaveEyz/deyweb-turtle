import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      alert('Copied CA!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Texture Background */}
      <div className="fixed inset-0 bg-texture pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-4 py-4 top-0 left-0">
        <div className="max-w-6xl mx-auto bg-white border-4 border-black shadow-brutal rounded-full px-4 md:px-6 py-3 flex justify-between items-center transform transition-all hover:scale-[1.01]">
          <div className="flex items-center gap-3">
            <img 
              src="/turtle_dey_logo.png" 
              alt="Turtle Dey Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <span className="font-display text-2xl md:text-3xl leading-none pt-1">turtle-dey</span>
          </div>
          
          <div className="hidden md:flex gap-6 font-display text-xl">
            <a href="#lore" className="hover:text-turtle-green transition-colors hover:underline decoration-4 decoration-accent-yellow underline-offset-4">The Lore</a>
            <a href="#gallery" className="hover:text-turtle-green transition-colors hover:underline decoration-4 decoration-accent-orange underline-offset-4">Memes</a>
            <a href="#tokenomics" className="hover:text-turtle-green transition-colors hover:underline decoration-4 decoration-accent-blue underline-offset-4">Stats</a>
          </div>

          <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="bg-accent-orange hover:bg-red-400 text-black font-display text-xl px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            Buy $DEY
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative pt-32 md:pt-20 pb-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
            
            {/* Text & Actions */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-8" data-aos="fade-right">
              
              <div className="inline-block bg-accent-yellow px-6 py-2 border-4 border-black shadow-brutal transform -rotate-2">
                <span className="font-display text-xl md:text-2xl font-bold">🚀 OFFICIAL SOLANA TOKEN</span>
              </div>

              <h1 className="font-display text-7xl md:text-9xl leading-[0.9] text-black drop-shadow-sm">
                TURTLE <br />
                <span className="text-turtle-green text-stroke-black">DEY</span>
              </h1>
              
              <p className="text-2xl font-bold max-w-lg mx-auto md:mx-0 bg-white/50 p-4 rounded-xl border-2 border-black border-dashed">
                He's green. He's mean. He's mostly just sitting there. The OG character from the Solana swamps is now a movement.
              </p>
              
              {/* Contract Address Box */}
              <div 
                className="bg-white p-4 border-4 border-black shadow-brutal-lg rounded-xl max-w-md mx-auto md:mx-0 group cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden" 
                onClick={() => copyToClipboard('8sF9...xKj9s8d7f6g5h4j3k2l1...pump')}
              >
                <div className="absolute top-0 right-0 bg-turtle-green text-xs font-bold px-2 py-1 border-l-2 border-b-2 border-black">CLICK TO COPY</div>
                <p className="text-sm font-bold opacity-60 mb-1">CONTRACT ADDRESS (SOL)</p>
                <div className="font-mono text-lg md:text-xl font-black truncate">8sF9...xKj9s8d7f6g5h4j3k2l1...pump</div>
                <i className="fa-regular fa-copy absolute right-4 bottom-4 text-2xl group-hover:scale-110 transition-transform"></i>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <a href="#" className="bg-black text-white font-display text-2xl px-8 py-4 rounded-xl border-4 border-black shadow-brutal hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
                  <i className="fa-brands fa-telegram"></i> Telegram
                </a>
                <a href="#" className="bg-accent-blue text-black font-display text-2xl px-8 py-4 rounded-xl border-4 border-black shadow-brutal hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
                  <i className="fa-brands fa-twitter"></i> Twitter
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 relative" data-aos="zoom-in">
              {/* Stats Badges Floating */}
              <div className="absolute -left-4 top-10 bg-white p-3 rounded-lg border-4 border-black shadow-brutal z-20 animate-float">
                <div className="text-xs font-bold text-gray-500">HOLDERS</div>
                <div className="font-display text-3xl text-turtle-green">12,500+</div>
              </div>
              
              <div className="absolute -right-4 bottom-20 bg-white p-3 rounded-lg border-4 border-black shadow-brutal z-20 animate-float" style={{animationDelay: '1.5s'}}>
                <div className="text-xs font-bold text-gray-500">MARKET CAP</div>
                <div className="font-display text-3xl text-accent-orange">$4.2M</div>
              </div>

              {/* Main Character Image */}
              <div className="relative w-full max-w-lg mx-auto">
                <img 
                  src="/face1.png" 
                  alt="Turtle Dey"
                  className="w-full h-auto object-contain filter drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Infinite Marquee */}
      <div className="bg-black py-4 rotate-1 scale-105 border-y-4 border-black z-20 relative overflow-hidden">
        <div className="marquee-container font-display text-4xl text-accent-yellow">
          <div className="marquee-content gap-8 px-4">
            <span>$DEY</span> <span>★</span> <span>TURTLE DEY</span> <span>★</span> <span>NO RUGS</span> <span>★</span> <span>JUST HUGS</span> <span>★</span> <span>MOON SOON</span> <span>★</span>
            <span>$DEY</span> <span>★</span> <span>TURTLE DEY</span> <span>★</span> <span>NO RUGS</span> <span>★</span> <span>JUST HUGS</span> <span>★</span> <span>MOON SOON</span> <span>★</span>
          </div>
          <div className="marquee-content gap-8 px-4" aria-hidden="true">
            <span>$DEY</span> <span>★</span> <span>TURTLE DEY</span> <span>★</span> <span>NO RUGS</span> <span>★</span> <span>JUST HUGS</span> <span>★</span> <span>MOON SOON</span> <span>★</span>
            <span>$DEY</span> <span>★</span> <span>TURTLE DEY</span> <span>★</span> <span>NO RUGS</span> <span>★</span> <span>JUST HUGS</span> <span>★</span> <span>MOON SOON</span> <span>★</span>
          </div>
        </div>
      </div>

      {/* Lore Section */}
      <section id="lore" className="py-24 bg-accent-yellow border-b-4 border-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-brutal-xl rounded-3xl p-8 md:p-12 relative">
            {/* Decorative Elements */}
            <i className="fa-solid fa-star text-6xl text-accent-orange absolute -top-8 -right-8 animate-spin-slow"></i>
            <i className="fa-solid fa-bolt text-6xl text-black absolute -bottom-8 -left-8 animate-bounce"></i>

            <h2 className="font-display text-5xl md:text-6xl mb-6 text-black transform -rotate-1">THE LORE</h2>
            <div className="space-y-6 text-2xl font-bold leading-relaxed">
              <p>
                In the dark depths of the 90s, <span className="text-turtle-green font-black bg-black px-2 py-1 transform skew-x-12 inline-block">TURTLE DEY</span> was just a background character. He watched the main characters get all the glory while he did the heavy lifting.
              </p>
              <p>
                Then came the great crypto crash. Dey realized that slow and steady didn't just win the race—it survived the rug pulls.
              </p>
              <p>
                Now, armed with nothing but a hard shell and diamond hands, Dey has emerged from the swamp to lead the <span className="underline decoration-wavy decoration-accent-orange">ultimate protest against pajeet devs</span> and empty promises. He is the people's turtle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meme Gallery */}
      <section id="gallery" className="py-24 bg-bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="font-display text-6xl text-black border-b-8 border-turtle-green inline-block">MEME VAULT</h2>
            <button className="bg-black text-white font-display text-xl px-6 py-3 rounded-xl border-4 border-white shadow-lg hover:bg-gray-800 transition-all mt-4 md:mt-0">
              Submit Meme <i className="fa-solid fa-upload ml-2"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Meme Card 1 */}
            <div className="bg-white p-4 border-4 border-black shadow-brutal rounded-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-200 aspect-square rounded-lg border-2 border-black mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/face1.png" 
                  alt="Turtle Dey Meme 1"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-display text-2xl">Based Dey</h3>
                <i className="fa-solid fa-download text-xl cursor-pointer hover:text-turtle-green"></i>
              </div>
            </div>
            
            {/* Meme Card 2 */}
            <div className="bg-white p-4 border-4 border-black shadow-brutal rounded-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-200 aspect-square rounded-lg border-2 border-black mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/face2.png" 
                  alt="Turtle Dey Meme 2"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-display text-2xl">WAGMI Shell</h3>
                <i className="fa-solid fa-download text-xl cursor-pointer hover:text-turtle-green"></i>
              </div>
            </div>

            {/* Meme Card 3 */}
            <div className="bg-white p-4 border-4 border-black shadow-brutal rounded-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-200 aspect-square rounded-lg border-2 border-black mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/face3.png" 
                  alt="Turtle Dey Meme 3"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-display text-2xl">Diamond Hands</h3>
                <i className="fa-solid fa-download text-xl cursor-pointer hover:text-turtle-green"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Tokenomics */}
      <section id="tokenomics" className="py-24 bg-turtle-dark text-white border-t-4 border-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-6xl text-center mb-16 text-accent-yellow text-stroke-black drop-shadow-[4px_4px_0_#000]">TOKENOMICS</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white text-black p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0_#F7E987] hover:scale-105 transition-transform">
              <div className="font-display text-6xl mb-2 text-turtle-green">1B</div>
              <div className="font-bold text-xl uppercase tracking-widest">Total Supply</div>
            </div>
            
            <div className="bg-white text-black p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0_#FF6B6B] hover:scale-105 transition-transform">
              <div className="font-display text-6xl mb-2 text-accent-orange">0%</div>
              <div className="font-bold text-xl uppercase tracking-widest">Buy/Sell Tax</div>
            </div>

            <div className="bg-white text-black p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0_#4D96FF] hover:scale-105 transition-transform">
              <div className="font-display text-6xl mb-2 text-accent-blue">LP</div>
              <div className="font-bold text-xl uppercase tracking-widest">Burned 100%</div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <a href="#" className="inline-block bg-accent-yellow text-black font-display text-4xl px-12 py-6 rounded-full border-4 border-black shadow-brutal-xl hover:shadow-none hover:translate-y-2 transition-all animate-bounce">
              BUY ON RAYDIUM
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-8 border-accent-yellow">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex gap-8 mb-8">
            <a href="#" className="text-4xl hover:text-accent-yellow transition-colors"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-4xl hover:text-accent-orange transition-colors"><i className="fa-brands fa-telegram"></i></a>
            <a href="#" className="text-4xl hover:text-accent-blue transition-colors"><i className="fa-solid fa-globe"></i></a>
          </div>
          <p className="font-display text-2xl mb-4">TURTLE DEY © 2025</p>
          <p className="text-center opacity-50 max-w-lg text-sm">
            $DEY is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
