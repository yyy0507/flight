import React,{Component} from "react";

export default class Header extends Component{
	render(){
		return(
			<div>	
				<div className="header-wrapper">
					<i className="icon-arrow_left"></i>
					<div className="loacation">
						<p>北京</p>
						<div className="arrow"></div>
						<p>上海</p>
					</div>
					<i className="icon-search"></i>
				</div>


				<div className="date-wrapper">
					<ul>
						<li className="date-item">
							<div>02-05</div>
							<div>今天</div>
							<div><i className="icon-add_circle"></i>363</div>
						</li>
						<li className="date-item">
							<div>02-05</div>
							<div>今天</div>
							<div><i className="icon-add_circle"></i>363</div>
						</li>
						<li className="date-item">
							<div>02-05</div>
							<div>今天</div>
							<div><i className="icon-add_circle"></i>363</div>
						</li>
						<li className="date-item">
							<div>02-05</div>
							<div>今天</div>
							<div><i className="icon-add_circle"></i>363</div>
						</li>
						<li className="date-item">
							<div>02-05</div>
							<div>今天</div>
							<div><i className="icon-add_circle"></i>363</div>
						</li>
						<li className="date-item calendar">
							<div className="calendar-icon"><i className="icon-table2"></i></div>
							<div className="more-date">更多日期</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}