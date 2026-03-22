import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  const handleClick = () => {
    // Здесь можно добавить логику для записи на курс
    alert('Спасибо за интерес! Для записи на курс свяжитесь с нами.');
  };

  return (
    <section id="cta" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-orange-500/10"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-full">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-pink-300 text-sm">Начните говорить уверенно</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-white leading-tight">
          Запишитесь сейчас — и следующее путешествие станет первым, 
          <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> где вы заговорите по-английски без страха!</span>
        </h2>
        
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Не упустите возможность присоединиться к небольшой группе единомышленников 
          и начать говорить на английском с первого занятия.
        </p>
        
        <button 
          onClick={handleClick}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-500 text-white text-lg rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 animate-pulse"
          style={{ animationDuration: '2s' }}
        >
          <span>Записаться на курс</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span>Без скрытых платежей</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span>Первый урок можно вернуть</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span>Сертификат по окончании</span>
          </div>
        </div>
      </div>
    </section>
  );
}
