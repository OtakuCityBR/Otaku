/**
 * SISTEMA BLEACH GALLERY - MOSTRUÁRIO DE IMAGENS
 * 
 * Baseado no template das páginas One Piece e Naruto
 * Adaptado especificamente para o anime Bleach
 */
class BleachGallery {
    constructor() {
        // Lista de imagens do Bleach
        this.images = [
            "https://i.ibb.co/qLbZPq0Z/01.jpg",
            "https://i.ibb.co/zTvfyKPP/02.jpg",
            "https://i.ibb.co/LzdtWckg/03.jpg",
            "https://i.ibb.co/zhGmCDwr/04.jpg",
            "https://i.ibb.co/k6qQ6GpK/05.jpg",
            "https://i.ibb.co/DgvBTmmH/06.jpg",
            "https://i.ibb.co/twtPhC0B/07.jpg",
            "https://i.ibb.co/d0KY7r4S/08.jpg",
            "https://i.ibb.co/6cwzmRxy/09.jpg",
            "https://i.ibb.co/BVmTr1qC/10.jpg",
            "https://i.ibb.co/cXSg8TCQ/11.jpg",
            "https://i.ibb.co/CsKhJscV/12.jpg",
            "https://i.ibb.co/nMjS1DNY/13.jpg",
            "https://i.ibb.co/7Npfd5Yr/14.jpg",
            "https://i.ibb.co/HfjMrC6n/15.jpg"
        ];

        // Configurações da gallery
        this.imageCache = new Map();
        this.preloadedImages = new Set();
        
        // Elementos DOM
        this.galleryGrid = document.getElementById('galleryGrid');

        // Verificação se estamos na página correta
        if (!this.galleryGrid) {
            console.log('Grid da gallery não encontrado - não inicializando BleachGallery');
            return;
        }

        this.init();
    }

    /**
     * INICIALIZAÇÃO DA GALLERY
     */
    init() {
        console.log('Inicializando BleachGallery...');
        
        // Gera o grid de imagens
        this.createGalleryItems();
        
        // Inicializa pop-up de visualização de imagens
        setTimeout(() => {
            this.imagePopup = new ImagePopup();
        }, 500);
        
        // Inicia carregamento das demais imagens em background
        this.startBackgroundPreload();
        
        console.log('BleachGallery inicializada com sucesso!');
    }

    /**
     * PRÉ-CARREGAMENTO DE IMAGEM INDIVIDUAL
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
     */
    createGalleryItems() {
        this.images.forEach((imgSrc, index) => {
            // Card individual da imagem
            const galleryItem = document.createElement('div');
            galleryItem.className = 'onepiece-gallery-item';
            galleryItem.dataset.index = index;
            
            // Elemento da imagem
            const img = document.createElement('img');
            img.src = imgSrc;
            img.loading = "lazy";
            img.alt = `Bleach - Placa decorativa ${index + 1}`;
            
            // Botão "Quero Esta" individual
            const button = document.createElement('button');
            button.className = 'onepiece-gallery-btn';
            button.textContent = '💬 Quero Esta';
            button.dataset.imageUrl = imgSrc;
            button.dataset.imageIndex = index + 1;
            
            // Evento do botão individual
            button.addEventListener('click', () => {
                this.sendWhatsAppMessage(imgSrc, index + 1);
            });
            
            // Montagem do card
            galleryItem.appendChild(img);
            galleryItem.appendChild(button);
            
            // Adiciona ao grid
            this.galleryGrid.appendChild(galleryItem);
        });
    }

    /**
     * ENVIO DE MENSAGEM WHATSAPP
     */
    sendWhatsAppMessage(imageUrl, imageNumber) {
        const message = `⚔️ Olá! Quero esta placa do Bleach (#${imageNumber}): ${imageUrl}`;
        const whatsappUrl = `https://wa.me/5511958588616?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

/**
 * SISTEMA DE POP-UP PARA VISUALIZAÇÃO DE IMAGENS
 * Template reutilizável para todas as páginas de gallery
 */
class ImagePopup {
    constructor() {
        // Elementos DOM
        this.imagePopup = document.getElementById('imagePopup');
        this.closeImagePopup = document.getElementById('closeImagePopup');
        this.popupImage = document.getElementById('popupImage');
        
        // Verificação dos elementos
        if (!this.imagePopup || !this.closeImagePopup || !this.popupImage) {
            console.log('Elementos do pop-up de imagem não encontrados - não inicializando');
            return;
        }
        
        this.init();
    }
    
    /**
     * INICIALIZAÇÃO DO POP-UP DE IMAGEM
     */
    init() {
        console.log('Inicializando ImagePopup...');
        
        // Configura event listeners
        this.setupEventListeners();
        this.setupImageClickListeners();
        
        console.log('ImagePopup inicializado com sucesso!');
    }
    
    /**
     * CONFIGURAÇÃO DOS EVENT LISTENERS DO POP-UP
     */
    setupEventListeners() {
        // Fechar com botão X
        this.closeImagePopup.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.closePopup();
        });
        
        // Touch events para mobile
        this.closeImagePopup.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.closePopup();
        });
        
        // Fechar clicando no overlay
        this.imagePopup.addEventListener('click', (e) => {
            if (e.target === this.imagePopup) {
                this.closePopup();
            }
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.imagePopup.classList.contains('active')) {
                this.closePopup();
            }
        });
        
        // Previne fechamento ao clicar na imagem
        this.popupImage.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        this.popupImage.addEventListener('touchend', (e) => {
            e.stopPropagation();
        });
    }
    
    /**
     * CONFIGURAÇÃO DOS CLIQUES NAS IMAGENS DA GALLERY
     */
    setupImageClickListeners() {
        setTimeout(() => {
            const galleryImages = document.querySelectorAll('.onepiece-gallery-item img');
            
            console.log(`Configurando cliques para ${galleryImages.length} imagens`);
            
            galleryImages.forEach((img, index) => {
                // Variáveis para controle de toque
                let touchStartY = 0;
                let touchStartX = 0;
                let touchStartTime = 0;
                let hasMoved = false;
                
                // Detectar início do toque
                const touchStartHandler = (e) => {
                    touchStartY = e.touches[0].clientY;
                    touchStartX = e.touches[0].clientX;
                    touchStartTime = Date.now();
                    hasMoved = false;
                };
                
                // Detectar movimento do toque
                const touchMoveHandler = (e) => {
                    if (!e.touches[0]) return;
                    
                    const currentY = e.touches[0].clientY;
                    const currentX = e.touches[0].clientX;
                    const deltaY = Math.abs(currentY - touchStartY);
                    const deltaX = Math.abs(currentX - touchStartX);
                    
                    if (deltaY > 10 || deltaX > 10) {
                        hasMoved = true;
                    }
                };
                
                // Handler para clique desktop
                const clickHandler = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.openPopup(img.src, img.alt);
                };
                
                // Handler para toque mobile
                const touchHandler = (e) => {
                    const touchEndTime = Date.now();
                    const touchDuration = touchEndTime - touchStartTime;
                    
                    if (!hasMoved && touchDuration < 500 && touchDuration > 50) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.openPopup(img.src, img.alt);
                    }
                };
                
                // Adiciona event listeners
                img.addEventListener('click', clickHandler);
                img.addEventListener('touchstart', touchStartHandler, { passive: true });
                img.addEventListener('touchmove', touchMoveHandler, { passive: true });
                img.addEventListener('touchend', touchHandler, { passive: false });
                
                // Acessibilidade
                img.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.openPopup(img.src, img.alt);
                    }
                });
                
                img.setAttribute('tabindex', '0');
                img.style.cursor = 'pointer';
                img.style.touchAction = 'manipulation';
                img.style.userSelect = 'none';
                img.style.webkitUserSelect = 'none';
            });
        }, 500);
    }
    
    /**
     * ABERTURA DO POP-UP
     */
    openPopup(imageSrc, imageAlt) {
        console.log('Abrindo pop-up de imagem:', imageSrc);
        
        this.popupImage.src = imageSrc;
        this.popupImage.alt = imageAlt || 'Visualização da imagem';
        
        this.imagePopup.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            this.closeImagePopup.focus();
        }, 100);
    }
    
    /**
     * FECHAMENTO DO POP-UP
     */
    closePopup() {
        console.log('Fechando pop-up de imagem...');
        
        this.imagePopup.classList.remove('active');
        
        setTimeout(() => {
            this.popupImage.src = '';
            this.popupImage.alt = '';
        }, 300);
        
        document.body.style.overflow = '';
    }
}

/**
 * INICIALIZAÇÃO AUTOMÁTICA DO BLEACH
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('galleryGrid') && window.location.pathname.includes('bleach.html')) {
        console.log('Página de gallery Bleach detectada - inicializando...');
        const bleachGallery = new BleachGallery();
    }
});

