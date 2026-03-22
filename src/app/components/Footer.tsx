import { Plane, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-cyan-400" />
              <span className="text-xl text-white">Английский для путешествий</span>
            </div>
            <p className="text-slate-400 text-sm">
              Курс разговорного английского, который пригодится в любой поездке.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Контакты</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@example.com" 
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@example.com</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Написать в Telegram</span>
              </a>
            </div>
          </div>
          
          {/* Info */}
          <div>
            <h3 className="text-white mb-4">Информация</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Онлайн-формат через Zoom</p>
              <p>Группы до 6 человек</p>
              <p>Уровень A2–B1</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {currentYear} Английский для путешествий. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
