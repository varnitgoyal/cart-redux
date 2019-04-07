import styled from 'styled-components'

const cartItemStyle=styled.tr`



td{
    width:50px; 
    text-align:center; 
    height:70px;
}
.name_column{
    width:200px;
    text-align:left;
}
.icon_column{
    width:2px;
}
.quantity_column{
    width:2px;
}
.total_column{
    width:200px;
}
.fas_icon{
    color:#6e8eef;
    font-size:1.2rem;
    margin:0 10px;
    display:inline-block;
    cursor:pointer;
}
.disabled{
    pointer-events:none;
    color:gray;
}
.remove_icon{
    color:red;
}
.total_price{
    font-weight:bold;
}

`


export default cartItemStyle