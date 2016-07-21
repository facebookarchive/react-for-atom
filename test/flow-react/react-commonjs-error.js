/* @flow */

const {React, ReactDOM, ReactDOMServer} = require('../..');

class Home extends React.Component {
  props: {
    title: string
  };

  static defaultProps = {
    title: 'My Title'
  };

  constructor(props) {
    super(props);
    this.onClick = this._onClick.bind(this);
  }

  _onClick() {
    console.log(this.title);
  }

  render(): React.Element<any> {
    const {title} = this.props;
    return <h1>{title()}</h1>;
  }
}

<Home />;
<Home title={42} />;

ReactDOM.render(42);
ReactDOM.findDOMNode(42);

var markup: number = ReactDOMServer.renderToStaticMarkup(<Home />);
