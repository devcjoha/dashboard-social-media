import { useState, useEffect } from "react";

export default function useSocialData() {
  const [social, setSocial] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_PATH = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${BASE_PATH}data/social.json`)
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((item) => {
          const iconPath = `${BASE_PATH}assets/${item.icon}`;
          return {
            ...item,
            icon: iconPath,
          };
        });
        setLoading(false);
        setSocial(newData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [BASE_PATH]);
  return { social, loading };
};
