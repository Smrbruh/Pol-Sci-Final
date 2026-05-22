/* ============================================================
   PolSciPro — Political Science Exam Preparation Portal
   script.js — Complete Interactivity Layer
   ============================================================ */

/* ============================================================
   DOM References
   ============================================================ */

const globalSearch     = document.getElementById('global-search');
const themeToggle      = document.getElementById('theme-toggle');
const progressBar      = document.getElementById('progress-bar');
const progressDisplay  = document.getElementById('progress-display');
const quizScoreDisplay = document.getElementById('quiz-score-display');
const lectureChecks    = document.querySelectorAll('.lecture-check');
const navLinks         = document.querySelectorAll('.nav-link');
const lectureSections  = document.querySelectorAll('.lecture-section');
const flashcards       = document.querySelectorAll('.flashcard');
const quizQuestions    = document.querySelectorAll('.quiz-question');
const sidebar          = document.getElementById('sidebar');

/* ============================================================
   Constants / State
   ============================================================ */

const TOTAL_LECTURES  = 10;
const TOTAL_QUIZ_Q    = document.querySelectorAll('.quiz-question').length;

let quizScore         = 0;
let quizAnswered      = 0;
let searchHighlights  = [];

/* ============================================================
   Initialization — run on DOMContentLoaded
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProgress();
  initQuizScore();
  initSearch();
  initSidebarNav();
  initFlashcards();
  initBackToTop();
  initSmoothScroll();
  injectBackToTopButton();
  restoreQuizState();
});

/* ============================================================
   1. THEME TOGGLE
   ============================================================ */

function initTheme() {
  const saved = localStorage.getItem('polsci-theme') || 'dark';
  applyTheme(saved);

  themeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme') || 'dark';
    const next    = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('polsci-theme', next);
  });
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);

  if (theme === 'light') {
    document.body.style.setProperty('--color-bg',             '#f4f5f8');
    document.body.style.setProperty('--color-bg-2',           '#ecedf2');
    document.body.style.setProperty('--color-bg-3',           '#e4e6ec');
    document.body.style.setProperty('--color-surface',        'rgba(255,255,255,0.85)');
    document.body.style.setProperty('--color-surface-raised', 'rgba(255,255,255,0.95)');
    document.body.style.setProperty('--color-border',         'rgba(0,0,0,0.09)');
    document.body.style.setProperty('--color-border-subtle',  'rgba(0,0,0,0.05)');
    document.body.style.setProperty('--color-text-primary',   '#111320');
    document.body.style.setProperty('--color-text-secondary', '#3a3f5c');
    document.body.style.setProperty('--color-text-muted',     '#7b82a0');
    document.body.style.setProperty('--gradient-sidebar',     'linear-gradient(180deg,#ecedf2 0%,#e4e6ec 100%)');
    document.body.style.setProperty('--gradient-card',        'linear-gradient(145deg,rgba(255,255,255,0.9) 0%,rgba(240,241,248,0.95) 100%)');
    document.body.style.setProperty('--color-kz',             'rgba(79,195,247,0.06)');
    themeToggle.innerHTML = '&#9728;'; // sun
  } else {
    document.body.style.removeProperty('--color-bg');
    document.body.style.removeProperty('--color-bg-2');
    document.body.style.removeProperty('--color-bg-3');
    document.body.style.removeProperty('--color-surface');
    document.body.style.removeProperty('--color-surface-raised');
    document.body.style.removeProperty('--color-border');
    document.body.style.removeProperty('--color-border-subtle');
    document.body.style.removeProperty('--color-text-primary');
    document.body.style.removeProperty('--color-text-secondary');
    document.body.style.removeProperty('--color-text-muted');
    document.body.style.removeProperty('--gradient-sidebar');
    document.body.style.removeProperty('--gradient-card');
    document.body.style.removeProperty('--color-kz');
    themeToggle.innerHTML = '&#9790;'; // moon
  }
}

/* ============================================================
   2. PROGRESS TRACKER
   ============================================================ */

function initProgress() {
  // Restore checked state from localStorage
  lectureChecks.forEach(cb => {
    const lec = cb.dataset.lec;
    if (localStorage.getItem(`polsci-lec-${lec}`) === 'true') {
      cb.checked = true;
    }

    cb.addEventListener('change', () => {
      localStorage.setItem(`polsci-lec-${lec}`, cb.checked);
      updateProgress();
    });
  });

  updateProgress();
}

function updateProgress() {
  let completed = 0;
  lectureChecks.forEach(cb => { if (cb.checked) completed++; });

  const pct = Math.round((completed / TOTAL_LECTURES) * 100);

  progressBar.style.width    = pct + '%';
  progressDisplay.textContent = `${completed} / ${TOTAL_LECTURES}`;

  // Visual feedback on check items
  lectureChecks.forEach(cb => {
    const label = cb.closest('.check-item');
    if (!label) return;
    if (cb.checked) {
      label.style.background    = 'rgba(92,245,158,0.10)';
      label.style.borderColor   = 'rgba(92,245,158,0.3)';
      label.style.color         = 'var(--color-success)';
    } else {
      label.style.background    = '';
      label.style.borderColor   = '';
      label.style.color         = '';
    }
  });
}

/* ============================================================
   3. QUIZ SYSTEM
   ============================================================ */

// exposed globally because HTML uses onclick="checkAnswer(this,...)"
window.checkAnswer = function(btn, correctValue) {
  const question = btn.closest('.quiz-question');
  if (!question) return;

  // Prevent re-answering
  if (question.dataset.answered === 'true') return;

  const name     = question.querySelector('input[type="radio"]')?.name;
  const selected = question.querySelector(`input[name="${name}"]:checked`);
  const feedback = question.querySelector('.quiz-feedback');

  if (!selected) {
    // Nudge user to select
    feedback.style.display    = 'block';
    feedback.className        = 'quiz-feedback';
    feedback.style.background = 'rgba(255,211,107,0.10)';
    feedback.style.color      = 'var(--color-highlight)';
    feedback.style.border     = '1px solid rgba(255,211,107,0.2)';
    feedback.textContent      = '⚠ Please select an answer first.';
    return;
  }

  const isCorrect = selected.value === correctValue;
  question.dataset.answered = 'true';
  quizAnswered++;

  // Persist answered state
  const qIndex = Array.from(quizQuestions).indexOf(question);
  localStorage.setItem(`polsci-q-${qIndex}-answered`, 'true');
  localStorage.setItem(`polsci-q-${qIndex}-selected`, selected.value);
  localStorage.setItem(`polsci-q-${qIndex}-correct`,  String(isCorrect));

  if (isCorrect) {
    quizScore++;
    localStorage.setItem('polsci-quiz-score', quizScore);
    feedback.textContent = '✓ Correct! Well done.';
    feedback.className   = 'quiz-feedback correct';
  } else {
    feedback.textContent = `✗ Incorrect. The correct answer is option ${correctValue.toUpperCase()}.`;
    feedback.className   = 'quiz-feedback incorrect';
  }

  feedback.style.display = 'block';
  btn.disabled           = true;
  btn.style.opacity      = '0.5';
  btn.style.cursor       = 'not-allowed';

  // Disable all radio buttons in this question
  question.querySelectorAll('input[type="radio"]').forEach(r => r.disabled = true);

  // Highlight correct/incorrect options
  question.querySelectorAll('.quiz-option').forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    if (!radio) return;
    if (radio.value === correctValue) {
      opt.style.background = 'rgba(92,245,158,0.08)';
      opt.style.color      = 'var(--color-success)';
    } else if (radio.value === selected.value && !isCorrect) {
      opt.style.background = 'rgba(255,107,107,0.08)';
      opt.style.color      = 'var(--color-danger)';
    }
  });

  updateQuizScore();
};

function initQuizScore() {
  const saved = parseInt(localStorage.getItem('polsci-quiz-score') || '0', 10);
  quizScore   = saved;
  updateQuizScore();
}

function updateQuizScore() {
  if (TOTAL_QUIZ_Q === 0) return;
  const pct = Math.round((quizScore / TOTAL_QUIZ_Q) * 100);
  quizScoreDisplay.textContent = pct + '%';
}

function restoreQuizState() {
  quizQuestions.forEach((question, i) => {
    const wasAnswered = localStorage.getItem(`polsci-q-${i}-answered`) === 'true';
    if (!wasAnswered) return;

    const selectedVal = localStorage.getItem(`polsci-q-${i}-selected`);
    const wasCorrect  = localStorage.getItem(`polsci-q-${i}-correct`) === 'true';
    const correctVal  = question.dataset.answer;

    question.dataset.answered = 'true';
    quizAnswered++;

    // Restore radio selection
    const radio = question.querySelector(`input[value="${selectedVal}"]`);
    if (radio) radio.checked = true;

    // Disable inputs
    question.querySelectorAll('input[type="radio"]').forEach(r => r.disabled = true);

    const btn = question.querySelector('.quiz-check-btn');
    if (btn) {
      btn.disabled      = true;
      btn.style.opacity = '0.5';
      btn.style.cursor  = 'not-allowed';
    }

    // Restore feedback
    const feedback = question.querySelector('.quiz-feedback');
    if (feedback) {
      feedback.style.display = 'block';
      if (wasCorrect) {
        feedback.textContent = '✓ Correct! Well done.';
        feedback.className   = 'quiz-feedback correct';
      } else {
        feedback.textContent = `✗ Incorrect. The correct answer is option ${correctVal ? correctVal.toUpperCase() : ''}.`;
        feedback.className   = 'quiz-feedback incorrect';
      }
    }

    // Restore option colors
    question.querySelectorAll('.quiz-option').forEach(opt => {
      const r = opt.querySelector('input[type="radio"]');
      if (!r) return;
      if (r.value === correctVal) {
        opt.style.background = 'rgba(92,245,158,0.08)';
        opt.style.color      = 'var(--color-success)';
      } else if (r.value === selectedVal && !wasCorrect) {
        opt.style.background = 'rgba(255,107,107,0.08)';
        opt.style.color      = 'var(--color-danger)';
      }
    });
  });
}

/* ============================================================
   4. FLASHCARDS
   ============================================================ */

function initFlashcards() {
  flashcards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    // Keyboard support
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Flashcard — click or press Enter to flip');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
}

/* ============================================================
   5. GLOBAL SEARCH
   ============================================================ */

function initSearch() {
  if (!globalSearch) return;

  let debounceTimer;

  globalSearch.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = globalSearch.value.trim();
      performSearch(query);
    }, 160);
  });

  // Clear on Escape
  globalSearch.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      globalSearch.value = '';
      performSearch('');
    }
  });
}

function performSearch(query) {
  // Remove existing highlights first
  clearHighlights();

  if (!query || query.length < 2) {
    // Show everything
    lectureSections.forEach(sec => {
      sec.style.display = '';
      sec.style.opacity = '1';
    });
    return;
  }

  const lowerQuery = query.toLowerCase();

  lectureSections.forEach(sec => {
    const text = sec.textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      sec.style.display = '';
      sec.style.opacity = '1';
      highlightText(sec, query);
    } else {
      sec.style.display = 'none';
    }
  });

  // Also search quiz and cheat-sheet sections
  const extraSections = document.querySelectorAll('.quiz-section, .cheat-sheet-global');
  extraSections.forEach(sec => {
    const text = sec.textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      sec.style.display = '';
      highlightText(sec, query);
    }
  });
}

function highlightText(container, query) {
  if (!query) return;
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: node => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        // Skip scripts, styles, inputs
        if (['SCRIPT','STYLE','INPUT','TEXTAREA'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (node.textContent.trim().length === 0) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);

  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');

  nodes.forEach(textNode => {
    if (!regex.test(textNode.textContent)) return;
    regex.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(textNode.textContent)) !== null) {
      if (match.index > lastIndex) {
        frag.appendChild(document.createTextNode(textNode.textContent.slice(lastIndex, match.index)));
      }
      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.style.cssText = 'background:rgba(255,211,107,0.35);color:inherit;border-radius:2px;padding:0 1px;';
      mark.textContent = match[1];
      frag.appendChild(mark);
      searchHighlights.push(mark);
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < textNode.textContent.length) {
      frag.appendChild(document.createTextNode(textNode.textContent.slice(lastIndex)));
    }

    textNode.parentNode.replaceChild(frag, textNode);
  });
}

function clearHighlights() {
  // Replace each mark with its text content
  document.querySelectorAll('mark.search-highlight').forEach(mark => {
    const parent = mark.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
  searchHighlights = [];

  // Restore any hidden sections
  lectureSections.forEach(sec => {
    sec.style.display = '';
    sec.style.opacity = '1';
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ============================================================
   6. SIDEBAR NAVIGATION
   ============================================================ */

function initSidebarNav() {
  // Smooth scroll for all anchor nav links
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    link.addEventListener('click', e => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 64;
      const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // Intersection Observer for active state
  if (!lectureSections.length) return;

  const observerOptions = {
    root:       null,
    rootMargin: '-64px 0px -60% 0px',
    threshold:  0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id   = entry.target.id;
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;

      // Remove active from all
      navLinks.forEach(l => l.classList.remove('active'));
      // Set active
      link.classList.add('active');

      // Scroll sidebar to keep active item visible
      scrollSidebarToActive(link);
    });
  }, observerOptions);

  lectureSections.forEach(sec => observer.observe(sec));
}

function scrollSidebarToActive(link) {
  if (!sidebar) return;
  // Only on desktop (sidebar is sticky)
  if (window.innerWidth <= 768) return;
  const sidebarRect = sidebar.getBoundingClientRect();
  const linkRect    = link.getBoundingClientRect();
  if (linkRect.top < sidebarRect.top || linkRect.bottom > sidebarRect.bottom) {
    link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

/* ============================================================
   7. SMOOTH SCROLLING
   ============================================================ */

function initSmoothScroll() {
  // Handle all anchor links that point to IDs on page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '#site-header') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 64;
      const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   8. BACK TO TOP BUTTON
   ============================================================ */

function injectBackToTopButton() {
  // Create a floating back-to-top button
  const btn = document.createElement('button');
  btn.id          = 'floating-back-top';
  btn.innerHTML   = '&#8593;';
  btn.setAttribute('aria-label', 'Back to top');
  btn.style.cssText = `
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--color-accent);
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(108,119,255,0.4);
    opacity: 0;
    pointer-events: none;
    transform: translateY(12px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 999;
  `;
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  initBackToTop(btn);
}

function initBackToTop(btn) {
  if (!btn) {
    btn = document.getElementById('floating-back-top');
  }
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity       = '1';
      btn.style.pointerEvents = 'auto';
      btn.style.transform     = 'translateY(0)';
    } else {
      btn.style.opacity       = '0';
      btn.style.pointerEvents = 'none';
      btn.style.transform     = 'translateY(12px)';
    }
  }, { passive: true });
}

/* ============================================================
   9. DASHBOARD LIVE UPDATES
   ============================================================ */

// Count flashcards and display total
(function updateFlashcardCount() {
  const total = document.querySelectorAll('.flashcard').length;
  const flashcardCards = document.querySelectorAll('.dashboard-card');
  flashcardCards.forEach(card => {
    const label = card.querySelector('.card-label');
    if (label && label.textContent.trim() === 'Flashcards') {
      const valEl = card.querySelector('.card-value');
      if (valEl) valEl.textContent = total + '+';
    }
  });
})();

// Count concepts
(function updateConceptCount() {
  const total = document.querySelectorAll('.concept-card').length;
  const cards = document.querySelectorAll('.dashboard-card');
  cards.forEach(card => {
    const label = card.querySelector('.card-label');
    if (label && label.textContent.trim() === 'Core Concepts') {
      const valEl = card.querySelector('.card-value');
      if (valEl) valEl.textContent = total + '+';
    }
  });
})();

// Count exam questions
(function updateExamQCount() {
  const total = document.querySelectorAll('.exam-questions li').length;
  const cards = document.querySelectorAll('.dashboard-card');
  cards.forEach(card => {
    const label = card.querySelector('.card-label');
    if (label && label.textContent.trim() === 'Exam Questions') {
      const valEl = card.querySelector('.card-value');
      if (valEl) valEl.textContent = total + '+';
    }
  });
})();

/* ============================================================
   10. LOCAL STORAGE HELPERS
   ============================================================ */

function clearQuizStorage() {
  quizQuestions.forEach((_, i) => {
    localStorage.removeItem(`polsci-q-${i}-answered`);
    localStorage.removeItem(`polsci-q-${i}-selected`);
    localStorage.removeItem(`polsci-q-${i}-correct`);
  });
  localStorage.removeItem('polsci-quiz-score');
}

/* ============================================================
   11. KEYBOARD SHORTCUTS
   ============================================================ */

document.addEventListener('keydown', e => {
  // / to focus search
  if (e.key === '/' && document.activeElement !== globalSearch) {
    e.preventDefault();
    globalSearch?.focus();
  }
});

/* ============================================================
   12. MODEL ANSWERS — EXPAND ANIMATION
   ============================================================ */

document.querySelectorAll('.model-answer').forEach(details => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      const body = details.querySelector('.model-answer-body');
      if (!body) return;
      body.style.animation = 'fadeInUp 0.3s cubic-bezier(0.16,1,0.3,1) both';
    }
  });
});

/* ============================================================
   13. INTERSECTION OBSERVER — Animate cards on scroll
   ============================================================ */

(function animateOnScroll() {
  const targets = document.querySelectorAll(
    '.concept-card, .scholar-card, .cheat-block, .dashboard-card, .flashcard'
  );

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach((el, i) => {
    el.style.opacity          = '0';
    el.style.transform        = 'translateY(12px)';
    el.style.transition       = `opacity 0.4s ease ${i % 8 * 40}ms, transform 0.4s ease ${i % 8 * 40}ms`;
    observer.observe(el);
  });

  // Quick fix: use a different approach without animation API issues
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => revealObserver.observe(el));
})();

/* ============================================================
   14. SEARCH BAR — clear button support
   ============================================================ */

(function addSearchClearBtn() {
  if (!globalSearch) return;
  const bar = globalSearch.closest('.search-bar');
  if (!bar) return;

  const clearBtn = document.createElement('button');
  clearBtn.innerHTML   = '&#215;';
  clearBtn.style.cssText = `
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    color: var(--color-text-muted);
    font-size: 1rem;
    line-height: 1;
    display: none;
    align-items: center;
    transition: color 0.15s ease;
  `;
  clearBtn.setAttribute('aria-label', 'Clear search');
  bar.appendChild(clearBtn);

  globalSearch.addEventListener('input', () => {
    clearBtn.style.display = globalSearch.value ? 'flex' : 'none';
  });

  clearBtn.addEventListener('click', () => {
    globalSearch.value     = '';
    clearBtn.style.display = 'none';
    performSearch('');
    globalSearch.focus();
  });
})();

/* ============================================================
   15. QUIZ RESET BUTTON
   ============================================================ */

(function addQuizResetBtn() {
  const quizSection = document.getElementById('quiz-global');
  if (!quizSection) return;

  const resetBtn = document.createElement('button');
  resetBtn.textContent = '↺ Reset Quiz';
  resetBtn.className   = 'quiz-check-btn';
  resetBtn.style.cssText += 'display:block;margin:24px auto 0;';

  quizSection.appendChild(resetBtn);

  resetBtn.addEventListener('click', () => {
    if (!confirm('Reset all quiz answers and scores?')) return;

    clearQuizStorage();
    quizScore    = 0;
    quizAnswered = 0;
    updateQuizScore();

    quizQuestions.forEach(question => {
      delete question.dataset.answered;

      question.querySelectorAll('input[type="radio"]').forEach(r => {
        r.disabled = false;
        r.checked  = false;
      });

      const btn = question.querySelector('.quiz-check-btn');
      if (btn && btn !== resetBtn) {
        btn.disabled      = false;
        btn.style.opacity = '1';
        btn.style.cursor  = 'pointer';
      }

      const feedback = question.querySelector('.quiz-feedback');
      if (feedback) {
        feedback.style.display = 'none';
        feedback.textContent   = '';
        feedback.className     = 'quiz-feedback';
      }

      question.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.background = '';
        opt.style.color      = '';
      });
    });
  });
})();
