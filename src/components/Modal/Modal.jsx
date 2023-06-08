import { Link } from "react-router-dom";
import "./Modal.scss"
import textContent from "./TextContent"
const Modal = ({requestStatus}) => {
    return (
        <div className="container">
            <div className="cookiesContent">
                <img src={(requestStatus == 200 ? "./success.png" : "./fail.png")}/>
                <p>{(requestStatus == 200 ? textContent().success : textContent().fail)}</p>
                <Link className="link" to={"/"}>
                    <button className="accept">{textContent().accept}</button>
                </Link>
            </div>
        </div>
    )
}

export default Modal;