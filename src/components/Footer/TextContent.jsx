import useGlobalState from "../../hooks/useGlobalState"
const testContent = () => {
    const d = new Date();
    let year = d.getFullYear();
    const [state] = useGlobalState();
    return {
        logo: "ABELLIA",
        copyright: `© Copyright ${year}. ${(state.lang == "ENG" ? "All rights reserved" : (state.lang == "RUS" ? "Все права защищены" : "All Rights Reserved"))}`,
        
        aboutTitle: (state.lang == "ENG" ? "About" : (state.lang == "RUS" ? "О нас" : "About")),
        contactTitle: (state.lang == "ENG" ? "Contact" : (state.lang == "RUS" ? "Контакты" : "Contact")),

        about: (state.lang == "ENG" ? "Here will be your text" : (state.lang == "RUS" ? "Укажите свой собственный текст" : "Here will be your text")),
        contact: (state.lang == "ENG" ? "Here will be your text" : (state.lang == "RUS" ? "Укажите свой собственный текст" : "Here will be your text")),

        categories: (state.lang == "ENG" ? "Categories" : (state.lang == "RUS" ? "Категории" : "Categories")),
        skincare: (state.lang == "ENG" ? "Skincare" : (state.lang == "RUS" ? "Кожа" : "Skincare")),
        haircare: (state.lang == "ENG" ? "Haircare" : (state.lang == "RUS" ? "Волосы" : "Haircare")),
        body: (state.lang == "ENG" ? "Body" : (state.lang == "RUS" ? "Тело" : "Body")),
        accessories: (state.lang == "ENG" ? "Accessories" : (state.lang == "RUS" ? "Аксессуары" : "Accessories")),
        new: (state.lang == "ENG" ? "New Arrivals" : (state.lang == "RUS" ? "Новинки" : "New Arrivals")),

        links: (state.lang == "ENG" ? "Links" : (state.lang == "RUS" ? "Ссылки" : "Links")),
        faq: "FAQ",
        pages: (state.lang == "ENG" ? "Pages" : (state.lang == "RUS" ? "Страницы" : "Pages")),
        stores: (state.lang == "ENG" ? "Stores" : (state.lang == "RUS" ? "Магазин" : "Stores")),
        compare: (state.lang == "ENG" ? "Compare" : (state.lang == "RUS" ? "Сравнить" : "Compare")),
        cookies: "Cookies",
    }
}

export default testContent