import { Plane, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-900"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/20 rounded-full">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm">Набор открыт!</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Английский для путешествий
        </h1>
        
        <div className="flex justify-center mb-8">
          <Plane className="w-12 h-12 text-orange-400 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
          Этот курс научит вас <span className="text-pink-400">реальному разговорному английскому</span>, 
          который пригодится в отпуске, поездках и будущих путешествиях!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#cta" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            Записаться на курс
          </a>
          <a 
            href="#program" 
            className="px-8 py-4 border border-cyan-500/50 text-cyan-300 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
          >
            Узнать программу
          </a>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
