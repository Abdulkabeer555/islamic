document.querySelectorAll('.nav-hover .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        if (window.innerWidth < 992) {
            e.preventDefault();
            const parent = this.parentElement;

            document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                if (item !== parent) item.classList.remove('show');
            });

            parent.classList.toggle('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = window.location.href;
    const origin = window.location.origin;
    const pageTitle = document.title;
    
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(pageTitle);

    const logoPath = origin + '/assets/images/logo.png';
    document.getElementById('og-url')?.setAttribute('content', currentUrl);
    document.getElementById('og-image')?.setAttribute('content', logoPath);
    document.getElementById('tw-image')?.setAttribute('content', logoPath);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
        reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        email: `mailto:?subject=${encodedTitle}&body=Check this out: ${currentUrl}`
    };

    const buttons = document.querySelectorAll('[data-platform]');
    
    buttons.forEach(btn => {
        const platform = btn.getAttribute('data-platform');

        if (shareLinks[platform]) {
            btn.setAttribute('href', shareLinks[platform]);
        }

        btn.addEventListener('click', function(e) {
            if (navigator.share) {
                e.preventDefault();
                
                navigator.share({
                    title: pageTitle,
                    text: 'Check this out:',
                    url: currentUrl
                }).then(() => {
                    console.log('Shared successfully');
                }).catch((err) => {
                    if(err.name !== 'AbortError') {
                        window.open(shareLinks[platform], '_blank');
                    }
                });
            }
        });
    });
});
