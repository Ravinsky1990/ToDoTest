import React from "react";
import Header from "./Header"
import OptionList from "./OptionList";
import AddOptionInput from "./AddOptionInput";
import SearchOptions from "./SearchOptons";
import {connect} from "react-redux";
import {addOption} from "../actions/optionActions"
import {removeAll} from "../actions/optionActions";
import {removeOption} from "../actions/optionActions";
import visibleOptions from "../selectors/visibleOptions"
import {setTextFilter} from "../actions/filterAction";


class AppToDo extends React.Component {
    /* state = {
        options:this.props.options
    }; */

     handleDeleteOptions=()=> {
        /* this.setState(() => ({ options: [] })); */
        this.props.removeAll()
    };

    handleDeleteOption =(optionToRemove)=> {
        /* this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        })); */

        this.props.removeOption(optionToRemove)
    }; 

    handleAddOption=(option)=>{
        if (!option) {
          return 'Enter valid value to add item';
        } else if (this.props.options.indexOf(option) > -1) {
          return 'This option already exists';
        }

        this.props.addOption(option);

        /* this.setState((prevState) => ({
          options: prevState.options.concat(option)
        })); */
    }

    onChangeHendelerFilter=(e)=>{
        let value = e.target.value
        this.props.setFilter(value);
        /* this.setState(()=>{
            return {
                options: this.state.options.filter((option)=>{
                    return option.includes(value.toLowerCase())
                })
            }
        }); */
    }

    componentDidUpdate =()=>{
        localStorage.setItem('options', JSON.stringify(this.props.options));
    }


    render = ()=>{
        return (
            <div>
                <Header subtitle={"My test Job"} />
                <SearchOptions onChangeHendeler={this.onChangeHendelerFilter}/>
                <main className="container">
                    <div className="widget">
                        <OptionList
                        options={this.props.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}/>
                        <AddOptionInput
                        handleAddOption={this.handleAddOption}/> 
                    </div>
                </main>
            </div>
        )
        
    }
}

const mapStateToProps =(state)=>{
    return{
        options: visibleOptions(state.options, state.filters)
    }
}

const mapDispatchToProps = (dispatch)=>({
    addOption: (option)=>dispatch(addOption(option)),
    removeAll: ()=>dispatch(removeAll()),
    removeOption: (text)=>dispatch(removeOption(text)),
    setFilter: (text)=>dispatch(setTextFilter(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(AppToDo);




/* AppToDo.defaultProps = {
    options: []
  }; */


  