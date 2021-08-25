import React from 'react'
import './VedioPlayer.scss'
import PropTypes from 'prop-types';
import { Player, PosterImage,BigPlayButton,ControlBar,ForwardControl} from 'video-react';
import ShareIcon from '@material-ui/icons/Share';
export default function VedioPlayer(props){
    
PosterImage.propTypes = {

    // The poster image url
    poster: PropTypes.string,
  
  }
    return(
        <div className="player_vedio_comp">
            <Player src={props.src}
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      playsInline={props.playing}
      poster={props.poster}
     
      >
      <BigPlayButton position="center" />
      <ControlBar autoHide={false}>
        <ForwardControl seconds={5} order={3.1} />
        <ForwardControl seconds={10} order={3.2} />
        {/* <ForwardControl seconds={30} order={3.3} /> */}
      </ControlBar>
      </Player>
     <ShareIcon className="vd_share"/>
        </div>
    )
}