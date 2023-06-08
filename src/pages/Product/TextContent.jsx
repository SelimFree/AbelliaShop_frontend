import useGlobalState from "../../hooks/useGlobalState"
const testContent = () => {
    const [state] = useGlobalState();
    return {
        category: (state.lang == "ENG" ? "Category" : (state.lang == "RUS" ? "Категория" : "Category")),
        brand: (state.lang == "ENG" ? "Brand" : (state.lang == "RUS" ? "Бренд" : "Brand")),
        cart: (state.lang == "ENG" ? "Add to cart" : (state.lang == "RUS" ? "Добавить в корзину" : "Add to cart")),
        wishlist: (state.lang == "ENG" ? "Add to wishlist" : (state.lang == "RUS" ? "Добавить в закладки" : "Add to wishlist")),
        add_toast: (state.lang == "ENG" ? "Added to the cart" : (state.lang == "RUS" ? "Добавлено в корзину" : "Added to the cart")),
    }
}

export default testContent