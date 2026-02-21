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

function shareLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const appUrl = "linkedin://shareArticle?mini=true&url=" + url;
    const webUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;

    window.location.href = appUrl;

    setTimeout(function() {
        window.open(webUrl, '_blank');
    }, 500);
}
