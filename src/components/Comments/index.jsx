import Head from "next/head"
import Link from "next/link"
import { useComments } from "src/hooks/useFetchArray"

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (isEmpty) {
    return <div>データは空です</div>
  }

  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <ol>
        {data?.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`comments/${comment.id}`}>
                <a>
                  <h3>{comment.name}</h3>
                  <p>{comment.body}</p>
                </a>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
