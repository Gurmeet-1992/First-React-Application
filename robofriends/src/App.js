import React,{ Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll'

class App extends Component{
    constructor(){
        super()
        this.state= {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        })
        .then(user =>{
            this.setState({robots:user})
        })
        
    }

    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value})
    }

    render(){
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        } )
        return (
        <div className='tc'>
            <h1 classNmae='f2'>Robot Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <CardList robots={filterRobots} />
            </Scroll>
        </div>
    );
    }
    
}
export default App;