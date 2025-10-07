import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
    const [AppsData, setAppsData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() => {
        axios('../appsdata.json')
            .then(AppsData => setAppsData(AppsData.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { AppsData, Loading, Error };
}
export default useAppsData;