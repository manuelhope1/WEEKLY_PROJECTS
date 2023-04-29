import React, { Component } from "react";

export default class Order extends Component {
    constructor(props) {
        super (props);
        this.state = {
            order: [
              {
                toppings: "",
                size: "",
                drink: "",
                extra: "",
                delivery: "",
              },
             
            ],
            toppings: "",
            size: "",
            drink: "",
            extra: "",
            delivery: "",
          };
    }
    inputChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
      };

    inputSubmit = (e) => {
        e.preventDefault();
        const newInfo = {
          toppings: "Toppings:" + " " + this.state.toppings,
          size: "Sizs:" + " " + this.state.size,
          drink: "Drink:" + " " + this.state.drink,
          extra: "Extra:" + " " + this.state.extra,
          delivery: "Delivery:" + " " + this.state.delivery,
        };
        this.setState({
          order: [...this.state.order, newInfo],
        });
        console.log(newInfo)
      };
      
  render() {
    return (
      <div className="box">
        <div className="resbox">
          <div className="rinfo">
            <p>PIZZAMANIA</p>
          </div>
          <div className="scoreb">
            <form>
              <div>
                <label>Toppings</label>
                <select className="sel1" onChange={this.inputChange} defaultValue="none" name="toppings" >
                  <option value="none"  disabled>
                    Select an Option
                  </option>
                  <option value="Chicken Tuna">Chicken Tuna</option>
                  <option value="Bacon Topping">Bacon Topping</option>
                  <option value="BBQ Topping">BBQ Topping</option>
                </select>
              </div>
              <div>
                <label>Size</label>
                <select className="sel2" onChange={this.inputChange} defaultValue="none" name="size" >
                  <option value="none" name="size"  disabled>
                    Select an Option
                  </option>
                  <option value="Jumbo">Jumbo</option>
                  <option value="Large">Large</option>
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                </select>
              </div>
              <div>
                <label>Drink</label>
                <select className="sel3" onChange={this.inputChange} defaultValue="none" name="drink">
                  <option value="none" name="drink"  disabled>
                    Select an Option
                  </option>
                  <option value="Apple Juice">Apple Juice</option>
                  <option value="Malt">Malt</option>
                  <option value="Fanta">Fanta</option>
                  <option value="Coke">Coke</option>
                  <option value="None">None</option>
                </select>
              </div>
              <div>
                <label>Extra</label>
                <select className="sel4" onChange={this.inputChange} defaultValue="none1" name="extra">
                  <option value="none1" name="extra"  disabled>
                    Select an Option
                  </option>
                  <option value="Chesse">Chesse</option>
                  <option value="Tomatoes">Tomatoes</option>
                  <option value="Onions">Onions</option>
                  <option value="None">None</option>
                </select>
              </div>
              <div>
                <label>Delivery</label>
                <select className="sel5"onChange={this.inputChange} defaultValue="none" name="delivery"> 
                  <option value="none" name="delivery"  disabled>
                    Select an Option
                  </option>
                  <option value="Pick-Up">Pick-Up</option>
                  <option value="Home Delivery">Home Delivery</option>
                </select>
              </div>
            </form>
          </div>
          <div className="rend">
            <button className="but" onClick={this.inputSubmit}>Place Order</button>
            <p className="p2">Best Pizza In Town</p>
          </div>
        </div>
        <div className="sumbox">
          <p className="sum">Orders Placed</p>
          <div className="orderbox">
          {this.state.order.map((order, index) => {
              return (
                <div className="orderp" key={index}>
              <div>
                <p>{order.toppings}</p>
                <p>
                {order.size}
                </p>
                <p>
                {order.drink}
                </p>
                <p>
                {order.extra}
                </p>
                <p>
                {order.delivery}
                </p>
              </div>
              
            </div>
              );
            })}
            
          </div>
        </div>
      </div>
    );
  }
}
