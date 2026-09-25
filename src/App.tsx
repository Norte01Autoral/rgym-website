import { motion } from 'framer-motion';
import { Dumbbell, Activity, MapPin, Clock, CheckCircle2, ShieldCheck, Trophy, Target, Coffee, ShoppingBag, Star, Phone, Heart, Flame, ChevronRight } from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
      
      {/* --- PROMO BANNER TOP (STATIC) --- */}
      <div className="bg-rgym-yellow text-black py-2 px-4 font-black text-[10px] sm:text-xs z-50 relative uppercase tracking-wider text-center flex items-center justify-center gap-2">
        <span className="hidden sm:inline"><Flame size={14}/></span>
        OFERTA ESPECIAL: Garanta mais 1 ano pagando o preço antigo (antes do reajuste!)
        <span className="hidden sm:inline"><Flame size={14}/></span>
      </div>

      {/* --- STANDARD NAVBAR (Top Only - NOT Sticky) --- */}
      {/* Removed 'sticky' and 'fixed' so it stays at the top of the document and scrolls away */}
      <nav className="w-full bg-[#0a0a0a] border-b border-gray-800 px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center relative z-40">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="R GYM Logo" className="h-8 sm:h-10 w-auto rounded-full border border-rgym-yellow" />
        </div>
        
        <div className="hidden lg:flex gap-8 font-bold text-sm text-gray-300">
          <a href="#sobre" className="hover:text-rgym-yellow transition-colors">A Academia</a>
          <a href="#diferenciais" className="hover:text-rgym-yellow transition-colors">Diferenciais</a>
          <a href="#horarios" className="hover:text-rgym-yellow transition-colors">Horários</a>
          <a href="#planos" className="text-rgym-yellow">Promoção</a>
        </div>
        
        <div className="flex gap-2 sm:gap-4">
          <a href="#planos" className="hidden md:flex bg-transparent border border-rgym-yellow text-rgym-yellow hover:bg-rgym-yellow hover:text-black px-4 lg:px-6 py-2.5 rounded font-bold transition-all text-xs lg:text-sm items-center">
            Fazer Avaliação
          </a>
          <a href="#planos" className="bg-rgym-yellow hover:bg-rgym-yellow-dark text-black px-5 lg:px-6 py-2.5 rounded font-black transition-all shadow-[0_0_15px_rgba(255,209,0,0.2)] text-xs lg:text-sm flex items-center uppercase tracking-wide">
            Matricule-se
          </a>
        </div>
      </nav>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a 
        href={`https://wa.me/5588992420806?text=${whatsappMessage}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-10 animate-bounce shadow-md border-2 border-rgym-dark">
            1
          </span>
          {/* Pulse effect behind */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          {/* Main Button */}
          <div className="relative bg-[#25D366] hover:bg-[#1ebe57] text-white p-3 rounded-full shadow-2xl transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </div>
        </div>
      </a>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center justify-start pt-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rgym-dark via-rgym-dark/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-rgym-dark via-transparent to-transparent z-10" />
          <img 
            src="/owner-hero.png" 
            alt="Dono da R Gym" 
            className="w-full h-full object-cover object-right-top opacity-100"
          />
        </div>

        <motion.div 
          className="relative z-10 px-6 sm:px-10 md:px-16 max-w-4xl"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Google Reviews Badge (Re-added to Hero) */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-2 rounded-full mb-6 cursor-pointer hover:border-rgym-yellow transition-colors shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
            <div className="flex text-rgym-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">4.8 <span className="font-normal text-gray-400">(117)</span></span>
          </motion.div>

          <br/>

          <motion.div variants={fadeInUp} className="inline-block bg-rgym-gray/90 backdrop-blur border border-rgym-yellow/30 text-rgym-yellow px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-md">
            A Maior de Russas
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-normal mb-6 uppercase leading-[1.1] drop-shadow-xl"
          >
            NOSSO FOCO É <br/>AUMENTAR SUA <span className="text-rgym-yellow">QUALIDADE.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 font-medium max-w-xl leading-relaxed drop-shadow-lg"
          >
            A R Gym não para de investir em atendimento e infraestrutura. <strong className="text-white font-black bg-black/40 px-2 py-0.5 rounded">Usufrua do atual pagando o preço antigo.</strong> Se já é vantajoso agora, imagina com o que ainda vem por aí 👀🔥
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <a href="#planos" className="w-full sm:w-auto text-center bg-rgym-yellow hover:bg-rgym-yellow-dark text-black px-8 py-4 rounded-full font-black text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,209,0,0.4)]">
              Garantir Preço Antigo
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SOBRE (VSL / TRAJETÓRIA) --- */}
      <section id="sobre" className="py-20 sm:py-24 px-6 bg-rgym-dark border-y border-rgym-gray">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Video Player (Fixed Aspect Ratio / Vertical styling to remove black bars) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-sm lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <video 
              src="/snapinsta-1790314536085_compativel.mp4" 
              controls 
              preload="metadata"
              className="w-full h-auto max-h-[80vh] object-cover rounded-3xl"
            >
              Seu navegador não suporta vídeos.
            </video>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mb-6 uppercase">A Nossa <span className="text-rgym-yellow">Trajetória</span></h2>
            <div className="space-y-4 text-gray-400 text-base sm:text-lg leading-relaxed">
              <p>
                A R Gym nasceu com um propósito claro: trazer para Russas uma estrutura de capital com um atendimento que acolhe. Não somos apenas mais um espaço para levantar pesos.
              </p>
              <p>
                Ao longo da nossa trajetória, o nosso foco sempre foi <strong className="text-white">aumentar a qualidade para você</strong>. Investimos constantemente em novos equipamentos, mais modalidades e em profissionais que atendem de verdade.
              </p>
              <p>
                Aqui, cada gota de suor conta, e nós estamos com você em cada repetição. Dê o play no vídeo e conheça a alma da nossa academia.
              </p>
            </div>
            <a href="#diferenciais" className="inline-flex items-center justify-center lg:justify-start gap-2 mt-8 text-rgym-yellow font-bold hover:underline">
              Conheça nossa estrutura <ChevronRight size={16} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* --- DIFERENCIAIS --- */}
      <section id="diferenciais" className="py-20 sm:py-24 px-6 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 sm:mb-6 uppercase">A Única com <span className="text-rgym-yellow">Tudo Isso</span></h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Desenhada para o seu resultado e conforto, com a maior variedade da região.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[
            { icon: <ShieldCheck className="text-rgym-yellow" size={24}/>, text: "Profissionais de verdade" },
            { icon: <Activity className="text-rgym-yellow" size={24}/>, text: "Avaliação com App" },
            { icon: <Trophy className="text-rgym-yellow" size={24}/>, text: "+6 modalidades" },
            { icon: <Dumbbell className="text-rgym-yellow" size={24}/>, text: "+100 Equipamentos" },
            { icon: <MapPin className="text-rgym-yellow" size={24}/>, text: "Fácil estacionar" },
            { icon: <ShoppingBag className="text-rgym-yellow" size={24}/>, text: "Loja interna" },
            { icon: <Coffee className="text-rgym-yellow" size={24}/>, text: "Área Gourmet" },
            { icon: <Target className="text-rgym-yellow" size={24}/>, text: "Nutricionista" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center gap-2 sm:gap-3 bg-rgym-gray/40 p-4 sm:p-6 rounded-2xl border border-rgym-gray hover:border-rgym-yellow/40 transition-all"
            >
              <div className="bg-rgym-dark p-3 sm:p-4 rounded-full shadow-[0_0_15px_rgba(255,209,0,0.05)]">
                {item.icon}
              </div>
              <span className="font-bold text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- GALERIA GRID BENTO (ESTRUTURA) --- */}
      <section className="py-16 sm:py-24 px-6 bg-rgym-dark border-b border-rgym-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight uppercase">
              Estrutura <span className="text-rgym-yellow">Premium</span>
            </h2>
            <p className="text-gray-400 mt-2 sm:mt-4">O melhor espaço da cidade preparado para você.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Foto Grande (Esquerda) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden border border-rgym-gray shadow-lg group relative"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img src="/gym-interior.jpg" alt="Interior Principal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Fotos Menores (Direita - Empilhadas) */}
            <div className="grid grid-rows-2 gap-4 sm:gap-6 h-auto md:h-[500px]">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full h-[250px] md:h-full rounded-2xl overflow-hidden border border-rgym-gray shadow-lg group relative"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/gym-interior-2.jpg" alt="Detalhe Estrutura" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full h-[250px] md:h-full rounded-2xl overflow-hidden border border-rgym-gray shadow-lg group relative"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/gym-interior-3.jpg" alt="Detalhe Estrutura" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HORÁRIOS AULAS COLETIVAS (HTML) --- */}
      <section id="horarios" className="py-20 sm:py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase mb-3 sm:mb-4">Horários <span className="text-rgym-yellow">Aulas Coletivas</span></h2>
            <p className="text-gray-400 text-sm sm:text-base">Programe-se e não perca nenhuma aula.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 items-start">
            {scheduleData.map((dayPlan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-rgym-dark border border-rgym-gray rounded-2xl overflow-hidden shadow-lg hover:border-rgym-yellow/50 transition-colors"
              >
                <div className="bg-rgym-yellow text-black text-center font-black py-2 sm:py-3 uppercase tracking-wider text-xs sm:text-sm border-b-2 border-rgym-yellow-dark">
                  {dayPlan.day}
                </div>
                <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
                  {dayPlan.classes.map((cls, i) => (
                    <div key={i} className="flex items-center gap-3 bg-black border border-gray-800 p-2 sm:p-3 rounded-lg hover:border-gray-700 transition-colors">
                      <div className="text-rgym-yellow font-bold text-xs sm:text-sm min-w-[40px]">{cls.time}</div>
                      <div className="w-px h-5 sm:h-6 bg-gray-800"></div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200">
                        {cls.type === 'fight' ? <Trophy size={14} className="text-rgym-yellow opacity-50"/> : <Activity size={14} className="text-rgym-yellow opacity-50"/>}
                        {cls.name}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PLANOS / PROMOÇÃO --- */}
      <section id="planos" className="py-20 sm:py-24 px-6 bg-rgym-dark relative overflow-hidden border-t border-rgym-gray">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-6 inline-block shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              Somente até Setembro
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-heading tracking-tight mb-4 uppercase leading-tight">
              Garanta <span className="text-rgym-yellow">1 Ano</span><br className="hidden sm:block"/> pagando o preço antigo
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
              Contrate agora antes do reajuste de Outubro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-stretch max-w-4xl mx-auto pt-6">
            
            {/* Plano Mensal Recorrência */}
            <div className="bg-black border border-rgym-gray hover:border-rgym-yellow/50 p-6 sm:p-8 rounded-[32px] text-center flex flex-col transition-all group mt-6 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-black mb-1 sm:mb-2 uppercase font-heading">Plano Mensal<br/><span className="text-rgym-yellow">Recorrência</span></h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">Sem multa de desistência</p>
              
              <div className="text-5xl font-black mb-8 text-white">
                <span className="text-xl sm:text-2xl align-top mr-1 text-rgym-yellow">R$</span>119<span className="text-base sm:text-lg text-gray-400 font-normal">/mês</span>
              </div>
              
              <ul className="text-gray-300 space-y-3 sm:space-y-4 mb-8 text-left flex-1 text-xs sm:text-sm md:text-base">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={20}/> Cancela quando quiser</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={20}/> Acesso a Musculação</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={20}/> Todas as Modalidades</li>
              </ul>
              
              <button className="w-full border-2 border-rgym-yellow text-rgym-yellow hover:bg-rgym-yellow hover:text-black py-3 sm:py-4 rounded-full font-bold transition-colors uppercase tracking-wide text-sm sm:text-base">Selecionar Plano</button>
            </div>

            {/* Plano Clube Mais RGYM - Destaque */}
            <div className="relative p-1 rounded-[32px] bg-gradient-to-b from-rgym-yellow to-rgym-yellow-dark transform lg:-translate-y-6 shadow-[0_0_40px_rgba(255,209,0,0.15)] mt-8 lg:mt-0">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-rgym-yellow border-2 border-rgym-yellow px-6 py-2 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase whitespace-nowrap shadow-xl z-20">
                🔥 O Mais Vantajoso
              </div>

              <div className="bg-black h-full p-6 sm:p-8 rounded-[28px] text-center flex flex-col relative z-10">
                <h3 className="text-xl sm:text-2xl font-black mb-1 sm:mb-2 uppercase font-heading mt-6">Plano Clube Mais<br/><span className="text-rgym-yellow">R-GYM</span></h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-6">Média Mensal Equivalente</p>
                
                <div className="text-6xl sm:text-7xl font-black mb-8 text-rgym-yellow drop-shadow-[0_0_10px_rgba(255,209,0,0.3)]">
                  <span className="text-xl sm:text-2xl align-top mr-1 text-white">R$</span>89<span className="text-base sm:text-lg text-gray-400 font-normal text-white">/mês</span>
                </div>
                
                <ul className="text-gray-300 space-y-3 sm:space-y-4 mb-8 text-left flex-1 text-xs sm:text-sm md:text-base">
                  <li className="flex items-center gap-3 font-bold text-white"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={20}/> SEM TAXA DE MATRÍCULA</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={20}/> Acesso livre e ilimitado</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={20}/> Musculação + 6 Modalidades</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-rgym-yellow flex-shrink-0" size={20}/> Avaliação Física com App</li>
                </ul>
                
                <button className="w-full bg-rgym-yellow hover:bg-white text-black py-3 sm:py-4 rounded-full font-black text-sm sm:text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,209,0,0.4)] uppercase tracking-wide">
                  Garantir Preço Antigo
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black pt-12 sm:pt-16 pb-6 sm:pb-8 px-6 border-t border-rgym-gray relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src="/logo.jpg" alt="R GYM Logo" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-rgym-yellow" />
              <span className="text-2xl sm:text-3xl font-black font-heading tracking-wider">R<span className="text-rgym-yellow">-</span>GYM</span>
            </div>
            <p className="text-gray-400 text-sm max-w-[250px]">
              A maior de Russas. A estrutura que você merece com os profissionais que te fazem chegar lá.
            </p>
          </div>

          {/* Contact & Tags & Instagram */}
          <div className="lg:col-span-1">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 font-heading uppercase text-rgym-yellow">Localização</h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-rgym-yellow flex-shrink-0" size={18}/>
                <span>Av. Irmã Maria da Graça, 1650<br/>Catumbela, Russas - CE<br/>62900-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-rgym-yellow flex-shrink-0" size={18}/>
                <span>(88) 99242-0806</span>
              </li>
            </ul>

            <div className="flex flex-col gap-3">
              {/* Instagram Added Here */}
              <a href="https://www.instagram.com/r_gym1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group text-gray-300 hover:text-rgym-yellow transition-colors">
                <div className="w-8 h-8 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center group-hover:border-rgym-yellow transition-colors shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span className="font-bold text-sm">@r_gym1</span>
              </a>

              {/* Tags Added Here */}
              <div className="flex flex-wrap gap-2 text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-2">
                <span className="bg-rgym-gray px-2 py-1 rounded border border-gray-800">Acolhe LGBTQ+</span>
                <span className="bg-rgym-gray px-2 py-1 rounded border border-gray-800">Empreendedoras</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 font-heading uppercase text-rgym-yellow">Horário de Funcionamento</h4>
            <ul className="space-y-3 sm:space-y-3 text-gray-300 text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <li className="flex justify-between border-b border-rgym-gray pb-2">
                <span>Segunda a Sexta</span>
                <span className="font-bold text-white">05:00 – 22:00</span>
              </li>
              <li className="flex justify-between border-b border-rgym-gray pb-2">
                <span>Sábado</span>
                <span className="font-bold text-white">08:00 – 18:00</span>
              </li>
              <li className="flex justify-between border-b border-rgym-gray pb-2">
                <span>Domingo</span>
                <span className="font-bold text-rgym-yellow">08:00 – 12:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center text-gray-600 text-[10px] sm:text-xs pt-6 sm:pt-8 border-t border-rgym-gray/50 flex flex-col md:flex-row justify-center items-center gap-2">
          <span>&copy; {new Date().getFullYear()} R-GYM. Todos os direitos reservados.</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-1">Desenvolvido por MazyOS / Norte Autoral</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
