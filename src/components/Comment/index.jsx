import Head from "next/head"
import { PostByCommentId } from "src/components/Post/PostByCommentId"
import { useComment } from "src/hooks/useComment"

export const Comment = () => {
  const { data, error, isLoading } = useComment()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      {data?.body ? (
        <div>
          <h1>{data.body}</h1>
          <ul>
            <li>{data.name}</li>
            <li>{data.email}</li>
          </ul>
          <h2>元の記事</h2>
          <PostByCommentId id={data.postId} />
        </div>
      ) : null}
    </div>
  )
}
