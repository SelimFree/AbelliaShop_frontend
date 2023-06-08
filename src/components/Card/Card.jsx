import "./Card.scss";
import testContent from "./TextContent";
import { Link } from "react-router-dom";
import useGlobalState from "../../hooks/useGlobalState";
const Card = ({ item }) => {
    const [state] = useGlobalState();
    return (
        <Link className="link" to={`/product/${item?.id}`}>
            <div className="card">
                {item?.attributes?.is_new && (
                    <span className="new">{testContent().new}</span>
                )}
                <div className="image">
                    <img
                        className="mainImg"
                        src={
                            import.meta.env.VITE_APP_UPLOAD_URL +
                            item?.attributes?.img1?.data?.attributes?.url
                        }
                        alt=""
                    />
                    <img
                        className="secondImg"
                        src={
                            import.meta.env.VITE_APP_UPLOAD_URL +
                            item?.attributes?.img2?.data?.attributes?.url
                        }
                        alt=""
                    />
                </div>
                <h2>
                    {state.lang == "ENG"
                        ? item?.attributes?.title_eng
                        : state.lang == "RUS"
                        ? item?.attributes?.title_rus
                        : item?.attributes?.title_tkm}
                </h2>
                <div className="prices">
                    <h3
                        className={
                            item?.attributes?.discount_price ? "old" : ""
                        }
                    >{`${item?.attributes?.price} TMT`}</h3>
                    {item?.attributes?.discount_price && (
                        <h3>{`${item?.attributes?.discount_price} TMT`}</h3>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default Card;
