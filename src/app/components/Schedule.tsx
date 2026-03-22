import { Calendar, Clock } from 'lucide-react';

const schedule = [
  {
    day: 'Четверг',
    time: '15:00 (МСК)',
    group: 'группа взрослые',
    color: 'cyan'
  },
  {
    day: 'Пятница',
    time: '15:30 (МСК)',
    group: 'группа подростки',
    color: 'pink'
  }
];

export function Schedule() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-8 h-8 text-orange-400" />
          <h2 className="text-3xl sm:text-4xl text-white">Расписание</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {schedule.map((item, index) => {
            const borderColor = item.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50' : 'border-pink-500/20 hover:border-pink-500/50';
            const iconColor = item.color === 'cyan' ? 'text-cyan-400' : 'text-pink-400';
            const shadowColor = item.color === 'cyan' ? 'hover:shadow-cyan-500/20' : 'hover:shadow-pink-500/20';
            
            return (
              <div 
                key={index}
                className={`p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border ${borderColor} rounded-2xl transition-all duration-300 hover:shadow-lg ${shadowColor}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className={`w-6 h-6 ${iconColor}`} />
                  <h3 className={`text-2xl ${iconColor}`}>{item.day}</h3>
                </div>
                <p className="text-3xl mb-3 text-white">{item.time}</p>
                <p className="text-slate-400">{item.group}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
