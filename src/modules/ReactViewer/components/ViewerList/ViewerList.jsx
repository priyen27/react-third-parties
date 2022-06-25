import React from "react";
import ReactDOM from "react-dom";
import Viewer from "react-viewer";

class ViewerList extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    //Used For interval in second
    // this.fixViewerInterval = setInterval(() => {
    //   this.setState({ fixViewer: true });
    // }, 5000);
  }

  render() {
    const images = [
      {
        src:
        "https://infeng.github.io/react-viewer/59111ff2c38954887bc313887fe76e27.jpg"
    },
      {
        src:
        "https://infeng.github.io/react-viewer/bbbc41dac417d9fb4b275223a6a6d3e8.jpg"
    },
    ];

    console.log(233);

    return (
      <div>
        <div id="container" className="container" />
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          show viewer
        </button>
        <Viewer
          visible={this.state.visible}
          onClose={() => {
            this.setState({ visible: false });
          }}
          images={images}
          container={document.getElementById("container")}
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ViewerList />, rootElement);
export default ViewerList;