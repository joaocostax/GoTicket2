// BANCO DE DADOS AMPLIADO (20 EVENTOS ÚNICOS E BEM DISTRIBUÍDOS)
const allEvents = [
  // Hero Banner (4 eventos)
  {
    id: 1,
    title: "Duna - Parte 3",
    category: "CINEMA",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1600",
    description: "A conclusão épica da jornada de Paul Atreides pelo deserto de Arrakis, lidando com o destino do universo conhecido.",
    duration: "2h47"
  },
  {
    id: 2,
    title: "Electronic Night: Deep House",
    category: "MÚSICA",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600",
    description: "Uma noite inesquecível com os melhores DJs da cena atual, sistemas de som de alta fidelidade e show de luzes laser.",
    duration: "4h00"
  },
  {
    id: 3,
    title: "Championship Gaming Finals",
    category: "GAME",
    price: 200.00,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600",
    description: "Assista aos melhores jogadores do mundo competindo pela taça mundial de eSports em uma arena lotada.",
    duration: "6h00"
  },
  {
    id: 4,
    title: "Maratona do Sol",
    category: "ESPORTE",
    price: 90.00,
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=1600",
    description: "Junte-se a milhares de corredores nesta maratona icônica pela costa. Prêmios para os 10 primeiros colocados.",
    duration: "4h30"
  },

  // Em Alta na Semana (4 eventos)
  {
    id: 5,
    title: "Festival Gastronômico Street Food",
    category: "GASTRONOMIA",
    price: 60.00,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1600",
    description: "Experimente sabores de todo o mundo em um só lugar. Mais de 50 food trucks e música ao vivo.",
    duration: "5h00"
  },
  {
    id: 6,
    title: "Conferência Global de IA 2026",
    category: "TECNOLOGIA",
    price: 320.00,
    image: "https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=1600",
    description: "Palestras magnas sobre o futuro da inteligência artificial generativa e impactos na sociedade moderna.",
    duration: "8h00"
  },
  {
    id: 7,
    title: "Jazz under the Stars",
    category: "MÚSICA",
    price: 140.00,
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1600",
    description: "Uma noite sofisticada com quartetos de jazz renomados em um terraço com vista panorâmica para a cidade.",
    duration: "3h00"
  },
  {
    id: 8,
    title: "Stand-up Comedy: Noite do Riso",
    category: "COMÉDIA",
    price: 80.00,
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedee6?auto=format&fit=crop&q=80&w=1600",
    description: "Os humoristas mais consagrados do país reunidos em um show imperdível de piadas inéditas.",
    duration: "2h00"
  },

  // Eventos Principais (6 eventos)
  {
    id: 9,
    title: "Rock in the Park Festival",
    category: "ROCK",
    price: 190.00,
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=1600",
    description: "Grandes bandas de rock clássico e alternativo agitam o parque municipal em um festival de dois dias.",
    duration: "10h00"
  },
  {
    id: 10,
    title: "Cosplay World Expo Nacional",
    category: "COSPLAY",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=1600",
    description: "Desfiles, concursos de fantasias épicas e encontros com criadores de conteúdo de cultura pop.",
    duration: "7h00"
  },
  {
    id: 11,
    title: "Teatro: O Fantasma Moderno",
    category: "TEATRO",
    price: 130.00,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1600",
    description: "Uma releitura contemporânea e dramática com efeitos visuais holográficos impressionantes.",
    duration: "2h30"
  },
  {
    id: 12,
    title: "Festival Pop Summer Hits",
    category: "POP",
    price: 160.00,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600",
    description: "Os maiores ícones da música pop atual reunidos em um espetáculo de som, dança e pirotecnia.",
    duration: "5h00"
  },
  {
    id: 13,
    title: "Podcast ao Vivo: Mente Brilhante",
    category: "PODCAST",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1600",
    description: "Gravação de episódio especial com convidados surpresa do mundo da ciência, arte e tecnologia.",
    duration: "2h30"
  },
  {
    id: 14,
    title: "Mostra de Cinema Independente",
    category: "CINEMA",
    price: 40.00,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1600",
    description: "Exibição de curtas e longas-metragens premiados em festivais internacionais independentes.",
    duration: "3h30"
  },

  // Mais Procurados (6 eventos)
  {
    id: 15,
    title: "Workshop de Fotografia Urbana",
    category: "T.I",
    price: 210.00,
    image: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&q=80&w=1600",
    description: "Técnicas avançadas de captura com câmeras profissionais e smartphones em locações urbanas históricas.",
    duration: "4h00"
  },
  {
    id: 16,
    title: "Fórum de Liderança Corporativa",
    category: "CORPORATIVO",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600",
    description: "Networking de alto nível para CEOs e gestores discutirem inovação e novas tendências de mercado.",
    duration: "6h00"
  },
  {
    id: 17,
    title: "Batalha de Dança Urban Style",
    category: "ESPORTE",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1600",
    description: "Os melhores dançarinos de rua competindo em solos eletrizantes com jurados internacionais.",
    duration: "4h00"
  },
  {
    id: 18,
    title: "Exposição Imersiva Van Gogh",
    category: "TEATRO",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1600",
    description: "Mergulhe nas obras-primas de Van Gogh através de projeções gigantes 360º e trilha sonora sinfônica.",
    duration: "2h00"
  },
  {
    id: 19,
    title: "Encontro Nacional de Desenvolvedores",
    category: "T.I",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600",
    description: "Palestras técnicas sobre arquitetura de software, cloud computing e engenharia de dados moderna.",
    duration: "7h00"
  },
  {
    id: 20,
    title: "Noite de Gala Beneficente",
    category: "CORPORATIVO",
    price: 350.00,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
    description: "Um jantar exclusivo com leilão de arte e atrações musicais clássicas em prol de projetos sociais.",
    duration: "5h00"
  }
];

const categoriesList = ["MÚSICA", "GAME", "ESPORTE", "TECNOLOGIA", "COSPLAY", "T.I", "COMÉDIA", "ELETRÔNICA", "ROCK", "CORPORATIVO", "POP", "PODCAST", "CINEMA", "GASTRONOMIA", "TEATRO"];

let cart = [];
let activeCategory = null;
let currentUser = null; // Guarda o estado do usuário logado

const heroBannerContainer = document.getElementById('hero-banner-container');
const eventsCarousel = document.getElementById('events-carousel');
const secondaryEventsCarousel = document.getElementById('secondary-events-carousel');
const tertiaryEventsCarousel = document.getElementById('tertiary-events-carousel');

const btnToggleCategories = document.getElementById('btn-toggle-categories');
const categoryMenu = document.getElementById('category-menu');
const categoryItemsContainer = document.getElementById('category-items-container');
const categoryBtnLabel = document.getElementById('category-btn-label');
const categoryArrow = document.getElementById('category-arrow');
const categoryDropdownWrapper = document.getElementById('category-dropdown-wrapper');

const searchWrapper = document.getElementById('search-wrapper');
const searchInput = document.getElementById('search-input');
const searchResultsDropdown = document.getElementById('search-results-dropdown');
const btnClearSearch = document.getElementById('btn-clear-search');

const btnPrevMain = document.getElementById('btn-prev-main');
const btnNextMain = document.getElementById('btn-next-main');
const btnPrevSecondary = document.getElementById('btn-prev-secondary');
const btnNextSecondary = document.getElementById('btn-next-secondary');
const btnPrevTertiary = document.getElementById('btn-prev-tertiary');
const btnNextTertiary = document.getElementById('btn-next-tertiary');

const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const btnOpenCart = document.getElementById('btn-open-cart');
const btnCloseCart = document.getElementById('btn-close-cart');
const cartCounter = document.getElementById('cart-counter');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotal = document.getElementById('cart-total');

const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const btnOpenAuth = document.getElementById('btn-open-auth');

let currentHeroIndex = 0;
let heroInterval;

// ==========================================
// 1. HERO BANNER
// ==========================================
const heroEvents = allEvents.slice(0, 4);

function renderHeroBanner(index) {
  const total = heroEvents.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const prevEvent = heroEvents[prevIndex];
  const currentEvent = heroEvents[index];
  const nextEvent = heroEvents[nextIndex];

  heroBannerContainer.innerHTML = `
    <div onclick="setHeroSlide(${prevIndex})" class="hidden lg:block relative w-[22%] h-[400px] rounded-[2rem] overflow-hidden opacity-35 hover:opacity-60 transition-all duration-500 cursor-pointer flex-shrink-0 border border-slate-800/50 scale-95">
      <img src="${prevEvent.image}" alt="${prevEvent.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      <div class="absolute bottom-6 left-6 right-6">
        <h3 class="text-lg font-black italic text-white uppercase truncate">${prevEvent.title}</h3>
      </div>
    </div>

    <div class="relative w-full lg:w-[72%] max-w-6xl h-[400px] sm:h-[440px] rounded-[2.5rem] overflow-hidden border border-slate-800/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex-shrink-0">
      <img src="${currentEvent.image}" alt="${currentEvent.title}" class="w-full h-full object-cover transition-all duration-700" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/40 to-transparent"></div>

      <div class="absolute bottom-8 left-8 right-8 sm:left-12 sm:right-12 z-20 flex flex-col items-start gap-3">
        <span class="bg-gradient-to-r from-violet-600 to-amber-500 text-white text-[10px] sm:text-[11px] font-black px-3.5 py-1 rounded-md uppercase tracking-wider shadow-lg">
          DESTAQUE DA SEMANA
        </span>

        <h1 class="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase drop-shadow-md leading-none">
          ${currentEvent.title}
        </h1>

        <div class="flex items-center gap-3 text-xs font-bold text-slate-300">
          <span>${currentEvent.category}</span>
          <span>•</span>
          <span>${currentEvent.duration}</span>
        </div>

        <div class="flex items-center gap-3 mt-2">
          <button onclick="openEventModal(${currentEvent.id})" class="bg-violet-600 hover:bg-violet-500 text-white font-black text-xs uppercase px-8 py-3.5 rounded-xl shadow-xl transition-all flex items-center gap-2">
            Ingressos
          </button>
          <button onclick="openEventModal(${currentEvent.id})" title="Ver Detalhes" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3.5 rounded-xl transition-all border border-white/20">
            <i data-lucide="play" class="w-4 h-4 fill-white"></i>
          </button>
        </div>
      </div>

      <div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        ${heroEvents.map((_, i) => `
          <button onclick="setHeroSlide(${i})" class="h-2 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70 w-2'}"></button>
        `).join('')}
      </div>
    </div>

    <div onclick="setHeroSlide(${nextIndex})" class="hidden lg:block relative w-[22%] h-[400px] rounded-[2rem] overflow-hidden opacity-35 hover:opacity-60 transition-all duration-500 cursor-pointer flex-shrink-0 border border-slate-800/50 scale-95">
      <img src="${nextEvent.image}" alt="${nextEvent.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      <div class="absolute bottom-6 left-6 right-6">
        <h3 class="text-lg font-black italic text-white uppercase truncate">${nextEvent.title}</h3>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function setHeroSlide(index) {
  currentHeroIndex = (index + heroEvents.length) % heroEvents.length;
  renderHeroBanner(currentHeroIndex);
  resetHeroTimer();
}

document.getElementById('hero-prev').addEventListener('click', () => setHeroSlide(currentHeroIndex - 1));
document.getElementById('hero-next').addEventListener('click', () => setHeroSlide(currentHeroIndex + 1));

function startHeroTimer() {
  heroInterval = setInterval(() => setHeroSlide(currentHeroIndex + 1), 6000);
}
function resetHeroTimer() {
  clearInterval(heroInterval);
  startHeroTimer();
}

// ==========================================
// 2. BOTÃO INTERATIVO DE CATEGORIAS
// ==========================================
function renderCategoryMenu() {
  categoryItemsContainer.innerHTML = '';
  categoriesList.forEach(cat => {
    const isSelected = activeCategory === cat;
    const btn = document.createElement('button');
    btn.className = `w-full text-left px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-between ${
      isSelected 
        ? 'bg-violet-600 text-white font-black' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`;
    btn.innerHTML = `<span>${cat}</span>`;
    btn.addEventListener('click', () => {
      selectCategory(cat);
    });
    categoryItemsContainer.appendChild(btn);
  });
}

function selectCategory(cat) {
  activeCategory = cat;
  categoryBtnLabel.textContent = cat ? cat : "Filtrar por Categoria";
  categoryMenu.classList.add('hidden');
  categoryArrow.classList.remove('rotate-180');
  renderCategoryMenu();
  updateAllCarousels();
}

btnToggleCategories.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = !categoryMenu.classList.contains('hidden');
  if (isOpen) {
    categoryMenu.classList.add('hidden');
    categoryArrow.classList.remove('rotate-180');
  } else {
    categoryMenu.classList.remove('hidden');
    categoryArrow.classList.add('rotate-180');
  }
});

document.addEventListener('click', (e) => {
  if (!categoryDropdownWrapper.contains(e.target)) {
    categoryMenu.classList.add('hidden');
    categoryArrow.classList.remove('rotate-180');
  }
});

// ==========================================
// 3. CARROSSÉIS
// ==========================================
function getFilteredEvents(list) {
  if (!activeCategory) return list;
  return list.filter(ev => ev.category.toUpperCase().includes(activeCategory));
}

function renderCarousel(containerElement, eventsList, badgeColorClass = "bg-violet-600/90") {
  containerElement.innerHTML = '';
  const filtered = getFilteredEvents(eventsList);

  if (filtered.length === 0) {
    containerElement.innerHTML = `<p class="text-slate-500 text-xs py-8 uppercase font-bold tracking-widest">Nenhum evento nesta categoria.</p>`;
    return;
  }

  filtered.forEach(event => {
    const card = document.createElement('div');
    card.className = "event-card min-w-[280px] sm:min-w-[320px] lg:min-w-[30%] snap-start bg-slate-900/40 rounded-[2rem] overflow-hidden border border-slate-800/60 hover:border-violet-500/40 transition-all duration-500 group/card backdrop-blur-sm flex-shrink-0";
    
    card.innerHTML = `
      <div class="relative h-52 overflow-hidden">
        <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
        <div class="absolute top-4 left-4 ${badgeColorClass} backdrop-blur-md text-[10px] text-white px-3.5 py-1 rounded-full font-black uppercase tracking-widest">${event.category}</div>
      </div>
      <div class="p-6">
        <h3 class="font-bold text-xl text-white mb-4 italic leading-tight group-hover/card:text-violet-400 transition-colors truncate">${event.title}</h3>
        <div class="card-footer flex items-center justify-between border-t border-slate-800/50 pt-4">
          <div class="flex flex-col">
            <span class="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Desde</span>
            <span class="price-value text-lg font-black text-white">R$ ${event.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <button onclick="openEventModal(${event.id})" class="info-btn bg-white/5 hover:bg-violet-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-1.5 border border-white/10">
            Ver Info <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
    containerElement.appendChild(card);
  });
  lucide.createIcons();
}

function setupCarouselControls(container, prevBtn, nextBtn) {
  let currentIndex = 0;
  function updateButtons() {
    const totalItems = container.querySelectorAll('.snap-start').length;
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= totalItems - 1;
  }
  function goTo(index) {
    const items = container.querySelectorAll('.snap-start');
    if (items[index]) {
      const itemWidth = items[index].offsetWidth + 24;
      container.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
      currentIndex = index;
      updateButtons();
    }
  }
  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
  return {
    reset: () => {
      currentIndex = 0;
      container.scrollTo({ left: 0 });
      updateButtons();
    }
  };
}

const mainCarouselControl = setupCarouselControls(eventsCarousel, btnPrevMain, btnNextMain);
const secondaryCarouselControl = setupCarouselControls(secondaryEventsCarousel, btnPrevSecondary, btnNextSecondary);
const tertiaryCarouselControl = setupCarouselControls(tertiaryEventsCarousel, btnPrevTertiary, btnNextTertiary);

const trendingEvents = allEvents.slice(4, 8);   // Em Alta na Semana (4 eventos)
const mainEvents = allEvents.slice(8, 14);      // Eventos Principais (6 eventos)
const popularEvents = allEvents.slice(14, 20);  // Mais Procurados (6 eventos)

function updateAllCarousels() {
  renderCarousel(secondaryEventsCarousel, trendingEvents, "bg-pink-600/90");
  secondaryCarouselControl.reset();

  renderCarousel(eventsCarousel, mainEvents, "bg-violet-600/90");
  mainCarouselControl.reset();

  renderCarousel(tertiaryEventsCarousel, popularEvents, "bg-amber-600/90");
  tertiaryCarouselControl.reset();
}

// ==========================================
// 4. PESQUISA FLUTUANTE
// ==========================================
function renderSearchResults(query) {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) {
    searchResultsDropdown.classList.add('hidden');
    btnClearSearch.classList.add('hidden');
    return;
  }
  btnClearSearch.classList.remove('hidden');

  const filtered = allEvents.filter(ev =>
    ev.title.toLowerCase().includes(cleanQuery) ||
    ev.category.toLowerCase().includes(cleanQuery)
  );

  if (filtered.length === 0) {
    searchResultsDropdown.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs font-bold uppercase">Nenhum evento encontrado</div>`;
  } else {
    searchResultsDropdown.innerHTML = filtered.map(ev => `
      <div onclick="selectSearchResult(${ev.id})" class="search-dropdown-item flex items-center gap-4 p-3.5 hover:bg-slate-800/80 transition-colors cursor-pointer border-b border-slate-800/50 last:border-none">
        <img src="${ev.image}" alt="${ev.title}" class="w-16 h-12 object-cover rounded-xl flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <span class="text-[10px] font-black text-violet-400 uppercase tracking-widest block">${ev.category}</span>
          <h4 class="search-dropdown-title font-bold text-sm text-white truncate">${ev.title}</h4>
          <span class="text-xs text-slate-400 font-semibold">R$ ${ev.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <span class="bg-violet-600/20 text-violet-400 text-[10px] font-black uppercase px-3 py-1.5 rounded-lg flex items-center gap-1 flex-shrink-0">
          Ver Anúncio <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>
    `).join('');
  }
  searchResultsDropdown.classList.remove('hidden');
  lucide.createIcons();
}

function selectSearchResult(eventId) {
  searchResultsDropdown.classList.add('hidden');
  openEventModal(eventId);
}

searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
searchInput.addEventListener('focus', (e) => {
  if (e.target.value.trim().length > 0) renderSearchResults(e.target.value);
});
btnClearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchResultsDropdown.classList.add('hidden');
  btnClearSearch.classList.add('hidden');
  searchInput.focus();
});
document.addEventListener('click', (e) => {
  if (!searchWrapper.contains(e.target)) searchResultsDropdown.classList.add('hidden');
});

// ==========================================
// 5. TEMA CLARO / ESCURO
// ==========================================
function applyTheme(isLight) {
  if (isLight) {
    document.body.classList.add('light-mode');
    themeIcon.setAttribute('data-lucide', 'sun');
    themeIcon.classList.remove('text-violet-400');
    themeIcon.classList.add('text-amber-500');
  } else {
    document.body.classList.remove('light-mode');
    themeIcon.setAttribute('data-lucide', 'moon');
    themeIcon.classList.remove('text-amber-500');
    themeIcon.classList.add('text-violet-400');
  }
  lucide.createIcons();
}

btnThemeToggle.addEventListener('click', () => {
  const isCurrentlyLight = document.body.classList.contains('light-mode');
  const nextState = !isCurrentlyLight;
  localStorage.setItem('goticket-light-mode', nextState);
  applyTheme(nextState);
});

const savedTheme = localStorage.getItem('goticket-light-mode') === 'true';
applyTheme(savedTheme);

// ==========================================
// 6. CARRINHO, MODAL DE EVENTO E AUTENTICAÇÃO
// ==========================================
function addToCart(eventId) {
  const event = allEvents.find(e => e.id === eventId);
  if (!event) return;
  const existingItem = cart.find(item => item.id === eventId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...event, quantity: 1 });
  }
  updateCartUI();
  closeModal();
  openCart();
}

function removeFromCart(eventId) {
  cart = cart.filter(item => item.id !== eventId);
  updateCartUI();
}

function updateCartUI() {
  cartItemsContainer.innerHTML = '';
  if (cart.length === 0) {
    cartCounter.classList.add('hidden');
    cartItemsContainer.innerHTML = `
      <div class="text-center py-16 text-slate-500 space-y-3">
        <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto opacity-30"></i>
        <p class="text-xs font-bold uppercase tracking-widest">O seu carrinho está vazio</p>
      </div>
    `;
    cartTotal.textContent = "R$ 0,00";
    lucide.createIcons();
    return;
  }

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCounter.textContent = totalItemsCount;
  cartCounter.classList.remove('hidden');

  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
    const cartItemEl = document.createElement('div');
    cartItemEl.className = "cart-item-card flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60";
    cartItemEl.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded-xl" />
      <div class="flex-1">
        <h4 class="font-bold text-sm text-white leading-snug">${item.title}</h4>
        <span class="text-xs text-violet-500 font-bold">R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</span>
      </div>
      <button onclick="removeFromCart(${item.id})" class="text-slate-500 hover:text-red-500 p-2 transition-colors">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    `;
    cartItemsContainer.appendChild(cartItemEl);
  });
  cartTotal.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  lucide.createIcons();
}

function openCart() {
  cartDrawerOverlay.classList.remove('hidden');
  setTimeout(() => cartDrawer.classList.remove('translate-x-full'), 10);
}
function closeCart() {
  cartDrawer.classList.add('translate-x-full');
  setTimeout(() => cartDrawerOverlay.classList.add('hidden'), 300);
}
function checkoutCart() {
  if (cart.length === 0) {
    alert("Adicione pelo menos um ingresso ao carrinho antes de finalizar!");
    return;
  }
  alert("Reserva efetuada com sucesso! Obrigado por utilizar a GOTICKET.");
  cart = [];
  updateCartUI();
  closeCart();
}

btnOpenCart.addEventListener('click', openCart);
btnCloseCart.addEventListener('click', closeCart);
cartDrawerOverlay.addEventListener('click', (e) => {
  if (e.target === cartDrawerOverlay) closeCart();
});

function openEventModal(eventId) {
  const event = allEvents.find(e => e.id === eventId);
  if (!event) return;

  modalContent.innerHTML = `
    <div class="flex flex-col">
      <div class="h-80 relative">
        <img src="${event.image}" class="h-full w-full object-cover" alt="${event.title}" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
      <div class="p-10 sm:p-12">
        <span class="text-[10px] font-black text-violet-500 uppercase tracking-[0.4em] mb-4 block">Anúncio do Evento</span>
        <h2 class="text-3xl sm:text-4xl font-black text-white italic mb-6 leading-tight tracking-tighter uppercase">${event.title}</h2>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed opacity-90">${event.description}</p>
        <div class="modal-price-text mb-10 text-xl font-bold text-white">Preço: <span class="text-violet-500">R$ ${event.price.toFixed(2).replace('.', ',')}</span></div>
        <button onclick="addToCart(${event.id})" class="w-full bg-violet-600 text-white py-6 rounded-3xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-violet-500 transition-all shadow-[0_20px_50px_rgba(139,92,246,0.3)]">
          <i data-lucide="ticket" class="w-6 h-6"></i> Reservar Agora
        </button>
      </div>
    </div>
  `;
  modalOverlay.classList.remove('hidden');
  modalOverlay.classList.add('flex');
  lucide.createIcons();
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  modalOverlay.classList.remove('flex');
}

// SISTEMA DE AUTENTICAÇÃO (ENTRAR / REGISTRAR CONTA)
function renderAuthModal(isRegister = false) {
  modalContent.innerHTML = `
    <div class="p-8 sm:p-12 space-y-6">
      <div class="flex justify-between items-center border-b border-slate-800 pb-4">
        <h2 class="text-2xl font-black text-white uppercase italic">${isRegister ? 'Criar Conta' : 'Entrar no Goticket'}</h2>
        <div class="flex gap-2">
          <button onclick="renderAuthModal(false)" class="text-xs font-bold uppercase px-3 py-1.5 rounded-lg transition-all ${!isRegister ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}">Entrar</button>
          <button onclick="renderAuthModal(true)" class="text-xs font-bold uppercase px-3 py-1.5 rounded-lg transition-all ${isRegister ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}">Registar</button>
        </div>
      </div>

      <form onsubmit="handleAuthSubmit(event, ${isRegister})" class="space-y-4">
        ${isRegister ? `
          <div class="space-y-1">
            <label class="text-[10px] font-black text-slate-500 uppercase">Nome Completo</label>
            <input type="text" id="auth-name" required placeholder="Seu nome" class="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white font-bold text-sm outline-none focus:border-violet-500" />
          </div>
        ` : ''}

        <div class="space-y-1">
          <label class="text-[10px] font-black text-slate-500 uppercase">E-mail</label>
          <input type="email" id="auth-email" required placeholder="seu@email.com" class="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white font-bold text-sm outline-none focus:border-violet-500" />
        </div>

        <div class="space-y-1">
          <label class="text-[10px] font-black text-slate-500 uppercase">Senha</label>
          <input type="password" id="auth-password" required placeholder="••••••••" class="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white font-bold text-sm outline-none focus:border-violet-500" />
        </div>

        <button type="submit" class="w-full bg-violet-600 hover:bg-violet-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl">
          ${isRegister ? 'Registar Conta' : 'Aceder Conta'}
        </button>
      </form>
    </div>
  `;
  modalOverlay.classList.remove('hidden');
  modalOverlay.classList.add('flex');
  lucide.createIcons();
}

function handleAuthSubmit(event, isRegister) {
  event.preventDefault();
  const email = document.getElementById('auth-email').value;
  const nameInput = document.getElementById('auth-name');
  const name = nameInput ? nameInput.value : email.split('@')[0];

  currentUser = { name, email };
  
  // Atualiza o botão de entrar no header com o nome do usuário
  btnOpenAuth.innerHTML = `
    <div class="bg-violet-600/20 text-violet-400 p-2 rounded-full">
      <i data-lucide="user-check" class="w-5 h-5"></i>
    </div>
    <span class="text-sm font-bold hidden sm:block">${name}</span>
  `;

  closeModal();
  alert(isRegister ? `Conta criada com sucesso! Bem-vindo(a), ${name}.` : `Sessão iniciada com sucesso, ${name}!`);
  lucide.createIcons();
}

btnOpenAuth.addEventListener('click', () => renderAuthModal(false));

document.getElementById('btn-close-modal').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ==========================================
// 7. INICIALIZAÇÃO
// ==========================================
renderHeroBanner(currentHeroIndex);
startHeroTimer();
renderCategoryMenu();
updateAllCarousels();
updateCartUI();