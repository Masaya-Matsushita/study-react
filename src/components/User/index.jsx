import Head from "next/head"
import { useUser } from "src/hooks/useUser"

export const User = () => {
  const { user, userError, isLoading } = useUser()

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
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
          <ul>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
            <li>{user.company.name}</li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}
