import useGlobalState from "../../hooks/useGlobalState";
const testContent = () => {
    const [state] = useGlobalState()
    return {
        categories: (state.lang == "ENG" ? "Product Categories" : (state.lang == "RUS" ? "Категории" : "Product Categories")),
        sorting: (state.lang == "ENG" ? "Sorting" : (state.lang == "RUS" ? "Сортировка" : "Sorting")),
        price_asc: (state.lang == "ENG" ? "Lowest price first" : (state.lang == "RUS" ? "Сначала дешевые" : "Lowest price first")),
        price_dec: (state.lang == "ENG" ? "Highest price first" : (state.lang == "RUS" ? "Сначала дорогие" : "Highest price first")),
        new: (state.lang == "ENG" ? "New first" : (state.lang == "RUS" ? "Сначала новые" : "New first")),
        old: (state.lang == "ENG" ? "Old first" : (state.lang == "RUS" ? "Сначала старые" : "Old first")),
        discount: (state.lang == "ENG" ? "Discount first" : (state.lang == "RUS" ? "Сначала скидки" : "Discount first")),
        regular: (state.lang == "ENG" ? "Regular price first" : (state.lang == "RUS" ? "Сначала обычные цены" : "Regular price first")),
        search: (state.lang == "ENG" ? "Searching for" : (state.lang == "RUS" ? "Поиск по запросу" : "Searching for"))
    }
}

export default testContent