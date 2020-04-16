import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
            navbarHeight: window.innerHeight / 2
        }
        this.navRef = React.createRef();
    }

    componentDidMount() {
        let navbarHeight = this.computeOuterHeight(this.navRef.current);
        this.setState({navbarHeight: navbarHeight})

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    computeOuterHeight = (el) => {
        const el_style = getComputedStyle(el);
        const elHeight = el.offsetHeight;
        const elMargins = parseInt(el_style.marginTop) + parseInt(el_style.marginBottom);

        return elHeight + elMargins;
    }

    render() {
        let cardSpace;
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if (this.state.robots.length === 0) {
            cardSpace = <h1 style={{marginTop: this.state.navbarHeight}}>LOADING</h1>
        } else {
            cardSpace = <CardList navbarHeight={this.state.navbarHeight} robots={filteredRobots}/>;
        }

        return (
            <div className="tc">
                <div ref={this.navRef} className="navBar">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                {cardSpace}
            </div>
        )
    }
}

export default App;