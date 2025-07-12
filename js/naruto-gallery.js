/**
 * SISTEMA NARUTO GALLERY - MOSTRUÁRIO DE IMAGENS
 * 
 * COMO ADAPTAR PARA OUTROS ANIMES:
 * 1. Copiar este arquivo e renomear (ex: dragon-ball-gallery.js)
 * 2. Alterar o array 'this.images' com as URLs das imagens do novo anime
 * 3. Renomear a classe (ex: DragonBallGallery, AttackOnTitanGallery)
 * 4. Modificar as mensagens do WhatsApp (método sendWhatsAppMessage)
 * 5. Atualizar os console.log com o nome do novo anime
 * 6. Incluir o novo arquivo JS na página HTML
 * 7. Personalizar cores no CSS se necessário (variáveis CSS ou classes específicas)
 */
class NarutoGallery {
    constructor() {
        // ALTERAR: Lista de imagens do anime específico
        // Para adaptar: Substituir todas as URLs pelas imagens do novo anime
        this.images = [
            "https://i.ibb.co/1GSVPdc1/N-52.jpg",
            "https://i.ibb.co/QvBchJG5/N-51.jpg",
            "https://i.ibb.co/1t45yDPY/Naruto-0060-N-61.jpg",
            "https://i.ibb.co/SwT8z8sR/N-1.jpg",
            "https://i.ibb.co/5gg1DfPG/N-2.jpg",
            "https://i.ibb.co/NgqVfpLx/N-3.jpg",
            "https://i.ibb.co/k63qg0b7/N-4.jpg",
            "https://i.ibb.co/8DL9gtrq/N-5.jpg",
            "https://i.ibb.co/15zJjxL/N-6.jpg",
            "https://i.ibb.co/dsDn4k8c/N-7.jpg",
            "https://i.ibb.co/Lhp5RfYP/N-8.jpg",
            "https://i.ibb.co/wZ6yhkXw/N-9.jpg",
            "https://i.ibb.co/5XJ3NhHp/N-10.jpg",
            "https://i.ibb.co/SD8z2cY0/N-11.jpg",
            "https://i.ibb.co/bTqkQsX/N-12.jpg",
            "https://i.ibb.co/B53znPZG/N-13.jpg",
            "https://i.ibb.co/TBqJCLkb/N-14.jpg",
            "https://i.ibb.co/RkCJ7ZJy/N-15.jpg",
            "https://i.ibb.co/KxV0GrJd/N-16.jpg",
            "https://i.ibb.co/KcXxQPQ2/N-17.jpg",
            "https://i.ibb.co/F4PrkNfG/N-18.jpg",
            "https://i.ibb.co/zhgbBR7j/N-19.jpg",
            "https://i.ibb.co/7tyRhHJb/N-20.jpg",
            "https://i.ibb.co/YBXjCgJj/N-21.jpg",
            "https://i.ibb.co/RTzWg5ZN/N-22.jpg",
            "https://i.ibb.co/MkYx2RSz/N-23.jpg",
            "https://i.ibb.co/5pcBrH4/N-24.jpg",
            "https://i.ibb.co/BHgPrwmm/N-25.jpg",
            "https://i.ibb.co/tTgfW4tH/N-26.jpg",
            "https://i.ibb.co/hRkmGVm7/N-27.jpg",
            "https://i.ibb.co/TxJMZf0r/N-28.jpg",
            "https://i.ibb.co/kVBYthtc/N-29.jpg",
            "https://i.ibb.co/83SJ1y1/N-30.jpg",
            "https://i.ibb.co/HLFP63tm/N-31.jpg",
            "https://i.ibb.co/SwKY5TSy/N-32.jpg",
            "https://i.ibb.co/YBQqTwfY/N-33.jpg",
            "https://i.ibb.co/9HVHhcZK/N-34.jpg",
            "https://i.ibb.co/ZR3pwVx5/N-35.jpg",
            "https://i.ibb.co/bgBbvTSd/N-36.jpg",
            "https://i.ibb.co/vvYzpmsL/N-37.jpg",
            "https://i.ibb.co/wrS6Pn2C/N-38.jpg",
            "https://i.ibb.co/93Wrz3zQ/N-39.jpg",
            "https://i.ibb.co/ynFZFnqy/N-40.jpg",
            "https://i.ibb.co/ymdYG2Vg/N-41.jpg",
            "https://i.ibb.co/JjfHK6Y6/N-42.jpg",
            "https://i.ibb.co/RTYznpLV/N-43.jpg",
            "https://i.ibb.co/fGzMNC96/N-44.jpg",
            "https://i.ibb.co/B2ZzZ2Y4/N-45.jpg",
            "https://i.ibb.co/6J1hqHtr/N-46.jpg",
            "https://i.ibb.co/mF0Rvhxw/N-47.jpg",
            "https://i.ibb.co/27TvwFnL/N-48.jpg",
            "https://i.ibb.co/Fk9b4TLg/N-49.jpg",
            "https://i.ibb.co/b5fwsDsB/N-50.jpg",            
            "https://i.ibb.co/GfbZHgwM/N-53.jpg",
            "https://i.ibb.co/tpWnKRnY/N-54.jpg",
            "https://i.ibb.co/gFTj0MsT/N-55.jpg",
            "https://i.ibb.co/HDvpJmr6/N-56.jpg",
            "https://i.ibb.co/JwjMw3jw/N-57.jpg",
            "https://i.ibb.co/MxMbjJ7P/Naruto-0057-N-3.jpg",
            "https://i.ibb.co/G4WPXq3k/Naruto-0058-N-2.jpg",
            "https://i.ibb.co/gbjPQJhN/Naruto-0059-N-1.jpg"
        ];

        // Configurações da gallery - MANTER IGUAL
        this.imageCache = new Map();
        this.preloadedImages = new Set();
        
        // IMPORTANTE: Elementos DOM - verificar se existem na página
        this.galleryGrid = document.getElementById('galleryGrid');

        // VERIFICAÇÃO: Confirma se estamos na página correta
        if (!this.galleryGrid) {
            console.log('Grid da gallery não encontrado - não inicializando NarutoGallery');
            return;
        }

        this.init();
    }

    /**
     * INICIALIZAÇÃO DA GALLERY
     * Método principal que cria o mostruário de imagens
     * MANTER IGUAL - apenas alterar o console.log
     */
    init() {
        console.log('Inicializando NarutoGallery...');
        
        // CRIAÇÃO: Gera o grid de imagens
        this.createGalleryItems();
        
        // INICIALIZAÇÃO: Pop-up de visualização de imagens
        // IMPORTANTE: Deve ser inicializado APÓS criar as imagens
        setTimeout(() => {
            this.imagePopup = new ImagePopup();
        }, 500);
        
        // OTIMIZAÇÃO: Inicia carregamento das demais imagens em background
        this.startBackgroundPreload();
        
        console.log('NarutoGallery inicializada com sucesso!');
    }

    /**
     * PRÉ-CARREGAMENTO DE IMAGEM INDIVIDUAL
     * MANTER EXATAMENTE IGUAL
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
     * MANTER EXATAMENTE IGUAL
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
     * MANTER IGUAL - apenas alterar o alt da imagem
     */
    createGalleryItems() {
        this.images.forEach((imgSrc, index) => {
            // CRIAÇÃO: Card individual da imagem
            const galleryItem = document.createElement('div');
            galleryItem.className = 'onepiece-gallery-item'; // MANTER: Usa as mesmas classes CSS
            galleryItem.dataset.index = index;
            
            // CRIAÇÃO: Elemento da imagem
            const img = document.createElement('img');
            img.src = imgSrc;
            img.loading = "lazy";
            // ALTERAR: Alt específico do anime
            img.alt = `Naruto - Placa decorativa ${index + 1}`;
            
            // CRIAÇÃO: Botão "Quero Esta" individual
            const button = document.createElement('button');
            button.className = 'onepiece-gallery-btn'; // MANTER: Usa as mesmas classes CSS
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
     * ALTERAR: Personalizar mensagem conforme o anime
     * @param {string} imageUrl - URL da imagem escolhida
     * @param {number} imageNumber - Número da imagem para referência
     */
    sendWhatsAppMessage(imageUrl, imageNumber) {
        // ALTERAR: Emoji e nome do anime na mensagem
        const message = `🍥 Olá! Quero esta placa do Naruto (#${imageNumber}): ${imageUrl}`;
        const whatsappUrl = `https://wa.me/5511958588616?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

/**
 * INICIALIZAÇÃO AUTOMÁTICA ESPECÍFICA DO NARUTO
 * ALTERAR: Nome da classe e console.log para cada anime
 * 
 * PARA ADAPTAR:
 * 1. Manter esta estrutura em todas as páginas de gallery
 * 2. Alterar o nome da classe (ex: DragonBallGallery, AttackOnTitanGallery)
 * 3. Verificar se o ID 'galleryGrid' existe na nova página
 * 4. Atualizar o console.log com o nome do anime
 */
document.addEventListener('DOMContentLoaded', () => {
    // DETECÇÃO: Verifica se estamos numa página de gallery
    if (document.getElementById('galleryGrid')) {
        console.log('Página de gallery Naruto detectada - inicializando...');
        // INICIALIZAÇÃO: Cria nova instância da gallery específica
        const narutoGallery = new NarutoGallery();
    }
});

/**
 * INSTRUÇÕES PARA CRIAR OUTRAS PÁGINAS DE ANIME:
 * 
 * 1. COPIAR ARQUIVOS:
 *    - Copiar naruto.html → nomeAnime.html
 *    - Copiar naruto-gallery.js → nomeAnime-gallery.js
 * 
 * 2. ALTERAR NO HTML (nomeAnime.html):
 *    - Meta description e keywords
 *    - Título da página
 *    - Emoji e nome do anime no h1
 *    - Texto da page-subtitle
 *    - Texto do footer
 *    - Mensagem do WhatsApp no footer
 *    - Incluir o novo arquivo JS: <script src="../js/nomeAnime-gallery.js"></script>
 * 
 * 3. ALTERAR NO JS (nomeAnime-gallery.js):
 *    - Nome da classe (ex: DragonBallGallery)
 *    - Array this.images com as URLs do novo anime
 *    - Alt da imagem (ex: "Dragon Ball - Placa decorativa")
 *    - Mensagem do WhatsApp (emoji e nome do anime)
 *    - Console.log com o nome do anime
 * 
 * 4. ATUALIZAR CATÁLOGO (catalogo.html):
 *    - Trocar href="#" pelo href="nomeAnime.html"
 * 
 * 5. OPCIONAL - PERSONALIZAR CSS:
 *    - Adicionar classes específicas se quiser cores diferentes
 *    - Manter as classes existentes para funcionalidade
 */