import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto 0 auto;
    font-family: 'Fira Sans';
    font-style: normal;
    width: 80%;
    
    h2 {
        font-size: 50px;
        color: #3A3B3C;
    }

`;

export const Table = styled.div`
    width: 100%;
    margin-bottom: 2rem;

    .header {
        font-weight: 700;
        margin-bottom: 1rem;
        color: #3A3B3C;
    }

    .row {
        display: flex;
        margin: 0 1.5rem;
        padding: 1rem;
        font-size: 1rem;
        gap: 1rem;
        color: #3A3B3C;

        .column {
            width: ${props => props.widthCollum ? props.width : '20%'};
            display: flex;
            align-items: center;
            justify-content: center;
            text-align:center;
        }


        
        #column1 {
            width: ${props => props.widthColumn1 ? props.widthColumn1 : '20%'};
            
        }

        #column2 {
            width: ${props => props.widthColumn2 ? props.widthColumn2 : '20%'};
        }
        
        #column3 {
            width: ${props => props.widthColumn3 ? props.widthColumn3 : '10%'};
        }

        #column4 {
            width: ${props => props.widthColumn4 ? props.widthColumn4 : '10%'};
        }

        #column5 {
            width: ${props => props.widthColumn5 ? props.widthColumn5 : '40%'};
        }

        #title {
            width: ${props => props.widthTitle ? props.widthTitle : '40%'};
        }

        #created-at {
            width: ${props => props.widthCreateDate ? props.widthCreateDate : '40%'};
        }

        #separator {
            width: ${props => props.widthSeparator ? props.widthSeparator: '20%'};
        }
        

        .image {
            width: ${props => props.widthImage ? props.widthImage : '20%'};
            display: flex;
            justify-content: center;
            align-items:center;

            img {
                object-fit: cover;
                height: 5rem;
                width: 5rem;
                border-radius: 50%;
            }
        }
    }

    .buttons {
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;
    }

    .body {
        border: 2px solid #CCCCCC;
        padding-bottom: 2rem;
        border-radius: 8px;

        .row {
            border-bottom: 1px solid #9E9EA7;
        }

    }

    @media screen and (max-width: 950px) {
        .row {
            font-size: 1rem;
            margin: 0 0.5rem;
            
            .image {
                width: 20%;
                margin-top: 1.5rem;
                img {
                    object-fit: cover;
                    height: 3rem;
                    width: 3rem;
                    border-radius: 50%;
                }
            }

            .table-button{
                font-size: 0.75rem;
                width: 4rem;
                height: 1.5rem;
            }
        }
    }

    @media screen and (max-width: ${props => props.break ? props.break : "550px"}) {
        .row {
            font-size: 1.2rem;
            margin: 0;
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items:center;
            #column5, #column1, #column3, #column2, #column4, #title, #created-at, #separator { //lembrar de colocar todos os ids das colunas
                width: 100%;
            }
            .table-button{
                font-size: 1rem;
                width: 5rem;
                height: 2rem;

            }
            .image {
                display: flex;
                justify-content: center;
                align-items:center;
                width: 100%;
                margin: 1.5rem auto 0 auto;
                img {
                    object-fit: cover;
                    height: 5rem;
                    width: 5rem;
                    border-radius: 50%;
                }
            }
            .ghost{
            display: none;             
            }
        }

        
    }
`