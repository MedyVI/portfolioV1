if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
} 

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    } else {;
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollBox1 = document.querySelector(".scroll-box1");
    const options = {
        root: null,
        threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(scrollBox1);
});


document.addEventListener("DOMContentLoaded", () => {
    const scrollBox2 = document.querySelector(".scroll-box2");
    const options = {
        root: null,
        threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(scrollBox2);
});
