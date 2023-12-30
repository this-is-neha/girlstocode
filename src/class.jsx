import React from 'react';

class ClassParent extends React.Component {
    constructor() {
        super(); // parent construvtor ko method ra component haru fetch or use garna 
        this.state = {
            count: null,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const fetchedData = 1;
            this.setState({ count: fetchedData });
        }, 2000); // Simulate a 2-second delay
    }

    // This method will be called when the "Increment" button is clicked
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // componentDidUpdate is called after the component updates
    componentDidUpdate(prevProps, prevState) {
            console.log('Count:', this.state.count);
    }

    render() {
        return (
            <div>
                {this.state.count ? (<>
                    <p>Count: {this.state.count}</p>
                    <button onClick={this.handleIncrement}>Increment</button></>
                ) : (
                    <p>Loading data...</p>
                )}

                {this.state.count < 5 ? <ClassChild /> : ""}
                {this.state.count > 10 ? <ClassSno />:""}

            </div>
        );
    }
}

class ClassChild extends React.Component {
    componentWillUnmount() {
        console.warn("Count exceeded")
    }
    render() {
        return (
            <p>Count is less than 5</p>
        )

    }
}




class ClassSno extends React.Component {
    componentWillUnmount() {
        console.warn("Count more than necessary")
    }
    render() {
        return (
            <p>Count is greater than 10</p>
        )

    }
}


export default ClassParent;