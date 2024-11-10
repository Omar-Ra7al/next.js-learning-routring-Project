"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const todo = await result.json();
      setData(todo);
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Todo ----- {data.title}</p>
    </>
  );
}
