

export default function Authenticate({ token }) {
    
    async function handleClick() {
        console.log("Button was pressed!")
    }

    return (
        <h2>Authenticate!</h2>
        <button onClick={handleClick}>Authenticate Token</button>
    )
}