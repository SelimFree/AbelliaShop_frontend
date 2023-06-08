const Loader = () => {
    return (
        <>
            <div className="left">
                <div className="images">
                    <img className="value" />
                    <img className="value" />
                </div>
                <div className="mainImage value">
                    <img className="value"/>
                </div>
            </div>
            <div className="right">
                <h1 className="value"></h1>
                <div className="prices value"></div>
                <div className="info">
                    <div className="description value"></div>
                </div>
                <div className="category value"></div>
                <div className="brand value"></div>
                <div className="quantity">
                    <div className="value"></div>
                    <span className="ammount value"></span>
                    <div className="value"></div>
                </div>
                <div className="buttons value">
                    <div className="add"></div>
                </div>
            </div>
        </>
    );
};

export default Loader;
