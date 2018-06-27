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


class SearchBar extends React.Component {

  constructor (props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress (event) {
    this.props.onKeyPress(event.target.value);
  }
  
  render () {
    return (
      <form>
        <input 
          type="text"  
          placeolder="Add Item" 
          value={this.props.newItem} 
          onChange={this.handleKeyPress}
        />
      </form>
    );
  }
}


class GroceryList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: ['Coffe', 'Tea', 'Soda'],
      newItem: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress (value) {

    if(value.charAt(value.length-1) === " ") {
      //TODO: ADD NEW ITEM TO DOM RENDER
      this.setState({
        items: this.state.items.push(this.state.newItem)
      });
      
      console.log(value);
    } 
    
    //TODO: FIND METHOD THAT UPDATES IMMEDIATELY & WON'T RERENDER
    this.setState({
      newItem: value
    });
    
  }
  
  render () {
    return(
      <div>
        <SearchBar 
         newItem={this.state.newItem}
         onKeyPress={this.handleKeyPress}
       />
       <h1>GroceryList</h1>
       <ItemsList items={this.state.items}
        />
      </div>
    );
  }
}



ReactDOM.render(<GroceryList />, document.getElementById("app"));