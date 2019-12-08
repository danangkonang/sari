// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// let data = [
//   ['danang',2000],
//   ['konang',3000],
//   ['rifai',3000],
//   ['danang',2000],
//   ['konang',3000],
//   ['rifai',3000],
//   ['danang',2000],
//   ['konang',3000],
//   ['rifai',3000],
//   ['danang',2000],
//   ['konang',3000],
//   ['rifai',3000]
//   ];
// function App() {
//   return (
//     <div className="container mt-5">
//         {/* <table id="table_id" className="table table-striped table-bordered dt-responsive nowrap" style={{width:'100%'}}>
//             <thead>
//                 <tr>
//                     <th>No</th>
//                     <th>Nama</th>
//                     <th>Sumbangan</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                   data.map((item,idx)=>(
//                     <tr  key={idx}>
//                         <td>{idx+1}</td>
//                         <td>{item[0]}</td>
//                         <td>{item[1]}</td>
//                     </tr>
//                   ))
//                 }
//             </tbody>
//         </table> */}
//     </div>
//   );
// }

// export default App;




import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tbl from './componen/Table'
class App extends Component {
render() {
    return (
        <div className="container mt-5">
          <Tbl data={this.dataSet}/>
        </div>
    );
}

dataSet = [
  [1,'danang',5000],
  [2,'konang',3000],
  [3,'sari',20000]
  ];
}

export default App;
