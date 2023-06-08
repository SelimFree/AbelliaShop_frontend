import useGlobalState from "../../hooks/useGlobalState"

const testContent = () => {
    const [state] = useGlobalState()
    return {
        title: (state.lang == "ENG" ? "Products in your cart" : (state.lang == "RUS" ? "Корзина" : "Products in your cart")),
        subtotal: (state.lang == "ENG" ? "SUBTOTAL" : (state.lang == "RUS" ? "Итого" : "SUBTOTAL")),
        checkout: (state.lang == "ENG" ? "Proceed to checkout" : (state.lang == "RUS" ? "Сделать заказ" : "Proceed to checkout")),
        reset: (state.lang == "ENG" ? "Reset cart" : (state.lang == "RUS" ? "Очистить корзину" : "Reset cart")),
        remove_toast: (state.lang == "ENG" ? "Item was removed" : (state.lang == "RUS" ? "Товар удален" : "Item was removed")),
        reset_toast: (state.lang == "ENG" ? "Cart was reset" : (state.lang == "RUS" ? "Корзина очищена" : "Cart was reset")),
    }
}

export default testContent