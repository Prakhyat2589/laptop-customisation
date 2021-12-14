import { useState, useEffect } from "react";
const useFetchData = <Payload,>(
    url: string,
): {
    data: Payload | null;
    done: boolean;


} => {
    const [data, dataSet] = useState<Payload | null>(null);
    const [done, doneSet] = useState(false);

    useEffect(() => {
        try {
            fetch(url)
                .then((resp) => resp.json())
                .then((d: Payload) => {
                    dataSet(d);
                    doneSet(true);
                })
        }
        catch (e) {
            console.log("Error:", e)
        };
    }, [url]);

    return {
        data,
        done,
    };
}

export { useFetchData }