import styled from 'styled-components';
import Ad from '../../images/Ad.jpg';

export const PageArea = styled.div`

display: flex;
margin: 20px 0px;
border: solid 1px #EAEAEA;
background-color: #fff;
width:100%;
border-radius: 5px;
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

    .area {
        display:flex;
        align-items:center;
        padding-bottom: 20px;
        padding-top: 20px;
        
        .area--input{    
            width: 100%;
            flex: 1;
            
            input, textarea{
                border: solid 1px #EAEAEA;
                background-color:#fff;
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

            .checkbox{
                display:none;
            }
            .negotiable {
                position: relative;
                padding-left: 32px;
                cursor: pointer;
                color: #838B83;
                font-size: 15px;
                border:none;
                line-height: 24px;
            }               
            .checkbox[type='checkbox'] + .negotiable::before {
                content: '';
                position: absolute;
                width: 22px;
                height: 22px;
                border-radius: 2px;
                background: #fff;
                left: 0;
                border: solid 1px #EAEAEA;                   
            }
            .checkbox[type='checkbox']:checked + .negotiable::after {
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

            textarea:focus::-webkit-input-placeholder {
                color: transparent;
            }
            textarea{
                height: 150px;
                resize:none;
            }

            button, input::-webkit-file-upload-button{
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
    }  
}
.imgAd{
    background-image: url(${Ad});
    display:block;
    opacity: 40%;
    width: 100%;
    border-radius: 0px 5px 5px 0px;
    background-size: cover;
    background-position: center;
}

`