import styled from 'styled-components'

export const DivContainerAbout = styled.div`
    font-size: 3rem;
    width: 80vw;
    min-height: 50vh;
    display: grid;
    place-content: center;
    color: #3ED3ED;
    text-align: center;
    background: rgba(6, 1, 27, .8);
    border: 7px solid ;
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    
    margin: auto;
    h1{
        text-decoration-line: underline;
        position: sticky;
        top: 0%;
        margin: unset;
        
    }
    p{
        margin: 0 5% 5%;
    }
    @media(max-width: 756px) {
        min-width: 130vw;
    }
`