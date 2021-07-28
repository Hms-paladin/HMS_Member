import React, { useState } from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import { Tag } from 'antd';
import ValidationLibrary from '../../../helpers/validationfunction';
import Calendar from '../NurseHistory/RangeCalendar'
import './DesignDuties.scss'
export default function DesignDuties(props) {
    const [Duties, setDuties] = useState([])
    const [designDuties, setDesignDuties] = useState({
        startdate: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        enddate: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        starttime: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        endtime: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
    })
    const [workList, setWorkList] = useState([])

    const changebtnDuties = (data, key) => {

        if (data && key === "Duties") {
            setDuties(data)
        }
    }

    console.log(Duties, "ghh")


    function changeDuties(data, key) {

        var errorcheck = ValidationLibrary.checkValidation(
            data,
            designDuties[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: designDuties[key].validation,
        };


        if (data && key === "startdate") {

            // var date = new Date();
            // data.setDate(data.getDate() - 30); 

            // // if (!isNaN(5) && invoiceDate.length) {
            //     let invoiceDate = data.split("-");
            //     invoiceDate = new Date(data[0], data[1] - 1, data[2]);
            //     invoiceDate.setDate(invoiceDate.getDate() + 31);
            //     // dueDateElement.valueAsDate = null;
            //     // dueDateElement.valueAsDate = invoiceDate;
            // console.log( data.setDate(data.getDate() + 30), "myNewDate");
            // }
        }

        setDesignDuties((prevState) => ({
            ...prevState,
            [key]: dynObj,
        }));
    }

    console.log(designDuties, "designDuties")

    const addOptions = () => {
        setWorkList([...workList, Duties])
        setDuties("")
    }

    console.log(workList, "Duties")
    return (
        <div className="nur_duties">
            <div className="nur_duties_div"><div style={{ width: "100%" }}>
                <Labelbox type="text" placeholder="Design Duties"
                    changeData={(data) => changebtnDuties(data, "Duties")}
                    value={Duties}
                />
            </div>
                <AddBoxIcon className="duty_addbox" onClick={addOptions} />
            </div>
            {workList.map((val) => {
                return (
                    <Tag closable className="close_tag">{val}</Tag>
                )
            })}
            <div className="date_pic_div">
                <div className="date_pic_childdiv">
                    <Labelbox type="datepicker" labelname="Start Date"
                        changeData={(data) => changeDuties(data, "startdate")}
                        value={designDuties.startdate.value} />
                </div>
                <div className="date_pic_childdiv"><Labelbox type="datepicker" labelname="End Date"
                    changeData={(data) => changeDuties(data, "enddate")}
                    value={designDuties.enddate.value} /></div>
            </div>
            <div className="date_pic_div"><div className="date_pic_childdiv">
                <Labelbox type="timepicker" labelname="Start Time"
                    changeData={(data) => changeDuties(data, "starttime")}
                    value={designDuties.starttime.value} />
            </div>
                <div className="date_pic_childdiv"><Labelbox type="timepicker" labelname="End Time"
                    changeData={(data) => changeDuties(data, "endtime")}
                    value={designDuties.endtime.value} />
                </div>
            </div>
            <Calendar />
            <div className="excl_parent_div">
                <div className="excl_dot"></div><label style={{ color: "#504D5D", fontWeight: "600" }}>Excluded Days</label>
            </div>
            <div className="proceed_div"><Button className="proceed" onClick={() => props.ProceedClick(designDuties,workList)}>Proceed</Button></div></div>
    )
}