import { MessageCircle, Globe, Gamepad2, TrendingUp, Sparkles } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Акцент на практическую, живую речь',
    description: 'А не на грамматику ради грамматики'
  },
  {
    icon: Globe,
    title: 'Все ситуации из реальной жизни',
    description: 'Опыт настоящего путешественника'
  },
  {
    icon: Gamepad2,
    title: 'Интерактивные задания',
    description: 'Ролевые игры, аудиоситуации, мини-квесты'
  },
  {
    icon: TrendingUp,
    title: 'Уровень A2–B1 за курс',
    description: 'Pre-Intermediate с уверенностью в общении'
  }
];

export function WhySpecial() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Sparkles className="w-8 h-8 text-orange-400" />
          <h2 className="text-3xl sm:text-4xl text-white text-center">Почему этот курс особенный?</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = ['cyan', 'pink', 'orange', 'cyan'];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl">
                  <Icon className={`w-6 h-6 text-${color}-400`} />
                </div>
                <h3 className="text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
