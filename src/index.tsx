import { Component, h, render } from 'preact'

interface AppState {

}



class App extends Component<{}, AppState> {
    render () {
        return (
            <div className='content'>
	            hello world
            </div>
        );
    }
}


render(
    <App/>,
    document.getElementById('root')
)


