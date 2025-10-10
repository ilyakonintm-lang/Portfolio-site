function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-200">
      {/* Шапка */}
      <header className="relative bg-gradient-to-r from-gray-50 to-gray-100 h-[600px] overflow-hidden">
        <nav className="flex justify-end space-x-8 p-6 text-white text-lg">
          <a href="mailto:ilyakonintm@gmail.com" className="flex items-center gap-2 hover:underline">
            Email
          </a>
          <a href="https://t.me/ваш_ник" className="flex items-center gap-2 hover:underline">
            Telegram
          </a>
          <a href="https://hh.ru/resume" className="hover:underline">hh.ru</a>
        </nav>

        <div className="text-center mt-20 text-black px-6">
          <h1 className="text-4xl md:text-6xl font-black">Видеограф и монтажёр</h1>
          <p className="text-2xl mt-4 font-black">Специалист по медиа-контенту и видео-продакшену</p>
        </div>

        <div className="text-center mt-16 space-y-6 text-lg text-gray-700 max-w-3xl mx-auto px-6">
          <p>Видеомонтажер с более чем пятилетним опытом работы и оператор с более чем двухлетним опытом съемок.</p>
          <p>Я создаю высококачественный видеоконтент для бизнеса и социальных сетей и открыт для других форматов.</p>
        </div>

        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
          <img src="assets/mask-group-3.png" alt="Фото" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Портфолио */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">ПОРТФОЛИО</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-md">
            <img src="assets/mask-group.png" alt="Работа" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-md">
            <img src="assets/image.png" alt="Работа" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-md">
            <img src="assets/mask-group-2.png" alt="Работа" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-md">
            <img src="assets/figma-logo-svg.png" alt="Работа" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-md">
            <img src="assets/mask-group.png" alt="Работа" className="w-full h-60 object-cover" />
          </div>
        </div>
      </section>

      {/* Софт */}
      <section className="py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">SOFTWARE</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 px-6">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-3xl flex items-center justify-center text-white text-2xl font-bold">
            Figma
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-3xl flex items-center justify-center text-white text-2xl font-bold">
            AE
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-3xl flex items-center justify-center text-white text-2xl font-bold">
            PR
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-3xl flex items-center justify-center text-white text-2xl font-bold">
            PS
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black text-white py-8 text-center">
        <p>© 2025 Илья Конин. Все права защищены.</p>
      </footer>
    </div>
  );
}

// Когда страница загрузится — вставим App в #root
window.addEventListener("load", () => {
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
});