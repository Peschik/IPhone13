const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item');
    const chContents = document.querySelectorAll('.characteristics__description');
    const chButtons = document.querySelectorAll('.characteristics__title');
    
    chItems.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title'),
              chContent = item.querySelector('.characteristics__description');
            
            chButton.addEventListener('click', (event) => {
                
                if(chContent.classList.contains('open')){
                    chContent.style.height = '';
                } else {
                chContent.style.height = chContent.scrollHeight + 'px';
                }


                chContents.forEach((item) => {
                    if(item.classList.contains('open')){
                        item.style.height = '';
                    }
                })
                chButtons.forEach((item) => {
                    if(item.classList.contains('active')){
                        item.classList.remove('active');
                    }
                })
                chButton.classList.toggle('active')
                chContent.classList.toggle('open')
                
            })
    })
    ;}

accordeon();