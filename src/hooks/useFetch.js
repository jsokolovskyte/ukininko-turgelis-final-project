import { useEffect, useState } from "react"
import axios from "axios"


const useFetch = (url) => {
    const [seller, setSeller] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await axios.get(url);
                setSeller(res.data);

            } catch(error){
                console.log("Error!");
            }

        };

        fetchData();

    }, [url]);

    const reFetch = async () => {

        try {

            const res = await axios.get(url);
            setSeller(res.data);

        } catch(error){
            console.log("Error!");
        }

    };

    return {seller, reFetch};
}

export default useFetch;