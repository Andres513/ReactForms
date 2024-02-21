

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null)
    async function handleClick() {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "GET",
                headers:  {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            )
            const result = await response.json()
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
        <h2>Authenticate!</h2>
        <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}