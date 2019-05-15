
import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'




export default class extends Component {
  

    render() {
        // this.props.data.game = getGame(this.props.data.game_id)
        const user = this.props.data
        //user.game= getGame(this.props.data.game_id)

        return ( 
            <div className='user'>
    
            <div><a href ={`https://twitch.tv/${user.user_name}`}><img src={user.thumbnail_url.replace('{width}x{height}', '301x169')}alt='Img Not Found'></img></a></div>
     
            <div className='pictureContainer'>
            <div className='icon'><img className='picture' src = {user.picture}></img></div>    
            
            
               <div className='info'>
                <div><a href ={`https://twitch.tv/${user.user_name}`}> {user.title}</a></div>
                <div>{user.user_name}</div>
                <div>{user.game_name}</div>
                <div>{user.viewer_count.toLocaleString('en')} Viewers </div>
              </div>
              
            </div>
            </div>
        )
    }
}