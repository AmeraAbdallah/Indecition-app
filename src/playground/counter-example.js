
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onMinHandler = this.onMinHandler.bind(this);
        this.onResetHandler = this.onResetHandler.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        console.log("fetch");
        const stringCount = localStorage.getItem("count") ;
        const count = parseInt(stringCount, 10);
        if(! isNaN(count)){
            this.setState(()=>({count: count}));
        }
    }
    componentDidUpdate(prevProps,prevState ){
        console.log("save");
        if(prevState.count !== this.state.count){
            localStorage.setItem("count",this.state.count);
        }
    }
    onAddHandler(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        });
    }
    onMinHandler(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            };
        });
    }
    onResetHandler(){
        this.setState(()=>{
            return {
                count: 0
            };
        });
    }
    render(){
        return(
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.onAddHandler}>+1</button>
                <button onClick={this.onMinHandler}>-1</button>
                <button onClick={this.onResetHandler}>reset</button>
            </div> 
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minuseOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minuseOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
    
//     ReactDOM.render(template2, document.getElementById('app'));
// };

// renderCounterApp();