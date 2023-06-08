import Slider from "../../components/Slider/Slider";
import Popular from "../../components/Popular/Popular";
import Categories from "../../components/Categories/Categories";
import "./Home.scss";
const Home = () => {
    return (
        <div className="home">
            <Slider/>
            <Popular/>
            <Categories/>
        </div>
    )
};

export default Home;
