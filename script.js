// ========== APP STATE ==========
const appState = {
  theme: "light",
  visitedLectures: [],
  quizScore: 0,
  totalAnswered: 0,
  quizAnswers: {}
};

// ========== DOM ELEMENTS ==========
let dom = {
  themeToggle: null,
  searchInput: null,
  sidebarLinks: [],
  lectureSections: [],
  flashcards: [],
  quizQuestions: [],
  progressFill: null,
  progressDisplay: null,
  quizScoreDisplay: null
};

// ========== UTILITIES ==========
const storage = {
  save: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  load: (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  }
};

const updateDashboard = () => {
  if (dom.progressDisplay) {
    const progress = Math.round((appState.visitedLectures.length / 10) * 100);
    dom.progressDisplay.textContent = `${appState.visitedLectures.length} / 10`;
    if (dom.progressFill) dom.progressFill.style.width = `${progress}%`;
  }
  if (dom.quizScoreDisplay) {
    const score = appState.totalAnswered > 0 ? Math.round((appState.quizScore / appState.totalAnswered) * 100) : 0;
    dom.quizScoreDisplay.textContent = `${score}%`;
  }
};

// ========== THEME SYSTEM ==========
const initTheme = () => {
  const savedTheme = storage.load("theme", "light");
  appState.theme = savedTheme;
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  if (dom.themeToggle) {
    dom.themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }
};

const toggleTheme = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    appState.theme = "light";
    if (dom.themeToggle) dom.themeToggle.textContent = "🌙";
  } else {
    document.body.classList.add("dark");
    appState.theme = "dark";
    if (dom.themeToggle) dom.themeToggle.textContent = "☀️";
  }
  storage.save("theme", appState.theme);
};

// ========== SMOOTH SCROLL & SCROLL SPY ==========
const smoothScroll = (targetId) => {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, null, `#${targetId}`);
  }
};

const initScrollSpy = () => {
  const sections = dom.lectureSections;
  const navLinks = dom.sidebarLinks;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("active");
            const parentLi = link.closest("li");
            if (parentLi) {
              const allLis = document.querySelectorAll(".sidebar-nav .nav-list li");
              allLis.forEach(li => {
                const childLink = li.querySelector(".nav-link");
                if (childLink && childLink !== link) childLink.classList.remove("active");
              });
            }
          } else if (link.getAttribute("href") !== `#${id}`) {
            link.classList.remove("active");
          }
        });
        
        if (!appState.visitedLectures.includes(id)) {
          appState.visitedLectures.push(id);
          storage.save("visitedLectures", appState.visitedLectures);
          updateDashboard();
        }
      }
    });
  }, { threshold: 0.5 });
  
  sections.forEach(section => observer.observe(section));
};

// ========== SEARCH SYSTEM ==========
const highlightText = (text, query) => {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
  return text.replace(regex, `<mark class="search-highlight">$1</mark>`);
};

const removeHighlights = () => {
  document.querySelectorAll(".search-highlight").forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
};

const searchContent = () => {
  const query = dom.searchInput ? dom.searchInput.value.trim() : "";
  removeHighlights();
  
  if (!query) {
    dom.lectureSections.forEach(section => {
      section.style.display = "";
    });
    return;
  }
  
  dom.lectureSections.forEach(section => {
    let found = false;
    const searchableElements = section.querySelectorAll("h2, h3, h4, p, .scholar-card, .concept-card, .lecture-summary p, .scholar-card p, .concept-card p");
    
    searchableElements.forEach(el => {
      const originalText = el.textContent;
      if (originalText.toLowerCase().includes(query.toLowerCase())) {
        found = true;
        if (el.innerHTML) {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = originalText;
          el.innerHTML = highlightText(originalText, query);
        }
      }
    });
    
    section.style.display = found ? "" : "none";
  });
};

// ========== FLASHCARD SYSTEM ==========
const initFlashcards = () => {
  const flashcardContainers = document.querySelectorAll(".flashcard-grid");
  flashcardContainers.forEach(container => {
    const cards = container.querySelectorAll(".flashcard");
    cards.forEach(card => {
      card.removeEventListener("click", () => {});
      card.addEventListener("click", function(e) {
        e.stopPropagation();
        this.classList.toggle("active");
      });
    });
  });
};

// ========== QUIZ SYSTEM ==========
const saveQuizState = () => {
  storage.save("quizScore", appState.quizScore);
  storage.save("totalAnswered", appState.totalAnswered);
  storage.save("quizAnswers", appState.quizAnswers);
  updateDashboard();
};

const updateQuizScoreDisplay = () => {
  if (dom.quizScoreDisplay) {
    const percent = appState.totalAnswered > 0 ? Math.round((appState.quizScore / appState.totalAnswered) * 100) : 0;
    dom.quizScoreDisplay.textContent = `${percent}%`;
  }
};

const checkAnswer = (button, correctValue) => {
  const questionDiv = button.closest(".quiz-question");
  if (!questionDiv) return;
  
  const selectedRadio = questionDiv.querySelector('input[type="radio"]:checked');
  const feedbackDiv = questionDiv.querySelector(".quiz-feedback");
  const questionIndex = Array.from(document.querySelectorAll(".quiz-question")).indexOf(questionDiv);
  
  if (questionDiv.dataset.answered === "true") {
    if (feedbackDiv) {
      feedbackDiv.style.display = "block";
      feedbackDiv.textContent = "You've already answered this question!";
      feedbackDiv.className = "quiz-feedback";
      setTimeout(() => {
        if (feedbackDiv) feedbackDiv.style.display = "none";
      }, 2000);
    }
    return;
  }
  
  if (!selectedRadio) {
    if (feedbackDiv) {
      feedbackDiv.style.display = "block";
      feedbackDiv.textContent = "Please select an answer first!";
      feedbackDiv.className = "quiz-feedback";
      setTimeout(() => {
        if (feedbackDiv) feedbackDiv.style.display = "none";
      }, 2000);
    }
    return;
  }
  
  const isCorrect = selectedRadio.value === correctValue;
  questionDiv.dataset.answered = "true";
  
  if (isCorrect) {
    if (!appState.quizAnswers[questionIndex]) {
      appState.quizScore++;
    }
    if (feedbackDiv) {
      feedbackDiv.textContent = "✓ Correct! Great job!";
      feedbackDiv.className = "quiz-feedback correct";
      feedbackDiv.style.display = "block";
    }
  } else {
    const correctAnswerText = questionDiv.querySelector(`input[value="${correctValue}"]`)?.parentElement?.textContent || correctValue;
    if (feedbackDiv) {
      feedbackDiv.textContent = `✗ Incorrect. The correct answer is: ${correctAnswerText}`;
      feedbackDiv.className = "quiz-feedback incorrect";
      feedbackDiv.style.display = "block";
    }
  }
  
  if (!appState.quizAnswers[questionIndex]) {
    appState.totalAnswered++;
    appState.quizAnswers[questionIndex] = {
      answered: true,
      correct: isCorrect,
      selectedValue: selectedRadio.value,
      correctValue: correctValue
    };
  }
  
  const allRadios = questionDiv.querySelectorAll('input[type="radio"]');
  allRadios.forEach(radio => {
    radio.disabled = true;
  });
  
  saveQuizState();
  updateQuizScoreDisplay();
  
  const checkBtn = questionDiv.querySelector(".quiz-check-btn");
  if (checkBtn) {
    checkBtn.disabled = true;
    checkBtn.style.opacity = "0.5";
    checkBtn.style.cursor = "not-allowed";
  }
  
  const totalQuestions = document.querySelectorAll(".quiz-question").length;
  const answeredQuestions = Object.keys(appState.quizAnswers).length;
  
  if (answeredQuestions === totalQuestions && totalQuestions > 0) {
    setTimeout(() => {
      const finalPercent = Math.round((appState.quizScore / totalQuestions) * 100);
      let summaryMessage = `Quiz Complete!\nScore: ${appState.quizScore}/${totalQuestions} (${finalPercent}%)`;
      if (finalPercent >= 80) summaryMessage += "\n\nExcellent work! 🎉";
      else if (finalPercent >= 60) summaryMessage += "\n\nGood job! Review the incorrect answers to improve. 📚";
      else summaryMessage += "\n\nKeep studying! Review the lectures and try again. 💪";
      
      alert(summaryMessage);
    }, 100);
  }
};

// ========== PROGRESS TRACKING ==========
const initProgressTracking = () => {
  const savedVisited = storage.load("visitedLectures", []);
  appState.visitedLectures = savedVisited;
  
  const savedQuizScore = storage.load("quizScore", 0);
  const savedTotalAnswered = storage.load("totalAnswered", 0);
  const savedQuizAnswers = storage.load("quizAnswers", {});
  
  appState.quizScore = savedQuizScore;
  appState.totalAnswered = savedTotalAnswered;
  appState.quizAnswers = savedQuizAnswers;
  
  updateDashboard();
  
  const checklistItems = document.querySelectorAll(".lecture-check");
  checklistItems.forEach(item => {
    item.removeEventListener("change", handleChecklistChange);
    item.addEventListener("change", handleChecklistChange);
  });
};

const handleChecklistChange = (e) => {
  const checkbox = e.target;
  const lectureNum = checkbox.getAttribute("data-lec");
  const lectureId = `lecture-${lectureNum}`;
  
  if (checkbox.checked) {
    if (!appState.visitedLectures.includes(lectureId)) {
      appState.visitedLectures.push(lectureId);
    }
  } else {
    const index = appState.visitedLectures.indexOf(lectureId);
    if (index > -1) {
      appState.visitedLectures.splice(index, 1);
    }
  }
  
  storage.save("visitedLectures", appState.visitedLectures);
  updateDashboard();
  
  const progressPercent = Math.round((appState.visitedLectures.length / 10) * 100);
  if (dom.progressFill) dom.progressFill.style.width = `${progressPercent}%`;
};

// ========== UI ENHANCEMENTS ==========
const addButtonFeedback = () => {
  document.querySelectorAll("button, .quiz-check-btn, .theme-toggle, .search-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
      this.style.transform = "scale(0.97)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });
};

const addKeyboardSupport = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== dom.searchInput) {
      e.preventDefault();
      if (dom.searchInput) dom.searchInput.focus();
    }
    if (e.key === "Escape" && document.activeElement === dom.searchInput) {
      if (dom.searchInput) dom.searchInput.blur();
    }
  });
};

const initSidebarNavigation = () => {
  dom.sidebarLinks.forEach(link => {
    link.removeEventListener("click", (e) => {});
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        smoothScroll(href.substring(1));
      }
    });
  });
};

// ========== FLASHCARD SHUFFLE ==========
const addShuffleButton = () => {
  const flashcardContainers = document.querySelectorAll(".flashcard-grid");
  flashcardContainers.forEach(container => {
    if (!container.querySelector(".shuffle-btn")) {
      const header = container.querySelector("h3");
      if (header && !container.parentElement.querySelector(".shuffle-btn")) {
        const shuffleBtn = document.createElement("button");
        shuffleBtn.textContent = "🔀 Shuffle";
        shuffleBtn.className = "shuffle-btn";
        shuffleBtn.style.marginLeft = "1rem";
        shuffleBtn.style.padding = "0.25rem 0.75rem";
        shuffleBtn.style.fontSize = "0.75rem";
        shuffleBtn.style.borderRadius = "8px";
        shuffleBtn.style.border = "1px solid var(--border-light, #e2e8f0)";
        shuffleBtn.style.backgroundColor = "var(--bg-secondary, #f7f9fc)";
        shuffleBtn.style.cursor = "pointer";
        shuffleBtn.style.transition = "all 0.2s ease";
        
        shuffleBtn.addEventListener("click", () => {
          const cards = Array.from(container.querySelectorAll(".flashcard"));
          for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            cards[i].parentNode.insertBefore(cards[j], cards[i]);
            cards[j].parentNode.insertBefore(cards[i], cards[j]);
          }
        });
        
        header.appendChild(shuffleBtn);
      }
    }
  });
};

// ========== RESTORE QUIZ STATE ==========
const restoreQuizState = () => {
  const savedAnswers = storage.load("quizAnswers", {});
  const questions = document.querySelectorAll(".quiz-question");
  
  questions.forEach((question, index) => {
    if (savedAnswers[index]) {
      question.dataset.answered = "true";
      const saved = savedAnswers[index];
      
      if (saved.selectedValue) {
        const radio = question.querySelector(`input[value="${saved.selectedValue}"]`);
        if (radio) radio.checked = true;
      }
      
      const allRadios = question.querySelectorAll('input[type="radio"]');
      allRadios.forEach(radio => {
        radio.disabled = true;
      });
      
      const checkBtn = question.querySelector(".quiz-check-btn");
      if (checkBtn) {
        checkBtn.disabled = true;
        checkBtn.style.opacity = "0.5";
        checkBtn.style.cursor = "not-allowed";
      }
      
      const feedbackDiv = question.querySelector(".quiz-feedback");
      if (feedbackDiv && saved.correct !== undefined) {
        feedbackDiv.style.display = "block";
        if (saved.correct) {
          feedbackDiv.textContent = "✓ Correct! Great job!";
          feedbackDiv.className = "quiz-feedback correct";
        } else {
          feedbackDiv.textContent = `✗ Incorrect. The correct answer was option ${saved.correctValue.toUpperCase()}.`;
          feedbackDiv.className = "quiz-feedback incorrect";
        }
      }
    }
  });
};

// ========== GLOBAL CHECKANSWER FUNCTION ==========
window.checkAnswer = (button, correctValue) => {
  checkAnswer(button, correctValue);
};

// ========== INITIALIZATION ==========
const init = () => {
  dom.themeToggle = document.getElementById("theme-toggle");
  dom.searchInput = document.getElementById("global-search");
  dom.sidebarLinks = Array.from(document.querySelectorAll(".sidebar-nav .nav-link"));
  dom.lectureSections = Array.from(document.querySelectorAll(".lecture-section"));
  dom.flashcards = Array.from(document.querySelectorAll(".flashcard"));
  dom.quizQuestions = Array.from(document.querySelectorAll(".quiz-question"));
  dom.progressFill = document.getElementById("progress-bar");
  dom.progressDisplay = document.getElementById("progress-display");
  dom.quizScoreDisplay = document.getElementById("quiz-score-display");
  
  initTheme();
  if (dom.themeToggle) dom.themeToggle.addEventListener("click", toggleTheme);
  if (dom.searchInput) dom.searchInput.addEventListener("input", searchContent);
  
  initSidebarNavigation();
  initScrollSpy();
  initFlashcards();
  initProgressTracking();
  restoreQuizState();
  addButtonFeedback();
  addKeyboardSupport();
  addShuffleButton();
  
  if (dom.progressDisplay) updateDashboard();
  if (dom.quizScoreDisplay) updateQuizScoreDisplay();
  
  if (window.location.hash) {
    setTimeout(() => {
      const targetId = window.location.hash.substring(1);
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}