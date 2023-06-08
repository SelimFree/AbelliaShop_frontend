import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import textContent from "./TextContent";
import Loader from "./Loader";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import { useRef, useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useGlobalState from "../../hooks/useGlobalState";
const Products = ({search}) => {
    const param = useParams().params;
    let paramFilter;
    let paramSort;
    if (param) {
        const paramType = param.split("=")[0];
        if (paramType == "filter") {
            paramFilter = param.split("=")[1];
        } else if (paramType == "sort") {
            paramSort = param.split("=")[1] + "%3Adesc";
        }
    }

    const [state] = useGlobalState();
    const [categories, loadingCategories, errorCategories] =
        useFetch("/categories");
    const checkBoxesGroup = useRef(null);
    const [checkBoxes, setCheckBoxes] = useState(
        paramFilter ? [`filters[category][id][$in][0]=${paramFilter}`] : []
    );
    const [radioButtons, setradioButtons] = useState(
        paramSort ? `sort[0]=${paramSort}` : "sort[0]=price"
    );

    const generateUrlFilter = () => {
        let filters = [];
        let paramCount = 0;
        for (let i = 0; i < checkBoxesGroup?.current?.children.length; i++) {
            if (checkBoxesGroup?.current?.children[i].control.checked) {
                filters.push(
                    `filters[category][id][$in][${paramCount++}]=${
                        checkBoxesGroup?.current?.children[i].id
                    }`
                );
            }
        }
        return filters;
    };

    const handleCheckBoxChange = () => {
        setCheckBoxes(generateUrlFilter());
    };

    const handleRadioButtonChange = (e) => {
        setradioButtons(e.target.value);
    };

    return (
        <div className="products Loader">
            {!loadingCategories ? (
                <div className="left">
                    {search && (
                        <div className="search">
                            {`${textContent().search} "${search}"`}
                        </div>
                    )}

                    <div className="filterItem">
                        <h1>{textContent().categories}</h1>
                        <div className="categories">
                            <FormGroup ref={checkBoxesGroup}>
                                {categories?.map((category) => (
                                    <FormControlLabel
                                        className="label"
                                        control={
                                            <Checkbox
                                                onChange={handleCheckBoxChange}
                                                checked={
                                                    checkBoxes.some(
                                                        (filter) =>
                                                            filter.split(
                                                                "="
                                                            )[1] == category?.id
                                                    )
                                                        ? true
                                                        : false
                                                }
                                            />
                                        }
                                        label={
                                            state.lang == "ENG"
                                                ? category?.attributes
                                                      ?.title_eng
                                                : state.lang == "RUS"
                                                ? category?.attributes
                                                      ?.title_rus
                                                : category?.attributes
                                                      ?.title_tkm
                                        }
                                        key={category?.id}
                                        id={category?.id}
                                    />
                                ))}
                            </FormGroup>
                        </div>
                    </div>
                    <div className="filterItem">
                        <h1>{textContent().sorting}</h1>
                        <div className="sorting">
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    value={radioButtons}
                                    name="radio-buttons-group"
                                    onChange={handleRadioButtonChange}
                                >
                                    <FormControlLabel
                                        className="label"
                                        value="sort[0]=price"
                                        control={<Radio />}
                                        label={textContent().price_asc}
                                    />
                                    <FormControlLabel
                                        className="label"
                                        value="sort[0]=price%3Adesc"
                                        control={<Radio />}
                                        label={textContent().price_dec}
                                    />
                                    <FormControlLabel
                                        className="label"
                                        value="sort[0]=is_new%3Adesc"
                                        control={<Radio />}
                                        label={textContent().new}
                                    />
                                    <FormControlLabel
                                        className="label"
                                        value="sort[0]=is_new"
                                        control={<Radio />}
                                        label={textContent().old}
                                    />
                                    <FormControlLabel
                                        className="label"
                                        value="sort[0]=is_discount%3Adesc"
                                        control={<Radio />}
                                        label={textContent().discount}
                                    />
                                    <FormControlLabel
                                        className="label"
                                        value="sort[0]=is_discount"
                                        control={<Radio />}
                                        label={textContent().regular}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
            <div className="right">
                <div className="banner">
                    <img
                        src="https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </div>
                <List checkBoxes={checkBoxes} radioButtons={radioButtons} search = {search} />
            </div>
        </div>
    );
};

export default Products;
