import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  MapPin, 
  AlertCircle, 
  Ticket, 
  Heart, 
  Trophy,
  BookOpen 
} from 'lucide-react';

const programItems = [
  {
    icon: Plane,
    title: 'Аэропорт без стресса',
    description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
    benefit: 'Уверенность уже в первые часы за границей.',
    color: 'cyan'
  },
  {
    icon: Hotel,
    title: 'В отеле: заселение и помощь',
    description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
    benefit: 'Практика вежливых фраз и повседневной лексики.',
    color: 'pink'
  },
  {
    icon: UtensilsCrossed,
    title: 'Кафе и рестораны',
    description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
    benefit: 'Развитие гастрономического словаря и уверенности в общении.',
    color: 'orange'
  },
  {
    icon: MapPin,
    title: 'На улице: ориентирование и п��осьбы',
    description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
    benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
    color: 'cyan'
  },
  {
    icon: AlertCircle,
    title: 'Экстренные случаи',
    description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
    benefit: 'Важные фразы, которые могут спасти отпуск.',
    color: 'pink'
  },
  {
    icon: Ticket,
    title: 'Туризм и развлечения',
    description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
    benefit: 'Погружение в культурный контекст через язык.',
    color: 'orange'
  },
  {
    icon: Heart,
    title: 'Дружба в путешествиях',
    description: 'Как познакомиться с другими детьми или подростками за границей.',
    benefit: 'Игровая практика диалогов и неформального общения.',
    color: 'cyan'
  },
  {
    icon: Trophy,
    title: 'Дипломный проект: «Мой идеал��ный отпуск»',
    description: 'Вы планируете воображаемое путешествие и представляете его на английском.',
    benefit: 'Развитие связной речи и творческого самовыражения.',
    color: 'pink'
  }
];

export function Program() {
  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500/20 hover:border-cyan-500/50',
        icon: 'text-cyan-400',
        benefit: 'text-cyan-300',
        shadow: 'hover:shadow-cyan-500/20'
      },
      pink: {
        border: 'border-pink-500/20 hover:border-pink-500/50',
        icon: 'text-pink-400',
        benefit: 'text-pink-300',
        shadow: 'hover:shadow-pink-500/20'
      },
      orange: {
        border: 'border-orange-500/20 hover:border-orange-500/50',
        icon: 'text-orange-400',
        benefit: 'text-orange-300',
        shadow: 'hover:shadow-orange-500/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="program" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="w-8 h-8 text-pink-400" />
          <h2 className="text-3xl sm:text-4xl text-white">Программа курса</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {programItems.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            
            return (
              <div 
                key={index}
                className={`group p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border ${colors.border} rounded-2xl transition-all duration-300 hover:shadow-lg ${colors.shadow}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-400 mb-3">{item.description}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-slate-500 mt-1">👉</span>
                      <p className={`${colors.benefit} text-sm`}>{item.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
