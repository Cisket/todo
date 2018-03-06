
// import React from 'react';
// import App from './app'

// export default class App extends React.Component {
//   constructor(){
//     super()
//     this.state = { text:'', shown:'' }
//   }
//   handleChange(e){
//       this.setState({[e.target.name]:e.target.value})
//   }
//   handleShow () {
//     this.setState({shown:this.state.text},()=>{
//       this.setState({text:''})
//     })
//   }
//   render() {
//     return (
//       <div>
//           <input 
//               onChange = {this.handleChange.bind(this)}
//               name = "text" value = {this.state.text}/>
//               <h1>{this.state.shown}</h1>
//               <button onClick={this.handleShow.bind(this)}>show text</button>
//       </div>
//     );
//   }
// }