import useGlobalState from "../../hooks/useGlobalState"

const testContent = () => {
    const [state] = useGlobalState();
    return {
        title: (state.lang == "ENG" ? "Popular" : (state.lang == "RUS" ? "Популярное" : "Popular")),
    }
}

export default testContent