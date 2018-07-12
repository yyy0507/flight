import React,{Component} from "react";

export default class Footer extends Component{
	render(){
		return(
			<div  className="footer-wraper">
				<ul>
					<li><i className="icon-hour-glass"></i></li>
					<li><i className="icon-arrow-down2"></i></li>
					<li><i className="icon-clock"></i></li>
					<li><i className="icon-add_circle"></i></li>
				</ul>
				<ul>
					<li>筛选</li>
					<li>推荐排序</li>
					<li>时间</li>
					<li>价格</li>
				</ul>
			</div>
		)
	}
}