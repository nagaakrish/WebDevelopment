// Smooth scroll 
function scrollToWorks() {
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
}

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
  
    alert(`Thank you ${name}! Your message has been sent. I will get back to you at ${email} soon.`);
    
    this.reset();
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.opacity = '0.7';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.opacity = '1';
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery items
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const photoLeft = document.querySelector('.photo-left');
    const photoRight = document.querySelector('.photo-right');
    
    if (photoLeft && photoRight && scrolled < window.innerHeight) {
        photoLeft.style.transform = `translateY(${scrolled * 0.3}px)`;
        photoRight.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});