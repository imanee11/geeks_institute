import React from "react";

class Child extends React.Component {
    componentWillUnmount(){
        alert('The component named header is about to be unmounted')
    }

    render(){
        return <h2>Hello World!</h2>;
    }
}

class FavoriteColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "red",
            show: true
        };
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' })
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('after update');

    }

    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <button onClick={() => this.setState({ favoriteColor: "blue" })}>
                    Change Color
                </button>
                <br></br><br />

                {this.state.show && <Child/>}

                <button onClick={() => this.setState({show : false})}>Delete Header</button>
            </div>
        )
    }
}

export default FavoriteColor;
