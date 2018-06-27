var GroceryList = () => (
  <div>
    <h1>GroceryList</h1>
    <ItemsList items={['Cofee', 'Tea', 'Soda', 'Wine']}/>
  </div>
);

var ItemsList = (props) => {

    var rows = [];
    props.items.forEach((item, index) => {
      rows.push(
        <Item key={index} item={item} />
      );
    });

    return (
      <ul>{rows}</ul>
    );

};

// STATELESS ITEM COMPONENT BEFORE REFACTOR TO CLASS COMPONENT
//
// var Item = (props) => {
//   var onListItemClick = (event) => {
//     console.log('Clicked!');
//   };
  
//   return (
//     <li onClick={onListItemClick}>{props.item}</li>
//     );
// };

class Item extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      bought: false
    }
  }
  
  onListItemClick () {
    this.setState({
      bought: !this.state.bought
    });
  }
  
  render () {
    var style = {textDecoration: this.state.bought ? 'line-through' : 'none'};
    
    return (
     <li key={this.props.index} style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));