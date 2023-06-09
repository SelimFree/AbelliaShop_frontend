import Card from "../Card/Card";
import "./Popular.scss";
import textContent from "./TextContent";
import useFetch from "../../hooks/useFetch";
import Loader from "../Card/Loader";
const Popular = () => {
    const [data, loading, error] = useFetch(
        "/populars?populate=*&populate[0]=product&populate[1]=product.img1&populate[2]=product.img2"
    );
    return (
        <div className="popular">
            <h1>{textContent().title}</h1>
            <div className="bottom Loader">
                {!loading ? (
                    data?.map((item) => (
                        <Card
                            item={item?.attributes?.product?.data}
                            key={item.id}
                        />
                    ))
                ) : (
                    <>
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                    </>
                )}
            </div>
        </div>
    );
};

export default Popular;
