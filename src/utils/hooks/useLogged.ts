import { useEffect, useState } from "react"

const useLogged = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token !== null) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    return isLogged
}

export default useLogged