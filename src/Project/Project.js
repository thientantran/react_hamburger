import React, { Component } from "react";
import { connect } from "react-redux"; //library for connecting with redux
import "./Project.css";
class Project extends Component {
  renderBreadMid = () => {
    let { burger } = this.props; // props này đã được lấy từ thành connect redux
    // burger = { salad: 1, cheese: 2, beef: 1 };

    // return Object.entries(burger).map(([propsBurger, value], index) => {
    //   //object. entries trả về 1 mảng (chứa các mảng trong mảng)
    //   // Map sẽ phân tích từng mảng trong mảng
    //   //do đó dùng destruction để bóc tành phần tử trong mảng
    //   let breadMid = [];
    //   console.log(value);
    //   for (let i = 0; i < value; i++) {
    //     breadMid.push(<div key={i} className={propsBurger}></div>);
    //   }
    //   return breadMid; // return 1 array
    // }); // 3 arrays in 1 array

    let content = [];
    for (let propBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propBurger]; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>);
      }
      content.push(breadMid);
    }
    return content;
  };
  renderMenu = () => {
    let { menu, burger } = this.props; // get value from redux
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index} className="text-center">
          <td>{propsMenu}</td>

          <td>
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, 1);
              }}
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-success">
          Hamburger Project
        </h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center">Chon thuc an</h3>
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th>Thuc an</th>
                  <th></th>
                  <th>Don Gia</th>
                  <th>Thanh Tien</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tong Tien</td>
                  <td>{this.props.total()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      //create action
      const action = {
        type: "ADD_BREADMID",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
