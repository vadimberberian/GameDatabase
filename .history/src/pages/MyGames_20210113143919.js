import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { db } from "../firebase"
import firebase from "firebase"
import uuid from 'react-uuid'


const MyGames = () => {
    const {user} = useSelector(state=>state.user)
    const [myGames, setMyGames] = useState([])

    useEffect(()=> {
        const userGames = []
        const unsubscribe = db.collection("games")
        .where("username", "==", user.email)
        // .orderBy("timestamp")
        .onSnapshot(snapshot=>console.log(snapshot))

        return ()=> {
            unsubscribe()
        }
    }, [])


    const deleteGame = (game) => {
        // console.log(game)
            // db.collection("games")
            // .where("username", "==", user.email)
            // .where("game_title", "==", game)
            // .get()
            // .then(snapshot => { console.log(
            //     snapshot.docs.map(doc=>doc)
            // ) })
    }

return (
        <div>
            {user?.email}
            <p>Games you liked:</p>
            <div>{myGames.map(game=> 
            <p key={uuid()} 
                style= {{cursor: "pointer"}} 
                onClick={()=>deleteGame(game)}>
                    {game.game_title}</p>
            )}</div>
            {/* {myGames.map(game=> 
             <p key={uuid()} style= {{cursor: "pointer"}} onClick={()=>deleteGame(game[0])}>{game[0]}</p>
             )} */}
        </div>
    )
}

export default MyGames
