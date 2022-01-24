const scrollFunc = () => {
    const link = document.querySelector('.header-menu__item a');
    const links = document.querySelectorAll('.header-menu__item a');
    const fullChars = document.querySelector('.card-details__link-characteristics');

    seamless.polyfill();

    fullChars.addEventListener('click', (event) => {
        event.preventDefault()

        seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const id = link.getAttribute('href').substring(1);

            const section = document.getElementById(id);



            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: "smooth",
                    block: 'start'
                })
            } else {
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        })
    })
}

scrollFunc();