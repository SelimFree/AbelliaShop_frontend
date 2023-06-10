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
    const [data, loading, error] = useFetch(`/products/${param}?populate=*`, true);
    const dispatch = useDispatch();
    const product = data[0];
    console.log(data);
    const [state] = useGlobalState();
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const images = [
        import.meta.env.VITE_APP_UPLOAD_URL +
        product?.attributes?.img1?.data?.attributes?.url,
        import.meta.env.VITE_APP_UPLOAD_URL +
        product?.attributes?.img2?.data?.attributes?.url,
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
                                ? product?.attributes?.title_eng
                                : state.lang == "RUS"
                                ? product?.attributes?.title_rus
                                : product?.attributes?.title_tkm}
                        </h1>
                        <div className="prices">
                            <div
                                className={
                                    product?.attributes?.discount_price
                                        ? "price"
                                        : "discount-price"
                                }
                            >{`${product?.attributes?.price} TMT`}</div>
                            {product?.attributes?.discount_price && (
                                <div className="discount-price">{`${product?.attributes?.discount_price} TMT`}</div>
                            )}
                        </div>
                        <div className="info">
                            <div className="description">
                                {state.lang == "ENG"
                                    ? product?.attributes?.description_eng
                                    : state.lang == "RUS"
                                    ? product?.attributes?.description_rus
                                    : product?.attributes?.description_tkm}
                            </div>
                        </div>
                        <div className="category">{`${
                            textContent().category
                        }: ${
                            state.lang == "ENG"
                                ? product?.attributes?.category?.data?.attributes
                                      ?.title_eng
                                : state.lang == "RUS"
                                ? product?.attributes?.category?.data?.attributes
                                      ?.title_rus
                                : product?.attributes?.category?.data?.attributes
                                      ?.title_tkm
                        }`}</div>
                        <div className="brand">{`${textContent().brand}: ${
                            product?.attributes?.brand?.data?.attributes?.title
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
                                            product?.attributes?.title_eng,
                                            title_rus:
                                            product?.attributes?.title_rus,
                                            title_tkm:
                                            product?.attributes?.title_tkm,
                                            description_eng:
                                            product?.attributes
                                                    ?.description_eng,
                                            description_rus:
                                            product?.attributes
                                                    ?.description_rus,
                                            description_tkm:
                                            product?.attributes
                                                    ?.description_tkm,
                                            price: product?.attributes
                                                ?.discount_price
                                                ? product?.attributes
                                                      ?.discount_price
                                                : product?.attributes?.price,
                                            quantity: quantity,
                                            img: product?.attributes?.img1?.data
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
