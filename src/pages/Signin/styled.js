import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
margin: 20px;
.title{
    display: flex;
    justify-content: flex-start;
    font-size: 35px;
    color: #000;
    font-weight:bold;
    padding-bottom: 30px;
}
form{
    width: 500px;
    padding: 30px;
    text-align: center;
    border: solid 1px #EAEAEA;
    border-radius: 5px;
    background-color: #fff;
    
    .area {
        display:flex;
        align-items:center;
        padding-bottom: 20px;
        padding-top: 20px;
        
        .area--input{    
            width: 100%;
            flex: 1;
            input{
                border: solid 1px #EAEAEA;
                width: 100%;
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
        .checkbox{
            display:none;
        }
        .remember {
            position: relative;
            padding-left: 32px;
            cursor: pointer;
            color: #838B83;
            font-size: 15px;
            line-height: 24px;
        }               
        .checkbox[type='checkbox'] + .remember::before {
            content: "";
            position: absolute;
            width: 22px;
            height: 22px;
            border-radius: 2px;
            background: #fff;
            left: 0;
            border: solid 1px #EAEAEA;
        }
        .checkbox[type='checkbox']:checked + .remember::after {
            content: '';
            position: absolute;
            left: 8px;
            top: 4px;
            width: 5px;
            height: 10px;
            border-right: solid 3px #838B83;
            border-bottom: solid 3px #838B83;
            transform: rotate(45deg);
        }   
    }  
}
`