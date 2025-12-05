// Photo Manager for Brecy's Birthday Website
// This script dynamically loads all images from the gallery folder

// Function to load gallery images dynamically
function loadGalleryImages() {
    // In a real implementation, this would fetch from a server
    // For now, we'll simulate with the existing images
    const galleryImages = [
        'images/gallery/image01.jpg',
        'images/gallery/image02.jpg',
        'images/gallery/image03.jpg',
        'images/gallery/image04.jpg',
        'images/gallery/image05.jpg',
        'images/gallery/image06.jpg',
        'images/gallery/image07.jpg',
        'images/gallery/image08.jpg',
        'images/gallery/image09.jpg',
        'images/gallery/image10.jpg',
        'images/gallery/image11.jpg',
        'images/gallery/image12.jpg',
        'images/gallery/image13.jpg',
        'images/gallery/image14.jpg'
    ];
    
    const galleryContainer = document.querySelector('.photo-grid');
    
    // Clear existing images
    galleryContainer.innerHTML = '';
    
    // Add all gallery images
    galleryImages.forEach((imageSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = `Memory ${index + 1}`;
        imgElement.className = 'gallery-img';
        galleryContainer.appendChild(imgElement);
    });
    
    // Add event listeners for the new images
    addImageEventListeners();
}

// Function to update profile photo
function updateProfilePhoto(newPhotoSrc) {
    const profileImg = document.querySelector('.profile-pic');
    if (profileImg) {
        profileImg.src = newPhotoSrc;
    }
}

// Function to add event listeners to gallery images
function addImageEventListeners() {
    document.querySelectorAll('.photo-grid img').forEach(img => {
        // Remove existing listeners to prevent duplication
        const newImg = img.cloneNode(true);
        img.parentNode.replaceChild(newImg, img);
        
        // Add click event to open modal
        newImg.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const captionText = document.getElementById('caption');
            
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
        
        // Add hover effects
        newImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        });
        
        newImg.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
    });
}

// Initialize the photo manager when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadGalleryImages();
    
    // Add profile photo update button functionality
    const updateProfileBtn = document.getElementById('updateProfileBtn');
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener('click', function() {
            // In a real implementation, this would open a file dialog
            // For demo purposes, we'll just show an alert
            alert('In a real implementation, this would allow uploading a new profile photo!');
        });
    }
});

// Make functions available globally
window.loadGalleryImages = loadGalleryImages;
window.updateProfilePhoto = updateProfilePhoto;