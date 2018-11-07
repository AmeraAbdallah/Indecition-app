//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public
//jsx - javascript xml

const app = {
    title: 'a title',
    subtitle: 'a subtitle',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option)
        app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
};
const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
};

const onMakeDecition = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};
const renderTemplate = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here is your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onMakeDecition} disabled={app.options.length === 0}>what should I do ? </button>
            <button onClick={onRemoveAll}>remove all</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
                {
                    // app.options.map((option) => {
                    //     return <li key={option}>{option}</li>;
                    // })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template,document.getElementById('app'));
};
    
renderTemplate();

