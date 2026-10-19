// Chamak Foundation — shared site behaviour
(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Sticky nav shrink on scroll ---- */
  var nav = document.querySelector('.nav');
  if(nav){
    var onScroll = function(){
      if(window.scrollY > 40){ nav.classList.add('is-scrolled'); }
      else{ nav.classList.remove('is-scrolled'); }
    };
    document.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  /* ---- Mobile menu ---- */
  var burger = document.querySelector('.nav__burger');
  var mobile = document.querySelector('.nav__mobile');
  var scrim = document.querySelector('.nav__scrim');
  var closeBtn = document.querySelector('.nav__mobile-close');

  function openMenu(){
    if(!mobile) return;
    mobile.classList.add('is-open');
    if(scrim) scrim.classList.add('is-open');
    if(burger){
      burger.classList.add('is-active');
      burger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow='hidden';
  }

  function closeMenu(){
    if(!mobile) return;
    mobile.classList.remove('is-open');
    if(scrim) scrim.classList.remove('is-open');
    if(burger){
      burger.classList.remove('is-active');
      burger.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow='';
  }

  function toggleMenu(){
    if(mobile && mobile.classList.contains('is-open')){
      closeMenu();
    } else {
      openMenu();
    }
  }

  if(burger){
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', toggleMenu);
  }
  if(closeBtn){ closeBtn.addEventListener('click', closeMenu); }
  if(scrim){ scrim.addEventListener('click', closeMenu); }
  if(mobile){
    mobile.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && mobile && mobile.classList.contains('is-open')){
      closeMenu();
    }
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth > 1180 && mobile && mobile.classList.contains('is-open')){
      closeMenu();
    }
  });

  /* ---- Scroll reveal (restrained: one entrance per element) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length){
    if(reduceMotion){
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, {threshold:0.15, rootMargin:'0px 0px -60px 0px'});
      revealEls.forEach(function(el){ io.observe(el); });
    }
  }

  /* ---- Stat count-up ---- */
  var stats = document.querySelectorAll('.stat__num[data-count]');
  if(stats.length){
    var animateStat = function(el){
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      if(reduceMotion){ el.textContent = target + suffix; return; }
      var duration = 1400;
      var start = null;
      function step(ts){
        if(start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if(progress < 1){ requestAnimationFrame(step); }
        else { el.textContent = target + suffix; }
      }
      requestAnimationFrame(step);
    };
    var statIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          animateStat(entry.target);
          statIO.unobserve(entry.target);
        }
      });
    }, {threshold:0.4});
    stats.forEach(function(el){ statIO.observe(el); });
  }

  /* ---- Contact / newsletter form (front-end only — no backend configured) ---- */
  var forms = document.querySelectorAll('[data-noop-form]');
  forms.forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if(note){
        note.textContent = 'Thanks — this form is not yet connected to an inbox. Please email info@chamakfoundation.org directly until this is wired up.';
      }
    });
  });

  /* ---- Simple starfield for navy hero/CTA sections ---- */
  function paintStars(canvas){
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    function size(){
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      return rect;
    }
    var rect = size();
    var count = Math.floor((rect.width * rect.height) / 9000);
    var stars = [];
    for(var i=0;i<count;i++){
      stars.push({
        x: Math.random()*rect.width,
        y: Math.random()*rect.height,
        r: Math.random()*1.4 + 0.3,
        o: Math.random()*0.6 + 0.15,
        tw: Math.random()*0.02 + 0.005,
        dir: Math.random() > 0.5 ? 1 : -1
      });
    }
    function draw(){
      ctx.clearRect(0,0,rect.width,rect.height);
      stars.forEach(function(s){
        if(!reduceMotion){
          s.o += s.tw * s.dir;
          if(s.o > 0.75 || s.o < 0.1){ s.dir *= -1; }
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(232,200,120,' + s.o + ')';
        ctx.fill();
      });
      if(!reduceMotion){ requestAnimationFrame(draw); }
    }
    draw();
    window.addEventListener('resize', function(){ rect = size(); }, {passive:true});
  }
  /* ---- Hero Slider (Auto-scroll / Carousel) ---- */
  var slider = document.getElementById('heroSlider');
  if(slider){
    var slides = slider.querySelectorAll('.hero-slider__slide');
    var dots = slider.querySelectorAll('.hero-slider__dot');
    var prevBtn = slider.querySelector('.hero-slider__btn--prev');
    var nextBtn = slider.querySelector('.hero-slider__btn--next');
    var current = 0;
    var timer = null;
    var isPaused = false;

    function showSlide(idx){
      current = (idx + slides.length) % slides.length;
      slides.forEach(function(s, i){
        if(i === current){ s.classList.add('is-active'); s.setAttribute('aria-hidden', 'false'); }
        else { s.classList.remove('is-active'); s.setAttribute('aria-hidden', 'true'); }
      });
      dots.forEach(function(d, i){
        if(i === current){ d.classList.add('is-active'); }
        else { d.classList.remove('is-active'); }
      });
    }

    function next(){ showSlide(current + 1); }
    function prev(){ showSlide(current - 1); }

    function startAuto(){
      if(timer) clearInterval(timer);
      timer = setInterval(function(){
        if(!isPaused){ next(); }
      }, 4500);
    }

    if(nextBtn) nextBtn.addEventListener('click', function(){ next(); startAuto(); });
    if(prevBtn) prevBtn.addEventListener('click', function(){ prev(); startAuto(); });

    dots.forEach(function(dot, i){
      dot.addEventListener('click', function(){
        showSlide(i);
        startAuto();
      });
    });

    slider.addEventListener('mouseenter', function(){ isPaused = true; });
    slider.addEventListener('mouseleave', function(){ isPaused = false; });

    var touchStartX = null;
    slider.addEventListener('touchstart', function(e){
      touchStartX = e.touches[0].clientX;
    }, {passive:true});
    slider.addEventListener('touchend', function(e){
      if(touchStartX === null) return;
      var diff = touchStartX - e.changedTouches[0].clientX;
      if(diff > 45){ next(); startAuto(); }
      else if(diff < -45){ prev(); startAuto(); }
      touchStartX = null;
    }, {passive:true});

    startAuto();
  }

  document.querySelectorAll('.hero__stars').forEach(paintStars);
})();

