import React from "react";
import { withRouter } from "react-router";

class EditAccount extends React.Component {
  state = {
    account: {
      id: "",
      name: "",
      lastName: " ",
      phone: "",
      email: "",
    },
  };

  componentDidMount() {
    const accountFormEdit = this.props.accounts.filter(
      (acc) => acc.id == this.props.match.params.id
    )[0];
    this.setState({ account: accountFormEdit });
  }

  changeAccount = (event) => {
    const copyofAccounts = { ...this.state.account };
    copyofAccounts[event.target.id] = event.target.value;

    this.setState({ account: copyofAccounts });
  };

  editAccountt = () => {
    this.props.editAccountt(this.state.account);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <h2>Edit Accounts</h2>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <input
                type="text"
                id="id"
                className="form-control"
                value={this.state.account.id}
                onChange={this.changeAccount}
              />
              <br />
              <input
                type="text"
                id="name"
                className="form-control"
                value={this.state.account.name}
                onChange={this.changeAccount}
              />
              <br />
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={this.state.account.lastName}
                onChange={this.changeAccount}
              />
              <br />
              <input
                type="text"
                id="phone"
                className="form-control"
                value={this.state.account.phone}
                onChange={this.changeAccount}
              />
              <br />
              <input
                type="text"
                id="email"
                className="form-control"
                value={this.state.account.email}
                onChange={this.changeAccount}
              />
              <br />
              <button
                className="form-control btn btn-info"
                onClick={this.editAccountt}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditAccount);
