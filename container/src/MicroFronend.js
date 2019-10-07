import React from "react";

export default class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name } = this.props;
    if (document.getElementById(`micro-frontend-${name}`)) {
      this.renderMicroFrontend();
      return;
    }
    this.fetchAssets();
  }
  async fetchAssets() {
    const { name, host } = this.props;
  }
  renderMicroFrontend() {}
  render() {
    return <div />;
  }
}
