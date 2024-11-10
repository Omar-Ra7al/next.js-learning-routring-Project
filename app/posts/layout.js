export const metadata = {
  title: "Posts",
};
export default function layout({ children }) {
  return (
    <div
      style={{
        marginTop: "100px",
        background: "#9900ff",
        borderRadius: "10px",
        padding: "20px",
        textTransform: "capitalize",
      }}>
      <h1>this is the layout in the posts</h1>
      <div>{children}</div>
    </div>
  );
}
