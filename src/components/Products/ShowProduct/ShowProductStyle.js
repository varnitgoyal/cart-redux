import styled from 'styled-components'


const ShowProductStyled=styled.div`
position:relative;
background-color:#ededed;
margin:10px 10px;
max-width:250px;
min-width:250px;
min-height:480px;
max-height:550px;
text-align:center;


`
const Button=styled.button`
position:absolute;
bottom:0;
left:8px;
padding:10px;
background-color:#fff;
color:#50b457;
width:95%;
outline:none;
border:none;
border-radius:5px;
font-weight:bold;
margin: 10px 0;

:disabled{
    color:gray;
}

`

export  {
    ShowProductStyled,
    Button
}