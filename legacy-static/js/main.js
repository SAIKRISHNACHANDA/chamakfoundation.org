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
        note.textContent = 'Thanks — this form is not yet connected to an inbox. Please email chamakfoundation23@gmail.com directly until this is wired up.';
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
  document.querySelectorAll('.hero__stars').forEach(paintStars);
})();
