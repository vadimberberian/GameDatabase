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

console.log(myGames.map(i=>i.username))
    return (
        <div>
            {user?.email}
            <p>Games you liked:</p>
            <div>{myGames.username}</div>
        </div>
    )
}

export default MyGames
