// ----------------------------------------------------
// PRODUCT DATABASE (Imported from gulmahal.in with category & subcategory)
// ----------------------------------------------------
const PRODUCTS = [
    {
        name: "Passionate Red Rose Bouquet",
        category: "bouquets",
        subcategory: "standard",
        price: "Rs. 749",
        rating: "5.0",
        description: "A classic and passionate arrangement of handpicked red roses with seasonal foliage, designed to convey deep love and affection.",
        img: "assets/red_rose_bouquet.png"
    },
    {
        name: "Vibrant Yellow Rose Bouquet",
        category: "bouquets",
        subcategory: "standard",
        price: "Rs. 799",
        rating: "4.5",
        description: "Bring joy and warmth to their day with this radiant bouquet of fresh yellow roses, beautifully hand-tied with custom ribbons.",
        img: "assets/yellow_rose_bouquet.png"
    },
    {
        name: "Premium Mixed Flower Bouquet",
        category: "bouquets",
        subcategory: "premium",
        price: "Rs. 1299",
        rating: "4.8",
        description: "An artisan combination of exotic and seasonal blossoms, creating a textured and vibrant masterpiece suitable for any elegant space.",
        img: "assets/mixed_flower_bouquet.png"
    },
    {
        name: "Pink Tulips Bouquet",
        category: "bouquets",
        subcategory: "tulips",
        price: "Rs. 2999",
        rating: "5.0",
        description: "A breathtaking arrangement of fresh premium pink tulips, elegantly wrapped in our signature premium paper. Perfect for special celebrations.",
        img: "assets/pink_tulips_bouquet.png"
    },
    {
        name: "Tuberose / Rajnigandha Bunch",
        category: "flowers",
        subcategory: "cut",
        price: "Rs. 699",
        rating: "4.7",
        description: "A bunch of fresh Tuberose (Rajnigandha) stalks, known for their sweet, captivating fragrance that naturalizes the entire household.",
        img: "assets/tuberose_rajnigandha_bunch.png"
    },
    {
        name: "Sunshine Sunflower Bunch",
        category: "flowers",
        subcategory: "cut",
        price: "Rs. 899",
        rating: "4.7",
        description: "A bright and cheery arrangement featuring big, beautiful sunflowers, handpicked to radiate positive vibes and brightness.",
        img: "assets/sunshine_sunflower_bunch.png"
    },
    {
        name: "Yellow Tulips in Vase",
        category: "flowers",
        subcategory: "exotic",
        price: "Rs. 2999",
        rating: "4.8",
        description: "A luxury arrangement of fresh yellow tulips, styled in a luxurious glass vase. Adds a contemporary touch of elegance to any room.",
        img: "assets/yellow_tulips_vase.png"
    },
    {
        name: "White Tulips in Vase",
        category: "flowers",
        subcategory: "exotic",
        price: "Rs. 2999",
        rating: "4.9",
        description: "Sophisticated and pure, this arrangement features pristine white tulips in a premium glass vase, perfect for minimalist spaces.",
        img: "assets/white_tulips_vase.png"
    },
    {
        name: "Dark Pink Gerbera in Vase",
        category: "flowers",
        subcategory: "exotic",
        price: "Rs. 799",
        rating: "4.7",
        description: "Cheerful dark pink gerbera daisies arranged in a clear glass vase with decorative stones. Ideal for gifting.",
        img: "assets/dark_pink_gerbera_vase.png"
    },
    {
        name: "Fresh Lotus-Kamal Flowers",
        category: "flowers",
        subcategory: "loose",
        price: "Rs. 150",
        rating: "5.0",
        description: "Sacred, handpicked fresh pink lotus flowers (Kamal) for spiritual offerings, rituals, and festive home decors.",
        img: "assets/fresh_lotus_kamal.png"
    },
    {
        name: "Lotus Flower Garland",
        category: "garlands",
        subcategory: "wedding",
        price: "Rs. 1999",
        rating: "5.0",
        description: "Handcrafted auspicious lotus flower garland, woven traditionally for weddings, temple poojas, and festive occasions.",
        img: "assets/lotus_flower_garland.png"
    },
    {
        name: "Red Rose Wedding Garland",
        category: "garlands",
        subcategory: "wedding",
        price: "Rs. 2499",
        rating: "4.9",
        description: "An elegant, dense garland crafted with premium fresh red rose petals, designed to add traditional grandeur to wedding ceremonies.",
        img: "assets/red_rose_wedding_garland.png"
    },
    {
        name: "Traditional Pooja Garland",
        category: "garlands",
        subcategory: "pooja",
        price: "Rs. 499",
        rating: "4.6",
        description: "Fresh daily pooja garland woven with marigold and seasonal flowers, ideal for daily rituals and home decoration.",
        img: "assets/traditional_pooja_garland.png"
    },
    {
        name: "Weekly Home Flower Subscription",
        category: "subscription",
        subcategory: "weekly",
        price: "Rs. 1499",
        rating: "4.8",
        description: "Fresh flowers delivered to your home every week. Handpicked varieties curated by our expert florists to bring nature inside.",
        img: "assets/weekly_home_subscription.png"
    },
    {
        name: "Monthly Office Flower Subscription",
        category: "subscription",
        subcategory: "monthly",
        price: "Rs. 4999",
        rating: "4.9",
        description: "Elegant floral arrangements delivered to your office lobby or desk every month. Kept fresh and updated automatically.",
        img: "assets/monthly_office_subscription.png"
    },
    {
        name: "Premium Flower Basket",
        category: "decorations",
        subcategory: "home",
        price: "Rs. 1599",
        rating: "4.8",
        description: "An exquisite basket arrangement overflowing with premium roses, lilies, and carnations, designed for luxurious table centerpieces.",
        img: "assets/premium_flower_basket.png"
    },
    {
        name: "Floral Jewelry Set",
        category: "decorations",
        subcategory: "home",
        price: "Rs. 1899",
        rating: "4.9",
        description: "Intricately designed floral jewelry set including necklace, earrings, and bracelets made of fresh, long-lasting flowers for Haldi and Mehendi.",
        img: "assets/floral_jewelry_set.png"
    },
    {
        name: "Rakhi Special Floral Gift Set",
        category: "occasions",
        subcategory: "rakhi",
        price: "Rs. 999",
        rating: "4.9",
        description: "A gorgeous handmade Rakhi accompanied by fresh flowers, sweets, and roli-chawal for an auspicious Raksha Bandhan celebration.",
        img: "assets/rakhi_special_gift_set.png"
    },
    {
        name: "Diwali Marigold Hangings",
        category: "occasions",
        subcategory: "diwali",
        price: "Rs. 599",
        rating: "4.8",
        description: "Hand-tied premium orange and yellow marigold hangings (Torans) to decorate your home entrance beautifully for Diwali.",
        img: "assets/diwali_marigold_hangings.png"
    }
];

// Display Names mapping
const CATEGORY_NAMES = {
    'all': 'All Products',
    'bouquets': 'Bouquets',
    'flowers': 'Flowers',
    'garlands': 'Garlands',
    'subscription': 'Subscriptions',
    'decorations': 'Decorations',
    'occasions': 'Occasions'
};

const SUBCATEGORY_NAMES = {
    'all': 'All',
    'standard': 'Standard',
    'premium': 'Premium',
    'tulips': 'Tulips',
    'cut': 'Cut Flowers',
    'exotic': 'Exotic Flowers',
    'loose': 'Loose Flowers',
    'wedding': 'Wedding Garlands',
    'pooja': 'Pooja Garlands',
    'regular': 'Regular Garlands',
    'weekly': 'Weekly Subscriptions',
    'monthly': 'Monthly Subscriptions',
    'festive': 'Festive Subscriptions',
    'home': 'Home Decoration',
    'birthday': 'Birthday Decoration',
    'room': 'Room Decoration',
    'shop': 'Shop Decoration',
    'rakhi': 'Rakhi Collection',
    'diwali': 'Diwali Collection',
    'valentines': "Valentine's Day",
    'mothers': "Mother's Day",
    'fathers': "Father's Day"
};

// Subcategory lists for each category to render filter pills
const SUBCATEGORY_MAP = {
    'bouquets': ['all', 'standard', 'premium', 'tulips'],
    'flowers': ['all', 'cut', 'exotic', 'loose'],
    'garlands': ['all', 'wedding', 'pooja', 'regular'],
    'subscription': ['all', 'weekly', 'monthly'],
    'decorations': ['all', 'home', 'birthday', 'room', 'shop'],
    'occasions': ['all', 'rakhi', 'diwali', 'valentines', 'mothers', 'fathers']
};

let currentCategory = 'all';
let currentSubcategory = 'all';

// Mobile Hamburger Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('#hamburger-btn i');
    if (navLinks) {
        navLinks.classList.toggle('active');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        }
    }
}

// SPA Section Navigation (Show/Hide sections as separate pages)
function scrollToSection(sectionId) {
    const sections = ['home', 'about', 'products', 'contact'];
    
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === sectionId) {
                el.classList.remove('hidden-section');
                el.style.opacity = 0;
                el.style.transform = 'translateY(15px)';
                
                // Trigger reflow for transition
                setTimeout(() => {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                }, 50);
            } else {
                el.classList.add('hidden-section');
            }
        }
    });

    // Reset window scroll position to the top of the newly shown section
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    // Update active nav-link state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Close mobile menu if active
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('#hamburger-btn i');
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (icon) icon.className = 'fa-solid fa-bars';
    }
}

// ----------------------------------------------------
// DYNAMIC PRODUCTS RENDERING & FILTERING
// ----------------------------------------------------

function setCategoryFilter(category, subcategory = 'all', shouldScroll = true) {
    currentCategory = category;
    currentSubcategory = subcategory;
    
    // Render dynamic filter pills (subcategories)
    renderSubcategoryPills(category);
    
    // Render products matching criteria
    renderProducts();

    // Scroll to products section
    if (shouldScroll) {
        scrollToSection('products');
    }
}

function selectSubcategory(category, subcategory) {
    currentCategory = category;
    currentSubcategory = subcategory;
    
    // Highlight subcategory pill if pills are rendered
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-subcategory') === subcategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Render products matching criteria
    renderProducts();

    // Scroll to products section
    scrollToSection('products');
}

function renderSubcategoryPills(category) {
    const filterContainer = document.getElementById('subcategory-filters');
    filterContainer.innerHTML = ''; // Clear pills

    // If 'all', show nothing or simple message
    if (category === 'all') {
        filterContainer.innerHTML = `<button class="filter-btn active" data-subcategory="all" onclick="selectSubcategory('all', 'all')">All Products</button>`;
        return;
    }

    const subcategories = SUBCATEGORY_MAP[category] || [];
    subcategories.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${sub === currentSubcategory ? 'active' : ''}`;
        btn.setAttribute('data-subcategory', sub);
        btn.textContent = sub === 'all' ? `All ${CATEGORY_NAMES[category]}` : SUBCATEGORY_NAMES[sub];
        btn.onclick = () => selectSubcategory(category, sub);
        filterContainer.appendChild(btn);
    });
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const breadcrumb = document.getElementById('breadcrumb-path');
    grid.innerHTML = ''; // Clear previous products

    // Filter products
    let filtered = PRODUCTS;
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
        if (currentSubcategory !== 'all') {
            filtered = filtered.filter(p => p.subcategory === currentSubcategory);
        }
    }

    // Update Breadcrumb Path
    let path = CATEGORY_NAMES[currentCategory] || 'Products';
    if (currentCategory !== 'all' && currentSubcategory !== 'all') {
        path += ` &nbsp;>&nbsp; ${SUBCATEGORY_NAMES[currentSubcategory] || currentSubcategory}`;
    }
    breadcrumb.innerHTML = path;

    // Render cards
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: rgba(255,255,255,0.4); font-size: 15px;">
                <i class="fa-solid fa-seedling" style="font-size: 32px; margin-bottom: 15px; color: var(--primary-red); display: block;"></i>
                No flowers found in this subcategory. Try another one!
            </div>
        `;
        return;
    }

    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
        
        card.onclick = () => openProductDetail(product);

        const categoryLabels = {
            'bouquets': 'Bouquet',
            'flowers': 'Flower',
            'garlands': 'Garland',
            'subscription': 'Subscription',
            'decorations': 'Decor & Basket',
            'occasions': 'Occasions'
        };
        const categoryLabel = categoryLabels[product.category] || 'Flower';

        card.innerHTML = `
            <div class="card-bg-glow"></div>
            <div class="product-img-wrapper">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-info-top">
                    <span class="product-tag-label">${categoryLabel}</span>
                    <h3 class="product-name">${product.name}</h3>
                </div>
                <div class="product-info-bottom">
                    <p class="product-price">${product.price}</p>
                    <span class="product-rating">
                        <i class="fa-solid fa-star"></i> ${product.rating}
                    </span>
                </div>
            </div>
        `;

        grid.appendChild(card);

        // Staggered loading animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ----------------------------------------------------
// PRODUCT MODAL OPERATIONS
// ----------------------------------------------------
function openProductDetail(product) {
    const modal = document.getElementById('product-modal');
    
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-desc').textContent = product.description;
    document.getElementById('modal-price').textContent = product.price;
    
    const modalImg = document.getElementById('modal-img');
    modalImg.src = product.img;
    modalImg.alt = product.name;

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeProductModal(event) {
    if (event === null || event.target.id === 'product-modal') {
        const modal = document.getElementById('product-modal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 400);
    }
}

// ----------------------------------------------------
// CONTACT FORM SUBMISSION
// ----------------------------------------------------
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;

    const alertBox = document.createElement('div');
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '30px';
    alertBox.style.right = '30px';
    alertBox.style.background = 'rgba(11, 10, 18, 0.85)';
    alertBox.style.backdropFilter = 'blur(20px)';
    alertBox.style.webkitBackdropFilter = 'blur(20px)';
    alertBox.style.border = '1px solid rgba(255, 51, 68, 0.3)';
    alertBox.style.borderRadius = '16px';
    alertBox.style.padding = '20px 30px';
    alertBox.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
    alertBox.style.zIndex = '9999';
    alertBox.style.transform = 'translateY(100px)';
    alertBox.style.opacity = '0';
    alertBox.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
    alertBox.style.display = 'flex';
    alertBox.style.alignItems = 'center';
    alertBox.style.gap = '15px';

    alertBox.innerHTML = `
        <i class="fa-solid fa-circle-check" style="color: #ff3344; font-size: 24px;"></i>
        <div>
            <h4 style="font-weight: 800; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Thank You, ${name}!</h4>
            <p style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 3px;">Your message has been received.</p>
        </div>
    `;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.transform = 'translateY(0)';
        alertBox.style.opacity = '1';
    }, 50);

    event.target.reset();

    setTimeout(() => {
        alertBox.style.transform = 'translateY(100px)';
        alertBox.style.opacity = '0';
        setTimeout(() => {
            alertBox.remove();
        }, 500);
    }, 4000);
}

// Horizontal scroll navigation for reviews
function scrollCarousel(direction) {
    const carousel = document.getElementById('reviews-carousel');
    if (carousel) {
        carousel.scrollBy({
            left: direction * 375,
            behavior: 'smooth'
        });
    }
}

// Theme Switching Functionality (Light & Dark Theme)
function toggleTheme() {
    const body = document.body;
    const btnIcon = document.querySelector('.theme-toggle-btn i');
    if (!btnIcon) return;
    
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        btnIcon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        btnIcon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'dark');
    }
}

// Contact Us Promo Popup Functions
function openContactPopup() {
    const popup = document.getElementById('contact-popup');
    if (popup) {
        popup.classList.add('show');
    }
}

function closeContactPopup(event) {
    const popup = document.getElementById('contact-popup');
    if (!popup) return;
    
    // Close if click is directly on overlay background or close button
    if (!event || event.target === popup) {
        popup.classList.remove('show');
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    // Restore saved theme preference (Default is Light Theme)
    const savedTheme = localStorage.getItem('theme');
    const btnIcon = document.querySelector('.theme-toggle-btn i');
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
        if (btnIcon) btnIcon.className = 'fa-solid fa-moon';
    } else {
        document.body.classList.add('light-theme');
        if (btnIcon) btnIcon.className = 'fa-solid fa-sun';
    }

    // Force the browser to start at the top (Home/Hero) and clear any URL hash
    if (window.location.hash && window.location.hash !== '#home') {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }

    // Prevent browser from restoring scroll position automatically on reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    setCategoryFilter('all', 'all', false); // Load products silently without scrolling

    // Force window to scroll instantly to the top (Home/Hero)
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Mobile/Tablet Tactile Touch Feedback (Zoom-in on touch start, reset on end/move)
    const cardsToTouch = document.querySelectorAll('.product-card, .category-card, .value-box, .reviews-carousel .review-card, .bento-box');
    cardsToTouch.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.add('touch-active');
        }, { passive: true });
        
        card.addEventListener('touchend', () => {
            card.classList.remove('touch-active');
        }, { passive: true });
        
        card.addEventListener('touchmove', () => {
            card.classList.remove('touch-active');
        }, { passive: true });
    });

    // Trigger Contact Us Promo Popup after 30 seconds
    setTimeout(() => {
        const productModal = document.getElementById('product-modal');
        // Only trigger popup if user hasn't opened product modal
        if (productModal && !productModal.classList.contains('show')) {
            openContactPopup();
        }
    }, 30000);
});
