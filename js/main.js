// =====================================
// PRELOADER
// =====================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const preloaderLogo = preloader.querySelector('.preloader-logo');
        const targetLogo = document.querySelector('.navbar .logo-mark');

        if (preloaderLogo && targetLogo) {
            // Stop pulse animation
            preloaderLogo.style.animation = 'none';
            
            // Hide target logo temporarily
            targetLogo.style.opacity = '0';
            targetLogo.style.transition = 'opacity 0.3s ease';
            
            const pRect = preloaderLogo.getBoundingClientRect();
            const tRect = targetLogo.getBoundingClientRect();
            
            // Calculate scale and translation
            const scale = tRect.width / pRect.width;
            const tx = (tRect.left + tRect.width / 2) - (pRect.left + pRect.width / 2);
            const ty = (tRect.top + tRect.height / 2) - (pRect.top + pRect.height / 2);
            
            // Animate preloader logo
            preloaderLogo.style.transition = 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
            preloaderLogo.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
            
            // Fade out preloader background
            preloader.classList.add('fade-bg');
            
            setTimeout(() => {
                targetLogo.style.opacity = '1';
                preloader.remove();
                document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('visible'));
            }, 800);
        } else {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.remove();
                document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('visible'));
            }, 800);
        }
    } else {
        document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('visible'));
    }
});

// =====================================
// TRANSLATIONS
// =====================================
const translations = {
    es: {
        heroTitle: "El ritual de nutriciÃ³n que tu piel merece.",
        heroSubtitle: "Artesana, 100% natural.",
        heroCta: "Ver CatÃ¡logo",
        ritual1Title: "NutriciÃ³n Profunda",
        ritual1Desc: "El Tallow imita la barrera natural de la piel permitiendo una absorciÃ³n inmediata llena de vitaminas A, D, E y K.",
        ritual2Title: "Lotes PequeÃ±os (Small Batch)",
        ritual2Desc: "GarantÃ­a de frescura. Elaborado esta misma semana sin conservantes quÃ­micos.",
        ritual3Title: "Aroma Terapia",
        ritual3Desc: "Los aceites esenciales puros brindan una experiencia aromÃ¡tica que relaja tu sistema nervioso.",
        ingredientsTitle: "Nuestros Ingredientes Estrella",
        ing1Title: "Grass-Fed Tallow",
        ing1Desc: "Rico en vitaminas A, D, E y K, es el humectante mÃ¡s compatible con la biologÃ­a de tu piel.",
        ing2Title: "Avena OrgÃ¡nica",
        ing2Desc: "Un calmante natural ancestral que reduce la inflamaciÃ³n y protege la barrera cutÃ¡nea.",
        ing3Title: "Miel Cruda",
        ing3Desc: "Un potente humectante repleto de enzimas y antioxidantes que iluminan tu rostro al instante.",
        counter1Text: "Clientas Satisfechas",
        counter2Text: "Ingredientes Naturales",
        counter3Text: "Artesana Desde",
        catalogTitle: "Nuestro CatÃ¡logo",
        btnBack: "Volver a CategorÃ­as",
        btnDetails: "Ver Detalles",
        btnWa: "WhatsApp",
        comingSoon: "PrÃ³ximamente en esta categorÃ­a...",
        tabBtnDesc: "DescripciÃ³n",
        tabBtnIngr: "Ingredientes",
        tabBtnProp: "Propiedades",
        testimonialText: "\"Finalmente una crema que mi piel sensible tolera. El olor a natural es increÃ­ble. Es un lujo para todos los dÃ­as.\"",
        storyTitle: "Nuestra Historia",
        storyP1: "Mi pasiÃ³n por el bienestar natural me llevÃ³ a buscar alternativas reales a los quÃ­micos industriales.",
        storyP2: "Very Natural nace con la promesa de entregar solo productos que yo misma usarÃ­a en mi familia. Hecho a mano, con amor, honestidad y respeto absoluto por tu piel.",
        faqTitle: "Preguntas Frecuentes",
        faqQ1: "Â¿Es apto para pieles sensibles o con rosÃ¡cea?",
        faqA1: "SÃ­, nuestras fÃ³rmulas estÃ¡n diseÃ±adas especÃ­ficamente para calmar pieles reactivas utilizando ingredientes 100% naturales sin fragancias sintÃ©ticas.",
        faqQ2: "Â¿CuÃ¡nto duran los productos?",
        faqA2: "Al no usar conservantes artificiales, recomendamos usar los productos dentro de los 6 meses posteriores a su apertura. Mantenlos en un lugar fresco y seco.",
        faqQ3: "Â¿Realizan envÃ­os a todo el paÃ­s?",
        faqA3: "SÃ­, realizamos envÃ­os nacionales. ComunÃ­cate por WhatsApp para coordinar el envÃ­o de tu pedido a la puerta de tu casa.",
        igTitle: "SÃ­guenos en Instagram"
    },
    en: {
        heroTitle: "Ancestral skin nourishment.",
        heroSubtitle: "Handcrafted, 100% natural.",
        heroCta: "Shop the Collection",
        ritual1Title: "Deep Nutrition",
        ritual1Desc: "Tallow mimics the skin's natural barrier, allowing for immediate absorption of vitamins A, D, E, and K.",
        ritual2Title: "Small Batches",
        ritual2Desc: "Guaranteed freshness. Handcrafted this week without harmful chemical preservatives.",
        ritual3Title: "Aroma Therapy",
        ritual3Desc: "Pure essential oils provide an aromatic experience that soothes your nervous system.",
        ingredientsTitle: "Our Star Ingredients",
        ing1Title: "Grass-Fed Tallow",
        ing1Desc: "Rich in vitamins A, D, E and K, it is the moisturizer most compatible with your skin's biology.",
        ing2Title: "Organic Oat",
        ing2Desc: "An ancient natural soother that reduces inflammation and protects the skin barrier.",
        ing3Title: "Raw Honey",
        ing3Desc: "A powerful humectant packed with enzymes and antioxidants that instantly brighten your face.",
        counter1Text: "Satisfied Clients",
        counter2Text: "Natural Ingredients",
        counter3Text: "Artisan Since",
        catalogTitle: "Our Catalog",
        btnBack: "Back to Categories",
        btnDetails: "View Details",
        btnWa: "WhatsApp",
        comingSoon: "Coming soon in this category...",
        tabBtnDesc: "Description",
        tabBtnIngr: "Ingredients",
        tabBtnProp: "Properties",
        testimonialText: "\"Finally a cream my sensitive skin tolerates. The natural scent is incredible. It's a daily luxury.\"",
        storyTitle: "Our Story",
        storyP1: "My passion for natural wellness led me to seek real alternatives to industrial chemicals.",
        storyP2: "Very Natural was born with the promise of delivering only products I would use on my own family. Handmade with love, honesty, and absolute respect for your skin.",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "Is it suitable for sensitive skin or rosacea?",
        faqA1: "Yes, our formulas are specifically designed to soothe reactive skin using 100% natural ingredients without synthetic fragrances.",
        faqQ2: "How long do the products last?",
        faqA2: "Since we do not use artificial preservatives, we recommend using the products within 6 months after opening. Keep them in a cool, dry place.",
        faqQ3: "Do you ship nationwide?",
        faqA3: "Yes, we offer nationwide shipping. Contact us via WhatsApp to coordinate the delivery of your order right to your doorstep.",
        igTitle: "Follow us on Instagram"
    }
};

let currentLang = 'es';
let activeFilter = 'todo';
let currentView = 'categories'; // 'categories' or 'products'
const whatsappNumber = "1234567890"; // â† Reemplaza con el nÃºmero real de VerÃ³nica

// =====================================
// STATIC DOM ELEMENTS TO TRANSLATE
// =====================================
const elementsToTranslate = {
    heroTitle:       document.getElementById('hero-title'),
    heroSubtitle:    document.getElementById('hero-subtitle'),
    heroCta:         document.getElementById('hero-cta'),
    ritual1Title:    document.getElementById('ritual-1-title'),
    ritual1Desc:     document.getElementById('ritual-1-desc'),
    ritual2Title:    document.getElementById('ritual-2-title'),
    ritual2Desc:     document.getElementById('ritual-2-desc'),
    ritual3Title:    document.getElementById('ritual-3-title'),
    ritual3Desc:     document.getElementById('ritual-3-desc'),
    ingredientsTitle:document.getElementById('ingredients-title'),
    ing1Title:       document.getElementById('ing-1-title'),
    ing1Desc:        document.getElementById('ing-1-desc'),
    ing2Title:       document.getElementById('ing-2-title'),
    ing2Desc:        document.getElementById('ing-2-desc'),
    ing3Title:       document.getElementById('ing-3-title'),
    ing3Desc:        document.getElementById('ing-3-desc'),
    counter1Text:    document.getElementById('counter-1-text'),
    counter2Text:    document.getElementById('counter-2-text'),
    counter3Text:    document.getElementById('counter-3-text'),
    catalogTitle:    document.getElementById('catalog-title'),
    btnBack:         document.getElementById('text-back'),
    tabBtnDesc:      document.getElementById('tab-btn-desc'),
    tabBtnIngr:      document.getElementById('tab-btn-ingr'),
    tabBtnProp:      document.getElementById('tab-btn-prop'),
    testimonialText: document.getElementById('testimonial-text'),
    storyTitle:      document.getElementById('story-title'),
    storyP1:         document.getElementById('story-p1'),
    storyP2:         document.getElementById('story-p2'),
    faqTitle:        document.getElementById('faq-title'),
    faqQ1:           document.getElementById('faq-q1'),
    faqA1:           document.getElementById('faq-a1'),
    faqQ2:           document.getElementById('faq-q2'),
    faqA2:           document.getElementById('faq-a2'),
    faqQ3:           document.getElementById('faq-q3'),
    faqA3:           document.getElementById('faq-a3'),
    igTitle:         document.getElementById('ig-title')
};

// =====================================
// LANGUAGE TOGGLE
// =====================================
const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');

function setLanguage(lang) {
    currentLang = lang;

    if (lang === 'es') {
        btnEs.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnEs.classList.remove('active');
    }

    // Animate static text transitions
    Object.keys(elementsToTranslate).forEach(key => {
        const el = elementsToTranslate[key];
        if (el) {
            el.style.opacity = 0;
            setTimeout(() => {
                el.innerText = translations[lang][key];
                el.style.opacity = 1;
            }, 300);
        }
    });

    // Re-render dynamic catalog with new language
    renderLargeCategoryCards();
    renderFilterButtons(activeFilter);
    renderCatalog(activeFilter);

    // Update modal if open
    const modal = document.getElementById('product-modal');
    const activeProductId = modal && modal.getAttribute('data-active-product');
    if (modal && modal.classList.contains('show') && activeProductId) {
        setTimeout(() => openModal(activeProductId), 320);
    }

    updateWhatsAppLinks();
}

btnEs.addEventListener('click', () => setLanguage('es'));
btnEn.addEventListener('click', () => setLanguage('en'));

// CSS transition for static text elements
document.head.insertAdjacentHTML('beforeend', `<style>
    #hero-title, #hero-subtitle, #hero-cta, [id^="ritual-"], [id^="ing-"],
    #ingredients-title, #catalog-title, [id^="tab-btn"],
    #testimonial-text, #story-title, #story-p1, #story-p2, [id^="counter-"] {
        transition: opacity 0.3s ease;
    }
</style>`);

// =====================================
// WHATSAPP INTEGRATION
// =====================================
function updateWhatsAppLinks() {
    const template = currentLang === 'es'
        ? 'Â¡Hola VerÃ³nica! Me interesa ordenar: '
        : 'Hi Veronica! I want to order: ';

    document.querySelectorAll('.btn-whatsapp').forEach(btn => {
        const product = btn.getAttribute('data-product');
        const message = encodeURIComponent(`${template}${product}`);
        const url = `https://wa.me/${whatsappNumber}?text=${message}`;
        const clone = btn.cloneNode(true);
        btn.parentNode.replaceChild(clone, btn);
        clone.addEventListener('click', () => window.open(url, '_blank'));
    });

    const generalMsg = encodeURIComponent(
        currentLang === 'es'
            ? 'Â¡Hola VerÃ³nica! Quisiera mÃ¡s informaciÃ³n sobre los productos.'
            : 'Hi Veronica! I would like more information about the products.'
    );
    const floatingUrl = `https://wa.me/${whatsappNumber}?text=${generalMsg}`;
    document.getElementById('floating-wa').setAttribute('href', floatingUrl);
    document.getElementById('footer-wa').setAttribute('href', floatingUrl);
}

updateWhatsAppLinks();

// =====================================
// NAVBAR SCROLL EFFECT
// =====================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Check if navbar is over a dark section to invert text colors
    let isOverDark = false;
    const darkSections = document.querySelectorAll('.catalog-section, .testimonial-section');
    const navHeight = navbar.offsetHeight || 80;

    darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navHeight / 2 && rect.bottom >= navHeight / 2) {
            isOverDark = true;
        }
    });

    navbar.classList.toggle('over-dark', isOverDark);
});

// =====================================
// SCROLL REVEAL (Intersection Observer)
// =====================================
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { root: null, rootMargin: '0px', threshold: 0.15 });

// =====================================
// PRODUCT DATABASE
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// PARA AGREGAR UN NUEVO PRODUCTO:
//  1. AÃ±ade un objeto en el array `products` (id, category, img, waProduct)
//  2. AÃ±ade sus datos en `productData` tanto en 'es' como en 'en'
// =====================================

// Master list: defines which products appear and their category
const products = [
    {
        id: 'prod1',
        category: 'jabones',
        img: 'assets/Jabon1.png?v=2',
        waProduct: { es: 'Mascarilla JabÃ³n Avena', en: 'Oat Mask Soap' }
    },
    {
        id: 'prod2',
        category: 'jabones',
        img: 'assets/Jabon2.png?v=2',
        waProduct: { es: 'JabÃ³n Mascarilla Detox', en: 'Detox Mask Soap' }
    },
    {
        id: 'prod3',
        category: 'cremas',
        img: 'assets/Crema1.png',
        waProduct: { es: 'Crema Vainilla y Manzanilla', en: 'Vanilla & Chamomile Cream' }
    },
    {
        id: 'prod4',
        category: 'jabones',
        img: 'assets/Jabon3.png?v=2',
        waProduct: { es: 'JabÃ³n Aloe & Miel', en: 'Aloe & Honey Soap' }
    },
    {
        id: 'prod5',
        category: 'jabones',
        img: 'assets/Jabon4.jfif',
        waProduct: { es: 'JabÃ³n Corporal Avena Leche y Miel', en: 'Oat Milk & Honey Body Soap' }
    }
    // Agrega mÃ¡s productos aquÃ­...
];

// Detailed bilingual content per product
const productData = {
    es: {
        "prod1": {
            name: "JabÃ³n facial Mascarilla 2 en 1",
            price: "$4.99 USD",
            size: "40g / 1.4 oz",
            desc: `<p><strong>JabÃ³n Mascarilla Facial Artesanal 2 en 1</strong></p>
                   <p>Nuestro JabÃ³n Mascarilla Facial 2 en 1 estÃ¡ elaborado artesanalmente con glicerina 100% vegetal enriquecida con leche de coco y leche de cabra, combinado con avena, leche, miel y un delicado toque de aceite esencial de lavanda.</p>
                   <p>Su fÃ³rmula cremosa limpia suavemente mientras funciona como mascarilla facial, ayudando a dejar la piel con una sensaciÃ³n suave, nutrida y confortable.</p>
                   <br><p><strong>Modo de Uso:</strong></p>
                   <p>Aplicar sobre la piel hÃºmeda, masajear con suaves movimientos circulares, dejar actuar unos minutos como mascarilla. Luego enjuagar con abundante agua tibia.</p>`,
            ingr: `<p><strong>Ingredientes Destacados:</strong></p>
                   <p>Glicerina vegetal 100%, Leche de Coco, Leche de Cabra, Avena Sativa Natural, Leche, Miel OrgÃ¡nica, Aceite Esencial de Lavanda.</p>
                   <br><p><em>INCI: Cocos Nucifera (Coconut) Milk Glycerin, Goat Milk Glycerin, Avena Sativa Kernel Flour, Milk Powder, Mel, Lavandula Angustifolia Oil.</em></p>`,
            prop: `<p><strong>Beneficios Principales:</strong></p>
                   <ul>
                       <li><strong>Limpieza suave:</strong> Respeta el manto hidrolipÃ­dico natural de la piel.</li>
                       <li><strong>Calma instantÃ¡nea:</strong> Ideal para pieles sensibles o reactivas.</li>
                       <li><strong>HidrataciÃ³n profunda:</strong> Aporta una textura aterciolada y nutrida.</li>
                       <li><strong>Doble funciÃ³n:</strong> ActÃºa como jabÃ³n limpiador y mascarilla nutritiva.</li>
                       <li><strong>Apto para pieles secas:</strong> Especialmente recomendado para pieles con textura irregular o deshidratadas.</li>
                   </ul>
                   <br><p><strong>Advertencias:</strong></p>
                   <p>Solo para uso externo. Evita el contacto con los ojos. Suspende su uso en caso de irritaciÃ³n. Mantener fuera del alcance de los niÃ±os.</p>`
        },
        "prod3": {
            name: "Crema Batida Vainilla y Manzanilla",
            price: "$19.99 USD",
            size: "Varias presentaciones",
            desc: `<p><strong>Crema Batida de Cebo de Res con CalÃ©ndula, Manzanilla y Vainilla</strong></p>
                   <p>NutriciÃ³n profunda y piel suave.</p>
                   <p>Crema batida artesanal elaborada con cebo de res filtrado y aceites vegetales seleccionados. Ayuda a nutrir, suavizar y mantener la piel con una sensaciÃ³n confortable e hidratada, aportando elasticidad y cuidado diario.</p>
                   <br><p><strong>Modo de Uso:</strong></p>
                   <p>Aplicar una pequeÃ±a cantidad sobre la piel limpia y seca, masajeando suavemente hasta su completa absorciÃ³n. Uso diario.</p>`,
            ingr: `<p><strong>Ingredientes (INCI):</strong></p>
                   <p>Tallow, Simmondsia Chinensis (Jojoba) Seed Oil, Ricinus Communis (Castor) Seed Oil, Calendula Officinalis Flower Extract, Chamomilla Recutita Flower Extract, Vanilla Planifolia Fruit Extract, Leptospermum Scoparium Leaf Oil, Tocopherol.</p>`,
            prop: `<p><strong>Beneficios Principales:</strong></p>
                   <ul>
                       <li><strong>NutriciÃ³n profunda:</strong> Penetra las capas de la piel aportando vitaminas esenciales.</li>
                       <li><strong>Piel suave e hidratada:</strong> Mantiene la humedad natural de la piel durante todo el dÃ­a.</li>
                       <li><strong>Elasticidad cutÃ¡nea:</strong> Contribuye a mejorar la firmeza y elasticidad.</li>
                       <li><strong>Efecto calmante:</strong> SensaciÃ³n reconfortante con aroma natural a vainilla y manuka.</li>
                   </ul>
                   <br><p><strong>Precauciones:</strong></p>
                   <p>Solo para uso externo. Evitar contacto con los ojos. Suspender su uso si presenta irritaciÃ³n. Mantener fuera del alcance de los niÃ±os.</p>
                   <br><p><em>Conservar en un lugar fresco, seco y alejado de la luz directa del sol.</em></p>`
        },
        "prod4": {
            name: "JabÃ³n Mascarilla 2 en 1 â€” Aloe & Miel",
            price: "$4.99 USD",
            size: "40g / 1.4 oz",
            desc: `<p><strong>JabÃ³n Artesanal de Glicerina con Aloe Vera, Miel de Manuka y Lavanda</strong></p>
                   <p>JabÃ³n artesanal elaborado con base de glicerina enriquecida con Aloe Vera, miel de Manuka y aceite esencial de lavanda. Limpia suavemente la piel ayudando a mantenerla hidratada, suave y con un aroma relajante.</p>`,
            ingr: `<p><strong>Ingredientes (INCI):</strong></p>
                   <p>Glycerin, Aqua, Sodium Stearate, Propylene Glycol, Aloe Barbadensis Leaf Juice, Mel, Lavandula Angustifolia Oil.</p>`,
            prop: `<p><strong>Beneficios Principales:</strong></p>
                   <ul>
                       <li><strong>Limpieza suave:</strong> Respeta el equilibrio natural de la piel.</li>
                       <li><strong>HidrataciÃ³n natural:</strong> Ayuda a mantener la hidrataciÃ³n sin resecar.</li>
                       <li><strong>Efecto calmante:</strong> SensaciÃ³n calmante y relajante al contacto.</li>
                       <li><strong>Aroma natural:</strong> Delicado aroma a lavanda que relaja los sentidos.</li>
                   </ul>
                   <br><p><strong>Advertencias:</strong></p>
                   <p>Solo para uso externo. Evita el contacto con los ojos. Suspende su uso en caso de irritaciÃ³n. Mantener fuera del alcance de los niÃ±os.</p>`
        },
        "prod2": {
            name: "JabÃ³n Mascarilla Facial Detox",
            price: "$4.99 USD",
            size: "40g / 1.4 oz",
            desc: `<p>Un tratamiento purificante de grado spa diseÃ±ado para revitalizar la piel estresada. Esta exquisita barra artesanal combina la frescura del Aloe Vera con el poder magnÃ©tico del CarbÃ³n Activado y la luminosidad de la CÃºrcuma.</p>
                   <br><p><strong>Ideal para:</strong> Pieles mixtas, grasas o con tendencia a imperfecciones.</p>`,
            ingr: `<p><strong>Propiedades de los Ingredientes:</strong></p>
                   <ul style="padding-left: 1rem;">
                       <li style="margin-bottom:.5rem"><strong>CarbÃ³n Activado:</strong> Absorbe impurezas y exceso de grasa.</li>
                       <li style="margin-bottom:.5rem"><strong>CÃºrcuma:</strong> Antioxidante que aporta luminosidad y mejora el tono.</li>
                       <li style="margin-bottom:.5rem"><strong>Miel Cruda:</strong> Humectante natural que nutre en profundidad.</li>
                       <li style="margin-bottom:.5rem"><strong>Aceite de Tea Tree:</strong> Refrescante y purificante.</li>
                       <li style="margin-bottom:.5rem"><strong>Glicerina de Aloe Vera:</strong> Calma, hidrata y limpia con delicadeza.</li>
                   </ul>`,
            prop: `<p><strong>El Ritual de Uso:</strong></p>
                   <p>Aplica sobre el rostro hÃºmedo con suaves masajes circulares. <strong>DÃ©jalo actuar de 1 a 3 minutos</strong> como mascarilla y enjuaga con agua tibia.</p>
                   <p><em>Frecuencia recomendada: 2 a 4 veces por semana.</em></p>
                   <br><p><strong>Advertencias:</strong></p>
                   <p>Uso externo exclusivamente. Evita el contacto con los ojos. Mantener fuera del alcance de los niÃ±os.</p>`
        },
        "prod5": {
            name: "JabÃ³n Corporal de avena leche y miel",
            price: "$7.99 USD",
            size: "100g / 3.5 oz",
            desc: `<p>Un jabÃ³n corporal reconfortante formulado para limpiar e hidratar. (PrÃ³ximamente mÃ¡s detalles).</p>`,
            ingr: `<p><strong>Ingredientes Destacados:</strong></p>
                   <ul>
                       <li>Avena</li>
                       <li>Leche</li>
                       <li>Miel</li>
                   </ul>`,
            prop: `<p><strong>Beneficios:</strong></p>
                   <p>Suave exfoliaciÃ³n y nutriciÃ³n profunda para la piel del cuerpo.</p>`
        }
    },
    en: {
        "prod1": {
            name: "Facial Mask Soap 2-in-1",
            price: "$4.99 USD",
            size: "1.4 oz / 40g",
            desc: `<p><strong>Artisanal 2-in-1 Facial Mask Soap</strong></p>
                   <p>Our 2-in-1 Facial Mask Soap is handcrafted with 100% vegetable glycerin enriched with coconut milk and goat milk, combined with oats, milk, honey, and a delicate touch of lavender essential oil.</p>
                   <p>Its creamy formula cleanses gently while functioning as a facial mask, helping to leave skin with a soft, nourished, and comfortable feeling.</p>
                   <br><p><strong>How to Use:</strong></p>
                   <p>Apply to damp skin, massage with gentle circular motions, leave acting for a few minutes as a mask. Then rinse thoroughly with warm water.</p>`,
            ingr: `<p><strong>Key Ingredients:</strong></p>
                   <p>100% Vegetable Glycerin, Coconut Milk, Goat Milk, Natural Avena Sativa, Milk, Organic Honey, Lavender Essential Oil.</p>
                   <br><p><em>INCI: Cocos Nucifera (Coconut) Milk Glycerin, Goat Milk Glycerin, Avena Sativa Kernel Flour, Milk Powder, Mel, Lavandula Angustifolia Oil.</em></p>`,
            prop: `<p><strong>Main Benefits:</strong></p>
                   <ul>
                       <li><strong>Gentle Cleansing:</strong> Respects the skin's natural hydrolipidic barrier.</li>
                       <li><strong>Instant Soothing:</strong> Ideal for sensitive or reactive skin.</li>
                       <li><strong>Deep Hydration:</strong> Provides a velvety, nourished texture.</li>
                       <li><strong>Dual Function:</strong> Works as both a gentle cleanser and nourishing facial mask.</li>
                       <li><strong>For Dry Skin:</strong> Especially recommended for dry or unevenly textured skin.</li>
                   </ul>
                   <br><p><strong>Warnings:</strong></p>
                   <p>For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children.</p>`
        },
        "prod2": {
            name: "Detox Facial Mask Soap",
            price: "$4.99 USD",
            size: "1.4 oz / 40g",
            desc: `<p>A spa-grade purifying treatment designed to revitalize stressed skin. This artisanal bar combines Aloe Vera with the magnetic power of Activated Charcoal and the luminosity of Turmeric.</p>
                   <br><p><strong>Ideal for:</strong> Combination, oily, or blemish-prone skin.</p>`,
            ingr: `<p><strong>Ingredient Properties:</strong></p>
                   <ul style="padding-left: 1rem;">
                       <li style="margin-bottom:.5rem"><strong>Activated Charcoal:</strong> Acts like a magnet to absorb impurities and excess oil.</li>
                       <li style="margin-bottom:.5rem"><strong>Turmeric:</strong> A powerful antioxidant that adds luminosity and improves uneven tone.</li>
                       <li style="margin-bottom:.5rem"><strong>Raw Honey:</strong> A natural humectant that conditions and deeply nourishes.</li>
                       <li style="margin-bottom:.5rem"><strong>Tea Tree Essential Oil:</strong> Refreshing and purifying.</li>
                       <li style="margin-bottom:.5rem"><strong>Aloe Vera Glycerin:</strong> Soothes, hydrates, and ensures a delicate cleanse.</li>
                   </ul>`,
            prop: `<p><strong>The Ritual:</strong></p>
                   <p>Apply to a damp face with gentle circular massages. <strong>Leave on for 1 to 3 minutes</strong> as an intensive mask, then rinse with warm water.</p>
                   <p><em>Recommended frequency: 2 to 4 times a week.</em></p>
                   <br><p><strong>Warnings:</strong></p>
                   <p>For external use only. Avoid contact with eyes. Keep out of reach of children.</p>`
        },
        "prod3": {
            name: "Whipped Vanilla & Chamomile Cream",
            price: "$19.99 USD",
            size: "Various sizes",
            desc: `<p><strong>Whipped Tallow Cream with Calendula, Chamomile & Vanilla</strong></p>
                   <p>Deep nourishment for soft, supple skin.</p>
                   <p>Artisanal whipped cream made with filtered beef tallow and selected vegetable oils. Helps nourish, soften, and maintain skin with a comfortable, hydrated feeling while providing elasticity and daily care.</p>
                   <br><p><strong>How to Use:</strong></p>
                   <p>Apply a small amount to clean, dry skin and massage gently until fully absorbed. For daily use.</p>`,
            ingr: `<p><strong>Ingredients (INCI):</strong></p>
                   <p>Tallow, Simmondsia Chinensis (Jojoba) Seed Oil, Ricinus Communis (Castor) Seed Oil, Calendula Officinalis Flower Extract, Chamomilla Recutita Flower Extract, Vanilla Planifolia Fruit Extract, Leptospermum Scoparium Leaf Oil, Tocopherol.</p>`,
            prop: `<p><strong>Main Benefits:</strong></p>
                   <ul>
                       <li><strong>Deep Nourishment:</strong> Penetrates skin layers delivering essential vitamins.</li>
                       <li><strong>Soft & Hydrated Skin:</strong> Maintains natural moisture throughout the day.</li>
                       <li><strong>Improved Elasticity:</strong> Helps enhance skin firmness and elasticity.</li>
                       <li><strong>Soothing Effect:</strong> Comforting sensation with natural vanilla and manuka aroma.</li>
                   </ul>
                   <br><p><strong>Precautions:</strong></p>
                   <p>For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children.</p>
                   <br><p><em>Store in a cool, dry place away from direct sunlight.</em></p>`
        },
        "prod4": {
            name: "Mask Soap 2-in-1 — Aloe & Honey",
            price: "$4.99 USD",
            size: "1.4 oz / 40g",
            desc: `<p><strong>Artisanal Glycerin Soap with Aloe Vera, Manuka Honey & Lavender</strong></p>
                   <p>Handcrafted soap made with a glycerin base enriched with Aloe Vera, Manuka honey, and lavender essential oil. Gently cleanses the skin while helping to keep it hydrated, soft, and with a relaxing aroma.</p>`,
            ingr: `<p><strong>Ingredients (INCI):</strong></p>
                   <p>Glycerin, Aqua, Sodium Stearate, Propylene Glycol, Aloe Barbadensis Leaf Juice, Mel, Lavandula Angustifolia Oil.</p>`,
            prop: `<p><strong>Main Benefits:</strong></p>
                   <ul>
                       <li><strong>Gentle Cleansing:</strong> Respects the skin's natural balance.</li>
                       <li><strong>Natural Hydration:</strong> Helps maintain moisture without drying.</li>
                       <li><strong>Soothing Effect:</strong> Calming and relaxing sensation on contact.</li>
                       <li><strong>Natural Aroma:</strong> Delicate lavender scent that soothes the senses.</li>
                   </ul>
                   <br><p><strong>Warnings:</strong></p>
                   <p>For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children.</p>`
        },
        "prod5": {
            name: "Oat Milk & Honey Body Soap",
            price: "$7.99 USD",
            size: "3.5 oz / 100g",
            desc: `<p>A comforting body soap formulated to cleanse and hydrate. (More details coming soon).</p>`,
            ingr: `<p><strong>Key Ingredients:</strong></p>
                   <ul>
                       <li>Oats</li>
                       <li>Milk</li>
                       <li>Honey</li>
                   </ul>`,
            prop: `<p><strong>Benefits:</strong></p>
                   <p>Gentle exfoliation and deep nourishment for body skin.</p>`
        }
    }
};

// =====================================
// CATALOG VIEW MANAGEMENT
// =====================================
const viewCategories = document.getElementById('catalog-categories-view');
const viewProducts = document.getElementById('catalog-products-view');
const btnBackCategories = document.getElementById('btn-back-categories');

function showCategoriesView() {
    currentView = 'categories';
    viewProducts.classList.remove('active');
    viewProducts.classList.add('hidden');
    
    setTimeout(() => {
        viewCategories.classList.remove('hidden');
        viewCategories.classList.add('active');
    }, 300); // Wait for fade out
}

function showProductsView(categoryId) {
    currentView = 'products';
    activeFilter = categoryId;
    
    viewCategories.classList.remove('active');
    viewCategories.classList.add('hidden');
    
    setTimeout(() => {
        viewProducts.classList.remove('hidden');
        viewProducts.classList.add('active');
        renderFilterButtons(categoryId);
        renderCatalog(categoryId);
    }, 300); // Wait for fade out
}

if (btnBackCategories) {
    btnBackCategories.addEventListener('click', showCategoriesView);
}

// =====================================
// CATALOG FILTER CATEGORIES
// =====================================
// Category filter definitions with cover images
const filterCategories = [
    { id: 'cremas',      es: 'Cremas',      en: 'Creams', img: 'assets/Portada_cremas.jpeg' },
    { id: 'jabones',     es: 'Jabones',     en: 'Soaps',  img: 'assets/Portad_jabones.jpeg' },
    { id: 'kits',        es: 'Kits',        en: 'Kits',   img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80' },
    { id: 'novedades',   es: 'Novedades',   en: 'New',    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80' },
    { id: 'todo',        es: 'Todo',        en: 'All',    img: 'assets/mujer_horizontal.png' }
];

function renderLargeCategoryCards() {
    const container = document.getElementById('categories-grid');
    if (!container) return;
    container.innerHTML = '';

    filterCategories.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'category-card-large scroll-reveal ' + (index > 0 ? 'delay-' + (index % 3) : '');
        card.setAttribute('aria-label', cat[currentLang]);

        if (cat.img) {
            card.innerHTML = `
                <div class="cat-bg" style="background-image: url('${cat.img}')"></div>
                <div class="cat-overlay"></div>
                <span class="cat-label">${cat[currentLang]}</span>
            `;
        } else {
            card.innerHTML = `
                <div class="cat-gradient"></div>
                <div class="cat-overlay"></div>
                <span class="cat-label">${cat[currentLang]}</span>
            `;
        }

        card.addEventListener('click', () => {
            showProductsView(cat.id);
        });
        container.appendChild(card);
        
        // Ensure scroll-reveal triggers for dynamic elements
        if (typeof observer !== 'undefined') {
            observer.observe(card);
        }
    });
}

function renderFilterButtons(selectedFilter) {
    const container = document.getElementById('catalog-filters');
    if (!container) return;
    container.innerHTML = '';

    filterCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'quick-filter-btn' + (cat.id === selectedFilter ? ' active' : '');
        btn.setAttribute('data-filter', cat.id);
        btn.textContent = cat[currentLang];

        btn.addEventListener('click', () => {
            activeFilter = cat.id;
            renderFilterButtons(cat.id);
            renderCatalog(cat.id);
        });
        container.appendChild(btn);
    });
}

function renderCatalog(filter = 'todo') {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;
    const t = translations[currentLang];
    const filtered = filter === 'todo'
        ? products
        : products.filter(p => p.category === filter);

    // Fade out
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(12px)';

    setTimeout(() => {
        grid.innerHTML = '';

        if (filtered.length === 0) {
            const msg = document.createElement('p');
            msg.className = 'no-products';
            msg.textContent = t.comingSoon;
            grid.appendChild(msg);
        } else {
            filtered.forEach((product, index) => {
                const data = productData[currentLang][product.id];
                if (!data) return;
                const delayClass = index === 1 ? 'delay-1' : index === 2 ? 'delay-2' : '';
                const waText = product.waProduct[currentLang];

                const card = document.createElement('div');
                card.className = `product-card ${delayClass}`;
                card.innerHTML = `
                    <img src="${product.img}" alt="${data.name}" class="product-img" data-product-id="${product.id}" loading="lazy" fetchpriority="low">
                    <div class="product-info">
                        <h3 class="product-name">${data.name}</h3>
                        <p class="product-size">${data.size}</p>
                        <p class="product-price">${data.price}</p>
                        <div class="product-actions">
                            <button class="btn btn-secondary btn-details" data-product-id="${product.id}">${t.btnDetails}</button>
                            <button class="btn btn-terracotta btn-whatsapp" data-product="${waText}">${t.btnWa}</button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        initTiltEffect();
        updateWhatsAppLinks();

        // Fade in
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
    }, 280);
}

// =====================================
// 3D TILT EFFECT (reusable)
// =====================================
function initTiltEffect() {
    document.querySelectorAll('#catalog-grid .product-card').forEach(card => {
        // Agregar transiciÃ³n suave durante hover (solo en dispositivos con ratÃ³n)
        if (window.matchMedia("(hover: hover)").matches) {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease-out';
            });

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const rotateX = (((e.clientY - rect.top)  / rect.height) - 0.5) * -8;
                const rotateY = (((e.clientX - rect.left) / rect.width)  - 0.5) *  8;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.3s ease-out';
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        }
    });
}

// =====================================
// MODAL: open / close
// =====================================
function openModal(productId) {
    const modal     = document.getElementById('product-modal');
    const modalImg  = document.getElementById('modal-img');
    const modalTitle= document.getElementById('modal-title');
    const modalPrice= document.getElementById('modal-price');
    const tabDesc   = document.getElementById('modal-desc');
    const tabIngr   = document.getElementById('modal-ingr');
    const tabProp   = document.getElementById('modal-prop');
    const modalInfo = document.querySelector('.modal-info');
    const modalContent = document.querySelector('.modal-content');
    if (!modal) return;

    const data    = productData[currentLang][productId];
    const product = products.find(p => p.id === productId);
    if (!data || !product) return;

    modal.setAttribute('data-active-product', productId);
    modalTitle.textContent = data.name;
    modalPrice.textContent = data.price;
    modalImg.src = product.img;
    tabDesc.innerHTML = data.desc;
    tabIngr.innerHTML = data.ingr;
    tabProp.innerHTML = data.prop;

    // Reset tabs to first tab
    document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    document.querySelectorAll('.tab-content').forEach((c, i) => c.classList.toggle('active', i === 0));

    // Reiniciar scroll position de modal-info y modal-content
    if (modalInfo) modalInfo.scrollTop = 0;
    if (modalContent) modalContent.scrollTop = 0;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// =====================================
// DOM CONTENT LOADED
// =====================================
document.addEventListener('DOMContentLoaded', () => {

    // â”€â”€ Scroll reveal observer â”€â”€
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    // â”€â”€ Typewriter â”€â”€
    const typewriterEl = document.querySelector('.typewriter-target');
    if (typewriterEl) {
        const fullText = typewriterEl.textContent;
        typewriterEl.textContent = '';
        typewriterEl.classList.add('typewriter-cursor');
        let charIndex = 0;
        setTimeout(() => {
            const iv = setInterval(() => {
                typewriterEl.textContent += fullText.charAt(charIndex++);
                if (charIndex >= fullText.length) {
                    clearInterval(iv);
                    setTimeout(() => typewriterEl.classList.remove('typewriter-cursor'), 1500);
                }
            }, 50);
        }, 1200);
    }

    // â”€â”€ Animated Counters â”€â”€
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            const start = performance.now();
            const animate = (now) => {
                const p = Math.min((now - start) / 2000, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(ease * target).toLocaleString();
                if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter-number').forEach(el => counterObserver.observe(el));

    // â”€â”€ Scroll arrow â”€â”€
    document.querySelector('.scroll-down-arrow')?.addEventListener('click', () => {
        document.getElementById('ritual')?.scrollIntoView({ behavior: 'smooth' });
    });

    // â”€â”€ Render catalog & filters â”€â”€
    renderLargeCategoryCards();
    showCategoriesView();

    // â”€â”€ Modal: event delegation on catalog grid â”€â”€
    const modal    = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close-modal');
    const catalogGrid = document.getElementById('catalog-grid');

    if (catalogGrid) {
        catalogGrid.addEventListener('click', (e) => {
            const target = e.target.closest('.btn-details, .product-img');
            if (target) {
                const id = target.getAttribute('data-product-id');
                if (id) openModal(id);
            }
        });
    }

    // â”€â”€ FAQ Accordion â”€â”€
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            
            // Close others
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if(otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current
            item.classList.toggle('active');
        });
    });

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        // Reiniciar scroll al cerrar
        const modalInfo = document.querySelector('.modal-info');
        const modalContent = document.querySelector('.modal-content');
        if (modalInfo) modalInfo.scrollTop = 0;
        if (modalContent) modalContent.scrollTop = 0;
    };

    closeBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // â”€â”€ Hamburger Menu for Mobile â”€â”€
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // Toggle mobile menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu?.classList.toggle('active');
        });
    }

    // Close menu when clicking close button
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            hamburgerBtn?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        });
    }

    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu?.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !hamburgerBtn?.contains(e.target)) {
            hamburgerBtn?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        }
    });

    // â”€â”€ Tabs â”€â”€
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target'))?.classList.add('active');
        });
    });

    // â”€â”€ Floating scroll-to-catalog-top button â”€â”€
    const scrollTopBtn = document.getElementById('scroll-to-catalog');
    const catalogSection = document.getElementById('catalog');

    if (scrollTopBtn && catalogSection) {
        // Show/hide based on scroll position & view
        window.addEventListener('scroll', () => {
            if (currentView === 'products') {
                const catalogTop = catalogSection.getBoundingClientRect().top + window.scrollY;
                const scrolledPastCatalog = window.scrollY > catalogTop + 300;
                scrollTopBtn.classList.toggle('visible', scrolledPastCatalog);
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        // Click: scroll back to catalog section top
        scrollTopBtn.addEventListener('click', () => {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});

// =====================================
// CUSTOM CURSOR & MAGNETIC BUTTONS
// =====================================
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');
    
    if (cursor && follower) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .product-card, .menu-item, .lang-toggle, .filter-btn')) {
                cursor.classList.add('hover');
                follower.classList.add('hover');
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, .product-card, .menu-item, .lang-toggle, .filter-btn')) {
                cursor.classList.remove('hover');
                follower.classList.remove('hover');
            }
        });

        const magneticElements = document.querySelectorAll('.btn-primary, .btn-outline, .floating-wa');
        magneticElements.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = "translate(${x * 0.3}px, ${y * 0.3}px)";
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }
}

// =====================================
// TEXT REVEAL ANIMATION
// =====================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section-title.scroll-reveal').forEach(title => {
        const text = title.textContent.trim();
        if (!text) return;
        
        title.textContent = '';
        title.classList.add('text-reveal');
        
        const words = text.split(' ');
        words.forEach((word, index) => {
            const wrapper = document.createElement('span');
            wrapper.className = 'word-wrapper';
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'top';
            if (index < words.length - 1) {
                wrapper.style.marginRight = '0.25em';
            }
            
            const innerWord = document.createElement('span');
            innerWord.className = 'word-inner';
            innerWord.style.display = 'inline-block';
            innerWord.style.transform = 'translateY(100%)';
            innerWord.style.transition = "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${index * 0.05}s";
            innerWord.textContent = word;
            
            wrapper.appendChild(innerWord);
            title.appendChild(wrapper);
        });
    });
});


