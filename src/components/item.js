import React,{Component} from "react";

export default class Item extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const item = this.props.item;
		return(
			<li>
				<div className="item-left">
					<div className="takeoff">
						<p className="time">{item.takeoffTime}</p>
						<p className="location">{item.takeoffLocation}</p>
					</div>
					<div className="item-arrow"></div>
					<div className="landing">
						<p className="time">{item.landingTime}</p>
						<p className="location">{item.landingLocation}</p>
					</div>

				</div>
				<div className="airline">{item.airline}</div>
				<div className="item-right ">
					<p className="price-wrap">
						<i className="icon-add_circle"></i>
						<span>{item.price}</span>
					</p>
					<p className="discount">经济舱{item.discount}折</p>
					<div className="card"><a>{item.card}</a></div>
				</div>
			</li>
		)
	}
}