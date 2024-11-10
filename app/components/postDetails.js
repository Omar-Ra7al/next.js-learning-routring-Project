import { Suspense } from "react";

export default async function postDetails({ id }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1",
    { next: { revalidate: 120 } }
  );
  let posts = await result.json();

  const postsJsx = posts.map((t) => {
    if (t.id == id) {
      return (
        <div
          key={t.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "10px 0",
            backgroundColor: "black",
            cursor: "pointer",
            padding: "10px 20px",
          }}>
          <span>{t.id}</span>
          <p>{t.title}</p>
        </div>
      );
    }
  });
  // لانه بيجيلك ك بروميس وكانه بتعمله فيتش  async ولازم تمشي على الاستراكشر بتاع ال
  return <div>{postsJsx}</div>;
}
