import './movie.css';


class movieComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie
        }
    }
    

}


export default movieComponent