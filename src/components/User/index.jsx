import Head from "next/head"
import { useUser } from "src/hooks/useUser"

export const User = () => {
  const { user, userError, isLoading} = useUser()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (userError) {
    return <div>{userError.message}</div>
  }



  return (
    <div>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <h1>{user?.name}</h1>
      {user?.username ? <p>name:{user.username}</p> : null}
    </div>
  )
}
