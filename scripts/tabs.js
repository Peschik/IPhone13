const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');
    const title = document.querySelector('title');
    const tabOptions = [{
            name: "Graphite",
            memory: '126 GB',
            price: 60000,
            image: 'img/iPhone-graphite.webp'

        },
        {
            name: "Silver",
            memory: '256 GB',
            price: 65000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: "Sierra Blue",
            memory: '512 GB',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp'
        },

    ]

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory} ${tabOptions[index].name}`
        tabsPrice.textContent = `${tabOptions[index].price}₽`;

        tabsImage.setAttribute('src', tabOptions[index].image);

        title.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory} ${tabOptions[index].name}`;
    };

    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        });
        changeContent(indexClickedTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => changeActiveTabs(index))
    })

    changeContent(0);
}
tabsFunc();