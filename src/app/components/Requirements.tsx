import { Monitor, Headphones, Wifi, Video } from 'lucide-react';

const requirements = [
  {
    icon: Monitor,
    text: 'Стационарный компьютер или ноутбук'
  },
  {
    icon: Headphones,
    text: 'Наушники и микрофон'
  },
  {
    icon: Wifi,
    text: 'Стабильный интернет'
  },
  {
    icon: Video,
    text: 'Zoom'
  }
];

export function Requirements() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Monitor className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl text-white">Что потребуется</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-slate-900/80 to-slate-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-lg">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-slate-300">{req.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
