/**
 * SISTEMA DRAGON BALL GALLERY - MOSTRUÁRIO DE IMAGENS
 * 
 * Baseado no template das páginas One Piece e Naruto
 * Adaptado especificamente para o anime Dragon Ball
 */
class DragonBallGallery {
    constructor() {
        // Lista de imagens do Dragon Ball
        this.images = [
            "https://i.ibb.co/C5Xjd6Lh/db-1.jpg",
            "https://i.ibb.co/mCC0Y4M5/db-2.jpg",
            "https://i.ibb.co/D6jk7kG/db-3.jpg",
            "https://i.ibb.co/mF8sQ1FQ/db-4.jpg",
            "https://i.ibb.co/nqx2VBp6/db-5.jpg",
            "https://i.ibb.co/LdmsRgWG/db-6.jpg",
            "https://i.ibb.co/pjs2Nv9C/db-9.jpg",
            "https://i.ibb.co/svfvJCxY/db-10.jpg",
            "https://i.ibb.co/C5cQGBnP/db-11.jpg",
            "https://i.ibb.co/DfBWkKmm/db-12.jpg",
            "https://i.ibb.co/7xWz8pp9/db-13.jpg",
            "https://i.ibb.co/230NFgvT/db-14.jpg",
            "https://i.ibb.co/jk7Qm6Mm/db-15.jpg",
            "https://i.ibb.co/GvjZWxG3/db-16.jpg",
            "https://i.ibb.co/ntGjd9H/db-17.jpg",
            "https://i.ibb.co/ccydfpVZ/db-18.jpg",
            "https://i.ibb.co/MythY9N9/db-19.jpg",
            "https://i.ibb.co/v53C8cy/db-20.jpg",
            "https://i.ibb.co/v6jn7410/db-21.jpg",
            "https://i.ibb.co/S7mH1JyG/db-22.jpg",
            "https://i.ibb.co/ZzhfKrMJ/db-23.jpg",
            "https://i.ibb.co/Zt85snV/db-24.jpg",
            "https://i.ibb.co/mwssR3r/db-25.jpg",
            "https://i.ibb.co/zhqp5RJ8/db-26.jpg",
            "https://i.ibb.co/YTFw3807/db-27.jpg",
            "https://i.ibb.co/3YRWDBSn/db-28.jpg",
            "https://i.ibb.co/KcLyYJGj/db-29.jpg",
            "https://i.ibb.co/Xk4DVRrY/db-30.jpg",
            "https://i.ibb.co/LXCryTbL/db-31.jpg",
            "https://i.ibb.co/N6LJV6Kw/db-32.jpg",
            "https://i.ibb.co/C3bL2z9z/db-33.jpg",
            "https://i.ibb.co/270xKCB4/db-34.jpg",
            "https://i.ibb.co/mCKv7Z8n/db-35.jpg",
            "https://i.ibb.co/5gZ07ydf/db-36.jpg",
            "https://i.ibb.co/rRkZ1d2y/db-37.jpg",
            "https://i.ibb.co/zT8j8tZc/db-38.jpg",
            "https://i.ibb.co/Kj6Ng5YR/db-39.jpg",
            "https://i.ibb.co/8wX4WHm/db-40.jpg"
        ];

        // Configurações da gallery
        this.imageCache = new Map();
        this.preloadedImages = new Set();
        
        // Elementos DOM
        this.galleryGrid = document.getElementById('galleryGrid');

        // Verificação se estamos na página correta
        if (!this.galleryGrid) {
            console.log('Grid da gallery não encontrado - não inicializando DragonBallGallery');
            return;
        }

        this.init();
    }

    /**
     * INICIALIZAÇÃO DA GALLERY
     */
    init() {
        console.log('Inicializando DragonBallGallery...');
        
        // Gera o grid de imagens
        this.createGalleryItems();
        
        // Inicializa pop-up de visualização de imagens
        setTimeout(() => {
            this.imagePopup = new ImagePopup();
        }, 500);
        
        // Inicia carregamento das demais imagens em background
        this.startBackgroundPreload();
        
        console.log('DragonBallGallery inicializada com sucesso!');
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
            img.alt = `Dragon Ball - Placa decorativa ${index + 1}`;
            
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
        const message = `🐉 Olá! Quero esta placa do Dragon Ball (#${imageNumber}): ${imageUrl}`;
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
 * INICIALIZAÇÃO AUTOMÁTICA DO DRAGON BALL
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('galleryGrid') && window.location.pathname.includes('dragonball.html')) {
        console.log('Página de gallery Dragon Ball detectada - inicializando...');
        const dragonBallGallery = new DragonBallGallery();
    }
});