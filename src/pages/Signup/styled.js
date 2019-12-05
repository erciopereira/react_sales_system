import styled from 'styled-components';
import Cadastro from '../../images/cadastre.jpg';

export const PageArea = styled.div`

display: flex;
margin: 20px 0px;
border: solid 1px #EAEAEA;
border-radius: 5px;
background-color: #fff;
width:100%;
.title{
    display: flex;
    justify-content: flex-start;
    font-size: 35px;
    color: #000;
    font-weight:bold;
    padding-bottom: 30px;
}
form{
    width:100%;
    padding: 30px;
    text-align: center;
    
    .area {
        display:flex;
        align-items:center;
        padding-bottom: 20px;
        padding-top: 20px;
        
        .area--input{    
            width: 100%;
            flex: 1;
            input{
                width: 100%;
                border: solid 1px #EAEAEA;
                outline:none;
                padding: 15px;
                font-size: 15px;
                color: #838B83;
                transition: all ease .4s;
                &:focus{
                    border: 2px solid #838B83;
                }
            }
            input:focus::-webkit-input-placeholder {
                color: transparent;
            }
           
            button{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 15px;
                background-color: #0089ff;
                border-radius: 5px;
                color:#FFF;
                padding: 5px 15px;
                cursor:pointer;
                border:none;
                &:hover{
                    background-color:#006FCE
                }
            }
        }
        .stateLoc{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 13px;
            color: #838B83;
            font-size: 15px;
            border: solid 1px #EAEAEA;
            outline:none;
            transition: all ease .4s;
            &:focus{
                border: 2px solid #838B83;
            }
        }             
    }  
}
.imgCadastre{
    background-image: url(${Cadastro});
    display:block;
    opacity: 40%;
    width: 100%;
    border-radius: 0px 5px 5px 0px;
    background-size: cover;
    background-position: center;
}
`