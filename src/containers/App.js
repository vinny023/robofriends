import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import {dataset} from '../database'


class App extends Component {

    constructor () {
        super()
        this.state = {
            dataset: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {

        const {dataset, searchfield} = this.state
        console.log(this.state)
        const filteredDataset = dataset.filter(entry => {
            return entry.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return <div>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <ErrorBoundary>
            <CardList data={filteredDataset} />
        </ErrorBoundary>
        </Scroll>
        </div>
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users =>  this.setState({dataset:users})    )
    }
}

export default App;
