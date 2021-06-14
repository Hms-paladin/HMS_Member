import React, { useState, useEffect } from 'react'
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
// import { saveAs } from 'file-saver';

import { Document, Page } from 'react-pdf';
// import {PDFViewer} from 'pdf-viewer-reactjs'
import { IndeterminateCheckBox, LaptopWindows } from '@material-ui/icons'
import { connect, useDispatch } from "react-redux";
import { GetLabResultMemberList, GetParticularMemLabResult } from "../../actions/ReportActions"
import moment from "moment";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

function Reports(props) {
    const dispatch = useDispatch();
    const [parentmembers, setParentMembers] = useState([])
    const [familymembers, setFamilyMembers] = useState([])
    const [memberlist, setMemberList] = useState([])
    const [testReport, setTestReport] = useState([])
    const [testInfo, setTestInfo] = useState({})
    const [patientInfo, setPatientInfo] = useState({ pat_id: 0, pat_name: "" })
    const [IsSort, setIsSort] = useState(true)
    const [IsDateSort, setIsDateSort] = useState(true)
    const [open, setOpen] = useState(false);
    const [share, setshare] = useState(false)
    let testinfo = ""
    const [visible, setvisible] = useState(false)

    let file = "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
    let pdf_file = "https://arxiv.org/pdf/quant-ph/0410100.pdf";
    var fileExtension = pdf_file.split('.').pop();

    const handleClickOpen = (id) => {
        setOpen(true);
        setshare(false)
        setvisible(true)
        testinfo = testReport.find((data, index) => {
            return (id === data.testDetailsId)
        })
        setTestInfo(testinfo)


        // testreport = TestReport.find((data, index) => {
        //     // testreport.push(data)
        //     //   value.push({r_name:data.r_name,date:data.date,id:data.id})
        //     return (id === data.id)
        // })

        // console.log("div", testreport.r_name)
    };
    const ShareOpen = () => {
        setOpen(false);
        setshare(true)
        setvisible(true)
        // testreport = TestReport;
    }
    const handleClose = () => {
        setOpen(false);
        setshare(false)
        setvisible(false)
    };
    const FileType = "sss.pdf"
    const status = ""
    const data = [{ report: "Blood Test", date: "02-02-2021" }, { report: "Blood Test", date: "02-02-2021" }]

    const download = (id) => {

        // const FileType = require('file-type/browser');
        // var fileType;
        // (async () => {
        //     alert("hi")
        //     const response = await fetch(pdf_file);
        //     fileType = await FileType.fromStream(response.body);
        //     console.log(fileType, "ffff");
        //     if(fileType.ext == "jpg"){func_jpg()}
        //     else if(fileType.ext == "pdf"){func_pdf()}
        // })();




        testinfo = testReport.find((data, index) => {
            return (id === data.testDetailsId)
        })
        console.log(testinfo, "testinfo")
        let filename = testinfo.testName;
        let url = testinfo.lab_test_file_name;


        if (fileExtension == "jpg") {
            fetch(file, {
                method: "GET",
                headers: {}
            })
                .then(response => {
                    response.arrayBuffer().then(function (buffer) {
                        const url = window.URL.createObjectURL(new Blob([buffer]));
                        const link = document.createElement("a");
                        link.href = url;
                        link.setAttribute("download", "picture.jpg"); //or any other extension
                        document.body.appendChild(link);
                        link.click();
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else if (fileExtension == "pdf") {
            fetch(pdf_file, {
                method: "GET",
                headers: {}
            })
                .then(response => {
                    response.arrayBuffer().then(function (buffer) {
                        const url = window.URL.createObjectURL(new Blob([buffer]));
                        const link = document.createElement("a");
                        link.href = url;
                        link.setAttribute("download", "Report.pdf"); //or any other extension
                        document.body.appendChild(link);
                        link.click();
                    });
                })
                .catch(err => {
                    console.log(err);
                });

        }
    }
    useEffect(() => {
        dispatch(GetLabResultMemberList())
    }, [])

    useEffect(() => {
        let member = props.getLabResultMemberList
        // setMemberList(member)
        console.log(member, "temp")
        member.map((data) => {
            let parent = data.parrentMember.filter((item) => item.resportsCount != 0)
            let family = data.familyMember.filter((item) => item.resportsCount != 0)
            setParentMembers(parent)
            setFamilyMembers(family)
        })

    }, [props.getLabResultMemberList])

    useEffect(() => {
        let result = props.getParticularMemLabResult
        result.map((data => {
            setTestReport(data.details)
        }))
    }, [props.getParticularMemLabResult])

    const GenerateReport = (patientid, patientname) => {
        dispatch(GetParticularMemLabResult(patientid))
        setPatientInfo({
            pat_id: patientid,
            pat_name: patientname,
        })
    }
    const Sorting = (type) => {
        if (type == "alpha") {
            setIsSort(!IsSort)
            dispatch(GetParticularMemLabResult(patientInfo.pat_id, true, false))
            // let sorting = testReport.sort((a, b) => a.testName.localeCompare(b.testName))
            // console.log(sorting,"ssss")
            // setTestReport(sorting)
        }
        if (type == "date") {
            setIsDateSort(!IsDateSort);
            dispatch(GetParticularMemLabResult(patientInfo.pat_id, false, true))
            // let sorting = testReport.sort(function(a, b){
            //     let a_date=moment(a.date).format('DD/MM/YYYY')
            //     let b_date=moment(b.date).format('DD/MM/YYYY')
            //     var aa = a_date.split('/').reverse().join(),
            //         bb = b_date.split('/').reverse().join();
            //     return aa < bb ? -1 : (aa > bb ? 1 : 0);
            // });           
            // setTestReport(sorting)
        }
    }
    const Sharehandle = () => {
        // alert("hi")
    }

    console.log(testInfo, "testInfo")
    console.log(testReport, "testReport")
    console.log(parentmembers, "parent")

    return (
        <div>
            <Grid container>
                <Grid item xs={6} md={4} className="reports_fst_grid">
                    <label className="medical_rpt_head">Medical Reports</label>
                    <div className="member_reports_parent">
                        {parentmembers.map((item) => {
                            return (
                                <Paper className="medical_report_paper" onClick={() => GenerateReport(item.patientId, item.patientName)}>
                                    <div><img src={item.profile_image} className="member_img" /></div>
                                    <div className="med_div"><p className="med_name">{item.patientName}</p><p className="repts">{item.resportsCount + " Reports"}</p></div>
                                </Paper>)
                        })}
                        {familymembers.map((item) => {
                            return (
                                <Paper className="medical_family_member" onClick={() => GenerateReport(item.patientId, item.patientName)}>
                                    <div><img src={item.profile_image} className="member_img" /></div>
                                    <div className="med_div"><p className="med_name">{item.patientName}</p><p className="repts">{item.resportsCount + " Reports"}</p></div>
                                </Paper>)
                        })}
                    </div>
                </Grid>
                {/* second part */}

                <Grid item xs={6} md={8} className="reports_snd_grid">
                    {testReport.length > 0 &&
                        <>
                            <div className="medical_rpt_head">{patientInfo.pat_name + " Medical Reports"}</div>
                            <div className="r_sort_div">
                                <span onClick={() => Sorting("alpha")}><label>Test</label><img src={sort} className="r_sort" /></span>
                                <span onClick={() => Sorting("date")} ><label>Date</label><img src={sort} className="r_sort" /></span>
                            </div>
                            <div className="member_reports_parent">
                                {testReport && testReport.map((data, index) =>

                                    <Paper className="medical_reports_paper">
                                        <div>
                                            <p className="report_test_name">{data.testName}</p>
                                            <p className="report_test_date">{moment(data.date).format('DD/MM/YYYY')}</p>
                                        </div>
                                        <div className="med_icons_div">
                                            <div><p className="report_icon_head">Share</p><ShareIcon className="report_icons" onClick={() => ShareOpen(index)} /></div>
                                            <div style={{ margin: "0px 25px" }}><p className="report_icon_head">Download</p><GetAppIcon className="report_icons" onClick={() => download(data.testDetailsId)} /></div>
                                            <div><p className="report_icon_view">View</p><VisibilityIcon className="report_view" onClick={() => handleClickOpen(data.testDetailsId)} /></div>
                                        </div>
                                    </Paper>
                                )}
                            </div>
                        </>
                    }
                </Grid>
            </Grid>
            {visible && <Dialog
                open={visible}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={"xs"}
                {...props}
                className={open ? "signup_modal" : share ? "Share_modal" : ""}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {open ? <div className="login_parent">
                    <CloseIcon className="l_closeicon" onClick={handleClose} />
                    <label className="med_rpt_view_text">{testInfo.testName}</label>
                    {fileExtension == "jpg" ? <img src={file} style={{ width: "100%" }} /> :
                        <center><a href={pdf_file} target="_blank">{testInfo.testName + " Report.pdf"}</a></center>}
                </div> :
                    share ?
                    <>
                        <div className="share_title">Share Medical Reports</div>
                        <CloseIcon className="l_closeicon" onClick={handleClose} />
                        <div className="share_icons">
                            <FacebookShareButton
                                url="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
                                quote={"Medical Report"}
                            >
                                <FacebookIcon iconFillColor="white" round={true}></FacebookIcon>
                            </FacebookShareButton >
                            <WhatsappShareButton
                                url="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
                                title={"Medical Report"}
                            >
                                <WhatsappIcon iconFillColor="white" round={true}></WhatsappIcon>
                            </WhatsappShareButton>
                            <EmailShareButton
                                subject={"Medical Report"}
                                body="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
                                separator={""}
                            >
                                <EmailIcon iconFillColor="white" round={true}></EmailIcon>
                            </EmailShareButton>
                            <LinkedinShareButton
                                title={"Medical Report"}
                                url="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
                            >
                                <LinkedinIcon iconFillColor="white" round={true}></LinkedinIcon>
                            </LinkedinShareButton>
                            <TwitterShareButton
                                title={"Medical Report"}
                                url="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
                            >
                                <TwitterIcon iconFillColor="white" round={true}></TwitterIcon>
                            </TwitterShareButton>
                            <PinterestShareButton
                                media="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
                                url="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
                                description={"Medical Report"}>
                                <PinterestIcon iconFillColor="white" round={true}></PinterestIcon>
                            </PinterestShareButton>
                        </div></> : ""}
            </Dialog>}
            <pre className="status">{status}</pre>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    getLabResultMemberList: state.ReportReducer.getLabResultMemberList || [],
    getParticularMemLabResult: state.ReportReducer.getParticularMemLabResult || [],
})
export default connect(mapStatetoProps)(Reports);