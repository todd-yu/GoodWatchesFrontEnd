import './movie.css';
import React from 'react';
import ReactDOM from 'react-dom';


class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: props.movieName,
            movieID: props.movieID,
            imageLink: props.imageLink,
            description: props.description
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.movieName}</h2>
                <img src={this.state.imageLink}/>
                <figcaption>{this.state.description}</figcaption>
            </div>
        )
    }

}

// const movie = (props) => {
//     return (
//         <div>
//             <header className='movie-Header'>
//                 <h2>{this.movieName}</h2>
//                 <img src={this.imageLink}/>
//                 <figcaption>{this.description}</figcaption>
//             </header>
//         </div>
//     )
// }



export default Movie