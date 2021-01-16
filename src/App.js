import * as React from "react";
import "./styles.css";
import Tabs from "./tabs";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Tabs activeTab={{ id: "tab1" }}>
          <Tabs.Tab id="tab1" title="Produce">
            <h1>isn't cool</h1>
          </Tabs.Tab>
          <Tabs.Tab id="tab2" title="Produce">
            <h1> Hello</h1>
          </Tabs.Tab>
          <Tabs.Tab id="tab3" title="Produce">
            <h1>Nice To have you</h1>
          </Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
