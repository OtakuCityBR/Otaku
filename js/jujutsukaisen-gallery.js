/**
 * SISTEMA JUJUTSU KAISEN GALLERY - MOSTRUÁRIO DE IMAGENS
 * 
 * Baseado no template das páginas One Piece e Naruto
 * Adaptado especificamente para o anime Jujutsu Kaisen
 */
class JujutsuKaisenGallery {
    constructor() {
        // Lista de imagens do Jujutsu Kaisen
        this.images = [
            "https://i.ibb.co/mVJZ9FQ2/1.jpg",
            "https://i.ibb.co/Jgwsg5d/2.jpg",
            "https://i.ibb.co/5g1p0h72/3.jpg",
            "https://i.ibb.co/QFg3CLcY/4.jpg",
            "https://i.ibb.co/LXNNz3pN/5.jpg",
            "https://i.ibb.co/wh7VrZcb/6.jpg",
            "https://i.ibb.co/QvqcZc3G/7.jpg",
            "https://i.ibb.co/tM2Dw9vx/8.jpg",
            "https://i.ibb.co/7tbkYwf8/9.jpg",
            "https://i.ibb.co/21N3YJd7/10.jpg",
            "https://i.ibb.co/d0qF7npZ/11.jpg",
            "https://i.ibb.co/SDqF55CL/12.jpg",
            "https://i.ibb.co/WNyR1qLZ/13.jpg",
            "https://i.ibb.co/XfG2KHmD/14.jpg",
            "https://i.ibb.co/84dKk7y3/15.jpg",
            "https://i.ibb.co/XfX8zdBt/16.jpg",
            "https://i.ibb.co/6fv4Tgq/17.jpg",
            "https://i.ibb.co/395FKPrD/18.jpg",
            "https://i.ibb.co/Pv7QCQwX/19.jpg",
            "https://i.ibb.co/ZpyLNkN9/20.jpg",
            "https://i.ibb.co/mCrFbLjQ/21.jpg",
            "https://i.ibb.co/nGvrLpT/22.jpg",
            "https://i.ibb.co/Pnkr85V/23.jpg",
            "https://i.ibb.co/ZRP4wPWC/24.jpg",
            "https://i.ibb.co/21WKTmTr/25.jpg",
            "https://i.ibb.co/HLkhgZkD/26.jpg",
            "https://i.ibb.co/VYSFkMyv/27.jpg",
            "https://i.ibb.co/7xgDsfZN/28.jpg",
            "https://i.ibb.co/CK8F6NYk/29.jpg",
            "https://i.ibb.co/cXYm4L9f/30.jpg",
            "https://i.ibb.co/nq2FNvGj/31.jpg"
        ];

        // Configurações da gallery
        this.imageCache = new Map();
        this.preloadedImages = new Set();
        
        // Elementos DOM
        this.galleryGrid = document.getElementById('galleryGrid');

        // Verificação se estamos na página correta
        if (!this.galleryGrid) {
            console.log('Grid da gallery não encontrado - não inicializando JujutsuKaisenGallery');
            return;
        }

        this.init();
    }

    /**
     * INICIALIZAÇÃO DA GALLERY
     */
    init() {
        console.log('Inicializando JujutsuKaisenGallery...');
        
        // Gera o grid de imagens
        this.createGalleryItems();
        
        // Inicializa pop-up de visualização de imagens
        setTimeout(() => {
            this.imagePopup = new ImagePopup();
        }, 500);
        
        // Inicia carregamento das demais imagens em background
        this.startBackgroundPreload();
        
        console.log('JujutsuKaisenGallery inicializada com sucesso!');
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
            img.alt = `Jujutsu Kaisen - Placa decorativa ${index + 1}`;
            
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
        const message = `👁️ Olá! Quero esta placa do Jujutsu Kaisen (#${imageNumber}): ${imageUrl}`;
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
 * INICIALIZAÇÃO AUTOMÁTICA DO JUJUTSU KAISEN
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('galleryGrid') && window.location.pathname.includes('jujutsukaisen.html')) {
        console.log('Página de gallery Jujutsu Kaisen detectada - inicializando...');
        const jujutsuKaisenGallery = new JujutsuKaisenGallery();
    }
});