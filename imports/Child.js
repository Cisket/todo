import React from 'react'
import HandleRemove from './Delete'
import Update from './Update'
import Slash from './slash'

export default class Child extends React.Component{

getData(index){
	
	var newTodo = this.refs.newTodo.value.trim()
	this.props.handleUpdate(newTodo, index)
}

handleClick(index, event){

	this.props.myFunction(index)

}
handleHover(index){

	this.props.hover(index)
	
}
	render(){
		let done= {
			cursor:'pointer'
			
		}
		let style = {
			display :'none'
		}
		let inline = {
			display:'grid',
			gridTemplateColumns:'1fr 1fr 1fr',
			

		}
		
		return (
			<div  className='test'> {
				this.props.todos.map((todo, index)=>{
					if(todo.mousing){
						style={
							display:'block'

						}
					}else{
						style={display:'none'}
					}
						if(todo.linetrought == true){
							
							done = {
								cursor:'pointer',
								textDecoration:'line-through',
								opacity: 0.4	

							}
						}else{
								console.log(false, todo.text)
								done ={
									cursor:'pointer',
									textDecoration:'none'
								}
						}		
					return <div  

								onMouseEnter ={this.handleHover.bind(this, index)}
								onMouseLeave ={() => this.props.handleLeave(index)}
								style={inline}
								key ={index}>

								
								<span 

								onClick={this.handleClick.bind(this, index)}

								style={done}> {todo.text}</span>
							<span style={style}>
						   		<HandleRemove 
						   			handleRemove = {this.props.handleRemove}
						   			id={index}>
						   		</HandleRemove>	


						   		 <input
						   		 className="input2"
						   		 	
						   		 
						   		 	ref="newTodo"
									
						   		 />

						   		 <button
						   		 
						   		 onClick={this.getData.bind(this, index)}>

					           Update
						   		 </button>
						   		 
						   		 </span>
						   </div>
					})
			}
			</div>
		)
	} }



// import React from 'react'
// import Remove from './Delete'
// import Update from "./Update"
// export default class Child extends React.Component{


// 	render(){

// 		return (
// 			<div> {
// 				this.props.todos.map((todo, i)=>{
					
// 					return <div>
// 								<h1 key ={i}> {todo.text}</h1>
// 						   		<handleRemove 
// 						   		handleRemove = {this.props.handleRemove}
// 						   		id={i}></handleRemove>
// 						   		<handleUpdate 
// 						   		handleUpdate = {this.props.handleRemove}
// 						   		id={i}></handleUpdate> 
// 						   </div>
// 					})
// 			}
// 			</div>
// 		)
// 	} }


