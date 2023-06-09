import "./List.scss";
import Card from "../Card/Card";
import textContent from "./TextContent";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import useGlobalState from "../../hooks/useGlobalState";
import Loader from "../Card/Loader";

const List = ({ checkBoxes, radioButtons, search }) => {
    const [state] = useGlobalState();
    const pageSize = 25;
    const [page, setPage] = useState(1);
    const generateUrl = () => {
        let url =
            `/products?pagination[pageSize]=${page * pageSize}&populate=*` +
            (checkBoxes.length ? `&${checkBoxes.join("&")}` : "") +
            (radioButtons ? `&${radioButtons}` : "") +
            (search
                ? `&${
                      state.lang == "ENG"
                          ? `filters[title_eng][$containsi][0]=${search}`
                          : state.lang == "RUS"
                          ? `filters[title_rus][$containsi][0]=${search}`
                          : `filters[title_tkm][$containsi][0]=${search}`
                  }`
                : "");
        return url;
    };
    const url = generateUrl()
    const [data, loading, error] = useFetch(url);

    const showMore = () => {
        setPage(page + 1);
    };

    return (
        <div className="list">
            <div className="items Loader">
                {!loading ? (
                    data?.map((item) => <Card item={item} key={item.id} />)
                ) : (
                    <>
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                    </>
                )}
            </div>
            <div className="add" onClick={showMore}>
                {textContent().more}
            </div>
        </div>
    );
};

export default List;
