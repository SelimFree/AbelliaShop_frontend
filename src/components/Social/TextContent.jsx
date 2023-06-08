import useGlobalState from "../../hooks/useGlobalState";
const testContent = () => {
    const [state] = useGlobalState();
    return {
        title: (state.lang == "ENG" ? "Follow us on Instagram!" : (state.lang == "RUS" ? "Следите за нами в Instagram!" : "Follow us on Instagram!")),
        url: "@korea_cosmetics_tm",
    }
}

export default testContent