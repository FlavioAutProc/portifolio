// Dados dos projetos com status "Em desenvolvimento"
const projects = [
  {
    id: 1,
    title: "Controle de Produção e Qualidade",
    description: "Estudo de caso baseado em ambiente operacional real, com foco no controle de produção, padronização de processos e redução de falhas.",
    category: "processos",
    tags: ["Logística", "Processos", "Padronização"],
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    status: "em-desenvolvimento"
  },
  {
    id: 2,
    title: "Análise de Gargalos Operacionais",
    description: "Mapeamento de fluxo operacional para identificação de gargalos, desperdícios e oportunidades de melhoria com base em observação prática.",
    category: "processos",
    tags: ["Análise de Processos", "Melhoria Contínua"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    status: "concluido"
  },
  {
    id: 3,
    title: "Dashboard de Acompanhamento Operacional",
    description: "Dashboard simples para organização e visualização de indicadores operacionais, apoiando a tomada de decisão.",
    category: "dados",
    tags: ["Excel", "Power BI", "Indicadores"],
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    status: "em-desenvolvimento"
  },
  {
    id: 4,
    title: "Organização e Padronização de Dados",
    description: "Estruturação de dados operacionais em planilhas e consultas básicas para melhorar controle, rastreabilidade e análise.",
    category: "dados",
    tags: ["Excel", "SQL Server", "Dados"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    status: "concluido"
  },
  {
    id: 5,
    title: "Automação de Rotinas Operacionais",
    description: "Automação simples de tarefas repetitivas com scripts para ganho de eficiência e redução de erros manuais.",
    category: "automacao",
    tags: ["Python", "Automação", "Eficiência"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    status: "em-desenvolvimento"
  },
  {
    id: 6,
    title: "Sistema Simples de Controle Interno",
    description: "Protótipo de sistema básico para controle e organização de informações operacionais, focado em uso interno.",
    category: "automacao",
    tags: ["Lógica", "Controle", "Sistemas Simples"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    status: "concluido"
  },
  // {
  //   id: 7,
  //   title: "Otimização de Rotas Logísticas",
  //   description: "Análise e proposta de otimização para rotas de distribuição visando redução de custos e tempo.",
  //   category: "processos",
  //   tags: ["Logística", "Otimização", "Rotas"],
  //   image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //   status: "em-desenvolvimento"
  // },
  // {
  //   id: 8,
  //   title: "Monitoramento de KPIs em Tempo Real",
  //   description: "Solução para monitoramento contínuo de indicadores-chave de desempenho com alertas automáticos.",
  //   category: "dados",
  //   tags: ["Dashboard", "KPIs", "Monitoramento"],
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //   status: "em-desenvolvimento"
  // }
];

// Elementos DOM
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const header = document.getElementById("header");
const projectGrid = document.getElementById("projectGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contactForm");
const backToTop = document.getElementById("backToTop");
const preloader = document.querySelector(".preloader");
const currentYear = document.getElementById("currentYear");
const projectLoading = document.querySelector(".project-loading");

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  // Configurar ano atual
  currentYear.textContent = new Date().getFullYear();
  
  // Inicializar animações
  initAnimations();
  
  // Inicializar observador de interseção
  initIntersectionObserver();
  
  // Renderizar projetos
  renderProjects();
  
  // Configurar eventos
  setupEventListeners();
  
  // Remover preloader após carregamento
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1000);
});

// Configurar eventos
function setupEventListeners() {
  // Menu mobile
  mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  
  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
  
  // Header scroll effect
  window.addEventListener("scroll", handleScroll);
  
  // Filtro de projetos
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => handleFilterClick(btn));
  });
  
  // Formulário de contato
  contactForm.addEventListener("submit", handleFormSubmit);
  
  // Botão voltar ao topo
  backToTop.addEventListener("click", scrollToTop);
}

// Menu mobile
function toggleMobileMenu() {
  navLinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
  
  // Bloquear scroll quando menu estiver aberto
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function closeMobileMenu() {
  navLinks.classList.remove("active");
  mobileMenuBtn.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Scroll effects
function handleScroll() {
  // Header effect
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  
  // Botão voltar ao topo
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
  
  // Animar elementos ao scroll
  animateOnScroll();
}

// Animações ao scroll
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Animar elementos manualmente (fallback)
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('animated');
    }
  });
}

// Inicializar animações de contagem
function initAnimations() {
  // Animar números estatísticos
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    animateCount(stat, target);
  });
}

// Animar contagem
function animateCount(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

// Renderizar projetos
function renderProjects(filter = "all") {
  // Mostrar loading
  projectGrid.innerHTML = "";
  projectLoading.style.display = "flex";
  
  // Simular delay de carregamento
  setTimeout(() => {
    const filteredProjects = filter === "all" 
      ? projects 
      : projects.filter((project) => project.category === filter);
    
    projectGrid.innerHTML = "";
    
    filteredProjects.forEach((project, index) => {
      const projectCard = createProjectCard(project, index);
      projectGrid.appendChild(projectCard);
    });
    
    // Esconder loading
    projectLoading.style.display = "none";
    
    // Animar cards após renderização
    setTimeout(() => {
      document.querySelectorAll('.project-card').forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('animate');
        }, i * 100);
      });
    }, 100);
  }, 500);
}

// Criar card de projeto
function createProjectCard(project, index) {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.setAttribute("data-category", project.category);
  projectCard.style.animationDelay = `${index * 0.1}s`;
  
  // Determinar texto do status
  let statusText = "";
  let statusClass = "";
  if (project.status === "em-desenvolvimento") {
    statusText = "Em desenvolvimento";
    statusClass = "project-badge";
  } else if (project.status === "concluido") {
    statusText = "Concluído";
    statusClass = "project-badge concluido";
  }
  
  projectCard.innerHTML = `
    ${statusText ? `<div class="${statusClass}">${statusText}</div>` : ''}
    <div class="project-img">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
    </div>
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <a href="#" class="btn btn-outline" style="padding: 12px 24px;">
        <span>Ver Detalhes</span>
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  `;
  
  return projectCard;
}

// Filtro de projetos
function handleFilterClick(btn) {
  // Remover classe active de todos os botões
  filterBtns.forEach((btn) => btn.classList.remove("active"));
  
  // Adicionar classe active ao botão clicado
  btn.classList.add("active");
  
  // Filtrar projetos
  const filter = btn.getAttribute("data-filter");
  renderProjects(filter);
  
  // Animar mudança de filtro
  projectGrid.style.opacity = "0.5";
  setTimeout(() => {
    projectGrid.style.opacity = "1";
  }, 500);
}

// Formulário de contato
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Capturar valores do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  
  // Validar formulário
  if (!name || !email || !subject || !message) {
    showNotification("Por favor, preencha todos os campos.", "error");
    return;
  }
  
  // Simular envio do formulário
  showNotification(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`, "success");
  
  // Resetar formulário
  contactForm.reset();
  
  // Animar confirmação
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.innerHTML = '<i class="fas fa-check"></i><span>Mensagem Enviada!</span>';
  submitBtn.style.background = "var(--success-color)";
  
  setTimeout(() => {
    submitBtn.innerHTML = '<span>Enviar Mensagem</span><i class="fas fa-paper-plane"></i>';
    submitBtn.style.background = "";
  }, 3000);
}

// Mostrar notificação
function showNotification(message, type) {
  // Remover notificação anterior se existir
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Criar nova notificação
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  
  // Adicionar ao DOM
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Remover após 5 segundos
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      closeMobileMenu();
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Scroll para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Efeito de digitação no hero (opcional)
function initTypingEffect() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;
  
  const text = "Soluções Digitais para Logística";
  let index = 0;
  
  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Iniciar após 1 segundo
  setTimeout(() => {
    heroTitle.textContent = "";
    typeWriter();
  }, 1000);
}

// Iniciar efeito de digitação se for desejado
// initTypingEffect();

// Adicionar estilos para notificações
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    top: 100px;
    right: 30px;
    background: white;
    padding: 20px 25px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 9999;
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s ease;
    max-width: 350px;
  }
  
  .notification.show {
    transform: translateX(0);
    opacity: 1;
  }
  
  .notification.success {
    border-left: 4px solid var(--success-color);
  }
  
  .notification.error {
    border-left: 4px solid var(--accent-color);
  }
  
  .notification i {
    font-size: 1.5rem;
  }
  
  .notification.success i {
    color: var(--success-color);
  }
  
  .notification.error i {
    color: var(--accent-color);
  }
  
  .notification span {
    color: var(--dark-color);
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

document.head.appendChild(notificationStyles);