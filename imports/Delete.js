import React from "react"

export default class HandleRemove extends React.Component {
	removeItem () {

		this.props.handleRemove(this.props.id)

	}

	render(){
		
		return (
		<button className="trash" onClick ={this.removeItem.bind(this)}> 
		<i className="fa fa-trash">
		
			
		</i>
		</button>
		)
	}
}

