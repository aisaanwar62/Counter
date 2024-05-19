//class task 18/march/24
// import { Component } from "react";
// class User extends Component {
//   state = {
//     userName: [],
//   };
//   constructor() {
//     super();
//     console.log("constructor");
//   }
//   async componentDidMount() {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users");
//     // setTimeout(() => {
//     //   this.setState({ userName: "Ayesha" });
//     // }, 2000);

//     const result = await data.json();
//     console.log(result);
//     this.setState({ userName: result });
//   }
//   componentDidUpdate() {
//     console.log("componentdidupdate");
//   }
//   render() {
//     console.log("render");
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         {this.state.userName.map((element) => (
//           <p>{element.name}</p>
//         ))}
//       </div>
//     );
//   }
// }
// export default User;
//home task 18/march/24
import a1 from "./img/a1.png";
import { Component } from "react";
class User extends Component {
  state = {
    userName: [],
  };
  constructor() {
    super();
    console.log("constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    // setTimeout(() => {
    //   this.setState({ userName: "Ayesha" });
    // }, 2000);

    const result = await data.json();
    console.log(result);
    this.setState({ userName: result });
  }
  componentDidUpdate() {
    console.log("componentdidupdate");
  }
  render() {
    console.log("render");
    return (
      // idhar col md ke jaga tailwind ke built in classes use krni ha jus
      // grid ke or wo overall set kr dy ga
      <div className="container border">
        <div className="row">
          {this.state.userName.map((element) => (
            <div key={element.id} className="col-md-5 border m-2">
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
                    <h4>Name: {element.name}</h4>
                    <h5>Username: {element.username}</h5>
                    <p>Email: {element.email}</p>
                  </div>
                </div>
                <hr></hr>
                {/* //border lgaty hn div k tag mn hr nhi use krty */}
                <div className="col-md-12">
                  <h5>Address: {element.address.street}</h5>
                  <p>suite: {element.address.suite}</p>
                  <p>city: {element.address.city}</p>
                  <p>zipcode: {element.address.zipcode}</p>
                  <p>lat: {element.address.geo.lat}</p>
                  <p>lng:{element.address.geo.lng}</p>
                  <h5>Company: {element.company.name}</h5>
                  <p>catch phrase: {element.company.catchPhrase}</p>
                  <p>bs: {element.company.bs}</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p>contact: {element.phone}</p>
                <p>website: {element.website}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default User;
