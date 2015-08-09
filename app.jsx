var React = require('react');
var Rx = require('rx');

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
                I want to book
              <span id="atmosphere" class="input-container">
                <span class="placeholder"> any room</span>
                <span class="input selectbox">
                  <select class="fancy-select hidden" name="find_desc">


                      <option value="any room">Any Room</option>
                      <option value="The Cardigan Room">room #1 (5)</option>
                      <option value="The Applegate Room">room #2 (2)</option>
                      <option value="The Lofter Room">room #3 (5)</option>
                      <option value="The Dungeoun Room">room #5 (2)</option>
                  </select>
                </span>
              </span> at
              <span id="cuisine" class="input-container">
                <span class="placeholder"> 10:00 AM</span>
                <span class="input selectbox">
                  <select name="cflt" class="fancy-select hidden">
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 AM">12:00 AM</option>
                      <option value="13:00 AM">13:00 AM</option>
                      <option value="14:00 AM">11:00 AM</option>
                  </select>
                </span>
              </span>
                            for

               <span id="cuisine" class="input-container">
                <span class="placeholder"> 2 hours</span>
                <span class="input selectbox">
                  <select name="cflt" class="fancy-select hidden">
                      <option value="one hour">1 hour</option>
                      <option value="two hours">2 hours</option>
                      <option value="three hours">3 hours</option>
                      <option value="4 hours">4 hours</option>
                  </select>
                </span>
              </span>
            </form>
        );
    }
});

React.render(<SearchBar/>, document.body);
