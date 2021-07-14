import Search from "../../pages/Search";
import Manufact from "../../pages/Manufact";
import { Route, Switch } from "react-router-dom";
import Table from "../../pages/Search/Table";
import "./Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <Switch>
        <Route exact path="/" component={Table} />
        <Route path="/detail/:product" component={Manufact} />
      </Switch>
    </main>
  );
};

export default Main;
