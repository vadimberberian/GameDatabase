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
        .where("username", "==", "vadykk@gmail.com")
        // .orderBy("timestamp")
        .onSnapshot(snapshot=> setMyGames(snapshot.docs.map(doc=> doc.data().game_title)))

        return ()=> {
            unsubscribe()
        }
    }, [])

console.log(myGames)
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
console.log(myGames)
return (
        <div>
            {user?.email}
            <p>Games you liked:</p>
            {myGames.map(game=> {
                <p>{game}</p>
            })}
        </div>
    )
}

export default MyGames
