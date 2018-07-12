import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

// require('./css/main.css');
require("./css/index.scss");


ReactDOM.render(
	<div className="wrapper"> 
		<Header />
		<Main />
		<Footer />
	</div>, 
	document.getElementById('root')
);