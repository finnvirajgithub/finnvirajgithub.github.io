document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Initialize Typed.js
    new Typed('#typed-text', {
        strings: [
            'Software Engineering Enthusiast',
            'Full Stack Developer',
            'Problem Solver'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateNavbar);


    // Active nav link update on scroll
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const navHeight = navbar.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = navbar.offsetHeight;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Mobile Menu
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });

        // Close mobile menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        });
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add animation to button
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;

            let params = {
                name : document.getElementById("name").value,
                email : document.getElementById("email").value,
                message : document.getElementById("message").value,
            }
            emailjs.send("service_dlqivnr","template_l0dzo6o",params)

            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // send email
    function sendMail(){
        let params = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            message : document.getElementById("message").value,
        }
        emailjs.send("service_dlqivnr","template_l0dzo6o",params)
    }

    // Skills Animation
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        skillsObserver.observe(item);
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
