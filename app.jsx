var React = require('react');

var moment = require('moment');
// advise here  -> http://stackoverflow.com/questions/29295846/how-can-i-use-javascript-library-such-as-moment-js-in-react-native

var appData = {

    "room_names": ["room1","room2","room3","room4"],

    "room1": {
        times: [1,4,5,6,7,8,22],
        name: "First Room"
    },

    "room2": {
        times: [1,4,5,6,7,8,22],
        name: "Second Room"

    },

    "room3": {
        times: [1,4,5,6,7,8,22],
        name: "Third Room"

    },

    "room4": {
        times: [1,4,5,6,7,8,22],
        name: "Fourth Room"

    }

};

var getRooms = function() {
    return appData;
};

var getCurrentTime = function() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    return now;

};

var allAboard = function() {
//    get AppData and functionally add up all the times

};

var spanStyle = {
    borderBottom: "1px dashed #007a73",
    color: "#007a73",
    padding: "6px",
    marginLeft: "-6px",
    marginRight: "-6px",
    display: "inline-block",
    position: "relative"
}

var SearchBar = React.createClass({
    getInitialState: function() {
        return {"rooms":getRooms()}
    },
    render: function() {
        var rms = this.state.rooms;
        var current_time = getCurrentTime();

        return (
            <form>


              <h5> {{ current_time }}  </h5>
                I want to book&nbsp;
                <span style={spanStyle} class="placeholder input-container"> any room </span>
                &nbsp;at&nbsp;
                <span style={spanStyle}  class="placeholder input-container"> 10:00 AM </span>
                &nbsp;for&nbsp;
                <span style={spanStyle}  class="placeholder input-container"> 2 hours</span>

            </form>
        );
    }
});

React.render(<SearchBar/>, document.body);
