import styled from 'styled-components'

export const CardsStyles = styled.div`
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 1%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
    align-items: center;
    justify-content: center;
    
`


export const CardStyle = styled.section`

    cursor: pointer;
    
    border: 3px solid #eee;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    color: #ffffff;
    transition: 1s;
    &:hover {
    /* filter: blur(8px); */
    margin-right: 20px;
    margin-left: 20px;
    border: 3px solid #1ffea2;
    box-shadow: 0px 0px 40px #1ffea2 ;
    transform: scale(1.1);
    background: #000000;

}
`


export const CardInfo = styled.h4`
    
    display: inline-block;
    text-align: center;
    color: #4ef037;

    &:nth-child(6) {
    display: none;
    }
`


export const CardClose = styled.button`
    /* border-radius: 999px; */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border:none;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    img{
        width: 23px;
        height: 23px;
        object-fit: cover;
        border-radius: 100%;
        &:hover{
            cursor: no-drop;
        }
    }
`

export const CardAvatar = styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`

export const CardIconFavorite = styled.button`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border:none;
    border-radius: 20%;
    position: absolute;
    /* top: 0; */
    
    img{
        color: green;
        width: 17px;
        height: 17px;
        object-fit: cover;
        &:hover{
            cursor: grab
        }
    }
`
export const ButtonsContainer = styled.div`
    position: absolute;
    top: 0;
    
`;