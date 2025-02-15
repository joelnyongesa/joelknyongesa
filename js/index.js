const burger = document.getElementById('burger');
const navUl = document.querySelector('nav ul');
const nav = document.querySelector('nav')


burger.addEventListener('click', (e) => {
    e.stopPropagation();
    navUl.classList.toggle('show');
});

document.addEventListener('click', (e)=>{
    const isClickInside = nav.contains(e.target);
    if (!isClickInside && navUl.classList.contains('show')){
        navUl.classList.remove('show')
    }
})

// Close menu when clicking on links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        })

        if (navUl.classList.contains('show')){
            navUl.classList.remove('show');
        };
    });
});