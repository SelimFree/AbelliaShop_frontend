import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import textContent from "./TextContent";
import "./Product.scss";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../../redux/cartReducer";
import useGlobalState from "../../hooks/useGlobalState";
import Loader from "./Loader";
const Product = () => {
    const param = useParams().id;
    const [data, loading, error] = useFetch(`/products/${param}?populate=*`);

    const dispatch = useDispatch();

    const [state] = useGlobalState();
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const images = [
        import.meta.env.VITE_APP_UPLOAD_URL +
            data?.attributes?.img1?.data?.attributes?.url,
        import.meta.env.VITE_APP_UPLOAD_URL +
            data?.attributes?.img2?.data?.attributes?.url,
    ];
    const toastText = textContent().add_toast;
    return (
        <div className="product Loader">
            {!loading ? (
                <>
                    <div className="left">
                        <div className="images">
                            {images?.map((img, i) => (
                                <img
                                    src={img}
                                    alt=""
                                    key={i}
                                    onClick={() => setCurrentImage(i)}
                                />
                            ))}
                        </div>
                        <div className="mainImage">
                            <img src={images[currentImage]} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h1>
                            {state.lang == "ENG"
                                ? data?.attributes?.title_eng
                                : state.lang == "RUS"
                                ? data?.attributes?.title_rus
                                : data?.attributes?.title_tkm}
                        </h1>
                        <div className="prices">
                            <div
                                className={
                                    data?.attributes?.discount_price
                                        ? "price"
                                        : "discount-price"
                                }
                            >{`${data?.attributes?.price} TMT`}</div>
                            {data?.attributes?.discount_price && (
                                <div className="discount-price">{`${data?.attributes?.discount_price} TMT`}</div>
                            )}
                        </div>
                        <div className="info">
                            <div className="description">
                                {state.lang == "ENG"
                                    ? data?.attributes?.description_eng
                                    : state.lang == "RUS"
                                    ? data?.attributes?.description_rus
                                    : data?.attributes?.description_tkm}
                            </div>
                        </div>
                        <div className="category">{`${
                            textContent().category
                        }: ${
                            state.lang == "ENG"
                                ? data?.attributes?.category?.data?.attributes
                                      ?.title_eng
                                : state.lang == "RUS"
                                ? data?.attributes?.category?.data?.attributes
                                      ?.title_rus
                                : data?.attributes?.category?.data?.attributes
                                      ?.title_tkm
                        }`}</div>
                        <div className="brand">{`${textContent().brand}: ${
                            data?.attributes?.brand?.data?.attributes?.title
                        }`}</div>
                        <div className="quantity">
                            <div
                                onClick={() =>
                                    setQuantity(
                                        quantity - 1 >= 1 ? quantity - 1 : 1
                                    )
                                }
                            >
                                -
                            </div>
                            <span className="ammount">{quantity}</span>
                            <div onClick={() => setQuantity(quantity + 1)}>
                                +
                            </div>
                        </div>
                        <div className="buttons">
                            <div
                                className="add"
                                onClick={() => {
                                    dispatch(
                                        addToCart({
                                            id: data?.id,
                                            title_eng:
                                                data?.attributes?.title_eng,
                                            title_rus:
                                                data?.attributes?.title_rus,
                                            title_tkm:
                                                data?.attributes?.title_tkm,
                                            description_eng:
                                                data?.attributes
                                                    ?.description_eng,
                                            description_rus:
                                                data?.attributes
                                                    ?.description_rus,
                                            description_tkm:
                                                data?.attributes
                                                    ?.description_tkm,
                                            price: data?.attributes
                                                ?.discount_price
                                                ? data?.attributes
                                                      ?.discount_price
                                                : data?.attributes?.price,
                                            quantity: quantity,
                                            img: data?.attributes?.img1?.data
                                                ?.attributes?.url,
                                        })
                                    );
                                    toast.success(toastText);
                                }}
                            >
                                {textContent().cart}
                            </div>
                            {/* <div className="add wishlist">{textContent(state.lang).wishlist}</div>  add to favourite button*/}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Loader />
                </>
            )}
            <Toaster position="bottom-center" reverseOrder={true} />
        </div>
    );
};

export default Product;
