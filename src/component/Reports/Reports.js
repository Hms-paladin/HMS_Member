import React,{useState} from 'react'
import D_Image from '../../images/nurse.png'
import Image1 from '../../images/image1.png'
import Image2 from '../../images/image2.png'
import Image3 from '../../images/image3.png'
import Image4 from '../../images/image4.png'
import Teeth from '../../images/xray_teeth.jpg'
import sort from '../../images/sort.svg'
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
import Share from './ShareFile'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper'
import './Reports.scss'
import { IndeterminateCheckBox } from '@material-ui/icons'
export default function Reports(props){
    const Members=[
        {name:"Lina",report:3,img:Image1},{name:"Abdullah",report:5,img:Image2},{name:"Nasser",report:6,img:Image3},{name:"Dina",report:4,img:Image4}
    ]
    const TestReport=[
        {id:1,r_name:"X ray-Teeth",date:"25-11-2020"},{id:2,r_name:"Blood Test",date:"02-01-2021"},  {id:3,r_name:"Root Test",date:"08-01-2021"},
        {id:4,r_name:"Cavity Test",date:"20-01-2021"}
    ]
    const [open, setOpen] = useState(false);
    const [share,setshare]=useState(false)
    let value=""
    let testreport=[]
    // const [value,setvalue]=useState([])
    const [visible,setvisible]=useState(false)
    const handleClickOpen = (id) => {
        alert(id)
      setOpen(true);
      setshare(false)
      setvisible(true)
      
      if(TestReport.length>=0){
      }
      TestReport.map((data)=>{
        testreport.push(data)
      })
      testreport=TestReport.find((data,index)=>{
        testreport.push(data)
        //   value.push({r_name:data.r_name,date:data.date,id:data.id})
        return(id===data.id)
      })
      if(testreport.length>=0){
        return(testreport)
    }
      console.log("div",testreport.r_name)
    };
    const ShareOpen=()=>{
        setOpen(false);
        setshare(true)
        setvisible(true)
        testreport=TestReport;
    }
    const handleClose = () => {
      setOpen(false);
      setshare(false)
      setvisible(false)
    };
   const FileType="sss.txt"
   const status=""
   const data=[{report:"Blood Test",date:"02-02-2021"},{report:"Blood Test",date:"02-02-2021"}]
   const download=(blob)=>{
    const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `FileName.file`,
         
      );
  
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode.removeChild(link);
}

console.log(TestReport,"divya")

    return(
        <div>
            <Grid container>
                <Grid item xs={6} md={4} className="reports_fst_grid">
                   <label className="medical_rpt_head">Medical Reports</label>
                   <div className="member_reports_parent">
                   <Paper className="medical_report_paper">
                       <div><img src={D_Image} className="member_img"/></div>
                       <div className="med_div"><p className="med_name">Dalal</p><p className="repts">4 Reports</p></div>
                   </Paper>
                    {Members.map((data)=>
                       <Paper className="medical_family_member">
                       <div><img src={data.img} className="member_img"/></div>
                       <div className="med_div"><p className="med_name">{data.name}</p><p className="repts">{data.report} Reports</p></div>
                      </Paper>
                    )}
                   </div>
                </Grid>
                {/* second part */}
                <Grid item xs={6} md={8} className="reports_snd_grid">
                <div className="medical_rpt_head">Dalal Medical Reports</div>
                <div className="r_sort_div"><span><label>Test</label><img src={sort} className="r_sort"/></span>
                    <span><label>Date</label><img src={sort} className="r_sort"/></span>
                </div>
                <div  className="member_reports_parent">
                    {TestReport.map((data,index)=>
                    
                    <Paper className="medical_reports_paper">
                        <div>
                            <p className="report_test_name">{data.r_name}</p>
                            <p className="report_test_date">{data.date}</p>
                        </div>
                        <div className="med_icons_div">
                            <div><p className="report_icon_head">Share</p><ShareIcon className="report_icons" onClick={()=>ShareOpen(index)}/></div>
                            <div style={{margin:"0px 25px"}}><p className="report_icon_head">Download</p><GetAppIcon className="report_icons"  onClick={download}/></div>
                            <div><p className="report_icon_view">View</p><VisibilityIcon className="report_view" onClick={()=>handleClickOpen(data.id)}/></div>
                        
                        </div>
                    </Paper>
                    )}
                  </div>
                </Grid>
            </Grid>
            {visible &&  <Dialog
        open={visible}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
        {...props}
        className={open?"signup_modal":share?"Share_modal":""}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
           {open? <div className="login_parent">
            <CloseIcon className="l_closeicon" onClick={handleClose}/>
            <label className="med_rpt_view_text">{testreport.r_name?testreport.r_name:""}</label>
            <img src={Teeth} style={{width:"100%"}}/>
            </div> :
           share?< Share handleClose={handleClose} />:""}
        </Dialog>}
        <pre className="status">{status}</pre>
        </div>
    )
}