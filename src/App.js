import './App.css';
import AppSidebar from "./AppSidebar";
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {bgColor: '', text: ''}
        this.changeBgColor = this.changeBgColor.bind(this);
        this.changeText = this.changeText.bind(this);
    }
    changeBgColor(event) {
        this.setState({bgColor: event.target.value})
    }
    changeText(event) {
        console.log('value', event.target.value)
        this.setState({text: event.target.value})
    }
    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <div className="jumbotron" style={{backgroundColor: this.state.bgColor}}>
                        <h1 className="display-4">Write text in sidebar</h1>
                        <div dangerouslySetInnerHTML={{__html: this.state.text}} />
                    </div>
                </div>
                <AppSidebar changeBgColor={this.changeBgColor} bgColor={this.state.bgColor} changeText={this.changeText} text={this.state.text} />
            </div>
        );
    }
}

export default App;
