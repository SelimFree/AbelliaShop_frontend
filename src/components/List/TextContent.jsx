import useGlobalState from "../../hooks/useGlobalState"

const testContent = () => {
    const [state] = useGlobalState();
    return {
        more: (state.lang == "ENG" ? "Show more" : (state.lang == "RUS" ? "Показать больше" : "Show more")),
    }
}

export default testContent