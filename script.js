
document.addEventListener('DOMContentLoaded', () => {
    const headerLinks = document.querySelectorAll('.header__link');

    headerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#CDA274';
            link.style.transition = 'color 0.3s ease';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Reset to default
        });
    });


    // Получаем все элементы с классом "card"
    const cards = document.querySelectorAll('.blogs-section__card');

    // Проходимся по каждому элементу и добавляем обработчики событий
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#CDA274';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#E7E7E7'; // Возвращаем исходный цвет
        });
    });

    

    document.querySelector('.main-block__button').addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#CDA274';
    });
    
    document.querySelector('.main-block__button').addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#292F36';
    });
 

    // Находим все кнопки с классом intro-section__button
    const buttons = document.querySelectorAll('.intro-section__button');

    // Проходимся по каждой кнопке и добавляем обработчики событий
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.fontSize = '22px';
        });

        button.addEventListener('mouseleave', function() {
            this.style.fontSize = '18px';
        });
    });
    
});
