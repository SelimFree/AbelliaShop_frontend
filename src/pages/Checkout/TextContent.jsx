import useGlobalState from "../../hooks/useGlobalState"

const testContent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state] = useGlobalState()
    return {
        step_1: (state.lang == "ENG" ? "Enter user data" : (state.lang == "RUS" ? "Ввод данных" : "Enter user data")),
        step_2: (state.lang == "ENG" ? "Check your products" : (state.lang == "RUS" ? "Проверка товаров" : "Check your products")),
        fill_data_toast: (state.lang == "ENG" ? "Fill the fields properly" : (state.lang == "RUS" ? "Заполните поля" : "Fill the fields properly")),
        empty_cart_toast: (state.lang == "ENG" ? "Your cart is empty" : (state.lang == "RUS" ? "Ваша корзина пуста" : "Your cart is empty")),
        name: (state.lang == "ENG" ? "Name" : (state.lang == "RUS" ? "Имя" : "Name")),
        surname: (state.lang == "ENG" ? "Surname" : (state.lang == "RUS" ? "Фамилия" : "Surname")),
        tel_number: (state.lang == "ENG" ? "Moblie" : (state.lang == "RUS" ? "Телефон" : "Moblie")),
        email: (state.lang == "ENG" ? "Email" : (state.lang == "RUS" ? "Эл. почта" : "Email")),
        address: (state.lang == "ENG" ? "Address" : (state.lang == "RUS" ? "Адрес" : "Address")),
        shipping_method: (state.lang == "ENG" ? "Shipping method" : (state.lang == "RUS" ? "Метод доставки" : "Shipping method")),
        delivery: (state.lang == "ENG" ? "Delivery" : (state.lang == "RUS" ? "Доставка курьером" : "Delivery")),
        pickup: (state.lang == "ENG" ? "Pickup" : (state.lang == "RUS" ? "Самовывоз" : "Pickup")),
        subtotal: (state.lang == "ENG" ? "SUBTOTAL" : (state.lang == "RUS" ? "Итого" : "SUBTOTAL")),
        next: (state.lang == "ENG" ? "Next" : (state.lang == "RUS" ? "Далее" : "Next")),
        back: (state.lang == "ENG" ? "Back" : (state.lang == "RUS" ? "Назад" : "Back")),
        confirm: (state.lang == "ENG" ? "Confirm" : (state.lang == "RUS" ? "Подтвердить" : "Confirm")),
    }
}

export default testContent