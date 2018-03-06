import React from "react"

export default class Update extends React.Component {

	updateItem () {
		
		this.props.handleUpdate(this.props.id)
		
	}
}

	// 	render(){
	// 		return (
	// 		<div>
	// 		<button onClick ={this.updateItem.bind(this)}>
	// 		<i className="fa fa-sync">
	// 		</i>

	// 		</button>
	// 		<input 	
	// 			required
				
	//     	/> 
	//     	</div>
	// 		)
	// 	}
	// }



// import React from "react"

// export default class Update extends React.Component {
// 	updateItem () {
// 		this.props.handleUpdate(this.props.id)

// 	}

// 	render(){
		
// 		return (
// 		<button onClick ={this.updateItem.bind(this)}>U</button>
// 		)
// 	}
// }
