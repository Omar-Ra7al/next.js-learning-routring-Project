import Link from "next/link";
export default async function postsPage() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1",
    { next: { revalidate: 120 } }
  );
  let posts = await result.json();
  const postsJsx = posts.map((t) => {
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
        <Link href={`/posts/${t.id}`}>
          <span
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "5px 20px",
            }}>
            Details
          </span>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h2>Posts Page</h2>
      {postsJsx}
    </div>
  );
}
