import { useState } from "react"
import { api } from "../../services/api"
import Input from "../Input"

const AddGenre = () => {
    const add_genre = async (input) => {
        try {
            const response = await api.post("/genre/create", {
                genre: {
                    name: input
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
            <Input
                add_function={add_genre}
                placeholder="adicione um gênero"
            />
        </>
    )
}

export default AddGenre