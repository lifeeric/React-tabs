import React from "react";
import { TabsContext } from "./Tabs-context";

class Tab extends React.Component {
  componentDidMount() {
    console.log(this.context);
    this.context.context.addTab({
      id: this.props.id,
      title: this.props.title
    });
  }

  render() {
    const {
      context: {
        activeTab: { id: activeTabId }
      }
    } = this.context;
    const { children, id: tabId } = this.props;
    return activeTabId === tabId && children;
  }
}

Tab.contextType = TabsContext;

export default Tab;
