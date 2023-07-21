import { styled } from "styled-components";

export const FormContainer = styled.div`
    width: 80vw;
    text-align: center;
    display: flex;
    margin: auto;
    margin-top: 10%;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 4px solid #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 15px 15px 15px #e92fdf;
    transition: 1.2s;
    background: #eeeeee28;
    &:hover{
        background: #eeeeee88;
    }
    @media (max-width:768px) {
        width: 193vw;
        margin: auto;
        margin-left: 5vw;
        margin-top: 30vh;
    }

`

export const FormTitle = styled.h1`
    
    font-size: 50px;
    position: relative;
    
`

export const Formu = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    width: 100%;
    height: 100%;
`

export const FormSubmit = styled.button`
    text-align: center;
    width: 30%;
    padding: 10px;
    border: 3px solid #e3d;
    background: #e3d;
    color: #fff;
    font-size: 30px;
    &:hover{
        background: #e4f;
        cursor: pointer;
    }
    &:active{
        background: linear-gradient(to bottom, #e2c, #e4f);
        transform: scale(1.2);
    }
`

export const FormGroup = styled.fieldset`
    border: 0;
    margin: 0;
    padding: 10px;
    /* background: #dd33ff99; */
    border-radius: 5px;
    display: grid;
    grid-template-areas: 
        "label input"
        "error error"
    ;
`

export const FormLabel = styled.label`
    grid-area:label
`

export const FormInput = styled.input`
    grid-area: input;
    padding: 10px;
    border: none;
    outline: unset;
    border-bottom: 3px solid #eee;
    background: unset;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .9s;
    color: #00eeeeff;
    &:hover{
        background: #aaa;
    }
    &:focus{
        border-radius: 10px;
        background: #666;
    }
    &::placeholder{
        color: #8B4513;
    }
`

export const FormInvalidInput = styled.span`
    background: #c7003f;
    width: 350px;
    color: #ffffff;
    border: 2px solid #e37;
    border-radius: 3px;
    grid-area: error;
`