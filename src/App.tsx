import { motion } from 'framer-motion';
import { Dumbbell, Activity, MapPin, CheckCircle2, ShieldCheck, Trophy, Target, Coffee, ShoppingBag, Star, Phone, Flame, ChevronRight } from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const scheduleData = [
    {
      day: "Segunda",
      classes: [
        { time: "12:00", name: "Muay Thai", type: "fight" },
        { time: "16:00", name: "Jiu Jitsu", type: "fight" },
        { time: "18:00", name: "Muay Thai", type: "fight" },
        { time: "19:00", name: "Muay Thai", type: "fight" },
        { time: "20:00", name: "Forró", type: "dance" }
      ]
    },
    {
      day: "Terça",
      classes: [
        { time: "19:00", name: "Krav Maga", type: "fight" },
        { time: "20:00", name: "Fit Dance", type: "dance" }
      ]
    },
    {
      day: "Quarta",
      classes: [
        { time: "12:00", name: "Muay Thai", type: "fight" },
        { time: "16:00", name: "Jiu Jitsu", type: "fight" },
        { time: "18:00", name: "Muay Thai", type: "fight" },
        { time: "19:00", name: "Muay Thai", type: "fight" },
        { time: "20:00", name: "Forró", type: "dance" }
      ]
    },
    {
      day: "Quinta",
      classes: [
        { time: "18:00", name: "Muay Thai", type: "fight" },
        { time: "19:00", name: "Muay Thai", type: "fight" },
        { time: "20:00", name: "Fit Dance", type: "dance" }
      ]
    },
    {
      day: "Sexta",
      classes: [
        { time: "12:00", name: "Muay Thai", type: "fight" },
        { time: "16:00", name: "Jiu Jitsu", type: "fight" },
        { time: "19:00", name: "Krav Maga", type: "fight" }
      ]
    }
  ];

  const whatsappMessage = encodeURIComponent("Olá, vim pelo site e gostaria de mais informações!");

  return (
    <div className="min-h-screen bg-rgym-dark text-white font-sans overflow-x-hidden selection:bg-rgym-yellow selection:text-black">
      
      {/* --- PROMO BANNER TOP (STATIC & HIGH-VISIBILITY) --- */}
      <aside aria-label="Aviso Promocional" className="bg-rgym-yellow text-black py-2 px-3 font-black text-[11px] sm:text-xs md:text-sm z-50 relative uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm">
        <Flame size={14} className="flex-shrink-0 animate-pulse" />
        <span>OFERTA ESPECIAL: Garanta mais 1 ano pagando o preço antigo (antes do reajuste!)</span>
        <Flame size={14} className="flex-shrink-0 hidden sm:inline animate-pulse" />
      </aside>

      {/* --- STANDARD NAVBAR (Top Only - Fully Responsive) --- */}
      <header className="w-full bg-[#0a0a0a]/98 border-b border-gray-800/80 px-3 sm:px-6 md:px-8 py-2.5 sm:py-3.5 flex justify-between items-center relative z-40">
        <a href="#" className="flex items-center gap-2 sm:gap-3 group" aria-label="R-GYM Início">
          <img 
            src="/logo.jpg" 
            alt="R GYM Logo" 
            width="40" 
            height="40"
            className="h-8 sm:h-10 w-auto rounded-full border border-rgym-yellow group-hover:scale-105 transition-transform" 
          />
          <span className="font-heading font-black text-lg sm:text-xl tracking-wider text-white">
            R<span className="text-rgym-yellow">-</span>GYM
          </span>
        </a>
        
        <nav className="hidden lg:flex gap-8 font-bold text-sm text-gray-300">
          <a href="#sobre" className="hover:text-rgym-yellow transition-colors py-1">A Academia</a>
          <a href="#diferenciais" className="hover:text-rgym-yellow transition-colors py-1">Diferenciais</a>
          <a href="#horarios" className="hover:text-rgym-yellow transition-colors py-1">Horários</a>
          <a href="#planos" className="text-rgym-yellow hover:text-white transition-colors py-1">Promoção</a>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="#planos" 
            className="hidden md:flex bg-transparent border border-rgym-yellow/80 text-rgym-yellow hover:bg-rgym-yellow hover:text-black px-4 lg:px-5 py-2 rounded-full font-bold transition-all text-xs lg:text-sm items-center whitespace-nowrap"
          >
            Fazer Avaliação
          </a>
          <a 
            href="#planos" 
            className="bg-rgym-yellow hover:bg-rgym-yellow-dark text-black px-4 sm:px-5 lg:px-6 py-2 rounded-full font-black transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,209,0,0.25)] text-xs sm:text-sm flex items-center uppercase tracking-wide whitespace-nowrap active:scale-95"
          >
            Matricule-se
          </a>
        </div>
      </header>

      {/* --- WHATSAPP FLOATING BUTTON (Optimized Mobile Touch Area) --- */}
      <aside aria-label="Atendimento WhatsApp" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a 
          href={`https://wa.me/5588992420806?text=${whatsappMessage}`} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Falar conosco no WhatsApp"
          className="relative block group"
        >
          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-10 animate-bounce shadow-md border-2 border-rgym-dark">
            1
          </span>
          {/* Pulse effect behind */}
          <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-60 pointer-events-none"></span>
          {/* Main Button */}
          <div className="relative bg-[#25D366] hover:bg-[#1ebe57] text-white p-3 sm:p-3.5 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </div>
        </a>
      </aside>

      {/* --- HERO SECTION (Ultra-Fast LCP & Perfectly Scaled Text) --- */}
      <section className="relative min-h-[82vh] sm:min-h-[85vh] flex items-center justify-start pt-8 pb-14 sm:pt-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Multi-tier gradient overlay ensuring 100% text contrast across mobile & desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-rgym-dark via-rgym-dark/85 to-rgym-dark/40 sm:to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-rgym-dark via-transparent to-black/20 z-10" />
          <img 
            src="/owner-hero.png" 
            alt="Dono e Treinador da R Gym Russas" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1200"
            height="800"
            className="w-full h-full object-cover object-[80%_top] sm:object-right-top opacity-95 transition-opacity"
          />
        </div>

        <motion.div 
          className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 max-w-4xl"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Google Reviews Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#111]/90 backdrop-blur-md border border-gray-800 px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="16" height="16" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <div className="flex text-rgym-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-white">4.8 <span className="font-normal text-gray-400">(117 avaliações)</span></span>
          </motion.div>

          <br/>

          <motion.div variants={fadeInUp} className="inline-block bg-rgym-gray/90 backdrop-blur border border-rgym-yellow/40 text-rgym-yellow px-4 sm:px-5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-md">
            A Maior da Avenida Principal
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-4 sm:mb-6 uppercase leading-[1.08] drop-shadow-xl"
          >
            NOSSO FOCO É <br/>AUMENTAR SUA <span className="text-rgym-yellow">QUALIDADE.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 font-medium max-w-xl leading-relaxed drop-shadow"
          >
            A R Gym não para de investir em atendimento e infraestrutura. <strong className="text-white font-black bg-black/50 px-2 py-0.5 rounded">Usufrua do atual pagando o preço antigo.</strong> Se já é vantajoso agora, imagina com o que ainda vem por aí 👀🔥
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#planos" 
              className="w-full sm:w-auto text-center bg-rgym-yellow hover:bg-rgym-yellow-dark text-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-sm sm:text-base md:text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,209,0,0.35)]"
            >
              Garantir Preço Antigo
            </a>
            <a 
              href="#sobre" 
              className="w-full sm:w-auto text-center bg-black/60 hover:bg-black text-gray-200 hover:text-white border border-gray-700 px-6 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-colors"
            >
              Conhecer Academia
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SOBRE (VSL / TRAJETÓRIA - High Performance Lazy Video) --- */}
      <section id="sobre" className="py-16 sm:py-24 px-4 sm:px-8 bg-rgym-dark border-y border-rgym-gray">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Video Player (Responsive Vertical Ratio & Zero Initial Bandwidth Waste) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full max-w-[320px] sm:max-w-sm lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <video 
              src="/snapinsta-1790314536085_compativel.mp4" 
              poster="/cover-foto-real.png"
              controls 
              preload="none"
              playsInline
              className="w-full h-auto max-h-[75vh] object-cover rounded-2xl sm:rounded-3xl shadow-2xl border border-rgym-gray"
            >
              Seu navegador não suporta vídeos.
            </video>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-rgym-yellow mb-2 inline-block">Nossa História</span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight mb-4 sm:mb-6 uppercase">A Nossa <span className="text-rgym-yellow">Trajetória</span></h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                A R Gym nasceu com um propósito claro: trazer para Russas uma estrutura de capital com um atendimento que verdadeiramente acolhe. Não somos apenas mais um espaço para levantar pesos.
              </p>
              <p>
                Ao longo da nossa trajetória, o nosso foco sempre foi <strong className="text-white">aumentar a qualidade para você</strong>. Investimos constantemente em novos equipamentos, mais modalidades e em profissionais que acompanham cada detalhe do seu treino.
              </p>
              <p>
                Aqui, cada gota de suor conta, e nós estamos com você em cada repetição. Dê o play no vídeo ao lado e conheça a energia da nossa academia.
              </p>
            </div>
            <a href="#diferenciais" className="inline-flex items-center justify-center lg:justify-start gap-2 mt-6 sm:mt-8 text-rgym-yellow font-bold text-sm sm:text-base hover:underline group">
              Conheça nossa estrutura <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* --- DIFERENCIAIS (2 Cols Mobile / 4 Cols Desktop) --- */}
      <section id="diferenciais" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-rgym-yellow mb-2 inline-block">Exclusividade</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mb-3 sm:mb-4 uppercase">A Única com <span className="text-rgym-yellow">Tudo Isso</span></h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Desenhada para o seu resultado e conforto, com a maior variedade da região.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {[
            { icon: <ShieldCheck className="text-rgym-yellow" size={24}/>, text: "Profissionais que atendem de verdade" },
            { icon: <Activity className="text-rgym-yellow" size={24}/>, text: "Avaliação física com App" },
            { icon: <Trophy className="text-rgym-yellow" size={24}/>, text: "+6 modalidades coletivas" },
            { icon: <Dumbbell className="text-rgym-yellow" size={24}/>, text: "+100 Equipamentos modernos" },
            { icon: <MapPin className="text-rgym-yellow" size={24}/>, text: "Fácil estacionar na Avenida" },
            { icon: <ShoppingBag className="text-rgym-yellow" size={24}/>, text: "Loja de suplementos interna" },
            { icon: <Coffee className="text-rgym-yellow" size={24}/>, text: "Área Gourmet exclusiva" },
            { icon: <Target className="text-rgym-yellow" size={24}/>, text: "Nutricionista exclusivo" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04 }}
              className="flex flex-col items-center text-center gap-2 sm:gap-3 bg-rgym-gray/50 p-4 sm:p-5 rounded-2xl border border-rgym-gray hover:border-rgym-yellow/40 transition-all hover:-translate-y-1"
            >
              <div className="bg-rgym-dark p-2.5 sm:p-3.5 rounded-full shadow-[0_0_15px_rgba(255,209,0,0.08)]">
                {item.icon}
              </div>
              <span className="font-bold text-xs sm:text-sm mt-1 leading-snug">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- GALERIA GRID BENTO (ESTRUTURA - Lazy Loaded Images) --- */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-rgym-dark border-b border-rgym-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-rgym-yellow mb-2 inline-block">Nossos Ambientes</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight uppercase">
              Estrutura <span className="text-rgym-yellow">Premium</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2">O melhor espaço da cidade preparado para o seu treino diário.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
            {/* Foto Grande (Esquerda) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              className="w-full h-[220px] sm:h-[320px] md:h-[480px] rounded-2xl overflow-hidden border border-rgym-gray shadow-lg group relative"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="/gym-interior.jpg" 
                alt="Salão de musculação com mais de 100 equipamentos" 
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>

            {/* Fotos Menores (Direita - Empilhadas) */}
            <div className="grid grid-rows-2 gap-3 sm:gap-5 h-auto md:h-[480px]">
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                className="w-full h-[180px] sm:h-[220px] md:h-full rounded-2xl overflow-hidden border border-rgym-gray shadow-lg group relative"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="/gym-interior-2.jpg" 
                  alt="Área de treino e equipamentos R-GYM" 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="400"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.1 }}
                className="w-full h-[180px] sm:h-[220px] md:h-full rounded-2xl overflow-hidden border border-rgym-gray shadow-lg group relative"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="/gym-interior-3.jpg" 
                  alt="Espaço e infraestrutura R-GYM" 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="400"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HORÁRIOS AULAS COLETIVAS (Fluid Responsive Grid) --- */}
      <section id="horarios" className="py-16 sm:py-24 px-4 sm:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-rgym-yellow mb-2 inline-block">Grade Semanal</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading uppercase mb-2 sm:mb-3">Horários <span className="text-rgym-yellow">Aulas Coletivas</span></h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">Programe-se e não perca nenhuma aula com nossos instrutores.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 items-start">
            {scheduleData.map((dayPlan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.05 }}
                className="bg-rgym-dark border border-rgym-gray rounded-2xl overflow-hidden shadow-lg hover:border-rgym-yellow/50 transition-colors"
              >
                <div className="bg-rgym-yellow text-black text-center font-black py-2 sm:py-2.5 uppercase tracking-wider text-xs sm:text-sm border-b-2 border-rgym-yellow-dark">
                  {dayPlan.day}
                </div>
                <div className="p-3 flex flex-col gap-2">
                  {dayPlan.classes.map((cls, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-black/80 border border-gray-800/80 p-2 sm:p-2.5 rounded-lg hover:border-gray-700 transition-colors">
                      <span className="text-rgym-yellow font-bold text-xs sm:text-sm min-w-[38px]">{cls.time}</span>
                      <div className="w-px h-4 bg-gray-800"></div>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-200">
                        {cls.type === 'fight' ? <Trophy size={13} className="text-rgym-yellow opacity-70 flex-shrink-0"/> : <Activity size={13} className="text-rgym-yellow opacity-70 flex-shrink-0"/>}
                        <span className="truncate">{cls.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PLANOS / PROMOÇÃO (Touch-Friendly CTAs & Crystal-Clear Layout) --- */}
      <section id="planos" className="py-16 sm:py-24 px-4 sm:px-8 bg-rgym-dark relative overflow-hidden border-t border-rgym-gray">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="bg-red-600 text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 sm:mb-6 inline-block shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              Somente até Setembro
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mb-3 uppercase leading-tight">
              Garanta <span className="text-rgym-yellow">1 Ano</span><br className="hidden sm:block"/> pagando o preço antigo
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
              Contrate agora antes do reajuste de Outubro e garanta todos os benefícios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch max-w-4xl mx-auto pt-4 sm:pt-6">
            
            {/* Plano Mensal Recorrência */}
            <div className="bg-black border border-rgym-gray hover:border-rgym-yellow/50 p-6 sm:p-8 rounded-[28px] text-center flex flex-col transition-all group">
              <h3 className="text-lg sm:text-2xl font-black mb-1 uppercase font-heading">Plano Mensal<br/><span className="text-rgym-yellow">Recorrência</span></h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">Sem multa de desistência</p>
              
              <div className="text-4xl sm:text-5xl font-black mb-6 sm:mb-8 text-white">
                <span className="text-lg sm:text-xl align-top mr-1 text-rgym-yellow">R$</span>119<span className="text-sm sm:text-base text-gray-400 font-normal">/mês</span>
              </div>
              
              <ul className="text-gray-300 space-y-3 mb-8 text-left flex-1 text-xs sm:text-sm md:text-base">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={18}/> Cancela quando quiser</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={18}/> Acesso total à Musculação</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={18}/> Todas as Modalidades coletivas</li>
              </ul>
              
              <a 
                href={`https://wa.me/5588992420806?text=${encodeURIComponent("Olá! Tenho interesse no Plano Mensal Recorrência da R-GYM!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border-2 border-rgym-yellow text-rgym-yellow hover:bg-rgym-yellow hover:text-black py-3 sm:py-3.5 rounded-full font-bold transition-colors uppercase tracking-wide text-xs sm:text-sm"
              >
                Selecionar Plano
              </a>
            </div>

            {/* Plano Clube Mais RGYM - Destaque */}
            <div className="relative p-1 rounded-[28px] bg-gradient-to-b from-rgym-yellow to-rgym-yellow-dark transform lg:-translate-y-4 shadow-[0_0_35px_rgba(255,209,0,0.18)] mt-6 lg:mt-0">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-rgym-yellow border-2 border-rgym-yellow px-4 sm:px-6 py-1.5 rounded-full text-[11px] sm:text-xs font-black tracking-wider uppercase whitespace-nowrap shadow-xl z-20">
                🔥 O Mais Vantajoso
              </div>

              <div className="bg-black h-full p-6 sm:p-8 rounded-[24px] text-center flex flex-col relative z-10">
                <h3 className="text-lg sm:text-2xl font-black mb-1 uppercase font-heading mt-4">Plano Clube Mais<br/><span className="text-rgym-yellow">R-GYM</span></h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-6">Média Mensal Equivalente</p>
                
                <div className="text-5xl sm:text-6xl font-black mb-6 sm:mb-8 text-rgym-yellow drop-shadow-[0_0_10px_rgba(255,209,0,0.3)]">
                  <span className="text-lg sm:text-xl align-top mr-1 text-white">R$</span>89<span className="text-sm sm:text-base text-gray-400 font-normal text-white">/mês</span>
                </div>
                
                <ul className="text-gray-300 space-y-3 mb-8 text-left flex-1 text-xs sm:text-sm md:text-base">
                  <li className="flex items-center gap-2.5 font-bold text-white"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={18}/> SEM TAXA DE MATRÍCULA</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={18}/> Acesso livre e ilimitado</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={18}/> Musculação + 6 Modalidades</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={18}/> Avaliação Física completa com App</li>
                </ul>
                
                <a 
                  href={`https://wa.me/5588992420806?text=${encodeURIComponent("Olá! Quero garantir o Plano Clube Mais R-GYM no preço antigo antes do reajuste!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-rgym-yellow hover:bg-white text-black py-3.5 sm:py-4 rounded-full font-black text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,209,0,0.4)] uppercase tracking-wide"
                >
                  Garantir Preço Antigo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER (Responsive Multi-Column) --- */}
      <footer className="bg-black pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-8 border-t border-rgym-gray relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img src="/logo.jpg" alt="R GYM Logo" width="44" height="44" className="w-10 sm:w-11 h-10 sm:h-11 rounded-full border border-rgym-yellow" />
              <span className="text-2xl font-black font-heading tracking-wider">R<span className="text-rgym-yellow">-</span>GYM</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xs leading-relaxed">
              A maior de Russas. A estrutura completa que você merece com os profissionais que te fazem atingir resultados reais.
            </p>
          </div>

          {/* Contact & Tags & Instagram */}
          <div className="lg:col-span-1">
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 font-heading uppercase text-rgym-yellow">Localização & Contato</h4>
            <ul className="space-y-2.5 text-gray-300 text-xs sm:text-sm mb-4">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-rgym-yellow flex-shrink-0 mt-0.5" size={16}/>
                <span>Av. Irmã Maria da Graça, 1650<br/>Catumbela, Russas - CE</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-rgym-yellow flex-shrink-0" size={16}/>
                <span>(88) 99242-0806</span>
              </li>
            </ul>

            <div className="flex flex-col gap-2.5">
              <a 
                href="https://www.instagram.com/r_gym1/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 group text-gray-300 hover:text-rgym-yellow transition-colors"
              >
                <div className="w-7 h-7 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center group-hover:border-rgym-yellow transition-colors shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span className="font-bold text-xs sm:text-sm">@r_gym1</span>
              </a>

              <div className="flex flex-wrap gap-1.5 text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">
                <span className="bg-rgym-gray px-2 py-0.5 rounded border border-gray-800">Acolhe LGBTQ+</span>
                <span className="bg-rgym-gray px-2 py-0.5 rounded border border-gray-800">Empreendedoras</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 font-heading uppercase text-rgym-yellow">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <li className="flex justify-between border-b border-rgym-gray pb-1.5">
                <span>Segunda a Sexta</span>
                <span className="font-bold text-white">05:00 – 22:00</span>
              </li>
              <li className="flex justify-between border-b border-rgym-gray pb-1.5">
                <span>Sábado</span>
                <span className="font-bold text-white">08:00 – 18:00</span>
              </li>
              <li className="flex justify-between border-b border-rgym-gray pb-1.5 sm:border-b-0">
                <span>Domingo</span>
                <span className="font-bold text-rgym-yellow">08:00 – 12:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center text-gray-500 text-[10px] sm:text-xs pt-6 sm:pt-8 border-t border-rgym-gray/60 flex flex-col md:flex-row justify-center items-center gap-1 sm:gap-2">
          <span>&copy; {new Date().getFullYear()} R-GYM Russas. Todos os direitos reservados.</span>
          <span className="hidden md:inline">|</span>
          <span>Desenvolvido por MazyOS / Norte Autoral</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
