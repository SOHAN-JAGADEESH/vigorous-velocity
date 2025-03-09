// Preloader management script
document.addEventListener('DOMContentLoaded', () => {
    // Track loading of critical resources
    let splineElementsLoaded = 0;
    const totalSplineElements = 2; // Hero and Technologies Spline elements
    
    // Function to check if all critical resources are loaded
    function checkAllLoaded() {
        if (splineElementsLoaded >= totalSplineElements) {
            // All Spline elements are loaded, complete the preloader
            if (window.updatePreloaderProgress) {
                window.updatePreloaderProgress(100);
            }
        }
    }
    
    // Listen for load events on Spline iframes
    const heroSpline = document.getElementById('hero-spline');
    const techSpline = document.getElementById('tech-spline');
    
    if (heroSpline) {
        heroSpline.addEventListener('load', () => {
            splineElementsLoaded++;
            if (window.updatePreloaderProgress) {
                window.updatePreloaderProgress(50 + (splineElementsLoaded / totalSplineElements) * 50);
            }
            checkAllLoaded();
        });
    }
    
    if (techSpline) {
        techSpline.addEventListener('load', () => {
            splineElementsLoaded++;
            if (window.updatePreloaderProgress) {
                window.updatePreloaderProgress(50 + (splineElementsLoaded / totalSplineElements) * 50);
            }
            checkAllLoaded();
        });
    }
    
    // Set a maximum loading time to prevent infinite loading
    setTimeout(() => {
        if (window.updatePreloaderProgress) {
            window.updatePreloaderProgress(100);
        }
    }, 10000); // 10 seconds maximum loading time
}); 