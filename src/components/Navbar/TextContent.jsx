import useGlobalState from "../../hooks/useGlobalState";
const testContent = () => {
    const [state] = useGlobalState();

    return {
        title: "ABELLIA",
        skincare: (state.lang == "ENG" ? "skincare" : (state.lang == "RUS" ? "кожа" : "skincare")),
        haircare: (state.lang == "ENG" ? "haircare" : (state.lang == "RUS" ? "волосы" : "haircare")),
        body: (state.lang == "ENG" ? "body" : (state.lang == "RUS" ? "тело" : "body")),
        accessories: (state.lang == "ENG" ? "accessories" : (state.lang == "RUS" ? "аксессуары" : "accessories")),
        about: (state.lang == "ENG" ? "about" : (state.lang == "RUS" ? "о нас" : "about")),
        contacts: (state.lang == "ENG" ? "contacts" : (state.lang == "RUS" ? "контакты" : "contacts")),
        all: (state.lang == "ENG" ? "All" : (state.lang == "RUS" ? "товары" : "All")),
        search: (state.lang == "ENG" ? "Product..." : (state.lang == "RUS" ? "Товары..." : "Product...")),
    }
}

export default testContent