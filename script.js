const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
root.dataset.theme = savedTheme || systemTheme;

const toolLogos = {
  "OpenAI": "pictures/openAI.png",
  "Claude AI": "https://cdn.simpleicons.org/claude",
  "LangChain": "pictures/langchain.png",
  "Vapi": "pictures/vapi.png",
  "Make.com": "https://cdn.simpleicons.org/make",
  "Make": "https://cdn.simpleicons.org/make",
  "N8n": "https://cdn.simpleicons.org/n8n",
  "n8n": "https://cdn.simpleicons.org/n8n",
  "Zapier": "https://cdn.simpleicons.org/zapier",
  "GoHighLevel": "pictures/ghl.png",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Hubspot": "https://cdn.simpleicons.org/hubspot",
  "Google Sheets": "pictures/sheet.png",
  "Slack": "pictures/slack.png",
  "Airtable": "pictures/airtable.png",
  "Notion": "https://cdn.simpleicons.org/notion",
  "Gmail": "https://cdn.simpleicons.org/gmail",
  "Supabase": "https://cdn.simpleicons.org/supabase",
  "SQL": "pictures/sql.png",
  "PostgreSQL": "pictures/postgresql.png",
  "REST APIs": "https://cdn.simpleicons.org/json",
  "RestAPI": "https://cdn.simpleicons.org/json",
  "APIs": "https://cdn.simpleicons.org/json",
  "JSON": "https://cdn.simpleicons.org/json",
  "Webhook": "pictures/webhook.png",
  "Webhooks": "pictures/webhook.png",
  "Stripe": "https://cdn.simpleicons.org/stripe",
  "Pipedrive": "https://cdn.simpleicons.org/pipedrive",
  "Twilio": "https://cdn.simpleicons.org/twilio",
  "Nutrients": "https://cdn.simpleicons.org/nutritionix",
};

const stackGroups = [
  { title: "AI & Automation", tools: ["OpenAI", "Claude AI", "LangChain", "Vapi", "Make.com", "N8n", "Zapier", "GoHighLevel"] },
  { title: "Programming", tools: ["Python", "JavaScript", "HTML5", "CSS3"] },
  { title: "CRM & Integrations", tools: ["GoHighLevel", "Hubspot", "Webhooks", "REST APIs"] },
  { title: "Productivity", tools: ["Google Sheets", "Slack", "Airtable", "Notion"] },
  { title: "Database", tools: ["Supabase", "SQL", "PostgreSQL",] },
];


const projects = [
  {
    title: "AI-Powered Lead Qualification & Booking Appointment System",
    description: "Built an automated lead management solution using n8n, GoHighLevel, OpenAI, and Supabase.The system captures leads, performs AI-powered qualification and scoring, automates appointment booking workflows,updates CRM records, tracks lead data in a database,and executes multi-step follow-up sequences to improve conversion ratesand reduce manual sales effort.",
    tech:["OpenAI", "GoHighLevel", "N8n", "Slack","Supabase","JavaScript","REST APIs","PostgreSQL","Gmail", "Webhook"],
    hue: 190,
     images: [
        "projects/AIpowered.png",
        "projects/AIpowered2.png",
        "projects/AIpowered3.png",
    ]
  },
  {
    title: "AI Revenue Operations Platform",
    description: "AI Revenue Operations Platform is a production-style automation system that  uses GoHighLevel, OpenAI, n8n, Supabase, and Slack to automate lead qualification, sales operations,CRM management, and pipeline progression from lead capture through appointment booking. This project demonstrates real-world AI automation and RevOps engineering practices used by modern sales organizations.",
    tech: ["OpenAI", "GoHighLevel", "N8n", "REST APIs","Slack", "Supabase", "JavaScript", "Gmail", "Webhook", "JSON", "SQL", "Python"],
    hue: 220,
    images: [
        "projects/airevops.png",
        "projects/airevops2.png",
        "projects/airevops3.png",
    ]
  },
  {
    title: "Accounts Payable Automation",
    description: "Developed an end-to-end AI-powered Accounts Payable Automation  System that automatically processes incoming invoice emails, extracts invoice data using AI and OCR, detects duplicate invoices, performs fraud analysis, routes high-risk invoices for human approval,creates accounting records in ERPNext, processes payments throughStripe, archives documents in Google Drive, and maintains a complete audit trail in Supabase.",
    tech: ["OpenAI", "Nutrients", "N8n", "Slack", "Stripe", "RestAPI", "JavaScript", "PostgreSQL", "JSON","Webhook"],
    hue: 160,
    images: [
        "projects/AI PAYABLE.png",
    ]
  },
  {
    title: "WhatsApp Lead Automation",
    description: "Developed an end-to-end WhatsApp automation system using n8n and Meta WhatsApp Cloud API. The solution captures incoming customer inquiries, validates webhook requests, performs duplicate lead detection, categorizes inquiry types, updates a Google Sheets CRM database, and sends personalized WhatsApp responses automatically. The workflow reduces response time, improves lead management efficiency, and ensures accurate conversation tracking while enabling seamless escalationto human agents when required.",
    tech: ["Javascript", "Make.com", "N8n", "Google Sheets", "RestAPI","Webhook", "JSON"],
    hue: 140,
    images: [
        "projects/Whatsapp Automation.png",
    ]
  },
  {
    title: "Complete Lead Management system",
    description: "A production-ready GoHighLevel CRM and sales automation system that streamlines the entire customer journey—from lead capture and qualification to appointment booking, sales pipeline management, customer onboarding, follow-ups, review requests, and customer reactivation—using GoHighLevel’s native automation features.",
    tech: ["GoHighLevel"],
    hue: 260,
    images: [
        "projects/ghlcomplete1.png",
        "projects/ghlcomplete2.png",
    ]
  },
  {
    title: "Daily Field Representative Activity Tracking System",
    description:"Developed an automated field representative reporting system using GoHighLevel, Make.com, and Google Sheets. The solution automatically requests daily activity reports from field reps, captures performance metrics, prevents duplicate submissions, sends reminder notifications, and generates automated team performance summaries.The system stores historical data for reporting and analysis while eliminating manual data collection and spreadsheet updates.",
    tech: ["Make", "Google Sheets", "Webhook", "APIs"],
    hue: 300,
    images:[
      "projects/DAILY REP.png",
      "projects/dailyrep2.png",
      "projects/dailyrep3.png",
    ]
  },
    {
    title: "Landing Pages & Sales Funnels",
    description:"I design and build high-converting landing pages and sales funnels that transform visitors into qualified leads and paying customers. Every page is strategically crafted with compelling copy, mobile responsiveness, fast loading speeds, and clear calls-to-action to maximize conversions.",
      tech: [],
    hue: 300,
    images:[
      "projects/funnels1.png",
      "projects/funnels2.png",
      "projects/funnels3.png",
    ]
  },
];

const skills = [
  ["AI Automation", 90],
  ["Python", 70],
  ["HTML", 70],
  ["CSS", 70],
  ["JavaScript", 70],
  ["GoHighLevel", 90],
  ["Make.com", 90],
  ["N8n", 90],
  ["Zapier", 90],
  ["SQL", 70]
  
];

function initials(text) {
  return text.split(/\s|\+/).filter(Boolean).map((word) => word[0]).join("").slice(0, 3).toUpperCase();
}

function logoMarkup(tool) {
  const logo = toolLogos[tool];
  if (logo) {
    return `<span class="tool-logo"><img src="${logo}" alt="" loading="lazy"></span>`;
  }
  return `<span class="tool-mark">${initials(tool)}</span>`;
}

function svgData(title, hue, index) {
  const label = title.replace(/&/g, "&amp;");
  const accent = `hsl(${hue}, 95%, 58%)`;
  const accentTwo = `hsl(${(hue + 52) % 360}, 90%, 48%)`;
  const gridOpacity = index === 1 ? "0.16" : "0.11";
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop stop-color="${accent}" offset="0"/>
        <stop stop-color="#08111f" offset="0.48"/>
        <stop stop-color="${accentTwo}" offset="1"/>
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="34"/></filter>
    </defs>
    <rect width="1400" height="900" fill="url(#g)"/>
    <g opacity="${gridOpacity}" stroke="#fff">
      ${Array.from({ length: 15 }, (_, i) => `<path d="M0 ${i * 70} H1400"/>`).join("")}
      ${Array.from({ length: 21 }, (_, i) => `<path d="M${i * 70} 0 V900"/>`).join("")}
    </g>
    <circle cx="${index === 0 ? 330 : 1050}" cy="${index === 2 ? 230 : 620}" r="230" fill="#fff" opacity="0.16" filter="url(#blur)"/>
    <rect x="165" y="170" width="1070" height="560" rx="34" fill="rgba(5,9,20,0.62)" stroke="rgba(255,255,255,0.35)"/>
    <rect x="230" y="250" width="360" height="58" rx="14" fill="rgba(255,255,255,0.16)"/>
    <rect x="230" y="345" width="760" height="24" rx="12" fill="rgba(255,255,255,0.24)"/>
    <rect x="230" y="395" width="620" height="24" rx="12" fill="rgba(255,255,255,0.14)"/>
    <rect x="230" y="505" width="230" height="110" rx="18" fill="${accent}" opacity="0.85"/>
    <rect x="500" y="505" width="230" height="110" rx="18" fill="rgba(255,255,255,0.16)"/>
    <rect x="770" y="505" width="230" height="110" rx="18" fill="rgba(255,255,255,0.16)"/>
    <text x="230" y="282" fill="#fff" font-family="Inter, Arial" font-size="38" font-weight="800">${label}</text>
    <text x="230" y="690" fill="rgba(255,255,255,0.72)" font-family="Inter, Arial" font-size="28">Project image ${index + 1} of 3</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getProjectImages(project) {
  return project.images || [0, 1, 2].map((index) => svgData(project.title, project.hue, index));
}

function buildStack() {
  const host = document.getElementById("stackGroups");
  host.innerHTML = stackGroups.map((group) => `
    <article class="stack-group reveal">
      <h3>${group.title}</h3>
      <div class="tool-grid">
        ${group.tools.map((tool) => `
          <div class="tool-card" tabindex="0">
            ${logoMarkup(tool)}
            <strong>${tool}</strong>
          </div>`).join("")}
      </div>
    </article>
  `).join("");
}

function buildProjects() {
  const rail = document.getElementById("projectRail");
  const looped = [...projects, ...projects];
  rail.innerHTML = looped.map((project, index) => {
    const imageCount = getProjectImages(project).length;
    return `
    <article class="project-card" data-project="${index % projects.length}" tabindex="0" role="button" aria-label="Open ${project.title}">
      <div class="project-thumb">
        <img src="${getProjectImages(project)[0]}" alt="${project.title} project preview" loading="lazy">
        <button class="project-image-button" type="button" data-project-open="${index % projects.length}" aria-label="Open ${project.title} gallery"></button>
        <button class="view-project" type="button" data-project-open="${index % projects.length}" aria-label="Open ${imageCount} image${imageCount === 1 ? "" : "s"} for ${project.title}">View all details</button>
      </div>
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tools" aria-label="Tools used for ${project.title}">
          ${project.tech.slice(0, 4).map((tool) => `<span>${logoMarkup(tool)}${tool}</span>`).join("")}
        </div>
      </div>
    </article>
  `}).join("");

  rail.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      openProject(Number(card.dataset.project));
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(Number(card.dataset.project));
      }
    });
  });

  rail.querySelectorAll("[data-project-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      didDrag = false;
      openProject(Number(button.dataset.projectOpen));
    });
  });
}

function buildSkills() {
  const host = document.getElementById("skillBoard");
  host.innerHTML = skills.map(([name, value]) => `
    <article class="skill-row">
      <header><strong>${name}</strong><span>${value}%</span></header>
      <div class="progress-track">
        <span class="progress-bar" data-progress="${value}" style="width: ${value}%">
          <span class="progress-value">${value}%</span>
        </span>
      </div>
    </article>
  `).join("");
}

buildStack();
buildProjects();
buildSkills();

// Typing role animation in the hero section.
(function initTyping() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const texts = [
    "AI Automation Engineer",
    "Workflow Automation Specialist",
    "AI Agent Developer",
    "API Integration Expert"
  ];

  let tIdx = 0;
  let cIdx = 0;
  let deleting = false;

  function tick() {
    const current = texts[tIdx];
    if (deleting) {
      cIdx -= 1;
      el.textContent = current.substring(0, cIdx);
      if (cIdx === 0) {
        deleting = false;
        tIdx = (tIdx + 1) % texts.length;
        setTimeout(tick, 500);
        return;
      }
      setTimeout(tick, 40);
      return;
    }

    cIdx += 1;
    el.textContent = current.substring(0, cIdx);
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(tick, 2200);
      return;
    }
    setTimeout(tick, 75);
  }

  setTimeout(tick, 800);
})();

// Loading screen and animated intro.
const loaderCount = document.getElementById("loaderCount");
const loaderBar = document.getElementById("loaderBar");
const loaderStatus = document.getElementById("loaderStatus");
const loaderMessages = [
  "Loading automation modules...",
  "Calibrating interface...",
  "Syncing AI workflows...",
];
let loadValue = 0;
const loadTimer = setInterval(() => {
  loadValue += Math.ceil(Math.random() * 9);
  if (loadValue >= 100) {
    loadValue = 100;
    clearInterval(loadTimer);
    setTimeout(() => document.getElementById("loadingScreen").classList.add("hide"), 220);
  }
  loaderCount.textContent = loadValue;
  loaderBar.style.width = `${loadValue}%`;
  loaderStatus.textContent = loaderMessages[Math.min(loaderMessages.length - 1, Math.floor(loadValue / 26))];
}, 42);

// Theme switcher with localStorage and 3D scene color sync.
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  themeToggle.classList.remove("pulse");
  requestAnimationFrame(() => themeToggle.classList.add("pulse"));
  updateSceneTheme();
});

// Navigation behavior.
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Cursor glow and subtle parallax.
const cursorGlow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
  document.querySelectorAll("[data-speed]").forEach((item) => {
    const speed = Number(item.dataset.speed);
    const x = (event.clientX / window.innerWidth - 0.5) * speed * 40;
    const y = (event.clientY / window.innerHeight - 0.5) * speed * 40;
    item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
});

// GSAP scroll reveals with IntersectionObserver fallback.
function initAnimation() {
  if (window.gsap) {
    gsap.registerPlugin(window.ScrollTrigger);
    gsap.to(".reveal", {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: "body", start: "top 86%" }
    });
    document.querySelectorAll(".reveal").forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 88%" }
      });
    });
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      gsap.to(bar, {
        width: `${bar.dataset.progress}%`,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: bar, start: "top 88%" }
      });
    });
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "none";
        }
      });
    }, { threshold: 0.16 });
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      bar.style.width = `${bar.dataset.progress}%`;
    });
  }
}

window.addEventListener("load", initAnimation);

// Infinite project carousel with hover pause, manual drag, and arrows.
const rail = document.getElementById("projectRail");
let railPaused = false;
let railPauseTimer;
let dragging = false;
let didDrag = false;
let startX = 0;
let startScroll = 0;
let autoFrame;

function normalizeRail() {
  const half = rail.scrollWidth / 2;
  if (rail.scrollLeft >= half) rail.scrollLeft -= half;
  if (rail.scrollLeft <= 0) rail.scrollLeft += half;
}

function autoScrollRail() {
  if (!railPaused && !dragging) {
    rail.scrollLeft += 0.55;
    normalizeRail();
  }
  autoFrame = requestAnimationFrame(autoScrollRail);
}

function pauseRail(duration = 0) {
  railPaused = true;
  if (railPauseTimer) clearTimeout(railPauseTimer);
  if (duration > 0) {
    railPauseTimer = setTimeout(() => {
      railPaused = false;
    }, duration);
  }
}

function resumeRail() {
  if (railPauseTimer) clearTimeout(railPauseTimer);
  railPaused = false;
}

rail.addEventListener("mouseenter", () => pauseRail());
rail.addEventListener("mouseover", () => pauseRail());
rail.addEventListener("focusin", () => pauseRail());
rail.addEventListener("touchstart", () => pauseRail(), { passive: true });
rail.addEventListener("mouseleave", resumeRail);
rail.addEventListener("focusout", resumeRail);
rail.addEventListener("pointerdown", (event) => {
  pauseRail();
  dragging = true;
  didDrag = false;
  rail.classList.add("dragging");
  rail.setPointerCapture(event.pointerId);
  startX = event.clientX;
  startScroll = rail.scrollLeft;
});
rail.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  const delta = event.clientX - startX;
  if (Math.abs(delta) > 6) didDrag = true;
  rail.scrollLeft = startScroll - delta;
  normalizeRail();
});
rail.addEventListener("pointerup", (event) => {
  const card = event.target.closest(".project-card");
  if (card && !didDrag) {
    openProject(Number(card.dataset.project));
  }
  dragging = false;
  rail.classList.remove("dragging");
  setTimeout(() => { didDrag = false; }, 0);
});
rail.addEventListener("pointercancel", () => {
  dragging = false;
  didDrag = false;
  rail.classList.remove("dragging");
});

function scrollProjects(direction) {
  pauseRail(2400);
  didDrag = false;
  const card = rail.querySelector(".project-card");
  const gap = parseFloat(getComputedStyle(rail).gap) || 16;
  const distance = card ? card.getBoundingClientRect().width + gap : 420;
  rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  setTimeout(normalizeRail, 520);
}

function projectFromRailPoint(clientX, clientY) {
  const cards = [...rail.querySelectorAll(".project-card")].filter((card) => {
    const rect = card.getBoundingClientRect();
    return clientY >= rect.top && clientY <= rect.bottom && rect.right > 0 && rect.left < window.innerWidth;
  });
  if (!cards.length) return null;
  return cards.reduce((closest, card) => {
    const rect = card.getBoundingClientRect();
    const distance = Math.abs(clientX - (rect.left + rect.width / 2));
    return !closest || distance < closest.distance ? { card, distance } : closest;
  }, null).card;
}

document.getElementById("projectPrev").addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  scrollProjects(-1);
});
document.getElementById("projectNext").addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  scrollProjects(1);
});
autoScrollRail();

rail.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-project-open]");
  const card = event.target.closest(".project-card") || projectFromRailPoint(event.clientX, event.clientY);
  if (!opener && !card) return;
  event.preventDefault();
  event.stopPropagation();
  const projectIndex = opener ? opener.dataset.projectOpen : card.dataset.project;
  openProject(Number(projectIndex));
}, true);

// Fullscreen project modal with 3-image gallery, keyboard controls, outside click, and mobile swipe.
const modal = document.getElementById("projectModal");
const galleryImage = document.getElementById("galleryImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const imageCounter = document.getElementById("imageCounter");
let currentProject = 0;
let currentImage = 0;
let swipeStartX = 0;

function updateGallery(direction = 0) {
  const project = projects[currentProject];
  const images = getProjectImages(project);
  const totalImages = images.length;
  currentImage = (currentImage + totalImages) % totalImages;
  galleryImage.classList.add("fade");
  setTimeout(() => {
    galleryImage.src = images[currentImage];
    galleryImage.alt = `${project.title} image ${currentImage + 1}`;
    imageCounter.textContent = `${currentImage + 1}/${totalImages}`;
    document.getElementById("galleryPrev").hidden = totalImages < 2;
    document.getElementById("galleryNext").hidden = totalImages < 2;
    galleryImage.style.transform = `translateX(${direction * 8}px) scale(1.01)`;
    requestAnimationFrame(() => {
      galleryImage.classList.remove("fade");
      galleryImage.style.transform = "";
    });
  }, 150);
}

function openProject(index) {
  currentProject = index;
  currentImage = 0;
  const project = projects[index];
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTech.innerHTML = project.tech.map((item) => `<span>${logoMarkup(item)}${item}</span>`).join("");
  updateGallery();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function moveGallery(step) {
  const images = getProjectImages(projects[currentProject]);
  if (images.length < 2) return;
  currentImage = (currentImage + step + images.length) % images.length;
  updateGallery(step);
}

document.getElementById("galleryPrev").addEventListener("click", () => moveGallery(-1));
document.getElementById("galleryNext").addEventListener("click", () => moveGallery(1));
document.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeProject));
modal.addEventListener("touchstart", (event) => {
  swipeStartX = event.touches[0].clientX;
}, { passive: true });
modal.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].clientX - swipeStartX;
  if (Math.abs(delta) > 42) moveGallery(delta > 0 ? -1 : 1);
}, { passive: true });
window.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("open")) return;
  if (event.key === "Escape") closeProject();
  if (event.key === "ArrowLeft") moveGallery(-1);
  if (event.key === "ArrowRight") moveGallery(1);
});

// Interactive 3D particle background using Three.js.
let scene;
let camera;
let renderer;
let particles;
let shapes = [];
let mouseX = 0;
let mouseY = 0;

function sceneColors() {
  const dark = root.dataset.theme === "dark";
  return {
    particle: dark ? 0x37d8ff : 0x006dff,
    shape: dark ? 0x2f6fff : 0x56b7ff,
    bg: dark ? 0x05070d : 0xf5f7fa
  };
}

function initThree() {
  if (!window.THREE) return;
  const canvas = document.getElementById("sceneCanvas");
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 58;
  const colors = sceneColors();
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(colors.bg, root.dataset.theme === "dark" ? 0.12 : 0.16);
  window.__portfolioRenderer = renderer;
  window.__portfolioScene = scene;

  const geometry = new THREE.BufferGeometry();
  const count = 850;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 125;
    positions[i + 1] = (Math.random() - 0.5) * 80;
    positions[i + 2] = (Math.random() - 0.5) * 80;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: colors.particle,
    size: 0.14,
    transparent: true,
    opacity: 0.72
  });
  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  const shapeMaterial = new THREE.MeshBasicMaterial({
    color: colors.shape,
    wireframe: true,
    transparent: true,
    opacity: 0.28
  });
  const geometries = [
    new THREE.IcosahedronGeometry(6, 0),
    new THREE.TorusKnotGeometry(4.8, 1.1, 92, 12),
    new THREE.OctahedronGeometry(5.4, 0)
  ];
  shapes = geometries.map((geo, index) => {
    const mesh = new THREE.Mesh(geo, shapeMaterial.clone());
    mesh.position.set((index - 1) * 24, index % 2 ? -12 : 11, -12 - index * 8);
    scene.add(mesh);
    return mesh;
  });

  window.addEventListener("resize", resizeThree);
  window.addEventListener("pointermove", (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
  });
  window.__portfolioSceneReady = true;
  animateThree();
}

function resizeThree() {
  if (!renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateSceneTheme() {
  if (!particles) return;
  const colors = sceneColors();
  particles.material.color.setHex(colors.particle);
  shapes.forEach((shape) => shape.material.color.setHex(colors.shape));
  renderer.setClearColor(colors.bg, root.dataset.theme === "dark" ? 0.12 : 0.16);
}

function animateThree() {
  if (!renderer) return;
  particles.rotation.y += 0.0009;
  particles.rotation.x += 0.00025;
  particles.rotation.y += mouseX * 0.0007;
  particles.rotation.x += mouseY * 0.00045;
  shapes.forEach((shape, index) => {
    shape.rotation.x += 0.004 + index * 0.001;
    shape.rotation.y += 0.006 + index * 0.001;
    shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
  });
  renderer.render(scene, camera);
  requestAnimationFrame(animateThree);
}

initThree();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const company = formData.get("company") || "";
    const message = formData.get("message") || "";
    const subject = `Portfolio message from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      "Message:",
      message
    ].join("\n");

    window.location.href = `mailto:jcdeguzmanbw@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
