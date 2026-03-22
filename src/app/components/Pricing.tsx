import { DollarSign, Check, Users, AlertCircle } from 'lucide-react';

export function Pricing() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <DollarSign className="w-8 h-8 text-pink-400" />
          <h2 className="text-3xl sm:text-4xl text-white">Стоимость</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-500/30 rounded-3xl hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1">
            <div className="inline-flex px-4 py-1 mb-4 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-300 text-sm">Рекомендуем</span>
            </div>
            <h3 className="text-2xl mb-2 text-white">Полный курс</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl text-cyan-400">12 000</span>
              <span className="text-slate-400">руб</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 mb-4">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>10 уроков</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>1200 руб за урок</span>
            </div>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-pink-500/20 rounded-3xl hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1">
            <div className="inline-flex px-4 py-1 mb-4 bg-pink-500/20 border border-pink-500/30 rounded-full">
              <span className="text-pink-300 text-sm">Гибкий вариант</span>
            </div>
            <h3 className="text-2xl mb-2 text-white">Абонемент</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl text-pink-400">1 300</span>
              <span className="text-slate-400">руб / урок</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Check className="w-5 h-5 text-pink-400" />
              <span>Оплата по занятиям</span>
            </div>
          </div>
        </div>
        
        {/* Announcement */}
        <div className="p-6 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-xl mb-2 text-orange-300 flex items-center gap-2">
                Набор открыт!
              </h3>
              <p className="text-slate-300 mb-2">
                Группы маленькие — <span className="text-orange-300">максимум 6 человек</span>, чтобы каждый получил внимание.
              </p>
              <div className="flex items-center gap-2 text-pink-300">
                <Users className="w-5 h-5" />
                <span>Места ограничены!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
