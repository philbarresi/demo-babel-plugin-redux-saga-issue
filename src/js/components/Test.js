import React, { Component } from "react";
import CircularTestA from "testApp.components/CircularTestA";
import ImageTest from "testApp.components/ImageTest";
import { hot } from "react-hot-loader/root";
import { connect } from "react-redux";
import { fetchManifest } from "testApp.actions/test";
import { TITLE } from "testApp.text";

class Test extends Component {
  componentDidMount() {
    this.props.fetchManifest("testingParam");
  }

  render() {
    return (
      <div className="main">
        <div className="main__header">
          <h1>{TITLE}</h1>
        </div>
        <div className="main__body">
          <p>This is a test app, hot reloading.</p>

          <ImageTest />

          <CircularTestA level={1} />
          <h3>State Check</h3>
          <pre
            style={{
              height: "400px",
              width: "500px",
              overflow: "scroll",
              marginBottom: "150px"
            }}
          >
            {JSON.stringify(this.props, null, 4)}
          </pre>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    manifest,
    manifestKeys,
    manifestEntries,
    manifestValues,
    keyFound,
    keyIndexFound,
    clonedManifest,
    manifestLoaded
  } = state.test;

  return {
    manifest,
    manifestKeys,
    manifestEntries,
    manifestValues,
    manifestLoaded,
    keyFound,
    keyIndexFound,
    clonedManifest
  };
};

const mapDispatchToProps = {
  fetchManifest
};

Test = connect(mapStateToProps, mapDispatchToProps)(Test);

export default hot(Test);
