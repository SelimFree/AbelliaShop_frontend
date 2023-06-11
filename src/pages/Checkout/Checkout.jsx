import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Fragment, useState } from "react";
import "./Checkout.scss";
import textContent from "./TextContent";
import { useDispatch, useSelector } from "react-redux";
import useGlobalState from "../../hooks/useGlobalState";
import { makeRequest } from "../../makeRequest";
import Modal from "../../components/Modal/Modal";
import { resetCart } from "../../redux/cartReducer";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [state] = useGlobalState();
    const [formFilled, setFormFilled] = useState(true);
    const [requestStatus, setRequestStatus] = useState(0);
    //const [orderMade, setOrderMade] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        tel_number: "",
        email: "",
        address: "",
        shipping_method: "delivery",
    });
    const products = useSelector((state) => state.products);
    const [activeStep, setActiveStep] = useState(0);
    const navigator = useNavigate();

    const dispatch = useDispatch();
    const steps = [textContent().step_1, textContent().step_2];
    let total = 0;
    const fillDataToast = textContent().fill_data_toast;
    const emptyCartToast = textContent().empty_cart_toast;

    const handleCheckout = async () => {
        try {
            const res = await makeRequest.post("/orders", {
                ...userData,
                products,
                lang: state.lang,
            });
            if (res?.data?.orderCreated) {
                setRequestStatus(res.status);
                dispatch(resetCart());
            }
        } catch (err) {
            console.log(err);
            setRequestStatus(500);
        }
    };

    const handleSelect = (e) => {
        setUserData({ ...userData, shipping_method: e.target.value });
    };

    const handleNext = async () => {
        if (activeStep == 0) {
            if (
                !(
                    userData.name &&
                    userData.surname &&
                    userData.tel_number &&
                    userData.address
                )
            ) {
                setFormFilled(false);
                toast.error(fillDataToast)
                return;
            }
        }
        if (activeStep >= steps.length - 1) {
            if (products.length == 0 && requestStatus == 0) {
                toast.error(emptyCartToast)
                setInterval(() => {
                    navigator("/");
                }, 2000);
            } else {
                handleCheckout();
            }
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        if (activeStep > steps.length - 1) {
            console.log("Cant go back!");
            return;
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    return !requestStatus ? (
        <div className="checkout">
            <Box className="stepper" sx={{ width: "100%" }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Fragment>
                    <div className="content">
                        {activeStep == 0 ? (
                            <div className="user-data">
                                <img src="logo.svg" alt="" />
                                <div className="form">
                                    <div className="left">
                                        <TextField
                                            error={formFilled ? false : true}
                                            required
                                            id="filled-required"
                                            label={textContent().name}
                                            variant="filled"
                                            value={userData.name}
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                        <TextField
                                            error={formFilled ? false : true}
                                            required
                                            id="filled-required"
                                            label={textContent().surname}
                                            variant="filled"
                                            value={userData.surname}
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    surname: e.target.value,
                                                })
                                            }
                                        />
                                        <TextField
                                            error={formFilled ? false : true}
                                            required
                                            id="filled-required"
                                            label={textContent().tel_number}
                                            variant="filled"
                                            value={userData.tel_number}
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    tel_number: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="right">
                                        <TextField
                                            id="filled-basic"
                                            label={textContent().email}
                                            variant="filled"
                                            value={userData.email}
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                        <TextField
                                            error={formFilled ? false : true}
                                            required
                                            id="filled-required"
                                            label={textContent().address}
                                            variant="filled"
                                            value={userData.address}
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    address: e.target.value,
                                                })
                                            }
                                        />
                                        <FormControl fullWidth variant="filled">
                                            <InputLabel id="demo-simple-select-label">
                                                {textContent().shipping_method}
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Shipping method"
                                                value={userData.shipping_method}
                                                onChange={handleSelect}
                                            >
                                                <MenuItem value={"delivery"}>
                                                    {textContent().delivery}
                                                </MenuItem>
                                                <MenuItem value={"pickup"}>
                                                    {textContent().pickup}
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="user-products">
                                <div className="items">
                                    {products?.map((item) => {
                                        total += item?.quantity * item?.price;
                                        return (
                                            <div className="item" key={item.id}>
                                                <img
                                                    src={
                                                        import.meta.env
                                                            .VITE_APP_UPLOAD_URL +
                                                        item?.img
                                                    }
                                                    alt=""
                                                />
                                                <div className="info">
                                                    <div className="title">
                                                        {state.lang == "ENG"
                                                            ? item?.title_eng
                                                            : state.lang ==
                                                              "RUS"
                                                            ? item?.title_rus
                                                            : item?.title_tkm}
                                                    </div>
                                                    <div className="description">{`${
                                                        (state.lang == "ENG"
                                                            ? item?.description_eng
                                                            : state.lang ==
                                                              "RUS"
                                                            ? item?.description_rus
                                                            : item?.description_tkm
                                                        )?.substring(0, 100) ||
                                                        ""
                                                    }...`}</div>
                                                    <div className="price">{`${
                                                        item?.quantity
                                                    } x ${item?.price} TMT = ${(
                                                        item?.quantity *
                                                        item?.price
                                                    ).toFixed(2)} TMT`}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="total">
                                    <span>{textContent().subtotal}</span>
                                    <span>{`${total.toFixed(2)} TMT`}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            pt: 2,
                        }}
                    >
                        <Button
                            color="inherit"
                            disabled={
                                activeStep === 0 || activeStep === steps.length
                            }
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            {textContent().back}
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button
                            disabled={activeStep === steps.length}
                            onClick={handleNext}
                        >
                            {activeStep >= steps.length - 1
                                ? textContent().confirm
                                : textContent().next}
                        </Button>
                    </Box>
                </Fragment>
            </Box>
            <Toaster position="bottom-center" reverseOrder={true} />
        </div>
    ) : (
        <Modal requestStatus={requestStatus} setRequestStatus={setRequestStatus} />
    );
};
export default Checkout;
