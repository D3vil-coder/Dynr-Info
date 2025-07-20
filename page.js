// ===== OPTIMIZED CURSOR SYSTEM =====
        const cursor = document.getElementById('simpleCursor');
        let animationId;
        document.addEventListener('mousemove', e => {
            if (animationId) cancelAnimationFrame(animationId);
            animationId = requestAnimationFrame(() => {
                cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
            });
        }, { passive: true });

        let hoverTimeout;
        document.querySelectorAll('.btn, .glass-card, .tab-btn, .custom-checkbox').forEach(element => {
            element.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimeout);
                cursor.classList.add('hover');
            });
            element.addEventListener('mouseleave', () => {
                hoverTimeout = setTimeout(() => cursor.classList.remove('hover'), 100);
            });
        });

        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('mouseenter', () => cursor.style.display = 'none');
            input.addEventListener('mouseleave', () => cursor.style.display = 'block');
        });

        // ===== TOUR & TAB SWITCHING =====
        const phoneScreen = document.getElementById('phone-screen');
        
        const tourData = {
            guest: {
                img: "restaurant1.jpg",
                alt: "Guest view of the Dynr app",
                content: ""
            },
            restaurant: {
                img: "restaurant1.jpg",
                alt: "Restaurant dashboard of the Dynr app",
                content: `
                    <div class="phone-content">
                        <h3>Powerful Restaurant Management</h3>
                        
                        <ul>
                            <li>Real-time order management and Dish Availability</li>
                            <li>Table Reservation and Pre-Ordering Details</li>
                            <li>Reliable Servers, Miss no Orders</li>
                            <li>Update Menus and Waiting Time</li>
                            <li>Detailed analytics on sales, popular dishes, and customer behavior.</li>
                            <li>Loyalty Program Data</li>
                        </ul>
                    </div>
                `
            }
        };

        function switchTab(view) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.tab-btn[onclick="switchTab('${view}')"]`).classList.add('active');
            
            if (view === 'guest') {
                phoneScreen.innerHTML = `<img src="${tourData[view].img}" alt="${tourData[view].alt}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 1.5rem;">`;
            } else if (view === 'restaurant') {
                phoneScreen.innerHTML = tourData[view].content;
            }
        }
        
        // Initial load
        switchTab('guest');

        // ===== NAVBAR SCROLL EFFECT =====
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });

        // ===== HAMBURGER MENU =====
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });