
import React,{useState,useEffect} from "react";
import './HospitalList.scss';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import avatar from '../../../images/nurse.png'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import star from '../../../images/star.png'
import {useHistory} from 'react-router-dom'
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'
import Labelbox from "../../../helpers/labelbox/labelbox";
import StarIcon from '@material-ui/icons/Star';
import Thumb from "../../../images/BookaRoom/round-thumb.svg";
import search from "../../../images/loupe.png";
import { Input,Modal } from 'antd';
import HospitalOffer from "../HospitalList/HospitalOffer";
import { useDispatch,connect} from "react-redux";
import {BookRoomDetails} from '../../../actions/Book a RoomActions'
import ValidationLibrary from '../../../helpers/validationfunction'
var hashHistory = require('react-router-redux')

const { Search } = Input;
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));


function valuetext(value) {
  return `${value}`;
}



               

function HospitalList(props) {
   let dispatch=useDispatch()
  const [ModalOpen,setModalOpen]=React.useState(false)
  const [BookRoomList,setBookRoomList]=useState([])
  const [VendorRoomList,setVendorRoomList]=useState()
  const [searchValue,setsearchValue]=useState("")
  const [SearchKey,setSearchKey]=useState({
    fromdate:{
      value:""
    },
    todate:{
      value:""
    }
  })
const ModalClickOpen=(id)=>{
    setModalOpen(true)
    var Data=props.BookList.find((data)=>{
      return data.roomVendorId==id
    })
    setVendorRoomList(Data)
}
const ModalClickClose=()=>{
  setModalOpen(false)
}

  let history = useHistory();

  function Bookingdetails(){
    history.push("/doctorbooking")
}
    const classes = useStyles();
    useEffect(()=>{
      dispatch(BookRoomDetails())

     },[])
     useEffect(()=>{
       let RoomList=[]
      props.BookList.map((data)=>{
        RoomList.push(data)
      })
      setBookRoomList(RoomList)

     },[props.BookList])
     console.log("bookroom",BookRoomList)
     function checkValidation(data, key) {
       if(data&&key==="todate"){
         var Todate=data
         dispatch(BookRoomDetails(SearchKey.fromdate.value,Todate))
       }
      let dynObj = {
        value: data,
      };
    setSearchKey((prevState) => ({
        ...prevState,
        [key]: dynObj,
    }))
     }
     const OnSearch=(e)=>{
          setsearchValue(e.target.value)
          if(searchValue){
          dispatch(BookRoomDetails(SearchKey.fromdate.value,SearchKey.todate.value,searchValue)).then(()=>{
          }) 
        }
  } 
    return(  
        <div className="hos_list_container">
           <div  className="filter_div">
            <div className="filter_div"> Filter </div>
            <div className="date_fil_div">
                <div className="date_pic_childdiv">
                <Labelbox type="datepicker" 
                  changeData={(data) => checkValidation(data, "fromdate")}
                  value={SearchKey.fromdate.value}
                />
                </div>
                <div className="date_pic_childdiv">
                    <Labelbox type="datepicker"
                    changeData={(data) => checkValidation(data, "todate")}
                    value={SearchKey.todate.value}
                    /></div>
            </div>

           </div>
          <div className="second_head">  
          <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
          {/* <Search className="search_hospitallist"
                placeholder="Search"
                allowClear 
                style={{ width: 300, margin: '0 10px' }}
           /> 
                <img className="searchicon_hos"src={search} />  */}
        <div style={{position:"relative",width:"500px"}}><Input type="search " placeholder={"Search"} value={searchValue}
        className="srch_his" onChange={OnSearch} /><img src={search} style={{position:"absolute",top:"7px",right:"17px",width:"20px"}}/></div>

          </div> 

           {BookRoomList.map((data)=>
            <div className="second_div">
               <div className="second_details">
                  <div className="snd_deta"><div className="avatar_div"> <img src={data.vendorProfileImage}onClick={()=>ModalClickOpen(data.roomVendorId)}  /></div>
                   <div className="hos_details">
                     <div className="detail_1">{data.roomVendorName}</div>
                     <div className="detail_2">{data.roomVendorAddress}</div>
                     <div  className="star_rating">
                            {[...Array(5)].map((img,index)=>(
                            
                            <div key={index}><StarIcon className="star_icon"/></div>
                            ))}
                      </div>
                    </div>
                    </div> 
                     <div className="rate_numeric"> <div className="number_rating">0.0<img src={star}/></div></div>
               </div>
                <div style={{display:'flex', marginTop:'10px'}} >
                   <img className="thumb_size" src={Thumb}/>
                   <p style={{color:'#83AF40', marginTop:'0px', marginBottom:'0px', marginRight:'10px'}}>0%</p>
                   <p style={{marginTop:'0px', marginBottom:'0px'}}>(0 reviews)</p>
                </div>
                {/* <div className="box_align">
                    <p className="box_first_text">Dalal</p>
                    <p className="box_second_text">The ambiance and room maintenance are very good</p>
                </div> */}
                   {/* Vedio */}

                   <div>
                   <div id="#carouselExampleIndicators" class="carousel slide" data-interval="false" >
            <ol class="carousel-indicators">
            {data.mediaDetails.map((data,index)=>
              <li data-target="#carouselExampleIndicators" data-slide-to={index} class="active"></li>
            )}
            </ol>
         <div class="carousel-inner"

         >
        {data.mediaDetails.map((data,index)=>{
            return(
         <div  key={index} class={index == 0 ? "carousel-item active" : "carousel-item"} >
         {data.media_type==="Image"?<img src={data.media_filename}/>: 
         data.media_type==="Vedio"?<VedioPlayer src={data.media_filename} playing poster={"/assets/poster.png"}/>:""
         }
         </div>
        )})}
            </div>
                </div>
                   </div> 
                 {/* end vedio */}
            </div>
           )}

           </div>

           <Modal
                  title={VendorRoomList&&VendorRoomList.roomVendorName}
                  visible={ModalOpen}
                  footer={false}
                  fullwidth={true}
                  size={"lg"}
                  {...props}
                  centered
                  width={1000}
                  // className="confirm_modal"
                  onCancel={ModalClickClose}
                 >
                  
                     <HospitalOffer VendorRoomList={VendorRoomList}/>
    
                 </Modal>
        </div> 

    ) 
}
const mapStateToProps=(state)=>({
  BookList:state.BookRoom.BookList || []

})
export default connect(mapStateToProps)(HospitalList);