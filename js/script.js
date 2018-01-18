//Tu jest klasa odpowiadająca za nagłówek

var MovieList = React.createClass({
	propTypes: {
    headlines: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
		React.createElement('h1', {}, this.props.headlines.h1),
		React.createElement('h2', {}, this.props.headlines.h2),
		React.createElement('ul', {})
	)
    )
  },
});


var headlines = {
  h1: "Top 5. To warto zobaczyć!",
  h2: "Lista filmów."
};



var element = React.createElement(MovieList, {headlines: headlines});
ReactDOM.render(element, document.getElementById('app'));



//Tu jest klasa odpowiadająca za tytuł filmu

var MovieTitle = React.createClass({
	propTypes: {
	filmTitle: React.PropTypes.object.isRequired,
   },

render: function() {
    return (
      React.createElement('div', {},
		React.createElement('h2', {}, this.props.filmTitle.name),
	)
    )
  },
});

var filmTitle = {
	name: 'Harry Potter'
}

var element = React.createElement(MovieTitle, {filmTitle: filmTitle});
ReactDOM.render(element, document.getElementById('app'));


//Tu jest klasa odpowiadająca za opis filmu


var MovieDescription = React.createClass({
	propTypes: {
	filmDescr: React.PropTypes.object.isRequired,
   },

render: function() {
    return (
      React.createElement('div', {},
		React.createElement('p', {}, this.props.filmDescr.description),
	)
    )
  },
});

var filmDescr = {
	description: 'Film o czarodzieju'
}

var element = React.createElement(MovieDescription, {filmDescr: filmDescr});
ReactDOM.render(element, document.getElementById('app'));