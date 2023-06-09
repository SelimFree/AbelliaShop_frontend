import Slider from "../../components/Slider/Slider";
import Popular from "../../components/Popular/Popular";
import Categories from "../../components/Categories/Categories";
import "./Home.scss";
const Home = ({setSearch}) => {
    setSearch("");
    return (
        <div className="home">
            <Slider/>
            <Popular/>
            <hr className="rounded"></hr>
            <Categories/>
        </div>
    )
};

export default Home;
