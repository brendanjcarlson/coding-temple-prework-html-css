console.log("js loaded");const tabs=Array.from(document.querySelector(".about__content__tabs__list").children),images=Array.from(document.querySelector(".about__content__images").children),paragraphs=Array.from(document.querySelector(".about__content__body").children);function toggleTab(t){t.preventDefault(),t.target.classList.contains("about__content__tabs__list__item--active")||(tabs.forEach((t=>t.classList.remove("about__content__tabs__list__item--active"))),images.forEach((t=>t.classList.remove("about__content__images__image--active"))),paragraphs.forEach((t=>t.classList.remove("about__content__body__text--active"))),t.target.classList.add("about__content__tabs__list__item--active"),document.querySelector(`#${t.target.textContent.trim().toLowerCase()}-image`).classList.add("about__content__images__image--active"),document.querySelector(`#${t.target.textContent.trim().toLowerCase()}-text`).classList.add("about__content__body__text--active"))}tabs.forEach((t=>t.addEventListener("click",toggleTab)));