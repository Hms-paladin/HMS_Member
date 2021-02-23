import React, { Component } from "react";
import PropTypes from "prop-types";
import CloseIcon from '@material-ui/icons/Close';
import './ShareFile.scss'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  WhatsappShareButton,
  EmailShareButton,

  // Comment to sepaate, overwriting codesandbox behavior
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share"; // https://github.com/nygardk/react-share/
export default function Share(props)  {
  const defaultProps = {
    title: "dfgh",
    url: "fghj"
  };
  const { title, url } = props;
    
    return (
      <section className="share_root">
          <CloseIcon className="close_share_icon" onClick={()=>props.handleClose(false)}/>
          <div className="share_head">Share this Medical Reports</div>
          <div>
          <FacebookShareButton quote={title}>
            <FacebookIcon
              size={"3rem"} // You can use rem value instead of numbers
              round
            />
          </FacebookShareButton>

          <TwitterShareButton>
          {/* <TwitterShareButton title={title}> */}
            <TwitterIcon size={"3rem"} round />
          </TwitterShareButton>

          <WhatsappShareButton title={title} separator=":: ">
            <WhatsappIcon size={"3rem"} round />
          </WhatsappShareButton>

          <LinkedinShareButton
            title={title}
            windowWidth={750}
            windowHeight={600}
          >
            <LinkedinIcon size={"3rem"} round />
          </LinkedinShareButton>

          <PinterestShareButton
            url={String(window.location)}
            media={`${url}`}
            windowWidth={1000}
            windowHeight={730}
          >
            <PinterestIcon size={"3rem"} round />
          </PinterestShareButton>

          <VKShareButton image={`${url}`} windowWidth={660} windowHeight={460}>
            <VKIcon size={"3rem"} round />
          </VKShareButton>
          <EmailShareButton subject={title} body="body">
            <EmailIcon size={"3rem"} round />
          </EmailShareButton>
          </div>

      </section>
    );
  
}
