import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
class App extends Component {
    state = {
        user: '',
        fieldName:'',
        fieldSecondName:'',
        selection: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
                <input type="text" value={this.state.fieldName} onChange={this.handleFieldNameChange}/>
                <input type="text" value={this.state.fieldSecondName} onChange={this.handleFieldSecondNameChange}/>
                <input type="button" onClick={this.handleButton}/>
                <DayPicker onDayClick={ (e, day) => window.alert(day) } />
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleSelectChange = selection => this.setState({ selection })

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }
    handleFieldNameChange = (ev)=>{
        this.setState({
            fieldName: ev.target.value
        })
    }

    handleFieldSecondNameChange=(ev)=>{
        this.setState({
            fieldSecondName: ev.target.value
        })
    }
    handleButton=(ev)=>{
        this.setState({
            fieldName:'',
            fieldSecondName:''
        })
    }



}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default App