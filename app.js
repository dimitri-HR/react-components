var GroceryList = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        { props.items.map(item =>
          <GroceryListItem item={item}/>
        )}
      </ul>
    </div>
  );
};

var groceryItems = ['flour', 'egs', '2juice'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onMouseOver() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    return <li style={style} onMouseOver={this.onMouseOver.bind(this)}>{this.props.item}</li>;
  }
}


ReactDOM.render(<GroceryList items={groceryItems} />, document.getElementById('app'));
