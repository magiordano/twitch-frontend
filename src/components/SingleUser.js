
import React, { Component } from 'react'
import Numeral from 'numeral'


export default class extends Component {
  

    render() {
        // this.props.data.game = getGame(this.props.data.game_id)
        const user = this.props.data
        //user.game= getGame(this.props.data.game_id)

        return ( 
            <div className='user'>
    
            <div className='preview'><a href ={`https://twitch.tv/${user.user_name}`}><img src={user.thumbnail_url.replace('{width}x{height}', '301x169')}alt='Img Not Found'></img></a>
            <div class="bottom-left">{Numeral(user.viewer_count).format('0.0a')} viewers</div>
            </div>

            <div className='pictureContainer'>
            <div className='icon'><img className='picture' src = {user.picture}></img></div>    
            
            
               <div className='info'>
                <div><a href ={`https://twitch.tv/${user.user_name}`}>{user.title}</a></div>
                <div><a href={`https://twitch.tv/${user.user_name}/videos`}>{user.user_name}</a></div>
                <div></div>{}
                <div>{user.game_name}</div>
    
              </div>
              
            </div>
            </div>
        )
    }
}