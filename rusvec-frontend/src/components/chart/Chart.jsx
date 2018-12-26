
import React, { Component } from 'react';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<section className="section chart">
				<div className="section-header">Надёжность</div>
				<div className="chart-container">
					<img src="assets/images/reliably.png" alt="" />
					<div className="details">
						<ul className="details-list">
							<li className="details-item"><span className="details-item-value">1</span> клик</li>
							<li className="details-item"><span className="details-item-value">20</span> рабочих дней</li>
							<li className="details-item"><span className="details-item-value">15%</span> экономии инвестиций</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Chart;
