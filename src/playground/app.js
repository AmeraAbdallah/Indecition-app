//jsx - javascript xml

class IndecitionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options : []
        };
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
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
    handleRemoveOptions(){
        this.setState(()=>(
            {options: []}
        ));
    }
    handlePickOption(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option){
        if(!option)
            return 'Please Enter a valid value';
        if(this.state.options.indexOf(option) > -1)
            return 'The option already exists';

        this.setState((prevState) =>({
                options: prevState.options.concat(option)
            })
        );
        
    }
    handleDeleteOption(optionText){
        this.setState((prevState)=>({
            options : prevState.options.filter((option)=>{
                return option !== optionText ;
            })
        }));
    }
    render(){
        const title = 'Indecition App';
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length>0}
                    handlePickOption={this.handlePickOption}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveOptions={this.handleRemoveOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecition'
}

const Action = (props) => {
    return(
        <button
            onClick={props.handlePickOption}
            disabled={!props.hasOptions}
        >what should I do ?</button>
    );
};

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleRemoveOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add option to get started</p>}
            <ol>
                {props.options.map((option)=>
                    <Option 
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} 
                    />)}
            </ol>
        </div>
    );
};


const Option = (props) => {
    return(
        <li>
            {props.optionText}
            <button
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText);
                }}
            >Remove</button>
        </li>
    );
};


class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim() ;
        let error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {
                error : error
            }
        });
        e.target.elements.option.value = '';
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
            
        );
    }
}


ReactDOM.render(<IndecitionApp/>, document.getElementById('app'));

