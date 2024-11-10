import { Suspense } from "react";
import PostDetails from "@/app/components/postDetails";
export default async function PostID({ params }) {
  const id = (await params).postId; // دي بتقوله استنا البرامس تيجي وبعد كدا هالتي الديناميك

  // لانه بيجيلك ك بروميس وكانه بتعمله فيتش  async ولازم تمشي على الاستراكشر بتاع ال
  return (
    <div>
      <div>My Post Param : {id}</div>
      <Suspense
        fallback={
          <>
            <p>loading ... </p>
          </>
        }>
        <PostDetails id={id} />
      </Suspense>
    </div>
  );
}
