/** @jsx React.DOM */

var TimerExample = React.createClass({

    getInitialState: function(){
        // This is called before our render function. The object that is
        // returned is assigned to this.state, so we can use it later.
        return {elapsed: 0};
    },

    componentDidMount: function(){
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:
        this.timer = setInterval(this.tick, 50);
    },

    componentWillMount: function(){
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        clearInterval(this.timer);
    },

    tick: function(){
        // This function is called every 50 ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered
        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function(){
        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed/10).toFixed(1);

        return (
            <div>
                <p>This example was started <b>{seconds} seconds</b> ago.</p>
            </div>
        );
    }
});

React.render(
    <TimerExample start={Date.now()} />, document.body
);
