import useGlobalState from "../../hooks/useGlobalState"

const testContent = () => {
    const [state] = useGlobalState();
    return {
        title: (state.lang == "ENG" ? "Popular products" : (state.lang == "RUS" ? "Популярные продукты" : "Popular products")),
        popularText: (state.lang == "Your text can be here" ? "" : (state.lang == "RUS" ? "Ваш текст может быть тут" : "Your text can be here")),
    }
}

export default testContent