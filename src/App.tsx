import React from 'react';
import { Phone, Mail, Clock, MapPin, BookOpen, MessageCircle, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F0EB]">
      {/* Hero Section */}
      <header className="bg-[#E6DDD4] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-serif text-[#4A3D35] mb-4">Наталья Бойченко</h1>
              <h2 className="text-2xl text-[#6B5C51] mb-6">Профессиональный психолог с 27-летним опытом</h2>
              <p className="text-[#6B5C51] mb-8 text-lg">Помогаю людям обрести гармонию и решить жизненные трудности через индивидуальные онлайн-консультации</p>
              <a href="tel:+79029095468" className="inline-flex items-center bg-[#8B7355] text-white px-6 py-3 rounded-lg hover:bg-[#6B5C51] transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                Записаться на консультацию
              </a>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <img 
                src="/Betterimage.ai_1741628283336.jpeg"
                alt="Профессиональный психолог"
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif text-[#4A3D35] mb-8 text-center">О себе</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-[#6B5C51] text-lg leading-relaxed">
                За 27 лет практики я помогла сотням людей преодолеть жизненные трудности и найти путь к счастливой, полноценной жизни. Мой подход основан на глубоком понимании человеческой психологии и использовании современных методик терапии.
              </p>
              <p className="text-[#6B5C51] text-lg leading-relaxed">
                Я специализируюсь на работе с:
              </p>
              <ul className="text-[#6B5C51] text-lg leading-relaxed list-disc list-inside space-y-2">
                <li>Тревожными состояниями и паническими атаками</li>
                <li>Депрессией и эмоциональным выгоранием</li>
                <li>Семейными и партнерскими отношениями</li>
                <li>Проблемами самооценки и личностного роста</li>
                <li>Профессиональным развитием и карьерными вопросами</li>
              </ul>
              <p className="text-[#6B5C51] text-lg leading-relaxed">
                Мое образование включает степень магистра психологии и множество дополнительных специализаций в области когнитивно-поведенческой терапии, системной семейной терапии и других современных направлений психологии.
              </p>
              <p className="text-[#6B5C51] text-lg leading-relaxed">
                В своей работе я придерживаюсь принципов конфиденциальности, профессиональной этики и индивидуального подхода к каждому клиенту. Мой опыт позволяет мне эффективно работать как при личных встречах, так и в формате онлайн-консультаций.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#E6DDD4] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#4A3D35] mb-4">Образование</h3>
                <ul className="text-[#6B5C51] space-y-3">
                  <li>Магистр психологии</li>
                  <li>Сертифицированный специалист по КПТ</li>
                  <li>Системная семейная терапия</li>
                </ul>
              </div>
              <div className="bg-[#E6DDD4] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#4A3D35] mb-4">Опыт работы</h3>
                <ul className="text-[#6B5C51] space-y-3">
                  <li>27 лет практики</li>
                  <li>Более 1000 клиентов</li>
                  <li>Автор методических пособий</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif text-[#4A3D35] mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#4A3D35] mb-4">Онлайн-консультация</h3>
              <p className="text-[#6B5C51] mb-4">Индивидуальная консультация в удобном для вас формате через видеосвязь</p>
              <p className="text-[#8B7355] font-semibold">От 2000 ₽ / 60 минут</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#4A3D35] mb-4">Первичная консультация</h3>
              <p className="text-[#6B5C51] mb-4">Знакомство и определение основных направлений работы</p>
              <p className="text-[#8B7355] font-semibold">2000 ₽ / 60 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif text-[#4A3D35] mb-12 text-center">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E6DDD4] p-8 rounded-lg relative">
              <Quote className="w-8 h-8 text-[#8B7355] absolute -top-4 -left-4 bg-white rounded-full p-1" />
              <p className="text-[#6B5C51] mb-6 italic">
                "Наталья помогла мне справиться с тревожностью и паническими атаками. Благодаря её профессионализму и чуткому подходу, я смогла вернуться к полноценной жизни. Очень благодарна за поддержку и эффективные методики работы."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
                  alt="Клиент"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-[#4A3D35] font-semibold">Анна К.</p>
                  <p className="text-[#6B5C51] text-sm">3 месяца терапии</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#E6DDD4] p-8 rounded-lg relative">
              <Quote className="w-8 h-8 text-[#8B7355] absolute -top-4 -left-4 bg-white rounded-full p-1" />
              <p className="text-[#6B5C51] mb-6 italic">
                "Работа с Натальей помогла мне разобраться в сложных семейных отношениях. Её профессиональный подход и глубокое понимание психологии отношений позволили найти выход из, казалось бы, безвыходной ситуации."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
                  alt="Клиент"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-[#4A3D35] font-semibold">Михаил Д.</p>
                  <p className="text-[#6B5C51] text-sm">6 месяцев терапии</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E6DDD4] p-8 rounded-lg relative">
              <Quote className="w-8 h-8 text-[#8B7355] absolute -top-4 -left-4 bg-white rounded-full p-1" />
              <p className="text-[#6B5C51] mb-6 italic">
                "Онлайн-формат работы оказался очень удобным и эффективным. Наталья создает атмосферу доверия и безопасности, что позволяет открыто говорить о проблемах и находить пути их решения."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100"
                  alt="Клиент"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-[#4A3D35] font-semibold">Елена С.</p>
                  <p className="text-[#6B5C51] text-sm">4 месяца терапии</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E6DDD4] p-8 rounded-lg relative">
              <Quote className="w-8 h-8 text-[#8B7355] absolute -top-4 -left-4 bg-white rounded-full p-1" />
              <p className="text-[#6B5C51] mb-6 italic">
                "Благодаря работе с Натальей я смог преодолеть профессиональное выгорание и найти новые цели в карьере. Её подход помог мне не только справиться с текущими проблемами, но и выработать стратегии для предотвращения подобных ситуаций в будущем."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
                  alt="Клиент"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-[#4A3D35] font-semibold">Александр В.</p>
                  <p className="text-[#6B5C51] text-sm">5 месяцев терапии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-[#E6DDD4] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif text-[#4A3D35] mb-12 text-center">Полезные статьи</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-[#8B7355] mb-4" />
              <h3 className="text-lg font-semibold text-[#4A3D35] mb-2">Как справиться со стрессом</h3>
              <p className="text-[#6B5C51]">Практические советы по управлению стрессом в современном мире</p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-[#8B7355] mb-4" />
              <h3 className="text-lg font-semibold text-[#4A3D35] mb-2">Отношения с близкими</h3>
              <p className="text-[#6B5C51]">Ключи к гармоничным отношениям в семье</p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-[#8B7355] mb-4" />
              <h3 className="text-lg font-semibold text-[#4A3D35] mb-2">Самопознание</h3>
              <p className="text-[#6B5C51]">Путь к лучшему пониманию себя</p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif text-[#4A3D35] mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-[#8B7355] mr-3" />
              <div>
                <p className="text-[#4A3D35] font-semibold">Телефон</p>
                <a href="tel:+71234567890" className="text-[#6B5C51] hover:text-[#8B7355]">+7 902 909 54 68</a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-[#8B7355] mr-3" />
              <div>
                <p className="text-[#4A3D35] font-semibold">Email</p>
                <a href="mailto:contact@example.com" className="text-[#6B5C51] hover:text-[#8B7355]">contact@example.com</a>
              </div>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 text-[#8B7355] mr-3" />
              <div>
                <p className="text-[#4A3D35] font-semibold">Онлайн-консультации</p>
                <p className="text-[#6B5C51]">Zoom, Skype</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;