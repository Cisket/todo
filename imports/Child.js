import React from 'react'
import HandleRemove from './Delete'
// import Update from './Update'
import Slash from './slash'


export default class Child extends React.Component{

getData( e ){
	this.setState({input:e.target.value.trim()},()=>{
		console.log(this.state)
	})

}

handleClick(index, event){

	this.props.myFunction(index)

}
handleHover(index){

	this.props.hover(index)
	
}

handleUpdate(id){
	this.props.handleUpdate(this.state.input, id)
}


	render(){
		let done= {
			cursor:'pointer'
			
		}
		let style = {
			display :'inline-block'
		}
		let stripe = {
			background:'red'
		}
		
		return (
			<div  className='test'> {
				this.props.todos.map((todo, index)=>{
					if(index % 2 == 0){
						stripe ={
							background:' #cccccc',

						}
					}else{
						stripe={
							background:'#808080'
						}
					}
					if(todo.mousing){
						style={
							display:'inline-block'

						}
					}else{
						style={display:'none'}
					}
						if(todo.linetrought == true){
							
							done = {
								cursor:'pointer',
								textDecoration:'line-through',
								opacity: 0.2	

							}
						}else{
								console.log(false, todo.text)
								done ={
									cursor:'pointer',
									textDecoration:'none',
									wide: '300'

								}
						}		
					return <div 
					onChange ={this.getData.bind(this)} 
						className="banana"

								onMouseEnter ={this.handleHover.bind(this, index)}
								onMouseLeave ={() => this.props.handleLeave(index)}
								style={stripe}
								key ={index}>

								
								<span 

								onClick={this.handleClick.bind(this, index)}

								style={done} className="Banana"> {todo.text}</span>

						   		<span style={style}> 
							   		<HandleRemove
							   			handleRemove = {this.props.handleRemove}
							   			index={index}
							   			id={todo._id}
							   			>
							   		</HandleRemove>	
						   		</span>

						   		 <input 
						   		 name ='input'
						   		 style={style}
						   		 className="input2"
						   		 	
						   		 
						   		 	ref="newTodo"
									
						   		 />

						   		 <button 
						   		 onClick={this.handleUpdate.bind(this, todo._id)} 
						   		 	style={style}  className="reload">
						   		 
					           <i className="fa fa-pencil"></i>
						   		 </button>
						   		 

						   </div>
					})
			}
			</div>
		)
	} }


