import useGlobalState from "../../hooks/useGlobalState";
const testContent = () => {
    const [state] = useGlobalState();
    return {
        accept: (state.lang == "ENG" ? "Accept" : (state.lang == "RUS" ? "Принять" : "Accept")),
        success: (state.lang == "ENG" ? "Your order was made successfuly" : (state.lang == "RUS" ? "Ваз заказ успешно отправлен" : "Your order was made successfuly")),
        fail: (state.lang == "ENG" ? "Something is wrong, try again later" : (state.lang == "RUS" ? "Произола ошибка, попробуйте позже" : "Something is wrong, try again later")),
    }
}

export default testContent