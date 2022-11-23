import { useState } from "react"

const Input = ({add_function, placeholder}) => {
    const [input, setInput] = useState("")

    return (
        <>
            <input onChange={setInput} type="text" placeholder={placeholder} />
            <button onClick={() => add_function(input.target.value)}>Criar!</button>
        </>
    )
}

export default Input