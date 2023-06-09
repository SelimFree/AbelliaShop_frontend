import "./Footer.scss";
import Social from "../Social/Social";
import testContent from "./TextContent";

const Footer = () => {
    return (
        <div>
            <Social />
            <div className="footer">
                <div className="top">
                    <div className="item">
                        <h1>{testContent().categories}</h1>
                        <span>{testContent().skincare}</span>
                        <span>{testContent().haircare}</span>
                        <span>{testContent().body}</span>
                        <span>{testContent().accessories}</span>
                        <span>{testContent().new}</span>
                    </div>
                    <div className="item">
                        <h1>{testContent().links}</h1>
                        <span>{testContent().faq}</span>
                        <span>{testContent().pages}</span>
                        <span>{testContent().stores}</span>
                        <span>{testContent().compare}</span>
                        <span>{testContent().cookies}</span>
                    </div>
                    <div className="item responsive">
                        <h1>{testContent().aboutTitle}</h1>
                        <span>{testContent().about}</span>
                    </div>
                    <div className="item responsive">
                        <h1>{testContent().contactTitle}</h1>
                        <span>{testContent().contact}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <span className="logo">{testContent().logo}</span>
                        <span className="copyright">
                            {testContent().copyright}
                        </span>
                    </div>
                    <div className="right responsive"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
