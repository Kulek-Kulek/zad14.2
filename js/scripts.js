//Tu jest klasa odpowiadająca za tytuł filmu

var MovieTitle = React.createClass({
	

render: function() {

    return (
      React.createElement('div', {},
		React.createElement('h2', {}, this.props.title),
	)
    )
  },
});


//Tu jest klasa odpowiadająca za opis filmu


var MovieDescription = React.createClass({
	

render: function() {
    return (
      React.createElement('div', {},
		React.createElement('p', {}, this.props.filmDescr)
	)
    )
  },
});


var MoviePoster = React.createClass({
	

render: function() {
	return (
		React.createElement('div', {},
		  React.createElement('img', {src: this.props.src})
		)
		)
},
});


var Movie = React.createClass({
	propTypes: {
		info: React.PropTypes.object.isRequired
	},

	render: function() {
		console.log(this.props);
		return React.createElement('div', {},
			React.createElement(MovieTitle, {title: this.props.info.filmTitle}),
			 React.createElement(MovieDescription, {filmDescr: this.props.info.filmDescr}),
			 React.createElement(MoviePoster, {src: this.props.info.src})
			)
	}
})





var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement(Movie, {info: {id: 1, filmTitle: 'Harry Potter', filmDescr: 'Film o czarodzieju', src: 'data:image/jpeg;base64,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'}}),
		React.createElement(Movie, {info: {id: 2, filmTitle: 'Król Lew', filmDescr: 'Film o lwie, który został królem', src: 'images/lew.jpg'}}),
		React.createElement(Movie, {info: {id: 3, filmTitle: 'The Shawshank Redemption', filmDescr: 'Film o sile, nadziei i wierze w lepsze jutro', src: 'images/skazani.jpg'}}),
		React.createElement(Movie, {info: {id: 4, filmTitle: "One Flew Over the Cuckoo's Nest", filmDescr: 'A sami sobie zobaczcie. Warto!', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxgnUknUDwlE9gtUQ-ifUIz78No5lDWNn9MALkI5eUr-F-1brYQ'}}),
		React.createElement(Movie, {info: {id: 5, filmTitle: 'The Godfather', filmDescr: 'Mafia w najlepszym wydaniu. Klasyka gatunku.', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDB5Fj3IxOIRZQmcszmmrl-NxyQZBOUJaUt9857Gpa6MSiQ4M2EA'}}),

	);



ReactDOM.render(element, document.getElementById('app'));