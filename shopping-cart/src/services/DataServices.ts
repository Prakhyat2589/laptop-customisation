import { useState, useEffect } from "react";
const useFetchData = <Payload>(
  url: string
): {
  data: Payload | null;
  done: boolean;
} => {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const respJson = await res.json();
        dataSet(respJson);
        doneSet(true);
      } catch (e) {
        console.log("Error:", e);
      }
    };
    getData();
  }, [url]);

  return {
    data,
    done,
  };
};

export { useFetchData };
