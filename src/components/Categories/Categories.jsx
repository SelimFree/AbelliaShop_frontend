import { Link } from "react-router-dom";
import textContent from "./TextContent";
import "./Categories.scss";

const Categories = () => {
    return (
        <div className="wrapper">
            <h1>{textContent().title}</h1>
            <div className="categories">
                <div className="col">
                    <div className="row">
                        <img
                            src="./img_1.jpg"
                            alt=""
                        />
                        <Link className="link" to="/products/sort=is_new">
                            <button>{textContent().new}</button>
                        </Link>
                    </div>
                    <div className="row">
                        <img
                            src="./img_2.jpg"
                            alt=""
                        />
                        <Link className="link" to="/products/filter=1">
                            <button>{textContent().skincare}</button>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img
                            src="./img_3.jpg"
                            alt=""
                        />
                        <Link className="link" to="/products/filter=3">
                            <button>{textContent().body}</button>
                        </Link>
                    </div>
                </div>
                <div className="col col-l">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <img
                                    src="./img_4.jpg"
                                    alt=""
                                />
                                <Link className="link" to="/products/filter=4">
                                    <button>{textContent().accessories}</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img
                                    src="./img_5.jpg"
                                    alt=""
                                />
                                <Link
                                    className="link"
                                    to="/products/sort=is_discount"
                                >
                                    <button>{textContent().sale}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <img
                            src="./img_6.jpg"
                            alt=""
                        />
                        <Link className="link" to="/products/filter=2">
                            <button>{textContent().haircare}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
