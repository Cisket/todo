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



// import React from "react"

// export default class Remove extends React.Component {
// 	removeItem () {
// 		this.props.handleRemove(this.props.id)

// 	}

// 	render(){

// 		return (
// 		<button onClick ={this.removeItem.bind(this)}>X</button>
// 		)
// 	}
// }
