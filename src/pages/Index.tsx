import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'lessons', label: 'Уроки', icon: 'BookOpen' },
    { id: 'alphabet', label: 'Алфавит', icon: 'Languages' },
    { id: 'tales', label: 'Сказки', icon: 'Book' },
    { id: 'heroes', label: 'Персонажи', icon: 'Users' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'tests', label: 'Тесты', icon: 'CheckSquare' },
  ];

  const heroes = [
    {
      name: 'Сосруко',
      nameKab: 'Сосрыкъуэ',
      image: 'https://cdn.poehali.dev/projects/8440f4e0-b31d-4d11-90d3-dd206c5789cd/files/a5ae9d52-0297-455b-9b70-537349d13ff3.jpg',
      description: 'Легендарный кабардинский богатырь, рождённый из камня',
      origin: 'Рождён из камня, оплодотворённого пастухом. Стальные руки выкованы кузнецом Курдалагоном',
      abilities: 'Магические стальные руки, невероятная сила и храбрость',
      role: 'Главный герой множества приключений и подвигов во всех вариациях нартских сказаний',
    },
    {
      name: 'Сатаней',
      nameKab: 'Сэтэнай',
      image: 'https://cdn.poehali.dev/projects/8440f4e0-b31d-4d11-90d3-dd206c5789cd/files/618ddfd5-40b0-4f4c-850e-e81b4d24bcc2.jpg',
      description: 'Прекрасная и мудрая мать нартов в кабардинском национальном платье',
      origin: 'Мать нартского народа, обладающая великой мудростью и магическими способностями',
      abilities: 'Мудрость веков, знание магии и целительства, хранительница традиций',
      role: 'Мать нартов, советница и хранительница традиций народа',
    },
  ];

  const lessons = [
    { title: 'Приветствие', kabTitle: 'Сэлам', level: 'Легко', progress: 0 },
    { title: 'Числа 1-10', kabTitle: 'Счётхэр', level: 'Легко', progress: 0 },
    { title: 'Семья', kabTitle: 'Унагъуэ', level: 'Средне', progress: 0 },
    { title: 'Цвета', kabTitle: 'Дыщэхэр', level: 'Легко', progress: 0 },
  ];

  const alphabet = [
    { letter: 'А', sound: '[а]', example: 'Анэ (мать)' },
    { letter: 'Б', sound: '[б]', example: 'Бзу (птица)' },
    { letter: 'В', sound: '[в]', example: 'Вагъуэ (небо)' },
    { letter: 'Г', sound: '[г]', example: 'Гъуащхьэ (князь)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Нарт Адыгэбзэ</h1>
                <p className="text-xs text-muted-foreground">Изучение кабардинского и балкарского</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-2">
              {sections.slice(0, 4).map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section.id)}
                  className="hover-lift"
                >
                  <Icon name={section.icon as any} className="mr-2 h-4 w-4" />
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 p-12 text-white shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://cdn.poehali.dev/projects/8440f4e0-b31d-4d11-90d3-dd206c5789cd/files/79f84535-1852-4116-b9c7-044f1d6a3885.jpg" 
                  alt="background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-5xl font-bold mb-4 animate-slide-up">
                  Добро пожаловать в мир нартского эпоса
                </h2>
                <p className="text-xl mb-8 text-amber-50">
                  Изучайте кабардинский и балкарский языки вместе с легендарными героями
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-8"
                    onClick={() => setActiveSection('lessons')}
                  >
                    <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                    Начать обучение
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-amber-800/30 border-white text-white hover:bg-amber-800/50 text-lg px-8"
                    onClick={() => setActiveSection('heroes')}
                  >
                    <Icon name="Users" className="mr-2 h-5 w-5" />
                    Познакомиться с героями
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                <Icon name="Users" className="mr-3 h-8 w-8 text-secondary" />
                Наши проводники
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {heroes.map((hero, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden hover-lift cursor-pointer border-2 border-amber-200 hover:border-amber-400 transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={hero.image} 
                        alt={hero.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-2xl font-bold text-primary mb-1">{hero.name}</h4>
                      <p className="text-lg text-secondary font-semibold mb-2">{hero.nameKab}</p>
                      <p className="text-muted-foreground">{hero.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'BookOpen', title: 'Уроки', desc: 'Интерактивные занятия для всех уровней', id: 'lessons' },
                { icon: 'Languages', title: 'Алфавит', desc: 'Изучите основы письменности', id: 'alphabet' },
                { icon: 'Book', title: 'Сказки', desc: 'Читайте легенды нартов', id: 'tales' },
                { icon: 'Gamepad2', title: 'Игры', desc: 'Учитесь играя', id: 'games' },
                { icon: 'CheckSquare', title: 'Тесты', desc: 'Проверьте свои знания', id: 'tests' },
                { icon: 'Trophy', title: 'Достижения', desc: 'Отслеживайте прогресс', id: 'progress' },
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover-lift cursor-pointer border-2 hover:border-secondary transition-all"
                  onClick={() => setActiveSection(item.id)}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'lessons' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-primary flex items-center">
                <Icon name="BookOpen" className="mr-4 h-10 w-10 text-secondary" />
                Уроки
              </h2>
              <Button variant="outline" onClick={() => setActiveSection('home')}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {lessons.map((lesson, index) => (
                <Card key={index} className="hover-lift cursor-pointer border-2 hover:border-secondary transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{lesson.title}</h3>
                        <p className="text-lg text-secondary font-semibold">{lesson.kabTitle}</p>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                        {lesson.level}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Прогресс</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-amber-100 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                      <Icon name="Play" className="mr-2 h-4 w-4" />
                      Начать урок
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'alphabet' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-primary flex items-center">
                <Icon name="Languages" className="mr-4 h-10 w-10 text-secondary" />
                Алфавит
              </h2>
              <Button variant="outline" onClick={() => setActiveSection('home')}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </div>

            <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50">
              <p className="text-lg text-muted-foreground mb-6">
                Кабардинский алфавит основан на кириллице и содержит 49 букв. 
                Изучите произношение и примеры слов для каждой буквы.
              </p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {alphabet.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-4 hover-lift cursor-pointer border-2 hover:border-secondary transition-all bg-white"
                  >
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">{item.letter}</div>
                      <div className="text-lg text-secondary mb-2">{item.sound}</div>
                      <div className="text-sm text-muted-foreground">{item.example}</div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600">
                  <Icon name="Volume2" className="mr-2 h-5 w-5" />
                  Прослушать все буквы
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'tales' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-primary flex items-center">
                <Icon name="Book" className="mr-4 h-10 w-10 text-secondary" />
                Сказки нартов
              </h2>
              <Button variant="outline" onClick={() => setActiveSection('home')}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Рождение Сосруко', duration: '5 мин', difficulty: 'Легко' },
                { title: 'Подвиги Батраза', duration: '7 мин', difficulty: 'Средне' },
                { title: 'Мудрость Сатаней', duration: '6 мин', difficulty: 'Легко' },
                { title: 'Золотое яблоко', duration: '8 мин', difficulty: 'Средне' },
              ].map((tale, index) => (
                <Card key={index} className="hover-lift cursor-pointer border-2 hover:border-secondary transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <Icon name="BookMarked" className="h-8 w-8 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                        {tale.difficulty}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{tale.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      <Icon name="Clock" className="inline h-4 w-4 mr-1" />
                      {tale.duration}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600">
                      <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                      Читать сказку
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'heroes' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-primary flex items-center">
                <Icon name="Users" className="mr-4 h-10 w-10 text-secondary" />
                Персонажи нартского эпоса
              </h2>
              <Button variant="outline" onClick={() => setActiveSection('home')}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </div>

            <div className="space-y-6">
              {heroes.map((hero, index) => (
                <Card key={index} className="overflow-hidden hover-lift border-2 hover:border-secondary transition-all">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img 
                        src={hero.image} 
                        alt={hero.name} 
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    <CardContent className="md:col-span-2 p-8">
                      <h3 className="text-3xl font-bold text-primary mb-2">{hero.name}</h3>
                      <p className="text-xl text-secondary font-semibold mb-4">{hero.nameKab}</p>
                      <p className="text-lg text-muted-foreground mb-6">{hero.description}</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Icon name="Sparkle" className="h-6 w-6 text-secondary mt-1" />
                          <div>
                            <h4 className="font-semibold text-primary">Происхождение</h4>
                            <p className="text-muted-foreground">
                              {hero.origin}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Icon name="Sword" className="h-6 w-6 text-secondary mt-1" />
                          <div>
                            <h4 className="font-semibold text-primary">Особые способности</h4>
                            <p className="text-muted-foreground">
                              {hero.abilities}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Icon name="Star" className="h-6 w-6 text-secondary mt-1" />
                          <div>
                            <h4 className="font-semibold text-primary">Роль в эпосе</h4>
                            <p className="text-muted-foreground">
                              {hero.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="mt-6 bg-gradient-to-r from-amber-600 to-orange-600">
                        <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                        Узнать больше
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'games' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-primary flex items-center">
                <Icon name="Gamepad2" className="mr-4 h-10 w-10 text-secondary" />
                Обучающие игры
              </h2>
              <Button variant="outline" onClick={() => setActiveSection('home')}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Puzzle', title: 'Собери слово', desc: 'Составляй слова из букв' },
                { icon: 'Zap', title: 'Быстрый перевод', desc: 'Переводи слова на скорость' },
                { icon: 'Target', title: 'Найди пару', desc: 'Сопоставь слова и картинки' },
                { icon: 'Brain', title: 'Викторина', desc: 'Ответь на вопросы о культуре' },
                { icon: 'Sparkles', title: 'Память нарта', desc: 'Запоминай и находи пары' },
                { icon: 'Mic', title: 'Произношение', desc: 'Практикуй правильное произношение' },
              ].map((game, index) => (
                <Card key={index} className="p-6 hover-lift cursor-pointer border-2 hover:border-secondary transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={game.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{game.title}</h3>
                  <p className="text-muted-foreground mb-4">{game.desc}</p>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600">
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Играть
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'tests' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-primary flex items-center">
                <Icon name="CheckSquare" className="mr-4 h-10 w-10 text-secondary" />
                Тесты
              </h2>
              <Button variant="outline" onClick={() => setActiveSection('home')}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Базовая лексика', questions: 20, time: '10 мин', level: 'Начальный' },
                { title: 'Алфавит и произношение', questions: 15, time: '8 мин', level: 'Начальный' },
                { title: 'Грамматика', questions: 25, time: '15 мин', level: 'Средний' },
                { title: 'Культура и традиции', questions: 30, time: '20 мин', level: 'Продвинутый' },
              ].map((test, index) => (
                <Card key={index} className="p-6 hover-lift cursor-pointer border-2 hover:border-secondary transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Icon name="FileCheck" className="h-8 w-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                      {test.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{test.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-muted-foreground flex items-center">
                      <Icon name="HelpCircle" className="h-4 w-4 mr-2" />
                      {test.questions} вопросов
                    </p>
                    <p className="text-muted-foreground flex items-center">
                      <Icon name="Clock" className="h-4 w-4 mr-2" />
                      {test.time}
                    </p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600">
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Начать тест
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 bg-gradient-to-r from-amber-900 via-orange-900 to-amber-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Нарт Адыгэбзэ</p>
          <p className="text-amber-200">Изучайте кабардинский и балкарский языки с героями нартского эпоса</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;