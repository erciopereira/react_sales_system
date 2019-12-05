import styled from 'styled-components';

export const HeaderArea = styled.div`
    height:60px;
    background-color:#696969;
    
    .container{
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    

    .logo{
        flex: 1;
        display:flex;
        align-items: center;
        margin: 0px 20px;     
        a{
            text-decoration: none;
            
            img{
                background-color: #fff;
                width:70px;
                border-radius: 5px;
                display:block;
            }
        }   
    }
    

    nav{
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }

        li{
            margin-left: 20px;
            margin-right: 20px;

            a, button {
                border:none;
                background:none;
                outline:none;
                color: #FFF;
                font-size: 14px;
                text-decoration:none;
                cursor:pointer;
                &:hover {
                    color:#CDCDCD;
                }
                &.button{
                    background-color: #FF8100;
                    border-radius: 5px;
                    color:#FFF;
                    padding: 5px 10px;
                }
                &.button:hover{
                    background-color: #E57706;
                }
            }
        }
    }
`