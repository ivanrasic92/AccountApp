import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountsTable from "./components/AccountsTable";
import AddAccount from "./components/AddAccount";
import EditTable from "./components/EditTable";
import EditAccount from "./EditAccount";

class App extends React.Component {
  state = {
    accounts: [
     
    ],
  };
  addNewAccountToState = (acc) => {
    this.setState({ accounts: [...this.state.accounts, acc] });
  };

  deleteAccount = (id) => {
    const accountCopy = [...this.state.accounts];
    const newCopyAccounts = accountCopy.filter((account) => account.id !== id);
    this.setState({ accounts: newCopyAccounts });
  };

  editAccount = (acc) =>{
    const copyAccounts = [...this.state.accounts]
    let accountPosition = copyAccounts.map(account => account.id).indexOf(acc.id)
    copyAccounts[accountPosition] = acc;
    console.log(accountPosition);
    this.setState({accounts : copyAccounts})
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <AccountsTable accounts={this.state.accounts} />
        </Route>
        <Route path="/add">
          <AddAccount addNewAccountToState={this.addNewAccountToState} />
        </Route>
        <Switch>
        <Route path="/edit/:id">
            <EditAccount accounts={this.state.accounts} editAccountt={this.editAccount} />
          </Route>
          <Route path="/edit">
            <EditTable
              accounts={this.state.accounts}
              deleteAccount={this.deleteAccount}
            />
          </Route>
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
