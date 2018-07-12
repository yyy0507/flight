import React,{Component} from "react";
import Item from "./item.js";


export default class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			list: [{
				takeoffTime: "06:35",
				takeoffLocation: "首都T3",
				landingTime: "08:50",
				landingLocation: "虹桥T2",
				airline: "吉祥航H01252 空客321(中)",
				price: "521",
				discount: "3.9",
				card: "持续涨价中"
			},{
				takeoffTime: "07:00",
				takeoffLocation: "首都T2",
				landingTime: "09:15",
				landingLocation: "虹桥T2",
				airline: "东航MU5138 空客A330(宽)",
				price:"920",
				discount: "7.4",
				card: "持续涨价中"
			},{
				takeoffTime: "07:10",
				takeoffLocation: "首都T1",
				landingTime: "09:20",
				landingLocation: "浦东T2",
				airline: "海航HU7611 波音787(大)",
				price:"590",
				discount: "4.8",
				card: "持续涨价中"
			},{
				takeoffTime: "07:25",
				takeoffLocation: "首都T1",
				landingTime: "09:30",
				landingLocation: "虹桥T2",
				airline: "海航HU7607 空客330-300(宽)",
				price:"560",
				discount: "4.5"
			},{
				takeoffTime: "07:30",
				takeoffLocation: "首都T3",
				landingTime: "09:35",
				landingLocation: "虹桥T2",
				airline: "深航ZH1831 波音777(大)",
				share: "共享",
				price:"1070",
				discount: "8.6",
				card: "持续涨价中"
			},{
				takeoffTime: "07:35",
				takeoffLocation: "首都T2",
				landingTime: "10:10",
				landingLocation: "浦东T1",
				airline: "东航MU5183 空客321(中)",
				price:"790",
				discount: "6.4"
			},{
				takeoffTime: "07:10",
				takeoffLocation: "首都T1",
				landingTime: "09:20",
				landingLocation: "浦东T2",
				airline: "海航HU7611 波音787(大)",
				price:"590",
				discount: "4.8",
				card: "持续涨价中"
			},{
				takeoffTime: "07:10",
				takeoffLocation: "首都T1",
				landingTime: "09:20",
				landingLocation: "浦东T2",
				airline: "海航HU7611 波音787(大)",
				price:"590",
				discount: "4.8",
				card: "持续涨价中"
			}]
		}
	}
	render(){
		return(
			<div className="mainlist">
				<ul>
					{this.state.list.map((item,index) => 
						<Item 
							item={item}
							key={index}
						/>)}
				</ul>
			</div>
		)
	}
}