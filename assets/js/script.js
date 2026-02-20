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
    const postUrl = window.location.href; // Native share ke liye encode nahi chahiye
    const encodedUrl = encodeURIComponent(postUrl);
    const postTitle = document.title;
    const encodedTitle = encodeURIComponent(postTitle);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
        reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        email: `mailto:?subject=${encodedTitle}&body=Check this out: ${postUrl}`
    };

    const buttons = document.querySelectorAll('.share-section-js a');
    
    buttons.forEach(btn => {
        const platform = btn.getAttribute('data-platform');

        if (shareLinks[platform]) {
            btn.setAttribute('href', shareLinks[platform]);
        }

        btn.addEventListener('click', function(e) {
            if (navigator.share) {
                e.preventDefault();
                
                navigator.share({
                    title: postTitle,
                    url: postUrl
                }).then(() => {
                    console.log('Shared successfully');
                }).catch((err) => {
                    window.open(shareLinks[platform], '_blank');
                });
            }
        });
    });
});
