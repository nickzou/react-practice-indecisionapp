//JSX - Javasript XML

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            title: 'Build It Visible!',
            subtitle: "blak blak blak!",
            visibility: false
        };
    }
    toggleVisibility() {
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && (
                    <div>{this.state.subtitle}</div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     subtitle: 'This is some shot!',
//     options: []
// }

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// let appRoot = document.getElementById('app');


// const render = () => {

//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>{visibility ? "Hide details" : "Show details"}</button>
//             {visibility && (
//                 <div>{app.subtitle}</div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);

// };

// render();
