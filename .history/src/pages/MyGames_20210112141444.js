import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { db } from "../firebase"


const MyGames = () => {
    const {user} = useSelector(state=>state.user)
    const [myGames, setMyGames] = useState([])
    useEffect((()=> {
        db.collection("games").onSnapshot(snapshot=> {
            setMyGames(snapshot.docs.map(doc=> doc.data()))
        })
    }),[])

    console.log(db.collection("games").onSnapshot(i=>console.log(i.docs.data))
const removeGame = () =>{
    db.collection("games").onSnapshot(snapshot=> console.log(snapshot))
}

// console.log(myGames.map(i=>i.game_title))
    return (
        <div>
            {user?.email}
            <p>Games you liked:</p>
            {/* <div>{myGames.map(game=> <p style={{cursor: "pointer"}}  onClick={removeGame}>{game.game_title}</p>)}</div> */}
        </div>
    )
}

export default MyGames
