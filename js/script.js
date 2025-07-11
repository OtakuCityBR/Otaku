// Função para scroll suave até os produtos
function scrollToProducts(event) {
    event.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// SISTEMA DE POP-UP DE VÍDEO - CORRIGIDO
class VideoPopup {
    constructor() {
        this.helpButton = document.getElementById('helpButton');
        this.videoPopup = document.getElementById('videoPopup');
        this.closePopup = document.getElementById('closePopup');
        this.popupVideo = document.getElementById('popupVideo');

        // Link do vídeo do Vimeo configurado
        this.videoUrl = 'https://player.vimeo.com/video/1098854357?autoplay=1&title=0&byline=0&portrait=0&controls=1';

        this.init();
    }

    init() {
        console.log('Inicializando VideoPopup...');
        console.log('Help Button:', this.helpButton);
        console.log('Video Popup:', this.videoPopup);
        console.log('Close Popup:', this.closePopup);
        console.log('Popup Video:', this.popupVideo);

        if (!this.helpButton) {
            console.error('Botão de ajuda não encontrado! ID: helpButton');
            return;
        }
        
        if (!this.videoPopup) {
            console.error('Overlay do pop-up não encontrado! ID: videoPopup');
            return;
        }
        
        if (!this.closePopup) {
            console.error('Botão de fechar não encontrado! ID: closePopup');
            return;
        }
        
        if (!this.popupVideo) {
            console.error('Iframe do vídeo não encontrado! ID: popupVideo');
            return;
        }

        this.bindEvents();
        console.log('VideoPopup inicializado com sucesso!');
    }

    bindEvents() {
        // Abrir pop-up
        this.helpButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botão "Como Comprar" clicado!');
            this.openPopup();
        });

        // Fechar pop-up
        this.closePopup.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botão fechar clicado!');
            this.closePopupHandler();
        });

        // Fechar clicando no overlay
        this.videoPopup.addEventListener('click', (e) => {
            if (e.target === this.videoPopup) {
                console.log('Clicou no overlay - fechando pop-up');
                this.closePopupHandler();
            }
        });

        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.videoPopup.classList.contains('active')) {
                console.log('ESC pressionado - fechando pop-up');
                this.closePopupHandler();
            }
        });
    }

    openPopup() {
        console.log('Abrindo pop-up...');
        
        // Carrega o vídeo apenas quando abrir
        this.popupVideo.src = this.videoUrl;
        this.videoPopup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll do fundo
        
        console.log('Pop-up aberto!');
        console.log('Classe active adicionada:', this.videoPopup.classList.contains('active'));
        console.log('URL do vídeo:', this.popupVideo.src);
    }

    closePopupHandler() {
        console.log('Fechando pop-up...');
        
        this.videoPopup.classList.remove('active');
        this.popupVideo.src = ''; // Para o vídeo ao fechar
        document.body.style.overflow = ''; // Restaura scroll do fundo
        
        console.log('Pop-up fechado!');
    }
}

// Carousel functionality
class ImageCarousel {
    constructor() {
        this.carouselTrack = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.carouselIndicators = document.getElementById('carouselIndicators');

        // Verifica se os elementos existem antes de inicializar
        if (!this.carouselTrack || !this.prevBtn || !this.nextBtn || !this.carouselIndicators) {
            console.warn('Elementos do carrossel não encontrados. Carrossel não será inicializado.');
            return;
        }

        this.slides = Array.from(this.carouselTrack.children);
        
        // Verifica se há slides antes de continuar
        if (this.slides.length === 0) {
            console.warn('Nenhum slide encontrado no carrossel.');
            return;
        }
        
        this.slideWidth = this.slides[0].offsetWidth; // Initial width
        this.currentIndex = 0;
        this.intervalTime = 4000; // 4 seconds
        this.autoSlideInterval = null;

        this.init();
    }

    init() {
        this.createIndicators();
        this.updateIndicators();
        this.setupEventListeners();
        this.startAutoSlide();
        this.adjustSlideWidth(); // Adjust width initially
        window.addEventListener('resize', this.adjustSlideWidth.bind(this));
    }

    adjustSlideWidth() {
        // Recalculate slide width on resize
        if (this.slides.length === 0) return;
        this.slideWidth = this.slides[0].offsetWidth;
        this.moveToSlide(this.currentIndex, false); // Reposition without animation
    }

    createIndicators() {
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (index === 0) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                this.moveToSlide(index);
                this.resetAutoSlide();
            });
            this.carouselIndicators.appendChild(indicator);
        });
    }

    updateIndicators() {
        Array.from(this.carouselIndicators.children).forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    moveToSlide(index, animate = true) {
        if (index < 0) {
            this.currentIndex = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = index;
        }

        const offset = -this.currentIndex * this.slideWidth;
        this.carouselTrack.style.transition = animate ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
        this.carouselTrack.style.transform = `translateX(${offset}px)`;
        this.updateIndicators();
    }

    nextSlide() {
        this.moveToSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.moveToSlide(this.currentIndex - 1);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.intervalTime);
    }

    resetAutoSlide() {
        clearInterval(this.autoSlideInterval);
        this.startAutoSlide();
    }

    setupEventListeners() {
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
            this.resetAutoSlide();
        });

        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
            this.resetAutoSlide();
        });

        // Pause auto-slide on hover
        this.carouselTrack.addEventListener('mouseenter', () => clearInterval(this.autoSlideInterval));
        this.carouselTrack.addEventListener('mouseleave', () => this.startAutoSlide());
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado - inicializando componentes...');
    
    // Inicializa o pop-up de vídeo
    const videoPopup = new VideoPopup();
    
    // Inicializa o carrossel (apenas se os elementos existirem)
    const carousel = new ImageCarousel();
    
    console.log('Todos os componentes inicializados!');
});

// Função para navegação suave (pode ser usada em outras páginas)
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para voltar à página anterior
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '/';
    }
}

// Função para detectar se é mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para otimizar performance em dispositivos móveis
function optimizeForMobile() {
    if (isMobile()) {
        // Reduz animações em dispositivos móveis
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
        
        // Desabilita hover em dispositivos touch
        const style = document.createElement('style');
        style.textContent = `
            @media (hover: none) {
                .carousel-item:hover,
                .cta-button:hover,
                .whatsapp-button:hover {
                    transform: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Otimizações de performance
window.addEventListener('load', () => {
    optimizeForMobile();
    
    // Preload de imagens críticas
    const criticalImages = [
        'https://i.ibb.co/5fx7ydb/OC.png',
        'https://i.ibb.co/y3wvPbx/OCT.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Lazy loading para imagens do carrossel
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);
// SISTEMA ONE PIECE GALLERY - MOSTRUÁRIO DE IMAGENS
/**
 * CLASSE ONE PIECE GALLERY
 * 
 * COMO ADAPTAR PARA OUTROS ANIMES:
 * 1. Alterar o array 'this.images' com as URLs das imagens do novo anime
 * 2. Modificar as mensagens do WhatsApp (método setupEventListeners)
 * 3. Personalizar cores no CSS (variáveis CSS ou classes específicas)
 * 4. Ajustar textos e emojis no HTML conforme o tema do anime
 * 5. Renomear a classe e IDs se necessário (ex: NarutoGallery, DragonBallGallery)
 */
class OnePieceGallery {
    constructor() {
        // ALTERAR: Lista de imagens do anime específico
        // Para adaptar: Substituir todas as URLs pelas imagens do novo anime
        this.images = [
            "https://i.ibb.co/ksbt0y0w/OP-1.jpg",
            "https://i.ibb.co/xSmzBw27/OP-2.jpg",
            "https://i.ibb.co/jScdwdG/OP-3.jpg",
            "https://i.ibb.co/S7Mt7QYb/OP-4.jpg",
            "https://i.ibb.co/4g0gZMp8/OP-5.jpg",
            "https://i.ibb.co/RpncjJ3P/OP-6.jpg",
            "https://i.ibb.co/n8g8z1bt/OP-7.jpg",
            "https://i.ibb.co/KzWvYhhC/OP-8.jpg",
            "https://i.ibb.co/ZpsDvJGC/OP-9.jpg",
            "https://i.ibb.co/sppZsTZY/OP-10.jpg",
            "https://i.ibb.co/xqHNtpj5/OP-11.jpg",
            "https://i.ibb.co/m5BW96Wq/OP-12.jpg",
            "https://i.ibb.co/kVhP5X4V/OP-13.jpg",
            "https://i.ibb.co/6dLqbtR/OP-14.jpg",
            "https://i.ibb.co/Kjdq2jXj/OP-15.jpg",
            "https://i.ibb.co/p6vd5bkj/OP-16.jpg",
            "https://i.ibb.co/pvYWCfwd/OP-17.jpg",
            "https://i.ibb.co/fzZV51VM/OP-18.jpg",
            "https://i.ibb.co/FLnXhTsH/OP-19.jpg",
            "https://i.ibb.co/Vcg3VvnT/OP-20.jpg",
            "https://i.ibb.co/Z6pr2szn/OP-21.jpg",
            "https://i.ibb.co/Jj9PrTZL/OP-22.jpg",
            "https://i.ibb.co/W4t13QbJ/OP-23.jpg",
            "https://i.ibb.co/LDsq8F8M/OP-24.jpg",
            "https://i.ibb.co/SwnK28n4/OP-25.jpg",
            "https://i.ibb.co/bMkJgRDM/OP-26.jpg",
            "https://i.ibb.co/8LN9qZyH/OP-27.jpg",
            "https://i.ibb.co/RFXRBm8/OP-28.jpg",
            "https://i.ibb.co/zVdypxFp/OP-29.jpg",
            "https://i.ibb.co/BVCWVXZX/OP-30.jpg",
            "https://i.ibb.co/3ysQZTbq/OP-31.jpg",
            "https://i.ibb.co/4gVYfBRB/OP-32.jpg",
            "https://i.ibb.co/wN8Q1NSX/OP-33.jpg",
            "https://i.ibb.co/5h0TCP6H/OP-34.jpg",
            "https://i.ibb.co/zV7WZDvj/OP-35.jpg",
            "https://i.ibb.co/S4HjfL6X/OP-36.jpg",
            "https://i.ibb.co/v4K6RssB/OP-37.jpg",
            "https://i.ibb.co/fzWc1Rdg/OP-38.jpg",
            "https://i.ibb.co/b51pjL5Q/OP-39.jpg",
            "https://i.ibb.co/PzQNdBnQ/OP-40.jpg",
            "https://i.ibb.co/4ZC9tLys/OP-41.jpg",
            "https://i.ibb.co/1Yz0m5hp/OP-42.jpg",
            "https://i.ibb.co/4wrSrCM3/OP-43.jpg",
            "https://i.ibb.co/3YCXxWLS/OP-45.jpg",
            "https://i.ibb.co/RLkHL4J/OP-46.jpg",
            "https://i.ibb.co/m5Rfb6B2/OP-47.jpg",
            "https://i.ibb.co/C5bFfhS7/OP-48.jpg",
            "https://i.ibb.co/vxVgK7Zz/OP-49.jpg",
            "https://i.ibb.co/1JYL5Btk/OP-50.jpg",
            "https://i.ibb.co/C3Czq8fC/OP-51.jpg",
            "https://i.ibb.co/JwP6pZR5/OP-52.jpg",
            "https://i.ibb.co/nNgVNSCy/OP-53.jpg",
            "https://i.ibb.co/v6FBtyKm/OP-54.jpg",
            "https://i.ibb.co/JRPnT3LY/OP-55.jpg",
            "https://i.ibb.co/spQCZvmv/OP-56.jpg",
            "https://i.ibb.co/0psSbdQD/OP-57.jpg"
        ];

        // Configurações da gallery
        this.imageCache = new Map();
        this.preloadedImages = new Set();
        
        // IMPORTANTE: Elementos DOM - verificar se existem na página
        this.galleryGrid = document.getElementById('galleryGrid');

        // VERIFICAÇÃO: Confirma se estamos na página One Piece
        if (!this.galleryGrid) {
            console.log('Grid da gallery não encontrado - não inicializando');
            return;
        }

        this.init();
    }

    /**
     * INICIALIZAÇÃO DA GALLERY
     * Método principal que cria o mostruário de imagens
     */
    init() {
        console.log('Inicializando OnePieceGallery...');
        
        // CRIAÇÃO: Gera o grid de imagens
        this.createGalleryItems();
        
        // INICIALIZAÇÃO: Pop-up de visualização de imagens
        // IMPORTANTE: Deve ser inicializado APÓS criar as imagens
        setTimeout(() => {
            this.imagePopup = new ImagePopup();
        }, 500);
        
        // OTIMIZAÇÃO: Inicia carregamento das demais imagens em background
        this.startBackgroundPreload();
        
        console.log('OnePieceGallery inicializada com sucesso!');
    }

    /**
     * PRÉ-CARREGAMENTO DE IMAGEM INDIVIDUAL
     * @param {string} src - URL da imagem a ser carregada
     * @returns {Promise} - Promise que resolve quando a imagem carrega
     */
    preloadImage(src) {
        return new Promise((resolve, reject) => {
            if (this.imageCache.has(src)) {
                resolve(this.imageCache.get(src));
                return;
            }

            const img = new Image();
            img.onload = () => {
                this.imageCache.set(src, img);
                this.preloadedImages.add(src);
                resolve(img);
            };
            img.onerror = reject;
            img.src = src;
        });
    }

    /**
     * PRÉ-CARREGAMENTO EM BACKGROUND
     * Carrega todas as imagens em background para melhor performance
     */
    startBackgroundPreload() {
        setTimeout(() => {
            this.images.forEach((src, index) => {
                if (!this.preloadedImages.has(src)) {
                    setTimeout(() => {
                        this.preloadImage(src);
                    }, index * 100);
                }
            });
        }, 1000);
    }

    /**
     * CRIAÇÃO DOS ITENS DA GALLERY
     * Gera dinamicamente os cards de cada imagem com botão individual
     */
    createGalleryItems() {
        this.images.forEach((imgSrc, index) => {
            // CRIAÇÃO: Card individual da imagem
            const galleryItem = document.createElement('div');
            galleryItem.className = 'onepiece-gallery-item';
            galleryItem.dataset.index = index;
            
            // CRIAÇÃO: Elemento da imagem
            const img = document.createElement('img');
            img.src = imgSrc;
            img.loading = "lazy";
            img.alt = `One Piece - Placa decorativa ${index + 1}`;
            
            // CRIAÇÃO: Botão "Quero Esta" individual
            const button = document.createElement('button');
            button.className = 'onepiece-gallery-btn';
            button.textContent = '💬 Quero Esta';
            button.dataset.imageUrl = imgSrc;
            button.dataset.imageIndex = index + 1;
            
            // EVENTO: Clique no botão individual
            button.addEventListener('click', () => {
                this.sendWhatsAppMessage(imgSrc, index + 1);
            });
            
            // MONTAGEM: Adiciona imagem e botão ao card
            galleryItem.appendChild(img);
            galleryItem.appendChild(button);
            
            // MONTAGEM: Adiciona card ao grid
            this.galleryGrid.appendChild(galleryItem);
        });
    }

    /**
     * ENVIO DE MENSAGEM WHATSAPP
     * Abre WhatsApp com mensagem personalizada da imagem escolhida
     * @param {string} imageUrl - URL da imagem escolhida
     * @param {number} imageNumber - Número da imagem para referência
     */
    sendWhatsAppMessage(imageUrl, imageNumber) {
        // ALTERAR: Personalizar mensagem conforme o anime
        const message = `🏴‍☠️ Olá! Quero esta placa do One Piece (#${imageNumber}): ${imageUrl}`;
        const whatsappUrl = `https://wa.me/5511958588616?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

/**
 * SISTEMA DE POP-UP PARA VISUALIZAÇÃO DE IMAGENS
 * 
 * TEMPLATE REUTILIZÁVEL - Como adaptar para outros animes:
 * 1. Copiar toda esta classe para o novo arquivo JS
 * 2. Renomear a classe se necessário (ex: NarutoImagePopup, DragonBallImagePopup)
 * 3. Verificar se os IDs dos elementos HTML estão corretos
 * 4. Manter a mesma estrutura HTML do pop-up
 * 5. Personalizar animações ou estilos se necessário
 */
class ImagePopup {
    constructor() {
        // ELEMENTOS DOM - Verificar se existem na página
        this.imagePopup = document.getElementById('imagePopup');
        this.closeImagePopup = document.getElementById('closeImagePopup');
        this.popupImage = document.getElementById('popupImage');
        
        // VERIFICAÇÃO: Confirma se os elementos existem antes de inicializar
        if (!this.imagePopup || !this.closeImagePopup || !this.popupImage) {
            console.log('Elementos do pop-up de imagem não encontrados - não inicializando');
            return;
        }
        
        this.init();
    }
    
    /**
     * INICIALIZAÇÃO DO POP-UP DE IMAGEM
     * Configura todos os event listeners necessários
     */
    init() {
        console.log('Inicializando ImagePopup...');
        
        // CONFIGURAÇÃO: Event listeners para controles do pop-up
        this.setupEventListeners();
        
        // CONFIGURAÇÃO: Event listeners para as imagens da gallery
        this.setupImageClickListeners();
        
        console.log('ImagePopup inicializado com sucesso!');
    }
    
    /**
     * CONFIGURAÇÃO DOS EVENT LISTENERS DO POP-UP
     * Gerencia abertura, fechamento e navegação
     * MOBILE FIRST: Otimizado para touch e gestos
     */
    setupEventListeners() {
        // FECHAR: Botão X do pop-up
        this.closeImagePopup.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Botão fechar imagem clicado');
            this.closePopup();
        });
        
        // MOBILE: Touch events para melhor responsividade
        this.closeImagePopup.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Botão fechar imagem tocado (touch)');
            this.closePopup();
        });
        
        // FECHAR: Clique no overlay (fundo escuro)
        this.imagePopup.addEventListener('click', (e) => {
            // IMPORTANTE: Só fecha se clicar no overlay, não na imagem
            if (e.target === this.imagePopup) {
                console.log('Clicou no overlay - fechando pop-up de imagem');
                this.closePopup();
            }
        });
        
        // FECHAR: Tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.imagePopup.classList.contains('active')) {
                console.log('ESC pressionado - fechando pop-up de imagem');
                this.closePopup();
            }
        });
        
        // PREVENÇÃO: Impede que cliques na imagem fechem o pop-up
        this.popupImage.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // MOBILE: Impede que toques na imagem fechem o pop-up
        this.popupImage.addEventListener('touchend', (e) => {
            e.stopPropagation();
        });
    }
    
    /**
     * CONFIGURAÇÃO DOS CLIQUES NAS IMAGENS DA GALLERY
     * Adiciona event listener para todas as imagens da gallery
     * IMPORTANTE: Este método deve ser chamado APÓS as imagens serem criadas
     */
    setupImageClickListeners() {
        // DELAY: Aguarda as imagens serem criadas pela OnePieceGallery
        setTimeout(() => {
            const galleryImages = document.querySelectorAll('.onepiece-gallery-item img');
            
            console.log(`Configurando cliques para ${galleryImages.length} imagens`);
            
            // CONFIGURAÇÃO: Adiciona event listener para cada imagem
            galleryImages.forEach((img, index) => {
                // REMOVE listeners existentes para evitar duplicação
                img.removeEventListener('click', this.handleImageClick);
                img.removeEventListener('touchend', this.handleImageTouch);
                
                // VARIÁVEIS PARA CONTROLE DE TOQUE
                let touchStartY = 0;
                let touchStartX = 0;
                let touchStartTime = 0;
                let hasMoved = false;
                
                // FUNÇÃO PARA DETECTAR INÍCIO DO TOQUE
                const touchStartHandler = (e) => {
                    touchStartY = e.touches[0].clientY;
                    touchStartX = e.touches[0].clientX;
                    touchStartTime = Date.now();
                    hasMoved = false;
                };
                
                // FUNÇÃO PARA DETECTAR MOVIMENTO DO TOQUE
                const touchMoveHandler = (e) => {
                    if (!e.touches[0]) return;
                    
                    const currentY = e.touches[0].clientY;
                    const currentX = e.touches[0].clientX;
                    const deltaY = Math.abs(currentY - touchStartY);
                    const deltaX = Math.abs(currentX - touchStartX);
                    
                    // CONSIDERA MOVIMENTO SE DESLOCOU MAIS DE 10px
                    if (deltaY > 10 || deltaX > 10) {
                        hasMoved = true;
                    }
                };
                
                // CRIA funções bound para poder remover depois
                const clickHandler = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Imagem ${index + 1} clicada - abrindo pop-up`);
                    this.openPopup(img.src, img.alt);
                };
                
                const touchHandler = (e) => {
                    const touchEndTime = Date.now();
                    const touchDuration = touchEndTime - touchStartTime;
                    
                    // SÓ ABRE O POPUP SE:
                    // 1. Não houve movimento significativo (não é scroll)
                    // 2. O toque durou menos de 500ms (não é long press)
                    // 3. O toque durou mais de 50ms (não é acidental)
                    if (!hasMoved && touchDuration < 500 && touchDuration > 50) {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`Imagem ${index + 1} tocada intencionalmente - abrindo pop-up`);
                        this.openPopup(img.src, img.alt);
                    } else {
                        console.log(`Toque ignorado - movimento: ${hasMoved}, duração: ${touchDuration}ms`);
                    }
                };
                
                // ADICIONA os event listeners para DESKTOP
                img.addEventListener('click', clickHandler);
                
                // ADICIONA os event listeners para MOBILE com controle de movimento
                img.addEventListener('touchstart', touchStartHandler, { passive: true });
                img.addEventListener('touchmove', touchMoveHandler, { passive: true });
                img.addEventListener('touchend', touchHandler, { passive: false });
                
                // ACESSIBILIDADE: Permite abrir com Enter/Space
                img.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        console.log(`Imagem ${index + 1} ativada via teclado`);
                        this.openPopup(img.src, img.alt);
                    }
                });
                
                // ACESSIBILIDADE: Torna as imagens focáveis
                img.setAttribute('tabindex', '0');
                img.style.cursor = 'pointer';
                
                // MELHORA A EXPERIÊNCIA TOUCH
                img.style.touchAction = 'manipulation';
                img.style.userSelect = 'none';
                img.style.webkitUserSelect = 'none';
            });
        }, 500); // Reduzido para 500ms para resposta mais rápida
    }
    
    /**
     * ABERTURA DO POP-UP
     * @param {string} imageSrc - URL da imagem a ser exibida
     * @param {string} imageAlt - Texto alternativo da imagem
     */
    openPopup(imageSrc, imageAlt) {
        console.log('Abrindo pop-up de imagem:', imageSrc);
        
        // CONFIGURAÇÃO: Define a imagem no pop-up
        this.popupImage.src = imageSrc;
        this.popupImage.alt = imageAlt || 'Visualização da imagem';
        
        // EXIBIÇÃO: Mostra o pop-up com animação
        this.imagePopup.classList.add('active');
        
        // BLOQUEIO: Impede scroll da página de fundo
        document.body.style.overflow = 'hidden';
        
        // FOCO: Move foco para o botão fechar (acessibilidade)
        setTimeout(() => {
            this.closeImagePopup.focus();
        }, 100);
        
        console.log('Pop-up de imagem aberto!');
    }
    
    /**
     * FECHAMENTO DO POP-UP
     * Remove a imagem e oculta o pop-up
     */
    closePopup() {
        console.log('Fechando pop-up de imagem...');
        
        // OCULTAÇÃO: Remove classe ativa com animação
        this.imagePopup.classList.remove('active');
        
        // LIMPEZA: Remove a imagem após a animação
        setTimeout(() => {
            this.popupImage.src = '';
            this.popupImage.alt = '';
        }, 300);
        
        // RESTAURAÇÃO: Permite scroll da página novamente
        document.body.style.overflow = '';
        
        console.log('Pop-up de imagem fechado!');
    }
}

/**
 * INICIALIZAÇÃO AUTOMÁTICA
 * Detecta se estamos na página correta e inicializa a gallery
 * 
 * PARA ADAPTAR:
 * 1. Manter esta estrutura em todas as páginas de gallery
 * 2. Alterar o nome da classe se necessário
 * 3. Verificar se o ID 'galleryGrid' existe na nova página
 */
document.addEventListener('DOMContentLoaded', () => {
    // DETECÇÃO: Verifica se estamos numa página de gallery
    if (document.getElementById('galleryGrid')) {
        console.log('Página de gallery detectada - inicializando...');
        // INICIALIZAÇÃO: Cria nova instância da gallery
        const onePieceGallery = new OnePieceGallery();
    } else {
        // INICIALIZAÇÃO: Pop-up de imagem para páginas que já têm imagens estáticas
        // PARA ADAPTAR: Usar em páginas que não usam a gallery dinâmica
        const imagePopup = new ImagePopup();
    }
});