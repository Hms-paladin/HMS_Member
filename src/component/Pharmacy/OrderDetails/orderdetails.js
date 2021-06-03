import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Layout, Modal } from 'antd';
import DeleteRecord from './RecordDelete'
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import { NavLink, useParams } from "react-router-dom";
import { GetParticularPrescriptionDetails } from '../../../actions/prescriptionhistoryaction';
import { useDispatch, connect } from "react-redux";
import './orderdetails.scss'
import moment from 'moment';

const { Header } = Layout

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



function OrderTable(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modalOpen, setmodalOpen] = React.useState(false)
  const [editOpen, seteditOpen] = React.useState(true)
  const [particularDetails, setParticularDetails] = useState({})
  const [medicineDetails, setMedicineDetails] = useState([])
  const [rowData, setRowData] = useState([])
  let { rowId } = useParams()

  const ModalOpenClick = () => {
    setmodalOpen(true)
  }
  const ModalCloseClick = () => {
    setmodalOpen(false)
  }
  const EditClick = () => {
    seteditOpen(false)
  }
  const EditClose = () => {
    seteditOpen(true)
  }
  // const rows = [
  //   createData('Dolo 650', 6, <span>25<DeleteIcon onClick={ModalOpenClick} style={{ fill: "#D11A2A", cursor: "pointer", position: "relative" }} /></span>),
  //   createData('Naproxen', 10, <span>25<DeleteIcon onClick={ModalOpenClick} style={{ fill: "#D11A2A", cursor: "pointer", position: "relative" }} /></span>),
  //   createData('Tylenol', 20, <span>30<DeleteIcon onClick={ModalOpenClick} style={{ fill: "#D11A2A", cursor: "pointer", position: "relative" }} /></span>),
  //   createData('Paracetamol', 6, <span>15<DeleteIcon onClick={ModalOpenClick} style={{ fill: "#D11A2A", cursor: "pointer", position: "relative" }} /></span>),
  //   createData('Paracetamol', 6, <span>15<DeleteIcon onClick={ModalOpenClick} style={{ fill: "#D11A2A", cursor: "pointer", position: "relative" }} /></span>),
  //   createData('Paracetamol', 6, <span>15<DeleteIcon onClick={ModalOpenClick} style={{ fill: "#D11A2A", cursor: "pointer", position: "relative" }} /></span>),

  // ];

  useEffect(() => {
    dispatch(GetParticularPrescriptionDetails(rowId))
  }, [])

  useEffect(() => {

    setParticularDetails(props.GetParticularPrescriptionDetails[0])
    setMedicineDetails(props.GetParticularPrescriptionDetails[0]?.medicineDetails)

  }, [props.GetParticularPrescriptionDetails])

  // console.log(particularDetails, "particularDetails")

  useEffect(() => {
    let rowDataList = []
    medicineDetails && medicineDetails.map((data, index) => {
      console.log(data.medicineName, "GetParticularPrescriptionDetails")
      rowDataList.push({
        name: data.medicineName,
        calories: data.quantity,
        fat: <>
          {data.amount}
          <DeleteIcon onClick={ModalOpenClick} style={{ fill: "#D11A2A", cursor: "pointer", position: "relative" }} />
        </>

      })
    })

    setRowData(rowDataList)
  }, [props.GetParticularPrescriptionDetails])



  return (
    <div className="order_de">
      <div style={{ fontSize: "20px", color: "#333", fontWeight: "bold", marginBottom: "25px" }}>Pharmacy - Order Details</div>
      <div>
        <Layout style={{ marginBottom: "18px" }}>
          <Header style={{ fontSize: "18px" }} className="h_styles">
            <div><label>Order ID</label><label style={{ color: "#939393", marginLeft: "12px" }}>{particularDetails.orderNumber}</label></div>
            <div>Dr.{particularDetails.doctorName}</div>
            <div>{moment(particularDetails.prescript_date).format('DD-MMM-YYYY').split(',')}</div>
          </Header>
        </Layout>
      </div>
      <TableContainer component={Paper} style={{ paddingLeft: "25px", boxShadow: "0px 1px 7px #00000029", borderRadius: "10px" }}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "30%" }}>Medicine</TableCell>
              <TableCell align="right" style={{ width: "24%" }}>Qty</TableCell>
              <TableCell align="right" style={{ width: "41%" }}>Amount (KWD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="t_amt_parent"><div className="t_amt_child"><div className="t_amt"><label style={{ color: "#333", fontSize: "18px", fontWeight: "bold" }}>Total Amount :</label><label style={{ color: "#939393", fontSize: "18px", fontWeight: "bold", paddingLeft: "7px" }}>{particularDetails.total_amount + " KWD"}</label></div></div></div>
      <Modal
        title={false}
        visible={modalOpen}
        footer={false}
        size={"lg"}
        {...props}
        centered
        className="delete_modal"
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={ModalCloseClick}
      >
        <DeleteRecord Close={ModalCloseClick} />
      </Modal>
      {/* delivery status view */}
      <div style={{ margin: "10px 0px 10px 5px", fontWeight: "bold" }}>
        <label className="o_status">Status :</label>
        <label className="status_d">{""}
        </label></div>
      <div className="sts_details_parent">
        {/* <div><img src={HomeIcon}/> <div><label style={{color:"#333",fontSize:"15px"}}>Delivery to home</label><label>shamiya</label></div></div> */}
        <Grid container>
          <Grid item xs={10} md={10} style={{ display: "flex" }}>
            <div style={{ margin: "5px 10px 0px 10px" }}><HomeIcon className="home_icon" /></div>

            <div style={{ width: "100%" }}>
              {editOpen === true ? <div><label style={{ fontSize: "16px", fontWeight: "bold" }}>Delivery  home</label><div>{particularDetails.patientName}</div></div>

                : <div>
                  {/* <Labelbox type="textarea" errmsg={false} /> */}
                  {particularDetails.deliveryAddress}
                </div>}

            </div>
          </Grid>
          <Grid item xs={2} md={2} style={{ textAlign: "right" }}>

            {editOpen === true ?
              <label style={{ color: "orange", fontSize: "16px", fontWeight: "bold" }} onClick={EditClick}>Edit</label> :
              <div style={{ fontWeight: "bold", }}>

                <label style={{ color: "blue", fontSize: "16px", paddingRight: "10px", cursor: "pointer" }}>Save</label>
                <label onClick={EditClose} style={{ color: "#ff0000a6", cursor: "pointer" }}>Cancel</label></div>}
          </Grid>
        </Grid>
      </div>
      {/* button */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Button className="cancel_odr">Cancel Order</Button>
        <NavLink to="paymentmethod"><Button className="confirm">Confirm and pay</Button></NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>
(
  console.log(state.prescriptionhistoryReducer.GetPrescriptionHistoryDetails, "states"),
  {
    GetParticularPrescriptionDetails: state.prescriptionhistoryReducer.GetParticularPrescriptionDetails,

  }
);
export default connect(mapStateToProps)(OrderTable);