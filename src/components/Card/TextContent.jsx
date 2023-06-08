import useGlobalState from "../../hooks/useGlobalState";

const testContent = () => {
    const [state] = useGlobalState();
    return {
        new: (state.lang == "ENG" ? "New" : (state.lang == "RUS" ? "Новинка" : "New")),
    }
}

export default testContent