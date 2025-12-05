// JavaScript for Brecy's Birthday Website

// Music control functionality
const music = document.getElementById('birthdayMusic');
const musicControl = document.getElementById('musicControl');
let isPlaying = true;

musicControl.addEventListener('click', function() {
    if (isPlaying) {
        music.pause();
        musicControl.textContent = '🔇 Music Off';
        isPlaying = false;
    } else {
        music.play();
        musicControl.textContent = '🔊 Music On';
        isPlaying = true;
    }
});

// Simple countdown timer
function updateCountdown() {
    // Set the date we're counting down to (Brecy's birthday)
    const birthday = new Date();
    birthday.setHours(0, 0, 0, 0); // Today at midnight
    
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the birthday
    const distance = birthday - now;
    
    // If it's her birthday or past her birthday, display happy birthday message
    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown .timer').innerHTML = "<h3>Happy 20th Birthday Brecy! 🎉</h3><p>Wishing you the most amazing day filled with love, joy, and all your favorite things!</p>";
        return;
    }
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the timer elements
    document.querySelector('.timer .time-unit:nth-child(1) .number').textContent = 
        days.toString().padStart(2, '0');
    document.querySelector('.timer .time-unit:nth-child(2) .number').textContent = 
        hours.toString().padStart(2, '0');
    document.querySelector('.timer .time-unit:nth-child(3) .number').textContent = 
        minutes.toString().padStart(2, '0');
    document.querySelector('.timer .time-unit:nth-child(4) .number').textContent = 
        seconds.toString().padStart(2, '0');
}

// Update the countdown every 1 second
let countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

// Add confetti effect when clicking anywhere on the page
document.addEventListener('click', function() {
    createConfetti();
});

// Create confetti effect
function createConfetti() {
    const colors = ['#ff69b4', '#ffc0cb', '#ffffff', '#ffb6c1', '#ff1493'];
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        
        container.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Add special effects to images when hovered
document.querySelectorAll('.photo-grid img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        createHearts(this);
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    });
    
    // Add click event to open modal
    img.addEventListener('click', function() {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const captionText = document.getElementById('caption');
        
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Close modal when clicking on close button or outside the image
const modal = document.getElementById('imageModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() { 
    modal.style.display = 'none';
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Create hearts around images
function createHearts(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = (centerX - 20 + Math.random() * 40) + 'px';
        heart.style.top = (centerY - 20 + Math.random() * 40) + 'px';
        heart.style.animationDelay = (Math.random() * 1) + 's';
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// Add sparkle effect to wish cards
document.querySelectorAll('.wish-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03) rotate(1deg)';
        createSparkles(this);
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1.03)';
    });
});

// Create sparkles around wish cards
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.animationDelay = (Math.random() * 0.5) + 's';
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}