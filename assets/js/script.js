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
    const postUrl = encodeURIComponent(window.location.href);
    const postTitle = encodeURIComponent(document.title);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${postUrl}&description=${postTitle}`,
        reddit: `https://www.reddit.com/submit?url=${postUrl}&title=${postTitle}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`,
        email: `mailto:?subject=${postTitle}&body=Check this out: ${window.location.href}`
    };

    const buttons = document.querySelectorAll('.share-section-js a');
    buttons.forEach(btn => {
        const platform = btn.getAttribute('data-platform');
        if (shareLinks[platform]) {
            btn.setAttribute('href', shareLinks[platform]);
        }
    });
});
