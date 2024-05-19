//self practice of 13/march/24 home task from chatgpt
// import { Component } from "react";

// class Counter extends Component {
//   state = {
//     counter: 9,
//   };
//   increment = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   reset() {
//     this.setState({ counter: 9 });
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           count
//           <span className="badge bg-secondary">
//             {this.state.counter === 0 ? "Zero" : this.state.counter}
//           </span>
//         </h1>
//         <button className="btn btn-primary" onClick={this.increment}>
//           click me
//         </button>
//         &nbsp;
//         <button className="btn btn-danger" onClick={this.reset}>
//           Reset
//         </button>
//       </div>
//     );
//   }
// }
// export default Counter;

//self practice of 13/march home task from chatgpt
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // Retrieve the counter value from localStorage or default to 0
//     const counterValue = localStorage.getItem("counter") || 0;
//     this.state = {
//       counter: parseInt(counterValue, 10), // Parse the value as an integer
//     };
//   }

//   increment = () => {
//     this.setState(
//       (prevState) => {
//         // Increment the counter and update localStorage
//         const newCounter = prevState.counter + 1;
//         localStorage.setItem("counter", newCounter);
//         return { counter: newCounter };
//       }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           count
//           <span className="badge bg-secondary">
//             {this.state.counter === 0 ? "Zero" : this.state.counter}
//           </span>
//         </h1>
//         <button className="btn btn-primary" onClick={this.increment}>
//           click me
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

//14/march/24 class work
import { Component } from "react";

class Counter extends Component {
  state = {
    counter: 9,
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div className=" border border-dark mr-5 d-flex flex-column justify-content-center align-items-center vh-100 ">
        <h1>
          {this.state.counter === 0 ? (
            <h1 className=" bg-warning"> Zero </h1>
          ) : (
            this.state.counter
          )}
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" onClick={this.increment}>
            +
          </button>
          &nbsp;
          <button className="btn btn-primary" onClick={this.decrement}>
            -
          </button>
          &nbsp;
          <button className="btn btn-primary" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
