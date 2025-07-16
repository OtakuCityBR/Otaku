/**
 * SISTEMA ANIMES VARIADOS GALLERY - MOSTRUÁRIO DE IMAGENS
 * 
 * Baseado no template das páginas One Piece e Naruto
 * Adaptado especificamente para diversos animes
 */
class AnimesVariadosGallery {
    constructor() {
        // Lista de imagens dos Animes Variados
        this.images = [
            "https://i.ibb.co/1tDS3znG/d-1.jpg",
            "https://i.ibb.co/083mszY/d-2.jpg",
            "https://i.ibb.co/27G9DNwv/Hajime-1.jpg",
            "https://i.ibb.co/PsrkNJJq/Hajime-2.jpg",
            "https://i.ibb.co/d4BFzm4P/on-1.jpg",
            "https://i.ibb.co/JwZgb3bG/on-2.jpg",
            "https://i.ibb.co/5hnKChJ3/SK8-1.jpg",
            "https://i.ibb.co/D610GDH/SK8-2.jpg",
            "https://i.ibb.co/gZHZNdVG/SK8-3.jpg",
            "https://i.ibb.co/kgNDMRJW/Baki.jpg",
            "https://i.ibb.co/x8FNqm4x/Kuroko.jpg",
            "https://i.ibb.co/jvrznfBw/ynezuma.jpg",
            "https://i.ibb.co/j9mxSsgh/a-1.jpg",
            "https://i.ibb.co/VphmNYJV/a-2.jpg",
            "https://i.ibb.co/wF0CLLCX/a-3.jpg",
            "https://i.ibb.co/nN3ZfWqH/a-4.jpg",
            "https://i.ibb.co/BHjyLW65/a-5.jpg",
            "https://i.ibb.co/YThRB4tG/a-6.jpg",
            "https://i.ibb.co/gLNM6dZN/a-7.jpg",
            "https://i.ibb.co/TDgQcnV4/a-8.jpg",
            "https://i.ibb.co/k6X0X5Cx/a-9.jpg",
            "https://i.ibb.co/twnDTpdw/a-10.jpg",
            "https://i.ibb.co/tw7qVnJZ/a-11.jpg",
            "https://i.ibb.co/YB4DdHvY/a-12.jpg",
            "https://i.ibb.co/FbCvGHtJ/a-13.jpg",
            "https://i.ibb.co/sdfTW6Yz/a-14.jpg",
            "https://i.ibb.co/qMBZrVXR/a-15.jpg",
            "https://i.ibb.co/tp0cxPwy/a-16.jpg",
            "https://i.ibb.co/kVt916vP/a-17.jpg",
            "https://i.ibb.co/nqybhr17/a-18.jpg",
            "https://i.ibb.co/gbTP3851/a-19.jpg",
            "https://i.ibb.co/QFRZS0Fn/a-20.jpg",
            "https://i.ibb.co/8g0TG7qD/a-21.jpg",
            "https://i.ibb.co/C5Vqqqby/a-22.jpg",
            "https://i.ibb.co/9KjQVnw/a-23.jpg",
            "https://i.ibb.co/JR5dJcCj/a-24.jpg",
            "https://i.ibb.co/7tDYbYxK/a-25.jpg",
            "https://i.ibb.co/DPcrMmPX/a-26.jpg",
            "https://i.ibb.co/hJnsjrmM/a-27.jpg",
            "https://i.ibb.co/hxgYf2BV/a-28.jpg",
            "https://i.ibb.co/99k5kX5n/a-29.jpg",
            "https://i.ibb.co/606qYwrw/a-30.jpg",
            "https://i.ibb.co/RTcHqgtY/a-31.jpg",
            "https://i.ibb.co/mCfHHFCr/a-32.jpg",
            "https://i.ibb.co/208tbkZ7/a-33.jpg",
            "https://i.ibb.co/1Ygnsypb/a-34.jpg",
            "https://i.ibb.co/why0dDLZ/a-35.jpg",
            "https://i.ibb.co/HTFfcbzH/a-36.jpg",
            "https://i.ibb.co/0pR6htM5/a-37.jpg",
            "https://i.ibb.co/8gwhqy8k/a-38.jpg",
            "https://i.ibb.co/j9hSd1R6/a-39.jpg",
            "https://i.ibb.co/kgLcf6NP/a-40.jpg",
            "https://i.ibb.co/NHcYcKw/a-41.jpg",
            "https://i.ibb.co/DD6pntW4/a-42.jpg",
            "https://i.ibb.co/dwZ2JF1G/a-43.jpg",
            "https://i.ibb.co/Mx5H0xdk/a-44.jpg",
            "https://i.ibb.co/7dLNWBJg/a-45.jpg",
            "https://i.ibb.co/1J8V2VJ8/a-46.jpg",
            "https://i.ibb.co/Hph8PYMB/a-47.jpg",
            "https://i.ibb.co/GQx10ySZ/a-48.jpg",
            "https://i.ibb.co/QvRfYvm6/a-49.jpg",
            "https://i.ibb.co/Wp63tcsC/a-50.jpg",
            "https://i.ibb.co/rfLbGLd7/a-51.jpg",
            "https://i.ibb.co/4nvsQChc/a-52.jpg",
            "https://i.ibb.co/Gq3knJS/a-53.jpg",
            "https://i.ibb.co/5X9k9sNN/a-54.jpg",
            "https://i.ibb.co/20KzGvWg/a-55.jpg",
            "https://i.ibb.co/kVWYPtt5/a-56.jpg",
            "https://i.ibb.co/Z1VvBfjG/a-57.jpg",
            "https://i.ibb.co/NdVbwXVF/a-58.jpg",
            "https://i.ibb.co/qtdj92M/a-59.jpg",
            "https://i.ibb.co/mF40t86v/a-60.jpg",
            "https://i.ibb.co/mp5mwdY/a-61.jpg",
            "https://i.ibb.co/KzQH8r4k/a-62.jpg",
            "https://i.ibb.co/yFbC6WCW/a-63.jpg",
            "https://i.ibb.co/8nyFtBnX/a-64.jpg",
            "https://i.ibb.co/jkgm0fp9/a-65.jpg",
            "https://i.ibb.co/BKBF1vjp/a-66.jpg",
            "https://i.ibb.co/qFB7pNCq/a-67.jpg",
            "https://i.ibb.co/6cNrN8xn/a-68.jpg",
            "https://i.ibb.co/TC7Tvg1/a-69.jpg",
            "https://i.ibb.co/G32Xt3zJ/a-70.jpg",
            "https://i.ibb.co/HpbG6DFx/a-71.jpg",
            "https://i.ibb.co/ch1F8zsb/a-72.jpg",
            "https://i.ibb.co/4Z4t4FJn/a-73.jpg",
            "https://i.ibb.co/ndbmXqw/a-74.jpg",
            "https://i.ibb.co/VpC3NSWD/a-75.jpg",
            "https://i.ibb.co/5hGhH8RQ/a-76.jpg",
            "https://i.ibb.co/YB3npmW3/a-77.jpg",
            "https://i.ibb.co/Xxd9phVx/a-78.jpg",
            "https://i.ibb.co/RG8fKXg4/a-79.jpg",
            "https://i.ibb.co/7N6xRV5R/a-80.jpg",
            "https://i.ibb.co/1Y4TtRr7/a-81.jpg",
            "https://i.ibb.co/Y4tCdqZD/a-82.jpg",
            "https://i.ibb.co/8gw2dPPg/a-83.jpg",
            "https://i.ibb.co/4Rt2zYrW/a-84.jpg",
            "https://i.ibb.co/N6SsJtBc/a-85.jpg",
            "https://i.ibb.co/1tq8h96W/a-86.jpg",
            "https://i.ibb.co/99vCw6vK/a-87.jpg",
            "https://i.ibb.co/VdDvFDn/a-88.jpg",
            "https://i.ibb.co/FbcWkBZZ/a-89.jpg",
            "https://i.ibb.co/G3k8Zk1W/a-90.jpg",
            "https://i.ibb.co/YFG2TYFh/a-91.jpg",
            "https://i.ibb.co/DHQ0CSpb/a-92.jpg",
            "https://i.ibb.co/6chCcZyt/a-93.jpg",
            "https://i.ibb.co/Z6N7V1q3/a-94.jpg",
            "https://i.ibb.co/9kggRrP7/a-95.jpg",
            "https://i.ibb.co/prshXD8N/a-96.jpg",
            "https://i.ibb.co/n8RwW7mJ/a-97.jpg",
            "https://i.ibb.co/HfFHYKXx/a-98.jpg",
            "https://i.ibb.co/N666G4p4/a-99.jpg",
            "https://i.ibb.co/DDgd7CDB/a-100.jpg",
            "https://i.ibb.co/249mG3f/a-101.jpg",
            "https://i.ibb.co/0y7TJLYr/a-102.jpg",
            "https://i.ibb.co/x8cD7Vcv/a-103.jpg",
            "https://i.ibb.co/RGN93fSw/a-104.jpg",
            "https://i.ibb.co/N6CY0Fm9/a-105.jpg",
            "https://i.ibb.co/XhLBnWb/a-106.jpg",
            "https://i.ibb.co/Sq3Z732/a-107.jpg",
            "https://i.ibb.co/qYrBgsPk/a-108.jpg",
            "https://i.ibb.co/hR7xjWp8/a-109.jpg",
            "https://i.ibb.co/Qjq4jLcJ/a-110.jpg",
            "https://i.ibb.co/TD6yhWvw/a-111.jpg",
            "https://i.ibb.co/21wC9fzx/a-112.jpg",
            "https://i.ibb.co/SDkCDpb9/a-113.jpg",
            "https://i.ibb.co/Xkj1FFh7/a-114.jpg",
            "https://i.ibb.co/Lzj6bYPP/a-115.jpg",
            "https://i.ibb.co/pvW4LvgJ/a-116.jpg",
            "https://i.ibb.co/Wv3ftkK4/a-117.jpg",
            "https://i.ibb.co/Z1FB8kNT/a-118.jpg",
            "https://i.ibb.co/WpRpzrTN/a-119.jpg",
            "https://i.ibb.co/KpFLHzjh/a-120.jpg",
            "https://i.ibb.co/G4zHPfWF/a-121.jpg"
        ];

        // Configurações da gallery
        this.imageCache = new Map();
        this.preloadedImages = new Set();
        
        // Elementos DOM
        this.galleryGrid = document.getElementById('galleryGrid');

        // Verificação se estamos na página correta
        if (!this.galleryGrid) {
            console.log('Grid da gallery não encontrado - não inicializando AnimesVariadosGallery');
            return;
        }

        this.init();
    }

    /**
     * INICIALIZAÇÃO DA GALLERY
     */
    init() {
        console.log('Inicializando AnimesVariadosGallery...');
        
        // Gera o grid de imagens
        this.createGalleryItems();
        
        // Inicializa pop-up de visualização de imagens
        setTimeout(() => {
            this.imagePopup = new ImagePopup();
        }, 500);
        
        // Inicia carregamento das demais imagens em background
        this.startBackgroundPreload();
        
        console.log('AnimesVariadosGallery inicializada com sucesso!');
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
            img.alt = `Animes Variados - Placa decorativa ${index + 1}`;
            
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
        const message = `🌟 Olá! Quero esta placa dos Animes Variados (#${imageNumber}): ${imageUrl}`;
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
 * INICIALIZAÇÃO AUTOMÁTICA DOS ANIMES VARIADOS
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('galleryGrid') && window.location.pathname.includes('animesvariados.html')) {
        console.log('Página de gallery Animes Variados detectada - inicializando...');
        const animesvariadosGallery = new AnimesVariadosGallery();
    }
});

