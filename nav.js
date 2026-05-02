/* ============================================
   ELECTION ASSISTANT — SHARED NAVIGATION
   ============================================ */

(function () {
    // Current page detection
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Navigation HTML
    const navHTML = `
    <nav class="navbar" id="mainNav">
      <div class="container">
        <a href="index.html" class="nav-logo">
          <span>🗳️</span> Election Assistant
        </a>
        <div class="nav-links" id="navLinks">
          <a href="index.html" data-page="index.html">Home</a>
          <a href="timeline.html" data-page="timeline.html">Timeline</a>
          <a href="voting-guide.html" data-page="voting-guide.html">Voting Guide</a>
          <a href="candidates.html" data-page="candidates.html">Candidates</a>
          <a href="chatbot.html" data-page="chatbot.html">Ask AI</a>
          <a href="quiz.html" data-page="quiz.html">Quiz</a>
        </div>
        <div class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  `;

    // Footer HTML
    const footerHTML = `
    <footer class="footer">
      <div class="container">
        <p>🗳️ Election Assistant — Empowering voters with knowledge</p>
        <p class="mt-1" style="font-size: 0.82rem;">Built to educate &amp; inform. Not affiliated with any political party or government body.</p>
      </div>
    </footer>
  `;

    // Inject nav at start of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Inject footer at end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Set active link
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });

    // Hamburger toggle
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar background on scroll
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.12)';
            navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.06)';
            navbar.style.background = 'rgba(10, 14, 26, 0.85)';
        }
    });
})();
