import { Users, GraduationCap } from 'lucide-react';

export function Features() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl text-white">Для кого курс</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-500/20 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="absolute top-4 right-4">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl mb-3 text-cyan-300">Первая группа</h3>
            <p className="text-slate-300 text-lg">Взрослые</p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-pink-500/20 rounded-3xl hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="absolute top-4 right-4">
              <Users className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-2xl mb-3 text-pink-300">Вторая группа</h3>
            <p className="text-slate-300 text-lg">Подростки 13-15 лет</p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
