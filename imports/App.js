    import React from "react"
    import Child from "./Child"

    
    export default class App extends React.Component{

     constructor(){
        super()
        this.state = {
            arr: []
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.myFunction = this.myFunction.bind(this)
        this.hover = this.hover.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
     }

    handleSubmit = (e) =>{
        
        e.preventDefault()
        var text = this.refs.input.value.trim()
        if (text.length > 0) {
        var arr2 = this.state.arr
        arr2.push({text:text, linetrought:false})
        this.setState({arr:arr2})
        this.refs.input.value = ""
    }
}

    handleRemove = (index) =>{

        var arr = this.state.arr
        arr.splice(index, 1)
        this.setState({arr})
    }


myFunction(index){
    var arr = this.state.arr
    if(arr[index].linetrought == false){
        arr[index].linetrought = true
    }else{
        arr[index].linetrought = false
    }
      this.setState({arr},()=>{
            console.log(this.state)
        })
}

hover(index){
    
     var arr = this.state.arr
        arr[index].mousing = true

      this.setState({arr},()=>{
            console.log(this.state)
        })
}


handleLeave(index){
     var arr = this.state.arr
        arr[index].mousing = false

      this.setState({arr},()=>{
            console.log(this.state)
        })
}



    handleUpdate        = (newTodo, index) =>{      
        
        var arr         = this.state.arr
        arr[index].text = newTodo
        if (newTodo.length > 0) {
            this.setState({arr:arr},()=>{
            })
        }
    }


    handleClick = (index) =>{
        
    // var arr = this.state.arr
    // arr[index].linetrought = true
    //     this.setState({arr},()=>{
    //         console.log(this.state)
    //     })
    
  }



    


    render(){
      console.log(this.state.arr)
      return (
        <div>
        <h1 className="wrapper">Welcome to Francesc's TODO app!
        </h1>

            <form className="box" onSubmit = {this.handleSubmit.bind(this)}>

                <input 
                    required
                    className="input" ref = "input" 
                />
                <button className="button">ADD</button>
             
            </form> 
            


            <Child 
            myFunction={this.myFunction}
            todos = {this.state.arr}
            handleRemove={this.handleRemove}
            handleUpdate={this.handleUpdate}
            handleClick={this.handleClick}
            hover={this.hover}
            handleLeave={this.handleLeave}

            />
        </div> 
        )
        }
    }





// import React from "react"
// import Child from "./Child"
// import TodoList from "./TodoList"
// import Remove from "./Delete"
// import Update from "./Update"
// export default class App extends React.Component{

//  constructor(){
//  	super()
//  	this.state = {
//  		arr: []
//  	}
//     this.handleRemove = this.handleRemove.bind(this)
//  }

// handleSubmit = (e) => {
// 	e.preventDefault()
// 	var text = this.refs.input.value.trim()
// 	var arr2 = this.state.arr
// 	arr2.push({text:text, linetrought:false})
// 	this.setState({arr:arr2})
// 	this.refs.input.value = ""
// }


// handleRemove = (index) =>{
//     var arr = this.state.arr
//     arr.splice(index, 1)
//     this.setState({arr})
// }


// handleUpdate = (index) =>{

//     var arr = this.state.arr
//     arr:[] = this.updateItem.bind(this)
//     this.setState({arr})
// }


// render(){
//     console.log("state.text",this.state.text)
//   return (
//     <div>
//         <form onSubmit = {this.handleSubmit.bind(this)}>
//             <input ref = "input" 
//             />
//             <button>Add your TODO</button>
//         </form> 
//         <Child 
//         todos = {this.state.arr}
//         handleRemove={this.handleRemove}
//         handleUpdate={this.handleUpdate}
//         />
//     </div> 
//     )
//     }
// }



