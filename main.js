/* ══════════════════════════════
   GSAP + SCROLLTRIGGER SETUP
══════════════════════════════ */
try {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
} catch(e) {
  console.error("GSAP not loaded yet.");
}

/* ─── INITIALIZATION / INTRO ─── */
const intro = document.getElementById('intro');
if (intro) {
  if (sessionStorage.getItem('visited_honiver')) {
    intro.style.display = 'none';
    if (typeof gsap !== 'undefined') {
      gsap.to('.nav', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.to('.hero-txt', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.to('.fb', { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.5)' });
    }
    setTimeout(heroEntrance, 100);
  } else {
      let played = false;
      const playIntro = () => {
        if (played) return;
        played = true;
        sessionStorage.setItem('visited_honiver', 'true');
        const ce = document.getElementById('click-enter');
        if (ce) ce.style.display = 'none';
        if (typeof gsap === 'undefined') {
          intro.style.display = 'none';
          heroEntrance();
          return;
        }
        
        // 1. Mở sách
        const cover = document.getElementById('ic-cover');
        const coverBack = document.getElementById('ic-cover-back');
        const quote = document.getElementById('glass-quote');
        
        if (cover) cover.classList.add('open');
        if (coverBack) coverBack.classList.add('open');
        if (quote) {
            quote.classList.add('show');
            
            // FIX LỖI: Sau 800ms (khi bìa sách đã lật qua một nửa), ta kích z-index của chữ lên 999
            // Tránh việc trình duyệt sập 3D khiến bìa sách (z-index 10) đè lên chữ (z-index 5)
            setTimeout(() => {
                quote.style.zIndex = '999';
            }, 800);
        }
        
        // 2. Chuyển cảnh (1.65s để mở sách xong + 1s giữ nguyên đọc chữ = 2.65s bắt đầu thu nhỏ & mờ)
        gsap.timeline()
          .to('.intro-scene', { scale: 0.85, duration: 0.8, ease: 'power2.inOut' }, 2.65)
          .to('#intro', {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
              intro.style.display = 'none';
              heroEntrance();
              gsap.to('.nav', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
              gsap.to('.hero-txt', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
              gsap.to('.fb', { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.5)' });
            }
          }, 2.65);
      };

      intro.addEventListener('click', playIntro);
      setTimeout(playIntro, 1500);
  }
} else {
  setTimeout(heroEntrance, 100);
}

/* ─── SEARCH AUTOCOMPLETE ─── */
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchRes = document.getElementById('search-res');
  if (!searchInput || !searchRes || typeof booksData === 'undefined') return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchRes.classList.remove('show');
      return;
    }
    
    // Filter books
    const matches = booksData.filter(b => b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query)).slice(0, 5);
    
    if (matches.length > 0) {
      searchRes.innerHTML = matches.map(b => `
        <a href="product.html?id=${b.id}" class="search-res-item">
          <img src="${b.cover}" class="s-thumb" alt="${b.title}">
          <div class="s-info">
            <span class="s-ttl">${b.title}</span>
            <span class="s-auth">${b.author}</span>
          </div>
        </a>
      `).join('');
      searchRes.classList.add('show');
    } else {
      searchRes.innerHTML = `<div class="search-res-item" style="color:#999;">No books found</div>`;
      searchRes.classList.add('show');
    }
  });

  // Hide on click outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchRes.contains(e.target)) {
      searchRes.classList.remove('show');
    }
  });
}
setupSearch();

/* ─── SCROLL PROGRESS + NAV ─── */
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const sprog = document.getElementById('sprog');
  if(sprog) sprog.style.width = (pct * 100) + '%';
  const nav = document.getElementById('nav');
  if(nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  const btt = document.getElementById('btt');
  if(btt) btt.classList.toggle('show', window.scrollY > 600);
  // subtle parallax on hero lines
  const hlines = document.getElementById('hlines');
  if(hlines) hlines.style.transform = `translateY(${window.scrollY * 0.06}px)`;
});


/* ─── HERO ENTRANCE (stagger clip reveals) ─── */
function heroEntrance() {
  if (typeof gsap === 'undefined') return;
  const ease = 'power4.out';
  const tl = gsap.timeline();

  // tag clip reveal
  tl.to('#htag', { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease })
  // display title lines reveal (clip from bottom)
  .to(['#hd1','#hd2','#hd3'], { y: '0%', duration: 1.1, ease, stagger: 0.12 }, '-=0.4')
  .to('#hd4', { y: '0%', duration: 0.9, ease }, '-=0.7')
  // desc + btns + stats fade
  .to('#hdesc', { opacity: 1, y: 0, duration: 0.7, ease }, '-=0.5')
  .to('#hbtns', { opacity: 1, y: 0, duration: 0.6, ease }, '-=0.45')
  .to('#hstats', { opacity: 1, y: 0, duration: 0.6, ease }, '-=0.4')
  // books cascade in
  .from('.fb', {
    y: 100, opacity: 0, rotateX: 20, duration: 1.2,
    ease, stagger: 0.13
  }, '-=0.7');
}

/* Set initial GSAP states */
if (typeof gsap !== 'undefined') {
  gsap.set(['#hdesc', '#hbtns', '#hstats'], { opacity: 0, y: 30 });
}

/* ─── HIỆU ỨNG SLIDER LUÂN PHIÊN (GIỐNG VIDEO LON NƯỚC) ─── */
if (typeof gsap !== 'undefined') {
  const books = document.querySelectorAll('.h-r .fb');
  let currentIndex = 0;
  let autoplayInterval;

  function updateCarousel() {
    books.forEach((book, i) => {
      // Tính toán vị trí tương đối
      let diff = i - currentIndex;
      if (diff < -Math.floor(books.length / 2)) diff += books.length;
      if (diff > Math.floor(books.length / 2)) diff -= books.length;

      let x = 0, z = -300, scale = 0.5, opacity = 0, zIndex = 1, rotateY = 0;

      if (diff === 0) {
        // CUỐN ACTIVE Ở GIỮA (Giữ nguyên scale 1.35 vì sách gốc đã to rồi)
        x = 0; z = 0; scale = 1.35; opacity = 1; zIndex = 10; rotateY = -10;
      } else if (diff === 1) {
        // Cuốn bên PHẢI (Nới x từ 240 lên 290)
        x = 290; z = -120; scale = 0.85; opacity = 0.5; zIndex = 5; rotateY = -25;
      } else if (diff === -1) {
        // Cuốn bên TRÁI (Nới x từ -240 lên -290)
        x = -290; z = -120; scale = 0.85; opacity = 0.5; zIndex = 5; rotateY = 5;
      } else if (diff === 2) {
        // Cuốn xa bên PHẢI (Nới x từ 380 lên 460)
        x = 460; z = -200; scale = 0.6; opacity = 0; zIndex = 2; rotateY = -35;
      } else if (diff === -2) {
        // Cuốn xa bên TRÁI (Nới x từ -380 lên -460)
        x = -460; z = -200; scale = 0.6; opacity = 0; zIndex = 2; rotateY = 15;
      }

      gsap.to(book, {
        x: x, z: z, scale: scale, opacity: opacity,
        zIndex: zIndex, rotateY: rotateY,
        duration: 0.9, ease: "power3.inOut" 
      });
    });
  }

  updateCarousel();

  // Tự động luân phiên mỗi 1.5 giây
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % books.length;
      updateCarousel();
    }, 1500);
  };
  startAutoplay();

  // Hiệu ứng lơ lửng nhẹ
  gsap.to(books, {
    y: -15, duration: 2.5, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 0.15
  });

  // Tương tác khi trỏ chuột và click
  books.forEach((book, i) => {
    book.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    book.addEventListener('mouseleave', startAutoplay);
    book.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
  });
}

/* ─── SCROLL ANIMATIONS ─── */
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  // Section titles: clip + slide up
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const wrap = document.createElement('div');
    wrap.style.overflow = 'hidden';
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);
    gsap.from(el, {
      scrollTrigger: { trigger: wrap, start: 'top 84%' },
      y: '100%', opacity: 0, duration: 0.9, ease: 'power4.out'
    });
  });

  // Category cards stagger
  gsap.from('.cat-c', {
    scrollTrigger: { trigger: '.cat-grid', start: 'top 85%' }, /* Đã sửa .cat-g thành .cat-grid */
    y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
    onComplete: () => {
      // Ép cứng hiển thị rõ nét 100% khi hoạt ảnh chạy xong, chống kẹt mờ
      document.querySelectorAll('.cat-c').forEach(c => {
        c.style.opacity = 1; 
        c.style.transform = 'none';
      });
    }
  });

  // Featured book cards stagger
  gsap.from('#feat-grid .bk', {
    scrollTrigger: { trigger: '#feat-grid', start: 'top 82%' },
    y: 72, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.14,
    onComplete: () => {
      document.querySelectorAll('#feat-grid .bk').forEach(b => {
        b.style.opacity = 1; b.style.transform = 'none';
      });
    }
  });

  // Horizontal strip: auto-scroll with scroll scrub + drag
  const track = document.getElementById('hst');
  const container = document.getElementById('hscroll');
  if (track && container) {
    // ScrollTrigger pan
    gsap.to(track, {
      x: () => -(track.scrollWidth - container.offsetWidth) * 0.55,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.8
      }
    });

    // Drag
    let isDragging = false, startX = 0, startTransX = 0;
    container.addEventListener('mousedown', e => {
      isDragging = true; startX = e.pageX;
      const m = new WebKitCSSMatrix(window.getComputedStyle(track).transform);
      startTransX = m.m41;
      container.style.cursor = 'grabbing';
    });
    window.addEventListener('mouseup', () => { isDragging = false; container.style.cursor = ''; });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const dx = (e.pageX - startX) * 1.5;
      const min = -(track.scrollWidth - container.offsetWidth);
      const clamped = Math.max(min, Math.min(0, startTransX + dx));
      gsap.set(track, { x: clamped });
    });
  }

  // Quote reveal
  gsap.from('#qtxt', {
    scrollTrigger: { trigger: '#quote', start: 'top 76%' },
    y: 50, opacity: 0, duration: 1.1, ease: 'power3.out'
  });
  gsap.from('.q-by', {
    scrollTrigger: { trigger: '#quote', start: 'top 74%' },
    y: 20, opacity: 0, duration: 0.8, delay: 0.4, ease: 'power3.out'
  });

  // About: slide in from sides
  gsap.from('.ab-vis', {
    scrollTrigger: { trigger: '#about', start: 'top 80%' },
    x: -60, opacity: 0, duration: 1, ease: 'power3.out'
  });
  gsap.from('.ab-list li', {
    scrollTrigger: { trigger: '.ab-list', start: 'top 84%' },
    x: -40, opacity: 0, duration: 0.65, ease: 'power3.out', stagger: 0.1
  });

  // Newsletter
  gsap.from(['.nl-title', '.nl-sub', '.nl-form'], {
    scrollTrigger: { trigger: '#nl', start: 'top 80%' },
    y: 36, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12
  });

  // Section chips
  document.querySelectorAll('.sec-chip').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      x: -24, opacity: 0, duration: 0.6, ease: 'power3.out'
    });
  });

  /* ─── HORIZONTAL STRIP SLIDE-IN ITEMS ─── */
  gsap.from('.hs-slide', {
    scrollTrigger: { trigger: '#hscroll', start: 'top 85%' },
    y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1
  });
  
  /* ─── PARALLAX: section BG elements ─── */
  gsap.to('.h-atmo', {
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    y: 80, ease: 'none'
  });

  /* ─── ABOUT VIS PARALLAX ─── */
  gsap.to('.ab-vis', {
    scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
    y: -40, ease: 'none'
  });
}

/* ─── HOME SHOP GRID RENDER & FILTER ─── */
function renderShopGrid(catFilter = 'all') {
  const sg = document.getElementById('shop-grid');
  if (!sg || typeof booksData === 'undefined') return;
  
  const books = catFilter === 'all' ? booksData : booksData.filter(b => b.catLabel === catFilter || b.cat === catFilter);
  
  sg.innerHTML = books.map(b => `
    <div class="bk" data-id="${b.id}">
      ${b.badge ? `<div class="bk-badge">${b.badge}</div>` : ''}
      <div class="bk-img">
        <div class="bk-3d">
          <div class="bk-face b-c2"><img src="${b.cover}" alt="cover" style="width:100%;height:100%;object-fit:cover;border-radius:2px 8px 8px 2px;"></div>
          <div class="bk-sp b-c1"></div>
        </div>
        <div class="bk-ov"><a class="bk-btn" href="product.html?id=${b.id}">View Details →</a></div>
      </div>
      <div class="bk-cat">${b.catLabel || b.cat}</div>
      <div class="bk-title">${b.title}</div>
      <div class="bk-auth">${b.author}</div>
      <div class="bk-pr-row">
        <span class="bk-pr">${formatVND ? formatVND(b.price) : '₫' + b.price.toLocaleString()}</span>
        <span class="bk-pr-old">${formatVND ? formatVND(b.priceOld) : '₫' + b.priceOld.toLocaleString()}</span>
        <span class="bk-star">★ ${b.rating.toFixed(1)}</span>
      </div>
    </div>
  `).join('');
  
  // Re-attach click events if needed
  sg.querySelectorAll('.bk').forEach(c => {
    c.addEventListener('click', e => { 
      if (e.target.closest('.bk-btn')) return; 
      window.location.href = 'product.html?id=' + c.dataset.id;
    });
  });
}

const shopFilters = document.querySelectorAll('#shop-filters .sort-btn');
if (shopFilters.length > 0) {
  shopFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      shopFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderShopGrid(btn.dataset.cat);
    });
  });
  renderShopGrid('all');
}

/* ─── MODAL (Removed in favor of Shopee-like Product Page) ─── */
document.querySelectorAll('.bk, .fb').forEach(c => {
  c.addEventListener('click', e => { 
    if (e.target.closest('.bk-btn')) return; 
    const id = c.dataset.id;
    if(id) {
      window.location.href = 'product.html?id=' + id;
    }
  });
});

/* ─── NEWSLETTER ─── */
function doSub() {
  const nle = document.getElementById('nle');
  const v = nle ? nle.value : '';
  if (!v || !v.includes('@')) { alert('Please enter a valid email.'); return; }
  const btn = document.querySelector('#nl button');
  if(btn) {
    btn.textContent = '✓ Subscribed!';
    btn.style.background = '#1a8a5e';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
  }
  if(nle) nle.value = '';
}

/* ─── HAMBURGER ─── */
const ham = document.getElementById('ham');
if(ham) {
  ham.addEventListener('click', () => {
    const nl = document.querySelector('.n-links');
    if(!nl) return;
    const open = nl.style.display === 'flex';
    if (!open) {
      nl.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(244,247,255,.97);padding:30px 5%;gap:22px;border-bottom:1px solid var(--bdr);z-index:999;backdrop-filter:blur(24px)';
      nl.querySelectorAll('a').forEach(a => a.style.color = 'var(--navy)');
      if (typeof gsap !== 'undefined') gsap.from(nl, { y: -20, opacity: 0, duration: 0.4, ease: 'power3.out' });
    } else {
      nl.style.display = 'none';
    }
  });
}

/* ─── COUNTER ANIMATION on stats ─── */
function animateCounter(el, end) {
  if (typeof gsap === 'undefined') return;
  gsap.from({ v: 0 }, {
    scrollTrigger: { trigger: el, start: 'top 85%' },
    v: end, duration: 1.6, ease: 'power2.out',
    onUpdate() { /* just for trigger */ }
  });
}

/* ─── SMOOTH HOVER on nav links ─── */
if (typeof gsap !== 'undefined') {
  document.querySelectorAll('.n-links a:not(.n-cta)').forEach(a => {
    a.addEventListener('mouseenter', () => gsap.to(a, { y: -2, duration: 0.25, ease: 'power2.out' }));
    a.addEventListener('mouseleave', () => gsap.to(a, { y: 0, duration: 0.25, ease: 'power2.out' }));
  });

  /* ─── BUTTON HOVER RIPPLE ─── */
  document.querySelectorAll('.btn-fill, .n-cta').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.cssText = `position:absolute;width:1px;height:1px;background:rgba(255,255,255,.3);border-radius:50%;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;pointer-events:none;`;
      this.style.position = 'relative'; this.style.overflow = 'hidden';
      this.appendChild(ripple);
      gsap.to(ripple, { scale: 400, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
    });
  });
}
/* ─── XỬ LÝ HỆ THỐNG ĐĂNG NHẬP & PHÂN QUYỀN FORM REVIEW ─── */
function openLoginModal(e) {
  if(e) e.preventDefault();
  const m = document.getElementById('auth-modal');
  if(m) m.classList.add('on');
}

function closeLoginModal() {
  const m = document.getElementById('auth-modal');
  if(m) m.classList.remove('on');
}

function doLogin(mockName) {
  let name = mockName;
  if (!name) {
    const nameInput = document.getElementById('auth-name');
    if (!nameInput) return;
    name = nameInput.value.trim();
  }
  
  if(!name) { alert('Please enter your name to sign in!'); return; }
  
  // Lưu phiên đăng nhập ảo vào trình duyệt
  localStorage.setItem('honiver_user', name);
  
  const nameInput = document.getElementById('auth-name');
  if (nameInput) nameInput.value = '';
  
  closeLoginModal();
  checkLoginState();
}

function doLogout(e) {
  if(e) e.preventDefault();
  localStorage.removeItem('honiver_user');
  checkLoginState();
}

function checkLoginState() {
  const user = localStorage.getItem('honiver_user');
  const loginBtns = document.querySelectorAll('.nav-login-btn, .n-cta');
  
  loginBtns.forEach(btn => {
    // Không ghi đè nút 'More Information' ở menu nếu nó không phải nút Login
    if (btn.classList.contains('nav-login-btn') || btn.textContent === 'Login' || btn.textContent.includes('Hi, ')) {
      if(user) {
        btn.innerHTML = `Hi, ${user} <span style="font-size:0.75em; font-weight:normal; text-decoration:underline; margin-left:8px; opacity:0.6;" onclick="doLogout(event)">(Logout)</span>`;
        btn.onclick = (e) => e.preventDefault();
        btn.style.padding = "10px 16px";
      } else {
        btn.innerHTML = 'Login';
        btn.onclick = openLoginModal;
      }
    }
  });

  // ĐỒNG BỘ REVIEW FORM: Nếu đang ở trang chi tiết sản phẩm, tự động mở khóa form
  const reqArea = document.getElementById('rv-login-req');
  const formArea = document.getElementById('rv-form-area');
  if(reqArea && formArea) {
    if(user) {
      reqArea.style.display = 'none';
      formArea.style.display = 'block';
    } else {
      reqArea.style.display = 'block';
      formArea.style.display = 'none';
    }
  }
}

// Chạy rà soát trạng thái ngay khi khởi động trang web
document.addEventListener('DOMContentLoaded', checkLoginState);