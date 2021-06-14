import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Layout, Modal } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './OrderDetails-Packed.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CustomizedSteppers from '../StepperStatus/Status'
// import './orderdetails.scss';
const { Header } = Layout

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Dolo 650', 6, 25),
  createData('Naproxen', 10, 25),
  createData('Tylenol', 20, 30),
  createData('Paracetamol', 6, 15),

];

export default function OrderPacking() {
  const classes = useStyles();

  const [TrackOpen, setTrackOpen] = React.useState(false)
  const TrackClick = () => {
    setTrackOpen(opened => !opened)
  }
  return (
    <div className="order_de">
      <div style={{ fontSize: "20px", color: "#333", fontWeight: "bold", marginBottom: "25px" }}>Pharmacy - Order Details</div>
      <div>
        <Layout style={{ marginBottom: "18px" }}>
          <Header style={{ fontSize: "18px" }} className="h_styles">
            <div><label>Order ID</label><label style={{ color: "#939393", marginLeft: "12px" }}>PH28454</label></div>
            <div>Dr.Abdullah</div>
            <div>21 Jan 2021</div>
          </Header>
        </Layout>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "30%" }}>Medicine</TableCell>
              <TableCell align="right" style={{ width: "24%" }}>Qty</TableCell>
              <TableCell align="right" style={{ width: "41%" }}>Amount (KWD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="t_amt_parent"><div className="t_amt_child"><div className="t_amt"><label style={{ color: "#333", fontSize: "18px", fontWeight: "bold" }}>Total Amount :</label><label style={{ color: "#939393", fontSize: "18px", fontWeight: "bold", paddingLeft: "7px" }}>80 KWD</label></div></div></div>

      {/* delivery status view */}
      <div style={{ margin: "10px 0px 10px 5px", fontWeight: "bold" }}><label className="o_status">Status :</label><label className="status_d">Packed</label></div>
      <div style={{ display: "flex", justifyContent: "space-between" }} className="sts_main_div">
        <div className="sts_home_div">
          {/* <div><img src={HomeIcon}/> <div><label style={{color:"#333",fontSize:"15px"}}>Delivery to home</label><label>shamiya</label></div></div> */}
          <div style={{ marginLeft: "10px" }}><HomeIcon className="home_icon" /></div>
          <div style={{ marginLeft: "15px" }}><label style={{ fontSize: "16px", fontWeight: "bold" }}>Delivery to home</label><div>Shamiya</div></div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "15px", position: "relative" }}><Button className="confirm">Track Order</Button>
        <div className="tra_div">
          {TrackOpen === false ?
            <KeyboardArrowDownIcon className="down_arr" onClick={TrackClick} /> :
            <KeyboardArrowUpIcon className="down_arr" onClick={TrackClick} />}
        </div>
        {TrackOpen === true ? <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "17px" }}>
          <div style={{ width: "50%", boxShadow: " 0px 3px 10px #00000029", borderRadius: "15px" }} className="pha_track_div">
            <div style={{ width: "100%" }}>
              <CustomizedSteppers />
            </div>
          </div>
        </div> : null}
      </div>

    </div>
  );

}
