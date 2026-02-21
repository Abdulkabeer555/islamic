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
    const postUrl = window.location.href;
    const encodedUrl = encodeURIComponent(postUrl);
    const postTitle = encodeURIComponent(document.title);

    const buttons = document.querySelectorAll('.share-section-js a');

    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const platform = this.getAttribute('data-platform');
            let shareUrl = "";

            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            switch (platform) {
                case 'facebook':
                    shareUrl = isMobile 
                        ? `fb://facewebmodal/fblink?href=${encodedUrl}` 
                        : `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${postTitle}`;
                    break;
                case 'linkedin':
                    shareUrl = isMobile
                        ? `linkedin://shareArticle?mini=true&url=${encodedUrl}`
                        : `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                    break;
                case 'reddit':
                    shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${postTitle}`;
                    break;
                case 'pinterest':
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${postTitle}`;
                    break;
                case 'email':
                    shareUrl = `mailto:?subject=${postTitle}&body=${encodedUrl}`;
                    break;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank');
            }
        });
    });
});
