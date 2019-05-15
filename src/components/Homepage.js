import React, { Component } from 'react';
import SingleUser from './SingleUser';



let newStreamers;
class Homepage extends Component {

      
    state = {
     users: 'Loading'
    }

     getGame = async (newUsers) =>{

      if(newUsers.data.length === 0 || newUsers.length ===0){
        alert("no new users")
        return
      }
      //string template https://api.twitch.tv/helix/users?id=17337557&id=44322889
      //game string'https://api.twitch.tv/helix/games?id=493057'
      let urlString = 'https://api.twitch.tv/helix/users?'
      let gameString = 'https://api.twitch.tv/helix/games?'
      //generate string
     // console.log(newUsers.data)
      for (let i =0; i <newUsers.data.length; i++){
      //console.log(data[i].props.data.user_id)
      urlString += 'id=' + newUsers.data[i].user_id + '&'
      gameString += 'id=' + newUsers.data[i].game_id + '&'
    }
   
    let newStreams = await fetch(urlString, {
      method: 'get',
      headers: {
        'Client-ID': '7zkh4ut355tznqbv75vc1dsflxiu0v'
      },
    }).then(res => res.json())


    let newGames = await fetch(gameString, {
      method: 'get',
      headers: {
        'Client-ID': '7zkh4ut355tznqbv75vc1dsflxiu0v'
      },
    }).then(res => res.json())
    
    for(let i = 0; i<newUsers.data.length; i++){
        newUsers.data[i].picture = newStreams.data[i].profile_image_url

        //
        //get games does not return the same order of ids.. must match ids before setting...
        //
        for(let x = 0; x<newGames.data.length; x++){
          if(newUsers.data[i].game_id === newGames.data[x].id){
            newUsers.data[i].game_name = newGames.data[x].name
          }
        }

    }

    return newUsers
    }
    
    getFirstOccurence = async () =>{
        let newUsers = await fetch('https://sheltered-ridge-17065.herokuapp.com/sendResults', {
            method: 'get',
          })
           .then(res => res.json()) 


           newUsers = await this.getGame(newUsers);
          

           //console.log(newUsers)
             newStreamers = await newUsers.data.map((user) => <SingleUser  data={user}/>)     
             await this.setState({users: newStreamers})
             
            // this.getGame(this.state.users)
    }



     componentDidMount (){
         this.getFirstOccurence()        
    }
    render() {
       
        return (
    
          <div className='box'>
              {(this.state.users)}      
          </div>

        );
    }
}

export default Homepage;