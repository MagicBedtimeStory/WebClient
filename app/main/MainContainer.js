import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

// import Footer from '../components/Footer';
// import NavigationContainer from './NavigationContainer';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        let activePage = parseActivePage(this.props.location.pathname);
        this.state = {
            activePage: activePage
        };
    }

    componentWillReceiveProps(nextProps) {
        let activePage = parseActivePage(nextProps.location.pathname);
        this.setState({
            activePage: activePage
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                {/*<NavigationContainer activePage={this.state.activePage} competitionId={this.state.competitionId} />*/}
                <ReactCssTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCssTransitionGroup>
                {/*<Footer />*/}
            </div>
        );
    }
}

function parseActivePage(pathname) {
    pathname = pathname.replace(/^\//, '');
    let pathnameArray = pathname.split('/');

    return pathnameArray[0];
}

export default MainContainer;