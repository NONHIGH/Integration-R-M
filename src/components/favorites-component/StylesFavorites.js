import styled from 'styled-components';

export const FavoriteTitle = styled.h2`
    color: #f0faff;
    font-size: 40px;
    text-align: center;
    text-decoration: underline;
    &::selection{
        background: transparent;
    }
`
export const FavoriteContainer = styled.section`
    /* display: flex;
    justify-content: center; */
    text-align: center;
`
export const FavoriteSelect = styled.select`
    padding: 10px;
    margin: 10px;
    border-radius: 7px;

    &:hover{
        background: #000;
        color: #fff;
    }
    
`