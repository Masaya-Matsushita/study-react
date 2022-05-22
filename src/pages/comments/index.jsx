import { Comments as CommentsComponent } from "src/components/Comments"
import { API_URL } from "src/utils/const"
import { SWRConfig } from "swr"

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`
  const comments = await fetch(COMMENTS_API_URL)
  const commentsData = await comments.json()

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  }
}

const Comments = (props) => {
  const { fallback } = props
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <CommentsComponent />
      </SWRConfig>
    </div>
  )
}

export default Comments
