import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import { CookieBot } from "react-cookiebot/lib/CookieBot";

const domainGroupId = "30ee9c14-eff9-45be-9007-a78faa459041";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <CookieBot domainGroupId={domainGroupId} />
      </Switch>
    </Router>
  );
}
export default App;
