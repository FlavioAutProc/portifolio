// ===== CONFIGURAÇÕES GLOBAIS =====
class Portfolio {
    constructor() {
        this.init();
    }

    // ===== INICIALIZAÇÃO =====
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            // Configurações básicas
            this.setupCurrentYear();
            this.setupTheme();
            
            // Inicializar componentes
            this.initPreloader();
            this.initNavigation();
            this.initHero();
            this.initProjects();
            this.initContactForm();
            this.initModal();
            this.initAnimations();
            this.initScrollEffects();
            this.initCursor();
            this.initCanvas();
            
            // Configurar eventos
            this.setupEventListeners();
        });
    }

    // ===== CONFIGURAÇÕES BÁSICAS =====
    setupCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    setupTheme() {
        // Verificar preferência do sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        
        // Aplicar tema
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (prefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    // ===== PRELOADER =====
    initPreloader() {
        const preloader = document.querySelector('.preloader');
        const progressBar = document.querySelector('.progress-bar');
        
        // Animar barra de progresso
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Remover preloader após animação
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    
                    // Iniciar animações após preloader
                    setTimeout(() => {
                        this.animateOnScroll();
                    }, 100);
                }, 500);
            }
            
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
        }, 100);
    }

    // ===== NAVEGAÇÃO =====
    initNavigation() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.header = document.getElementById('header');
        
        // Menu toggle
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Fechar menu ao clicar em links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Scroll effect no header
        window.addEventListener('scroll', () => this.handleScroll());
    }

    toggleMenu() {
        this.menuToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }

    closeMenu() {
        this.menuToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }

    // ===== HERO SECTION =====
    initHero() {
        // Animar números do hero
        this.animateNumbers('.hero .stat-number');
        
        // Animar botões
        this.setupButtonEffects();
    }

    // ===== PROJETOS =====
    initProjects() {
        this.projectsGrid = document.getElementById('projectsGrid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projects = this.getProjectsData();
        
        // Renderizar projetos
        this.renderProjects();
        
        // Configurar filtros
        this.setupFilters();
        
        // Configurar contadores
        this.updateProjectCounts();
    }

    getProjectsData() {
        return [
            {
                id: 1,
                title: "Controle de Produção e Qualidade",
                description: "Estudo de caso baseado em ambiente operacional real, com foco no controle de produção, padronização de processos e redução de falhas.",
                category: "processos",
                tags: ["Logística", "Processos", "Padronização"],
                image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                status: "em-desenvolvimento",
                progress: 1,
                technologies: ["Excel", "Python", "SQL"],
                startDate: "01/03/2024",
                endDate: "30/06/2024",
                demoUrl: "#",
                codeUrl: "#"
            },
            {
                id: 2,
                title: "Análise de Gargalos Operacionais",
                description: "Mapeamento de fluxo operacional para identificação de gargalos, desperdícios e oportunidades de melhoria com base em observação prática.",
                category: "processos",
                tags: ["Análise de Processos", "Melhoria Contínua"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                status: "em-desenvolvimento",
                progress: 1,
                technologies: ["Excel", "Visio", "PowerPoint"],
                startDate: "15/01/2024",
                endDate: "28/02/2024",
                demoUrl: "#",
                codeUrl: "#"
            },
            {
                id: 3,
                title: "Dashboard de Acompanhamento Operacional",
                description: "Dashboard simples para organização e visualização de indicadores operacionais, apoiando a tomada de decisão.",
                category: "dados",
                tags: ["Excel", "Power BI", "Indicadores"],
                image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                status: "em-desenvolvimento",
                progress: 1,
                technologies: ["Power BI", "Excel", "SQL"],
                startDate: "10/02/2024",
                endDate: "15/05/2024",
                demoUrl: "#",
                codeUrl: "#"
            },
            {
                id: 4,
                title: "Organização e Padronização de Dados",
                description: "Estruturação de dados operacionais em planilhas e consultas básicas para melhorar controle, rastreabilidade e análise.",
                category: "dados",
                tags: ["Excel", "SQL Server", "Dados"],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                status: "em-desenvolvimento",
                progress: 1,
                technologies: ["SQL Server", "Excel", "VBA"],
                startDate: "05/01/2024",
                endDate: "20/02/2024",
                demoUrl: "#",
                codeUrl: "#"
            },
            {
                id: 5,
                title: "Automação de Rotinas Operacionais",
                description: "Automação simples de tarefas repetitivas com scripts para ganho de eficiência e redução de erros manuais.",
                category: "automacao",
                tags: ["Python", "Automação", "Eficiência"],
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                status: "em-desenvolvimento",
                progress: 1,
                technologies: ["Python", "Pandas", "Openpyxl"],
                startDate: "20/03/2024",
                endDate: "30/07/2024",
                demoUrl: "#",
                codeUrl: "#"
            },
            {
                id: 6,
                title: "Sistema Simples de Controle Interno",
                description: "Protótipo de sistema básico para controle e organização de informações operacionais, focado em uso interno.",
                category: "automacao",
                tags: ["Lógica", "Controle", "Sistemas Simples"],
                image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                status: "em-desenvolvimento",
                progress: 1,
                technologies: ["Python", "Tkinter", "SQLite"],
                startDate: "01/02/2024",
                endDate: "25/03/2024",
                demoUrl: "#",
                codeUrl: "#"
            }
        ];
    }

    renderProjects(filter = 'all') {
        if (!this.projectsGrid) return;
        
        // Filtrar projetos
        const filteredProjects = filter === 'all' 
            ? this.projects 
            : this.projects.filter(project => project.category === filter);
        
        // Limpar grid
        this.projectsGrid.innerHTML = '';
        
        // Renderizar projetos
        filteredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            this.projectsGrid.appendChild(projectCard);
        });
        
        // Animar entrada dos cards
        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, i * 100);
            });
        }, 100);
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.category = project.category;
        card.dataset.id = project.id;
        
        const statusClass = project.status === 'em-desenvolvimento' ? 'status-dev' : 'status-done';
        const statusText = project.status === 'em-desenvolvimento' ? 'Em desenvolvimento' : 'Concluído';
        
        card.innerHTML = `
            <div class="project-status ${statusClass}">
                ${statusText}
            </div>
            
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <span class="project-category">${this.getCategoryName(project.category)}</span>
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-progress">
                        <div class="progress-value">${project.progress}%</div>
                        <div class="progress-label">Progresso</div>
                    </div>
                </div>
                
                <p class="project-description">${project.description}</p>
                
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                
                <div class="project-footer">
                    <div class="project-date">
                        <i class="far fa-calendar"></i>
                        ${project.startDate}
                    </div>
                    
                    <div class="project-actions">
                        <button class="action-btn view-details" data-id="${project.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn view-code" data-id="${project.id}">
                            <i class="fas fa-code"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }

    getCategoryName(category) {
        const categories = {
            'processos': 'Processos',
            'dados': 'Análise de Dados',
            'automacao': 'Automação'
        };
        return categories[category] || category;
    }

    setupFilters() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover classe active de todos os botões
                this.filterButtons.forEach(b => b.classList.remove('active'));
                
                // Adicionar classe active ao botão clicado
                btn.classList.add('active');
                
                // Filtrar projetos
                const filter = btn.dataset.filter;
                this.renderProjects(filter);
                
                // Animar transição
                this.projectsGrid.style.opacity = '0.5';
                setTimeout(() => {
                    this.projectsGrid.style.opacity = '1';
                }, 300);
            });
        });
    }

    updateProjectCounts() {
        const counts = {
            all: this.projects.length,
            processos: this.projects.filter(p => p.category === 'processos').length,
            dados: this.projects.filter(p => p.category === 'dados').length,
            automacao: this.projects.filter(p => p.category === 'automacao').length
        };
        
        this.filterButtons.forEach(btn => {
            const filter = btn.dataset.filter;
            const countElement = btn.querySelector('.filter-count');
            if (countElement) {
                countElement.textContent = counts[filter];
            }
        });
    }

    // ===== FORMULÁRIO DE CONTATO =====
    initContactForm() {
        this.contactForm = document.getElementById('contactForm');
        this.submitBtn = this.contactForm?.querySelector('.btn-submit');
        
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        if (!this.submitBtn) return;
        
        // Validar formulário
        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData);
        
        if (!this.validateForm(data)) {
            this.showNotification('Por favor, preencha todos os campos corretamente.', 'error');
            return;
        }
        
        // Simular envio
        this.submitBtn.classList.add('loading');
        
        try {
            // Simular delay de rede
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Sucesso
            this.showNotification(
                `Obrigado, ${data.name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`,
                'success'
            );
            
            // Resetar formulário
            this.contactForm.reset();
            
        } catch (error) {
            this.showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');
        } finally {
            this.submitBtn.classList.remove('loading');
        }
    }

    validateForm(data) {
        return data.name && data.email && data.subject && data.message;
    }

    // ===== MODAL DE DETALHES =====
    initModal() {
        this.modal = document.getElementById('projectModal');
        this.modalClose = document.getElementById('modalClose');
        this.modalOverlay = document.querySelector('.modal-overlay');
        
        // Fechar modal
        if (this.modalClose) {
            this.modalClose.addEventListener('click', () => this.closeModal());
        }
        
        if (this.modalOverlay) {
            this.modalOverlay.addEventListener('click', () => this.closeModal());
        }
        
        // Eventos de teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Delegar eventos de clique nos projetos
        document.addEventListener('click', (e) => {
            if (e.target.closest('.view-details')) {
                const projectId = e.target.closest('.view-details').dataset.id;
                this.openModal(projectId);
            }
            
            if (e.target.closest('.view-code')) {
                const projectId = e.target.closest('.view-code').dataset.id;
                this.openCode(projectId);
            }
        });
    }

    openModal(projectId) {
        const project = this.projects.find(p => p.id == projectId);
        if (!project) return;
        
        // Atualizar conteúdo do modal
        document.getElementById('modalBadge').textContent = 
            project.status === 'em-desenvolvimento' ? 'Em desenvolvimento' : 'Concluído';
        document.getElementById('modalBadge').className = 
            `modal-badge ${project.status === 'em-desenvolvimento' ? 'status-dev' : 'status-done'}`;
        
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        const modalImage = document.getElementById('modalImage');
        modalImage.style.backgroundImage = `url('${project.image}')`;
        
        // Tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = project.tags.map(tag => 
            `<span class="modal-tag">${tag}</span>`
        ).join('');
        
        // Tecnologias
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = project.technologies.map(tech => 
            `<span class="tech-item">${tech}</span>`
        ).join('');
        
        // Progresso
        document.getElementById('progressFill').style.width = `${project.progress}%`;
        document.getElementById('progressText').textContent = `${project.progress}%`;
        
        // Datas
        document.getElementById('startDate').textContent = project.startDate;
        document.getElementById('endDate').textContent = project.endDate;
        
        // Botões de ação
        const liveBtn = document.getElementById('modalLive');
        const codeBtn = document.getElementById('modalCode');
        
        liveBtn.onclick = () => window.open(project.demoUrl, '_blank');
        codeBtn.onclick = () => window.open(project.codeUrl, '_blank');
        
        // Abrir modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    openCode(projectId) {
        const project = this.projects.find(p => p.id == projectId);
        if (project && project.codeUrl) {
            window.open(project.codeUrl, '_blank');
        }
    }

    // ===== ANIMAÇÕES =====
    initAnimations() {
        // Observer para animações on scroll
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Animar números se existirem
                    if (entry.target.querySelector('.stat-number')) {
                        this.animateNumbers('.stat-number', entry.target);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Observar elementos
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    }

    animateNumbers(selector, container = document) {
        const numbers = container.querySelectorAll(selector);
        
        numbers.forEach(number => {
            const target = parseInt(number.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    number.textContent = target;
                    clearInterval(timer);
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 16);
        });
    }

    animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }

    // ===== EFEITOS DE SCROLL =====
    initScrollEffects() {
        this.backToTop = document.getElementById('backToTop');
        
        // Botão voltar ao topo
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                this.backToTop.classList.add('visible');
            } else {
                this.backToTop.classList.remove('visible');
            }
            
            // Animar elementos ao scroll
            this.animateOnScroll();
        });
        
        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    this.closeMenu();
                    
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Botão voltar ao topo
        if (this.backToTop) {
            this.backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // ===== CURSOR PERSONALIZADO =====
    initCursor() {
        this.cursorDot = document.querySelector('.cursor-dot');
        this.cursorOutline = document.querySelector('.cursor-outline');
        
        if (!this.cursorDot || !this.cursorOutline) return;
        
        // Posicionar cursor
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Animar cursor
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            this.cursorDot.style.left = `${cursorX}px`;
            this.cursorDot.style.top = `${cursorY}px`;
            this.cursorOutline.style.left = `${cursorX}px`;
            this.cursorOutline.style.top = `${cursorY}px`;
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
        
        // Efeitos hover
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-category, .action-btn');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursorDot.classList.add('hover');
                this.cursorOutline.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursorDot.classList.remove('hover');
                this.cursorOutline.classList.remove('hover');
            });
        });
    }

    // ===== CANVAS BACKGROUND =====
    initCanvas() {
        const canvas = document.getElementById('projectsCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Ajustar tamanho do canvas
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Partículas
        const particles = [];
        const particleCount = 50;
        
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 200)}, 255, 0.5)`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Criar partículas
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        // Conectar partículas
        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(100, 100, 255, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        // Animar
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            connectParticles();
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    // ===== EFEITOS NOS BOTÕES =====
    setupButtonEffects() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                btn.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
        // Adicionar estilo para ripple
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== NOTIFICAÇÕES =====
    showNotification(message, type = 'success') {
        // Remover notificações existentes
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        // Criar notificação
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
        
        notification.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;
        
        // Estilos
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius-md);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
            max-width: 350px;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 10);
        
        // Remover após 5 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Toggle de tema
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Download CV
        const downloadCV = document.getElementById('downloadCV');
        if (downloadCV) {
            downloadCV.addEventListener('click', () => this.downloadCV());
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    downloadCV() {
        // Simular download
        this.showNotification('Currículo será baixado em breve!', 'success');
        
        // Em produção, aqui você faria o download real
        // window.open('/caminho/para/seu-cv.pdf', '_blank');
    }
}

// ===== INICIALIZAR PORTFÓLIO =====
const portfolio = new Portfolio();

// ===== FUNÇÕES GLOBAIS ADICIONAIS =====
window.addEventListener('load', () => {
    // Garantir que todas as imagens estão carregadas
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
            });
        }
    });
});

// Suporte para navegadores antigos
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}