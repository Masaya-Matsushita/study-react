import Head from "next/head"
import { useComment } from "src/hooks/useComment"

export const Comment = () => {
  const { comment, commentError, isLoading } = useComment()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (commentError) {
    return <div>{commentError.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      {comment?.body ? (
        <div>
          <h1>{comment.body}</h1>
          <div>{comment.name}</div>
          <div>{comment.email}</div>
        </div>
      ) : null}
    </div>
  )
}
