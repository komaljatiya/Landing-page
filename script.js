
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;

    
    const currentTheme = localStorage.getItem('theme') || 'light';
    
   
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }

    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        
       
        if (body.classList.contains('dark-mode')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }

       
        themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    };

    
    themeToggle.addEventListener('click', toggleTheme);

    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });

   
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
           
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            }
        });
    });

    
    const nftCards = document.querySelectorAll('.nft-card');
    
    nftCards.forEach(card => {
       
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

   
    const startButton = document.querySelector('.btn-start');
    
    if (startButton) {
        startButton.addEventListener('click', () => {
           
            startButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                startButton.style.transform = '';
                alert('Welcome to the NFT Renaissance! 🎨✨');
            }, 150);
        });
    }

   
    const footerItems = document.querySelectorAll('.footer-item');
    
    footerItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            console.log(`Navigating to: ${text}`);
          
        });
    });

    
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });

    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    
    const elementsToAnimate = document.querySelectorAll('.nft-card, .footer-item');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });

   
    console.log(`
    %c🎨 NFT Digital Renaissance 🎨
    %cWelcome to the future of digital art!
    
    This landing page was built with:
    ✅ CSS Grid (No Flexbox!)
    ✅ Fully Responsive Design
    ✅ Dark/Light Mode Toggle
    ✅ Keyboard Accessibility
    ✅ Smooth Animations
    
    Developed for: Integra Magna
    `, 
    'font-size: 20px; font-weight: bold; color: #D4A574;',
    'font-size: 14px; color: #273440;'
    );
});



const style = document.createElement('style');
style.textContent = `
    .nft-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);