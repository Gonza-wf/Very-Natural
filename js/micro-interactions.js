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
        
        // Use event delegation for dynamically added elements
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

        // Magnetic Buttons
        const magneticElements = document.querySelectorAll('.btn-primary, .btn-outline, .floating-wa');
        magneticElements.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }
}

// =====================================
// TEXT REVEAL ANIMATION (Word Masking)
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
            innerWord.style.transition = `transform 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${index * 0.05}s`;
            innerWord.textContent = word;
            
            wrapper.appendChild(innerWord);
            title.appendChild(wrapper);
        });
    });
});
