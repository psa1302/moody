import { useEffect, useState } from 'react'

const USER_LIST_URL = 'https://jsonplaceholder.typicode.com/users'

export function useGetUsers() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(false)

      try {
        const usersRes = await fetch(USER_LIST_URL)
        const userResJson = await usersRes.json()

        setUsers(userResJson)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  return { users, loading, error }
}
