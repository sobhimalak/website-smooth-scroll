import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import { Button, View, Text } from "react-dom";
import { CookieBot } from "react-cookiebot/lib/CookieBot";

// const domainGroupId = "30ee9c14-eff9-45be-9007-a78faa459041";
const domainGroupId = 'ecff8d69-d1cb-416f-a86f-ba55b3f38707';

function App() {
  const [hasCookieBot, setHasCookieBot] = useState(undefined);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <View style={{ flex: 1, alignItems: "center" }}>
                  <CookieBot domainGroupId={domainGroupId} />
          <Text>Click to test Cookiebot</Text>
          <Button
            title="TEST"
            onPress={() =>
              setHasCookieBot(!!document.querySelector("#CookieBot"))
            }
          />
          <Text style={{ color: "red", marginVertical: 10 }}>
            {hasCookieBot && `Has CookieBot: ${JSON.stringify(hasCookieBot)}`}
          </Text>
        </View>
      </Switch>
    </Router>
  );
}
export default App;
