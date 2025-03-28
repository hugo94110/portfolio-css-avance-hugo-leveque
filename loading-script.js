window.addEventListener('load', function() {
    document.body.style.overflow = 'hidden';
    
    setTimeout(function() {
        const loadingDiv = document.querySelector('#loading');
        loadingDiv.classList.add('hidden');
        
        document.body.style.overflow = '';
        
        setTimeout(function() {
            loadingDiv.style.display = 'none';
        }, 0);
    }, 1000);
});