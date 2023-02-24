// import React from 'react';

//  class NameForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {value:''}

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event){
//         this.setState({value:event.target.value})
//     }

//     handleSubmit(event){
//         alert('Отправленное имя:' + this.state.value);
//         event.preventDefault();
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     ИМЯ:
//                     <input type='text' value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type='submit' value = 'Отправить'/>
//             </form>
//         )
//     }
// }

// export default NameForm;

// // class EssayForm extends React.Component{
// //     constructor(props){
// //         super (props);
// //         this.state={value:'Пожалуйста,напишите эссе о своем любимом занятий' }

// //         this.handleChange = this.handleChange.bind(this);
// //         this.handleSubmit = this.handleSubmit.bind(this);
// //     }
// //     handleChange(event){
// //         this.setState({value:event.target.value})
// //     }
// //     handleSubmit(event){
// //         alert('Отправленное эссе:' + this.state.value);
// //         event.preventDefault();
// // }
// // render(){
// //     return(
// //         <form onSubmit={this.handleSubmit}>
// //             <label>
// //                 ЭССЕ:
// //                 <textarea>
// //                  value={this.state.value}
// //                   onChange={this.handleChange}
// //                   </textarea>
// //             </label>
// //             <input type='submit' value = 'Submit'/>
// //         </form>
// //     )
// // }
// // }
// // export default EssayForm



// 4 ДОМАШНЕЕ ЗАДАНИЕ !

import { useState } from "react";
 
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
