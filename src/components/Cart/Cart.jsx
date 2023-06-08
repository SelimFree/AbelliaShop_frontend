import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import textContent from "./TextContent";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import toast, { Toaster } from "react-hot-toast";
import useGlobalState from "../../hooks/useGlobalState";
import { Link } from "react-router-dom";
import testContent from "./TextContent";
const Cart = ({ setisOpen }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [state] = useGlobalState();
    let total = 0;
    const resetToast = testContent().reset_toast;
    const removeToast = textContent().remove_toast;
    return (
        <div className="cart">
            <h1>{textContent().title}</h1>
            <div className="items">
                {products?.map((item, i) => {
                    total += item?.quantity * item?.price;
                    return (
                        <div className="item" key={i}>
                            <img
                                className="value"
                                src={
                                    import.meta.env.VITE_APP_UPLOAD_URL +
                                    item?.img
                                }
                                alt=""
                            />
                            <div className="details">
                                <h1>
                                    {state.lang == "ENG"
                                        ? item?.title_eng
                                        : state.lang == "RUS"
                                        ? item?.title_rus
                                        : item?.title_tkm}
                                </h1>
                                <div className="description">{`${
                                    (state.lang == "ENG"
                                        ? item?.description_eng
                                        : state.lang == "RUS"
                                        ? item?.description_rus
                                        : data?.description_tkm
                                    )?.substring(0, 100) || ""
                                }...`}</div>
                                <div className="price">{`${item?.quantity} x ${item?.price} TMT`}</div>
                            </div>
                            <DeleteOutlinedIcon
                                className="delete"
                                onClick={() => {
                                    dispatch(
                                        removeItem({
                                            id: item.id,
                                        })
                                    );
                                    toast.error(removeToast);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="total">
                <span>{textContent().subtotal}</span>
                <span>{`${total.toFixed(2)} TMT`}</span>
            </div>
            <Link className="link" to={products.length ? "/checkout" : "/"}>
                <button className="checkout" onClick={() => setisOpen(false)}>
                    {textContent().checkout}
                </button>
            </Link>
            <div
                className="reset"
                onClick={() => {
                    dispatch(resetCart());
                    toast.error(resetToast);
                }}
            >
                {textContent().reset}
            </div>
            <Toaster position="bottom-center" reverseOrder={true} />
        </div>
    );
};

export default Cart;
