import { useState } from "react"
import { api } from "../../services/api"

const CreateGenrePage = () => {
    const [genreName, setGenreName] = useState('')

    const createGenre = async (e) => {
        e.preventDefault()
        
        try {
            const response = await api.post("/genre/create", {
                genre: {
                    name: genreName,
                }
            })
    
            if (response.data) {
                alert("Genero criado com sucesso")
            }
        } catch(e) {
            alert(e)
        }
        
    }
    
    return (
        <>
            <h1>Adicionar um gênero:</h1>
            <form onSubmit={createGenre}>
                <input
                    style={{marginLeft: '20rem', fontSize: `3rem`}}
                    placeholder="Nome do genero"
                    value={genreName}
                    onChange={(e) => setGenreName(e.target.value)}
                />
                <button
                    style={{fontSize: `3rem`}}
                type="submit">Criar</button>
            </form>
        </>
    )
}

export default CreateGenrePage