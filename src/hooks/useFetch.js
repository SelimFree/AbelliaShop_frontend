import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";
const useFetch = (url, selectOne=false) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                if (selectOne) {
                    setData([...data, res.data.data]);
                } else {
                    setData([...res.data.data]);
                }
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return [ data, loading, error];

};

export default useFetch;
