// Translations
const translations = {
    es: {
        // Navigation
        logoSubtitle: 'Barbería Premium',
        navHome: 'Inicio',
        navServices: 'Servicios',
        navAbout: 'Nosotros',
        navGallery: 'Galería',
        navContact: 'Contacto',

        // Hero
        heroTitle: 'Estilo Clásico, Experiencia Moderna',
        heroSubtitle: 'La mejor barbería en Medellín desde 2015',
        heroBtn: 'Reserva Tu Cita',

        // Services
        servicesTitle: 'Nuestros Servicios',
        servicesSubtitle: 'Calidad premium para el caballero moderno',
        service1Title: 'Corte Clásico',
        service1Desc: 'Corte tradicional con técnicas profesionales y acabado impecable',
        service2Title: 'Afeitado Premium',
        service2Desc: 'Afeitado con navaja, toalla caliente y productos de alta gama',
        service3Title: 'Arreglo de Barba',
        service3Desc: 'Diseño y perfilado de barba con productos premium',
        service4Title: 'Combo Completo',
        service4Desc: 'Corte + Barba + Afeitado con toalla caliente',
        service5Title: 'Corte Infantil',
        service5Desc: 'Corte especial para niños en ambiente amigable',
        service6Title: 'Diseños Especiales',
        service6Desc: 'Degradados artísticos y diseños personalizados',

        // About
        aboutTitle: 'Sobre Nosotros',
        aboutText1: 'Desde 2015, Ali Baba Barbería ha sido el destino preferido para caballeros que buscan calidad, estilo y una experiencia excepcional en Medellín.',
        aboutText2: 'Nuestro equipo de barberos profesionales está capacitado en las técnicas más modernas y clásicas, garantizando un servicio de primera clase en cada visita.',
        aboutText3: 'Utilizamos solo productos premium y herramientas profesionales para asegurar los mejores resultados. Tu satisfacción es nuestra prioridad.',
        feature1: 'Años de Experiencia',
        feature2: 'Clientes Satisfechos',
        feature3: 'Barberos Expertos',

        // Gallery
        galleryTitle: 'Nuestra Galería',
        gallerySubtitle: 'Algunos de nuestros mejores trabajos',

        // Contact
        contactTitle: 'Contáctanos',
        contactSubtitle: 'Visítanos o agenda tu cita',
        contactAddress: 'Dirección',
        contactPhone: 'Teléfono',
        contactHours: 'Horario',
        contactEmail: 'Email',
        hours1: 'Lunes - Viernes: 9:00 AM - 8:00 PM',
        hours2: 'Sábados: 9:00 AM - 7:00 PM',
        hours3: 'Domingos: 10:00 AM - 4:00 PM',

        // Footer
        footerText: 'Hecho con amor por lotuslabs.one'
    },
    en: {
        // Navigation
        logoSubtitle: 'Premium Barbershop',
        navHome: 'Home',
        navServices: 'Services',
        navAbout: 'About',
        navGallery: 'Gallery',
        navContact: 'Contact',

        // Hero
        heroTitle: 'Classic Style, Modern Experience',
        heroSubtitle: 'The best barbershop in Medellín since 2015',
        heroBtn: 'Book Your Appointment',

        // Services
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Premium quality for the modern gentleman',
        service1Title: 'Classic Haircut',
        service1Desc: 'Traditional cut with professional techniques and flawless finish',
        service2Title: 'Premium Shave',
        service2Desc: 'Straight razor shave with hot towel and high-end products',
        service3Title: 'Beard Grooming',
        service3Desc: 'Beard design and shaping with premium products',
        service4Title: 'Complete Combo',
        service4Desc: 'Haircut + Beard + Hot Towel Shave',
        service5Title: 'Kids Haircut',
        service5Desc: 'Special haircut for children in a friendly environment',
        service6Title: 'Special Designs',
        service6Desc: 'Artistic fades and custom designs',

        // About
        aboutTitle: 'About Us',
        aboutText1: 'Since 2015, Ali Baba Barbershop has been the preferred destination for gentlemen seeking quality, style, and an exceptional experience in Medellín.',
        aboutText2: 'Our team of professional barbers is trained in the most modern and classic techniques, guaranteeing first-class service on every visit.',
        aboutText3: 'We use only premium products and professional tools to ensure the best results. Your satisfaction is our priority.',
        feature1: 'Years of Experience',
        feature2: 'Satisfied Clients',
        feature3: 'Expert Barbers',

        // Gallery
        galleryTitle: 'Our Gallery',
        gallerySubtitle: 'Some of our best work',

        // Contact
        contactTitle: 'Contact Us',
        contactSubtitle: 'Visit us or schedule your appointment',
        contactAddress: 'Address',
        contactPhone: 'Phone',
        contactHours: 'Hours',
        contactEmail: 'Email',
        hours1: 'Monday - Friday: 9:00 AM - 8:00 PM',
        hours2: 'Saturday: 9:00 AM - 7:00 PM',
        hours3: 'Sunday: 10:00 AM - 4:00 PM',

        // Footer
        footerText: 'Made with love by lotuslabs.one'
    }
};

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        this.updateLanguage(this.currentLang);
        localStorage.setItem('language', this.currentLang);
    }

    updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update language button
        const currentLangBtn = document.getElementById('currentLang');
        if (currentLangBtn) {
            currentLangBtn.textContent = lang.toUpperCase();
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update page title and meta description
        if (lang === 'es') {
            document.title = 'Ali Baba Barbería - Medellín, Colombia';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', 'Barbería Ali Baba - Los mejores cortes y servicios de barbería en Medellín, Colombia');
            }
        } else {
            document.title = 'Ali Baba Barbershop - Medellín, Colombia';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', 'Ali Baba Barbershop - The best haircuts and barber services in Medellín, Colombia');
            }
        }
    }
}

// Mobile Menu
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.init();
    }

    init() {
        if (this.menuToggle && this.navMenu) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());

            // Close menu when clicking on a link
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar')) {
                    this.closeMenu();
                }
            });
        }
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.menuToggle.classList.toggle('active');
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// Header Scroll Effect
class HeaderScroll {
    constructor() {
        this.header = document.getElementById('header');
        this.init();
    }

    init() {
        if (this.header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    this.header.style.padding = '0.5rem 0';
                    this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
                } else {
                    this.header.style.padding = '1rem 0';
                    this.header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
                }
            });
        }
    }
}

// Lazy Loading Images
class LazyLoader {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Add animation to cards and sections
            const animateElements = document.querySelectorAll('.service-card, .contact-item, .gallery-item');
            animateElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                el.style.transitionDelay = `${index * 0.1}s`;
                animationObserver.observe(el);
            });
        }
    }
}

// Performance Optimization - Defer non-critical operations
function deferInit() {
    // Initialize all components after DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
}

function initializeApp() {
    // Initialize core functionality immediately
    new LanguageManager();
    new MobileMenu();
    new SmoothScroll();
    new HeaderScroll();

    // Defer less critical features
    requestIdleCallback(() => {
        new LazyLoader();
        new ScrollAnimations();
    }, { timeout: 2000 });
}

// Polyfill for requestIdleCallback
window.requestIdleCallback = window.requestIdleCallback || function(cb) {
    const start = Date.now();
    return setTimeout(() => {
        cb({
            didTimeout: false,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
        });
    }, 1);
};

// Start the application
deferInit();

// Optimize performance with passive event listeners
if (window.addEventListener) {
    window.addEventListener('scroll', function() {}, { passive: true });
    window.addEventListener('touchstart', function() {}, { passive: true });
}

// Service Worker for offline capability and faster loading (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here
        // Commented out as it requires a separate service-worker.js file
        // navigator.serviceWorker.register('/service-worker.js');
    });
}
