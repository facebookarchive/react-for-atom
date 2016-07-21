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
    (this: any).onClick = this._onClick.bind(this);
  }

  _onClick() {
    console.log(this.props.title);
  }

  render(): React.Element<any> {
    const {title} = this.props;
    return <h1>{title}</h1>;
  }
}

<Home />;
<Home title="Other Title" />;

ReactDOM.findDOMNode(
  ReactDOM.render(<Home />, document.body)
);

var markup: string = ReactDOMServer.renderToStaticMarkup(<Home />);
