import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim() ;
        let error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {
                error : error
            }
        });
        e.target.elements.option.value = '';
    };
    render(){
        return(
            <div>
                {this.state.error && <p className= 'add-option-error'>{this.state.error}</p>}
                <form className= 'add-option' onSubmit={this.handleSubmit}>
                    <input className= 'add-option__input' type='text' name='option'/>
                    <button className='button button__add-option' >Add Option</button>
                </form>
            </div>
            
        );
    }
}