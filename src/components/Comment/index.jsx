import Head from "next/head"
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
          <div>{data.name}</div>
          <div>{data.email}</div>
        </div>
      ) : null}
    </div>
  )
}
