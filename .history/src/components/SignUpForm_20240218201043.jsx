import { useState } from "react";

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)

export default function SignUpForm() {
    return (
        <h2>Sign Up!</h2>
    )
}