import Head from "next/head"
import { Posts as PostsComponent } from "src/components/Posts"

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <PostsComponent />
    </div>
  )
}

export default Posts
