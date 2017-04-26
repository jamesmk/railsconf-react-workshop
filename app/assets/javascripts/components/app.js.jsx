class App extends React.Component {
  render() {
    return (
      <h1 className="header center">
        Quick Reads for {this.props.name}
      </h1>
    )
  }
}

ReactDOM.render(
  <App name={"James"} />, document.getElementById('root')
)
