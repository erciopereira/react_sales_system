import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #E5E5E5;
    border-bottom:1px solid #ccc;
    padding: 20px 0;

    .searchBox{
        background-color:#50BB49;
        padding: 20px 15px;
        border-radius:5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display: flex;

        form{
            display:flex;
            flex:1;

            input, select{
                height: 40px;
                border:0;
                border-radius: 5px;
                outline:0;
                font-size: 15px;
                color:#000;
                margin-right: 20px;
            }
            input{
                flex:1;
                padding: 0 10px;
            }
            select{
                width: 100px;
            }
            button{
                background-color:#49AEEF;
                font-size:15px;
                border:0;
                border-radius: 5px;
                outline:0;
                color:#FFF;
                height: 40px;
                padding: 0 20px;
                cursor:pointer;
            }

        }
    }

    .categoryList{
        display:flex;
        flex-wrap:wrap;
        margin-top: 20px;

        .categoryItem{
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            color:#000;
            text-decoration:none;
            height:50px;
            margin-bottom:10px;
            &:hover{
                color:#999;
            }

            img{
                width: 45px;
                height: 45px;
                margin-right:10px;
                position: absolute;
            }
            span{
                margin-top: 40px;
                position: absolute;
                font-weight: bold;
            }
        }
    }
`

export const PageArea = styled.div`

h2{
    font-size: 20px;
}
.list{
    display:flex;
    flex-wrap:wrap;

    .aditem{
        width:25%;
    }
}
.seeAllLink{
    color:#000;
    text-decoration:none;
    font-weight:bold;
    display:inline-block;
    margin-top:10px;
}

`