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

window.shareLinkedIn = function() {
    const url = encodeURIComponent(window.location.href);
    const appUrl = "linkedin://shareArticle?mini=true&url=" + url;
    const webUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = appUrl;
        setTimeout(function() {
            window.open(webUrl, '_blank');
        }, 600);
    } else {
        window.open(webUrl, '_blank', 'width=600,height=400');
    }
};
