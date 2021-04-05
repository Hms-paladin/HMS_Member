import React from 'react'
import './VedioPlayer.scss'
import { Player } from 'video-react';
import ShareIcon from '@material-ui/icons/Share';
export default function VedioPlayer(props){
    return(
        <div className="player_vedio_comp">
            <Player src={props.src}
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      playsInline={props.playing}
     
      />
     <ShareIcon className="vd_share"/>
        </div>
    )
}