import styled from "styled-components";
import { laptop } from "../../style/responsive";

export const FormDiv = styled.form`
width:50rem;
background-color:${props => props.theme.header_footer};
margin-top:5rem;
margin-bottom:5rem;
display: flex;
/* align-items:center; */
justify-content:center;
flex-direction:column;
padding:2rem;
`

export const Label = styled.label`
display:block;
font-size:2rem;
color:${props => props.theme.secialTextOne};
margin-bottom:.5rem;


`

export const FormButton = styled.button`
display:block;
width:100%;
margin-top:2rem;
padding:1rem;
&:focus{
    border:solid 2px ${props => props.theme.specialTextTwo}
}
outline:none;
border:none;
background-color:${props => props.theme.specialTextTwo};
cursor: pointer;
border:2px solid ${props => props.theme.specialTextTwo};
color:white;
font-size:1.6rem;
${laptop({
    width: "100%",
})}
`

export const Input = styled.input`
width:100%;
margin-bottom:2rem;
padding:.5rem 1rem;
font-size:1.6rem;
border:2px solid white;
outline:none;
&:focus{
    border:solid 2px ${props => props.theme.specialTextTwo}
}

${laptop({
    width: "100%",
})}
`
export const TextArea = styled.textarea`
width:100%;
outline:none;
height:10rem;
border:2px solid white;
resize:none;
padding:.5rem 1rem;
font-size:1.6rem;
&:focus{
    border:solid 2px ${props => props.theme.specialTextTwo}
}

${laptop({
    width: "100%",
})}

`

export const MessageBox = styled.div`
margin-top:2rem;
`
export const Message = styled.p`
font-size:1.6rem;

color:${props => props.color};

`