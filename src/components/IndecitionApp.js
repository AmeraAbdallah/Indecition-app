import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';
class IndecitionApp extends React.Component {
    state = {
        options : [],
        selectedOption : undefined
    };
    handleClearSelectedOption = () => {
        this.setState(()=>({
            selectedOption : undefined
        }));
    };
    handleRemoveOptions = () => {
        this.setState(()=>(
            {options: []}
        ));
    };
    handlePickOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        // alert(this.state.options[randomNum]);
        this.setState(()=>({
            selectedOption : this.state.options[randomNum]
        }));
    };
    handleAddOption = (option) => {
        if(!option)
            return 'Please Enter a valid value';
        if(this.state.options.indexOf(option) > -1)
            return 'The option already exists';

        this.setState((prevState) => ({
                options: prevState.options.concat(option)
            })
        );
        
    };
    handleDeleteOption = (optionText) => {
        this.setState((prevState)=>({
            options : prevState.options.filter((option)=>{
            return option !== optionText ;
            })
        }));
    };
    componentDidMount(){
        console.log('fetching data');
        const options = JSON.parse(localStorage.getItem("options"));
        if(options !== null){
            this.setState(()=>({options:options}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        
        console.log('saving data');
        try{
            if(prevState.options.length !== this.state.options.length){
                const options = JSON.stringify(this.state.options);
                localStorage.setItem("options",options);
            }
        }catch(e){

        }
    }
    componentWillUnmount(){
        console.log('component will unmount');
    }
    
    render(){
        const title = 'Indecition App';
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length>0}
                        handlePickOption={this.handlePickOption}
                    />
                    <div className='widget'>
                        <Options 
                        options={this.state.options} 
                        handleRemoveOptions={this.handleRemoveOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                    
                </div>
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecitionApp ;