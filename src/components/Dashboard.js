import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataFetched: false,
            message: '',
            version: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isDataFetched: true,
                    message: data.name,
                    version: data.version
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return <h2 className="grey-text align-center">Dashboard component</h2>;
    }
}

export default Dashboard;
