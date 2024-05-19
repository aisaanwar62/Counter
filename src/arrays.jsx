//14 march 2024 work in class
// import { Component } from "react";
// class ArrayTag extends Component {
//   state = {
//     mytags: [
//       { id: 1, Name: "Ayesha", city: "RWP", country: "Pakistan" },
//       { id: 2, Name: "Iqra", city: "Lahore", country: "Pakistan" },
//       { id: 3, Name: "Zainab", city: "Karachi", country: "Pakistan" },
//       { id: 4, Name: "Zahra", city: "RWP", country: "Pakistan" },
//     ],
//   };
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.mytags.map((element) => {
//             return (
//               <li key={element.id}>
//                 Id No. {element.id}. My Name is {element.Name}. I live in city{" "}
//                 {element.city}. My country is {element.country}.
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default ArrayTag;

//home task 15/march/24
import a1 from "./img/a1.png";

import { Component } from "react";
class ArrayTag extends Component {
  state = {
    employee: [
      {
        id: 1,
        name: "Ayesha",
        address: "str#1,hno. 321,RWP.",
        payroll: 2000,
        company: {
          companyname: "Buraq institute",
          companyaddress: "RWP",
        },
      },
      {
        id: 2,
        name: "sara",
        address: "str#1,hno. 321,RWP.",
        payroll: 2000,
        company: {
          companyname: "Buraq institute",
          companyaddress: "RWP",
        },
      },
      {
        id: 3,
        name: "Iqra",
        address: "str#1,hno. 321,RWP.",
        payroll: 2000,
        company: {
          companyname: "Buraq institute",
          companyaddress: "RWP",
        },
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.employee.map((element) => (
            <div key={element.id} className="col-md-4 border m-2">
              <div className=" border border-dark ">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={a1}
                      className="rounded-circle img-fluid"
                      alt="Pink and Green"
                    />
                  </div>
                  <div className="col-md-8">
                    <h4>{element.name}</h4> <h4>{element.src}</h4>
                    <h5>{element.address}</h5>
                    <h5>{element.payroll}</h5>
                  </div>
                </div>
                <hr></hr>
                <div className="col-md-12">
                  <h5>{element.company.companyname}</h5>
                  <h5>{element.company.companyaddress}</h5>
                </div>
              </div>
              <p>my company card</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ArrayTag;
