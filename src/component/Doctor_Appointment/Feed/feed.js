import React from "react";
import './feed.scss'

import { BrowserRouter as Router, Switch, Route,useHistory,Link,NavLink,Redirect} from "react-router-dom";

var hashHistory = require('react-router-redux')




                  

function Feed(props) {
   
     
    return(  
        <div className="feed_layout">
           <div className="filter_container">
                      Filter
           </div>
        </div> 
    ) 
}
export default Feed;