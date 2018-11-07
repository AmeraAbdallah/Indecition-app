
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: true
        };
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.toggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (<p>Hey. These are some details you can now aee!</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));

// let hidden = true ;
// const visibilityToggle = () => {
//     hidden = !hidden;
//     onRender();
// }

// const onRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={visibilityToggle}>
//                 {hidden ? 'Show details' : 'Hide details'}
//             </button>
//             <p hidden={hidden} >Hey, These are some details, now you can see it !</p>
//         </div>
//     );
    
//     ReactDOM.render(template, document.getElementById('app'));
// };

// onRender();