import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { DetailAvatar, DetailContainer, DetailData } from "./StylesDetail";

export default function Detail(){
    const { id } = useParams();

    const [character, setCharacter] = useState({});
    useEffect(()=>{
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({data}) =>{
                        setCharacter(data)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[id])



    return (
        <>
            {
                character ? (
                    <DetailContainer>
                        <h4>Name: {character.name}</h4>
                        <DetailData>Status: {character.status}</DetailData>
                        <DetailData>Species: {character.species}</DetailData>
                        <DetailData>Gender: {character.gender}</DetailData>
                        <DetailData>Location: {character.gender}</DetailData>
                        {
                            character.origin&&(
                                <DetailData>Location: {character.origin.name}</DetailData>
                            )
                        }

                        <DetailAvatar src={character.image} alt="avatar"></DetailAvatar>
                    </DetailContainer>
                ):(
                    <div>
                        <h3>No se encontro este personaje</h3>
                    </div>
                )
            }
        </>
    )
} 