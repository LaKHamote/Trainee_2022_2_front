import React, { useEffect, useState } from 'react'
import { Container, Table } from './styles'
import {api} from '../../services/api';
import StructButton from '../Button';

const AdminTable = ({request, ...props}) => { 
  
  const [apiRequest, setApiRequest] = useState([])
  const BASE_URL = "http://localhost:3333/"
  const default_photo = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67'
  const Tables = {
    'user': UserTable()
  }

  useEffect( () => {
    api.get(`${request}/index`).then((response) => {
      setApiRequest(response.data)
      console.log(response.data)
    }).catch(e => console.log(e))
  }, [request])

  const addPhoto = async (id, userPhoto) => {
    const formData = new FormData()
    formData.append('profile_picture[]', userPhoto[0])
    try {const response = await api.post(`user/add_profile_picture/${id}`, formData)

    if (response.data) {
        alert("Imagem atualizada com sucesso")
        window.location.reload()
    }
    }catch(e){alert(e)}
}

  return (
    Tables[request]
  )



  function UserTable() {
    return (
      <Container>
          <Table  /*dar para passar largura das colunas especificas por meio de props */
          widthImage={"30%"} 
          widthColumn1={"25%"} 
          widthColumn2={"30%"} 
          break={"810px"}
          >

            <div className='header'>
              <div className='row'>
                <div className='image'/>
                <div className='column ghost' id='column1'>Nome</div>
                <div className='column ghost' id='column3'>Ações</div>
              </div>
            </div>
            <div className='body'>
              {
                apiRequest.map((element, i) => {
                  const deleteElement = async () => {
                    try {
                      await api.delete(`${request}/delete/${element.id}`).then(() => {
                        alert("Deletado com Sucesso!")
                        window.location.reload()
                      })
                      
                    } catch(e) {
                      alert("Erro ao Deletar. Por favor tente novamente")
                    }
                  }
                  return(
                    <div className='row' key={i}>
                      <div className='image'>
                        <img src={element.profile_picture_url? BASE_URL+element.profile_picture_url : default_photo}/>
                      </div>
                      <div className='column' id='column1'>{element.name}</div>
                      <div className='column buttons' id='column3'>
                        <StructButton onClick={deleteElement} name="Excluir" width='5rem'/>
                        <input type='file' onChange={(e) => addPhoto(element.id, e.target.files)} ></input>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </Table>
      </Container>
    )
  }

}

export default AdminTable


