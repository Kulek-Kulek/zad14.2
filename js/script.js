
//Tu jest klasa odpowiadająca za tytuł filmu

var MovieTitle = React.createClass({
	propTypes: {
	filmTitle: React.PropTypes.object.isRequired,
   },

render: function() {

    return (
      React.createElement('li', {key: this.props.filmTitle.id},
		React.createElement('h2', {}, this.props.filmTitle.name),
	)
    )
  },
});


//Tu jest klasa odpowiadająca za opis filmu


var MovieDescription = React.createClass({
	propTypes: {
	filmDescr: React.PropTypes.object.isRequired,
   },

render: function() {
    return (
      React.createElement('li', {key: this.props.filmDescr.id},
		React.createElement('p', {}, this.props.filmDescr.descr)
	)
    )
  },
});


var MoviePoster = React.createClass({
	propTypes: {
		poster: React.PropTypes.object.isRequired
	},

render: function() {
	return (
		React.createElement('li', {key: this.props.poster.id}),
		  React.createElement('img', {src: this.props.poster.src})
		)
}
})


var Movie = React.createClass({
	propTypes: {
		info: React.PropTypes.array.isRequired
	},

	render: function() {
		console.log(this.props);
		return React.createElement('li', {key: this.props.info.id},
			React.createElement(MovieTitle, {filmTitle: this.props.info.filmTitle}),
			React.createElement(MovieDescription, {filmDescr: this.props.info.filmDescr}),
			React.createElement(MoviePoster, {src: this.props.info.src})
			)
	}
})

var info = [
	{
		id: 1,
		name: 'Harry Potter',
		descr: 'Film o czarodzieju',
		src: 'images/harry.jpg' 
	},
	{
		id: 2,
		name: 'Król lew',
		descr: 'Film o życiu i przygodach małego lwa',
		src: 'images/lew.jpg'
	},
	{
		id: 3,
		name: 'The Shawshank Redemption',
		descr: 'Film o sile, nadziei i wierze w lepsze jutro',
		src: 'images/skazani.jpg'
	},
	{
		id: 4,
		name: "One Flew Over the Cuckoo's Nest",
		descr: 'A sami sobie zobaczcie. Warto!',
		src: 'data:image/jpeg;base64,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'
	},
	{
		id: 5,
		name: 'The Godfather',
		descr: "Mafia w najlepszym wydaniu. Klasyka gatunku.",
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDB5Fj3IxOIRZQmcszmmrl-NxyQZBOUJaUt9857Gpa6MSiQ4M2EA'
	}
];




var element = 
	React.createElement('ul', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('li', {}, Movie),

	);
ReactDOM.render(element, document.getElementById('app'));

