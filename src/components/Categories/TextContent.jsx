import useGlobalState from "../../hooks/useGlobalState";
const testContent = () => {
    const [state] = useGlobalState();
    return {
        new: (state.lang == "ENG" ? "New Arrival" : (state.lang == "RUS" ? "Новое Поступление" : "New Arrival")),
        skincare: (state.lang == "ENG" ? "skincare" : (state.lang == "RUS" ? "кожа" : "skincare")),
        haircare: (state.lang == "ENG" ? "haircare" : (state.lang == "RUS" ? "волосы" : "haircare")),
        body: (state.lang == "ENG" ? "body" : (state.lang == "RUS" ? "тело" : "body")),
        accessories: (state.lang == "ENG" ? "accessories" : (state.lang == "RUS" ? "аксессуары" : "accessories")),
        sale: (state.lang == "ENG" ? "sale" : (state.lang == "RUS" ? "распродажа" : "sale")),
        title: (state.lang == "ENG" ? "categories" : (state.lang == "RUS" ? "Категории" : "categories")),
    }
}

export default testContent