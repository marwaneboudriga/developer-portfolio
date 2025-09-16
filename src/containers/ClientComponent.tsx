import { ReactNode, useEffect, useState } from "react"

interface ClientComponentProps {
    children:  ReactNode;
}

const ClientComponent = ({ children }: ClientComponentProps) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => { setIsClient(true) }, [])

    return <>{isClient ? children : ''}</>
}

export { ClientComponent }
