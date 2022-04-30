import { useEffect } from "react"
import { Helmet } from "react-helmet"


function App() {
    useEffect(() => {
        const script = document.createElement("script")

        script.src ="./Snkae"

        script.async = true

        script.integrity =
            "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"

        script.crossOrigin = "anonymous"

        document.body.appendChild(script)

        return () => {
            // clean up the script when the component in unmounted
            document.body.removeChild(script)
        }
    }, [])

    return <div className="App"></div>
}

export default App