import React from 'react';
import UserContext from '../utils/UserContext';
class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        //The super keyword is used to call the constructor of the parent class. This is necessary to properly set up the inheritance chain.
        //By passing props to super, you make sure that the props are properly initialized in the parent class. This is important because React components rely on props to handle incoming data. If you don't pass props to super, the component will not have access to this.props within the constructor.
        //The super keyword in JavaScript is used to call the constructor or methods of a parent class.
        this.state = {
            gitUserInfo: {
                
            },
            name: this.props.name,
            newName: 'sid',
            count:1,
        }
        console.log(this.state.name+' Child - constructor');
    }

    async componentDidMount() {
        console.log(this.state.name+' Child - componentDidMount - API call');
        const gitInfo = await fetch('https://api.github.com/users/siddhesh2017');
        const jsonGitInfo = await gitInfo.json();
        this.setState({
            gitUserInfo: jsonGitInfo,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.gitUserInfo !== prevState.gitUserInfo){
            console.log('State changed');
        }
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }
    render() {
        console.log(this.state.name+' Child - render');
        return(
            <div>
                <UserContext.Consumer>
                    {({user})=><h1>{user.email}</h1>}
                </UserContext.Consumer>
                <h1>{this.props.name}</h1>
                <h2>{this.state.name}</h2>
                <h3>{this.state.newName}</h3>
                <button onClick={()=>{
                    if(this.state.count == 1) {
                        this.setState({
                            name: "Siddhesh",
                            count: 0,
                        });
                    }
                    else{
                        this.setState({
                            name: "Sidddd",
                            count: 1,
                            // ithe apan don state ekach setState function madhe update kelet but normally developers la he mahiti nasta ani te each state sathi different setState function lihitat and this is on of the reason why we dont use class component (inconsistancy) 
                            //when we pass a specific updated state variable it automatically updates that state in the state object without overwritting it
                        })
                    }
                }} >Click Me</button>
                
                <h1>{this.state.gitUserInfo.login}</h1>
                <h1>{this.state.gitUserInfo.name}</h1>
                <img src={this.state.gitUserInfo.avatar_url} alt="" />
                <a href={this.state.gitUserInfo.repos_url}>Repository</a>
            </div>
        )
    }
}

export default ProfileClass;

//React LifeCycle
//Class Based Component = constructor -> render -> componentDidMount

//Functional component is a syntactical sugar, looks good, easy to manage and developer have idea about what they are writing
// where in Class based component it doesn't look good(look's complex), most of the developers have no clarity about what they are writing, using state and useEffect like functionality is complex compared to function component