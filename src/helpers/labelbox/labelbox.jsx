import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import dateFormat from 'dateformat';
import moment from 'moment';
import Favorite from '@material-ui/icons/Favorite'
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { DatePicker, Select, TimePicker } from 'antd';


export default class Labelbox extends Component {
	constructor(props) {
		super(props);
		console.log("valid date", props.value)
		this.state = { gender: 'M', open: false, value: null, selectedtime: props.value, selecteddate: props.value ? props.value : new Date() };
	}
	changeGender = (data) => {
		this.setState({ gender: data });
		this.props.changeGender && this.props.changeGender(data);
	}
	datepickerChange = (date) => {
		if (date == "Invalid Date") {
			this.props.invalidate && this.props.invalidate(date);
		} else {
			var datefmt = dateFormat(date, 'yyyy-mm-dd');
			this.props.changeData && this.props.changeData(datefmt);
		}

	}
	timepickerChange = (time) => {
		console.log("time", time);
		var timeformat = dateFormat(time, "hh:MM:ss");
		console.log("timeformat", timeformat)
		this.setState({ selectedtime: time });
		this.props.changeData && this.props.changeData(timeformat,time);
	};

	componentWillReceiveProps(props) {

		if (props.type == "datepicker") {
			if (isNaN(new Date(props.value).getTime())) {

			}
			else {
				var datefmt = dateFormat(props.value && props.value, 'yyyy-mm-dd');
				this.setState({ selecteddate: datefmt })
			}
		}
		if (props.gendervalue) {
			this.setState({ gender: props.gendervalue });
		}
	}
	onChange = (time) => {
		this.setState({ value: time });
		this.props.changeData && this.props.changeData(time)
	};
	handleSearch = value => {
		if (value) {
			fetch(value, data => this.setState({ data }));
		} else {
			this.setState({ data: [] });
		}
	};

	renderinput = (data) => {
		if (data.type == 'text') {
			return (
				<div className="formdiv">
					<label className="labeltxt">{data.labelname}</label>
					<div>
						<input className={`${data.error && "brdred"} brdrcls`} value={this.props.value} maxLength={this.props.maxlength} type="text" onChange={(e) => this.props.changeData && this.props.changeData(e.target.value)} placeholder={this.props.placeholder} disabled={this.props.disabled} />
						{
							<div className="Errormsg">
								<div>{data.error && data.errmsg}</div>
							</div>
						}
					</div>

				</div>

			)
		} else if (data.type == 'number') {
			return (
				<div className="formdiv">
					<label className="labeltxt">{data.labelname}</label>
					<div>
						<input className={`${data.error && "brdred"} brdrcls`} min="0" value={this.props.value} type="number" onChange={(e) => this.props.changeData && this.props.changeData(e.target.value)} placeholder={this.props.placeholder} onKeyDown={e => (e.key === "e" || e.key === "+" || e.key === "-") && e.preventDefault()} />
						{
							<div className="Errormsg">
								<div>{data.error && data.errmsg}</div>
							</div>
						}
					</div>

				</div>

			)
		} else if (data.type == 'textarea') {
			return (
				<div className="formdiv">
					<label className="labeltxt">{data.labelname}</label>
					<div>
						<textarea className={`${data.error && "brdred"} brdrcls`} rows="3" cols="50" value={this.props.value} onChange={(e) => this.props.changeData && this.props.changeData(e.target.value)} placeholder={this.props.placeholder}></textarea>
						{
							<div className="Errormsg">
								<div>{data.error && data.errmsg}</div>
							</div>
						}
					</div>

				</div>

			)
		} else if (data.type == 'radio') {
			// console.log(this.props.checked,"checked")
			return (
				<div className="formdiv">
					<label className="labeltxt">{data.labelname}</label>
					<div>
						<FormControlLabel control={<Radio className="radiobtncolor" icon={<RadioButtonUncheckedIcon fontSize="small" />}
							checkedIcon={<RadioButtonCheckedIcon fontSize="small" />} onClick={() => this.changeGender('M')} checked={this.props.checked == 'M'} fontSize="small" />} label="Amount" />
						<FormControlLabel value="female" control={<Radio className="radiobtncolor" icon={<RadioButtonUncheckedIcon fontSize="small" />}
							checkedIcon={<RadioButtonCheckedIcon fontSize="small" />} onClick={() => this.changeGender('F')} checked={this.props.checked == 'F'} fontSize="small" />} label="Percentage" />
					</div>

				</div>
			)
		} else if (data.type == 'datepicker') {
			function onChange(date, dateString) {
				console.log(date, dateString);

			}

			const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

			return (
				<div className="formdiv">
					<label className="labeltxt">{data.labelname}</label>
					<div >

						{/*<DatePicker value={moment(this.props.value)?moment(this.props.value):new Date()} open={this.state.open}  onFocus={()=>this.setState({open:true})} onChange={(date)=>this.datepickerChange(date)}  className="datepickerchnge" style={{width:'100%',}} format="YYYY-MM-DD"  />*/}
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								disableToolbar={true}
								autoOk={true}
								clearable={false}
								disableUnderline={true}
								disableFuture={this.props.disableFuture ? this.props.disableFuture : false}
								disablePast={this.props.disablePast ? this.props.disablePast : false}
								minDate={this.props.minDate ? this.props.minDate : null}
								variant="variant"
								format="dd MMM yyyy"
								margin="normal"
								id="date-picker-inline"
								placeholder={this.props.placeholder}
								value={this.state.selecteddate}
								onChange={(date) => this.datepickerChange(date)}
							/>
						</MuiPickersUtilsProvider>

						{/* {
							<div className="Errormsg">
								<div>{data.error && data.errmsg}</div>
							</div>
						} */}
					</div>

				</div>
			)
		} else if (data.type == 'timepicker') {
			function onChange(date, dateString) {
				console.log(date, dateString);

			}

			const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

			return (
				<div className="formdiv">
					<label className="labeltxt">{data.labelname}</label>
					<div >

						{/*<TimePicker value={this.props.value} onChange={(time)=>this.onChange(time)} />*/}
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardTimePicker
								margin="normal"
								id="time-picker"
								value={this.props.value}
								onChange={(time) => this.timepickerChange(time)}
								KeyboardButtonProps={{
									'aria-label': 'change time',
								}}
								keyboardIcon={<AccessTimeIcon />}
							/>
						</MuiPickersUtilsProvider>
						{
							<div className="Errormsg">
								<div>{data.error && data.errmsg}</div>
							</div>
						}
					</div>

				</div>
			)
		} else if (data.type == 'select') {
			function onChange(value) {
				console.log(`selected ${value}`);
			}
			const { Option } = Select;
			function onBlur() {
				console.log('blur');
			}

			function onFocus() {
				console.log('focus');
			}

			function onSearch(val) {
				console.log('search:', val);
			}

			console.log(data.value, "data.value");

			var optionValue = null

			data.dropdown && data.dropdown.map((value)=>{
				if(value.id === data.value){
					optionValue = value.value
				}
			})
			return (
				<div className="formdiv">
					<label className="labeltxt">{data.labelname}</label>

					<Select disabled={this.props.disabled && true} className={`${data.error && "brdred"} ${data.error && "brdnone"} selectbox`} showSearch value={data.value ? optionValue :this.props.optionValue} placeholder={this.props.placeholder} optionLabelProp="label"
						optionFilterProp="label" onChange={(value) => this.props.changeData && this.props.changeData(value)}>
						{data.dropdown && data.dropdown.length > 0 && data.dropdown.map((item, index) => {
							return (
								// <Option label={item[data.valuelabel]} value={item[data.valuebind]}>{item[data.valuelabel]}</Option>
								<Option value={item.id}>{item.value}</Option>
								// <Option  value={index} >{item}</Option>

							)
						})}


					</Select>{
							<div className="Errormsg">
								<div>{data.error && data.errmsg}</div>
							</div>
						}


				</div>
			)
		}
	}
	render() {

		const labelcss = require('./labelbox.css');
		return (
			<div>
				{this.renderinput(this.props)}
			</div>
		);
	}
}
