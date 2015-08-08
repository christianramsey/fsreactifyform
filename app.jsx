var React = require('react');

var rooms = {

    "room1": {
        1:true,
        3:true,
        4:true,
        9:true,
        23:true,
        24:true
    },

    "room2": {
        1:true,
        3:true,
        5:true,
        9:true,
        21:true,
        22:true

    },

    "room3": {


    },

    "room4": {

    }

};

var SearchBar = React.createClass({
    getInitialState: function() {
        return {rooms: {1: {12:true,18:true}}};
    },
    render: function() {
        var avails = this.state.rooms;
        return (
            <form>

              <h1>{{avails}}</h1>
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
