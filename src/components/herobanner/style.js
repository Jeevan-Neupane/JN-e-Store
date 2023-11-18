import styled from "styled-components";
import { tabletLandScape } from "../../style/responsive";

export const Container = styled.div`
width:100%;
height:50rem;
position:relative;
display:flex;
overflow:hidden;
margin-top:3rem;
background-color:blue;
`

export const Arrow = styled.div`
position:absolute;
top:50%;
transform:translateY(-50%);


left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
right:10px;
font-size:3rem;
height:4rem;
width:4rem;
cursor: pointer;
z-index:20;
background-color:black;
display: flex;
align-items:center;
justify-content:center;
opacity:0.5;
&:hover{
    opacity:1;
}
`

export const Wrapper = styled.div`
display: flex;
height:100%;
`
export const Slider = styled.div`

height:50rem;
width:100vw;
display: flex;
transition:all .5s ease-in-out;
transform:translateX(${props => props.transform * -100}%);
background-color:#${props => {
        return props.background
    }};


`

export const ImageDiv = styled.div`
width:40%;
display: flex;
align-items:center;
justify-content:center;
`

export const Image = styled.img`
width:80%;
`

export const TextDiv = styled.div`
color:${props => props.theme.body};
display: flex;
justify-content:center;
flex-direction:column;

`

export const Title = styled.h3`
font-size:5rem;
${tabletLandScape({
    fontSize:"3rem"
})}
`

export const Desc = styled.p`
font-size:2rem;
margin-top:1rem;
${tabletLandScape({
    fontSize:"1.2rem"
})}
`
