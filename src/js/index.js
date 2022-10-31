console.log('js loaded');

const tabs = Array.from(
    document.querySelector('.about__content__tabs__list').children
);
const images = Array.from(
    document.querySelector('.about__content__images').children
);
const paragraphs = Array.from(
    document.querySelector('.about__content__body').children
);

tabs.forEach(tab => tab.addEventListener('click', toggleTab));

function toggleTab(e) {
    e.preventDefault();

    if (e.target.classList.contains('about__content__tabs__list__item--active'))
        return;

    tabs.forEach(tab =>
        tab.classList.remove('about__content__tabs__list__item--active')
    );
    images.forEach(img =>
        img.classList.remove('about__content__images__image--active')
    );
    paragraphs.forEach(par =>
        par.classList.remove('about__content__body__text--active')
    );

    e.target.classList.add('about__content__tabs__list__item--active');
    document
        .querySelector(`#${e.target.textContent.trim().toLowerCase()}-image`)
        .classList.add('about__content__images__image--active');
    document
        .querySelector(`#${e.target.textContent.trim().toLowerCase()}-text`)
        .classList.add('about__content__body__text--active');
}
