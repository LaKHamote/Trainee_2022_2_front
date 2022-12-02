import Button from '@mui/material/Button';

const style = {
  background: '#3db0f7', 
  ':hover': {
    background: '#4040ff', 
    transition: '1s'
  }, 
  color: 'black', 
  fontWeight: 'bold', 
  width: 'fit-content' 
}

const StructButton = ({onClick, endIcon, ...props}) => {
  return (// as edicoes do sx seguem o css padrao e podem ser trocadas por props pra fácil personalização ou colocar toda na pagina que importou o botao que o '{...props}' chama a personalizao
    <Button 
             variant="text" 
             sx={ {...style,...props }}
             onClick={onClick}
             endIcon={endIcon}
    >
      {/* <Link to={props.link}>  */}
        {props.name}
      {/* </Link> */}
    </Button>
  );
}

export default StructButton

// Como chamar:
//     <StructButton name='Struct' endIcon={<SendIcon sx={ [{color: 'white'}]} />} onClick={() => function}/>
