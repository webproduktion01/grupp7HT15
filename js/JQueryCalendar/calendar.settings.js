/*
    Documentation:
    https://github.com/robmonie/jquery-week-calendar/wiki
    Latest build at this date(2015/10/14:
    https://github.com/calvera/jquery-week-calendar/blob/master/jquery.weekcalendar.js
*/

$(document).ready(function() {


    var screenWidth = $(window).width();
    var calendar = quickSetCalender();
    var daysToShow = 


    //Status message window, useful for debugging/Information
    //$('<div id="message" class="ui-corner-all"></div>').prependTo($('body'));

    //Size change listener, changes days depending on resolution
    $(window).resize(function(event) {
        var newWidth = $(window).width();

        //Reduces load on client when resizing, can't instantiate nonstop
        if (newWidth > 640 && screenWidth <640) {
            calendar = quickSetCalender(7);
            screenWidth=newWidth;
        }
        else if (newWidth < 640 && screenWidth >640){
            calendar = quickSetCalender(3);
            screenWidth=newWidth;
        }
    });

});

var widthSettings = function(){
    var screenWidth = $(window).width();
    if (screenWidth > 640) {
            return 7;
        }
        else {
            return 3;
        }
};

var quickSetCalender = function(daysToShow) {

    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var day = new Date().getDate();

    var eventData = {
        events: [{
            'id': 1,
            'start': new Date(year, month, 16, 9),
            'end': new Date(year, month, 16, 10),
            'title': 'Presentation'
        }, {
            'id': 2,
            'start': new Date(year, month, 16, 19),
            'end': new Date(year, month, 16, 22),
            'title': 'Trolig utgång'
        }]
    };
    var calendar = $('#calendar').weekCalendar({
        daysToShow: widthSettings(),
        timeslotsPerHour: 4,
        timeslotHeigh: 30,
        //add 'a' to string to add am/pm
        timeFormat: "h:i",
        hourLine: true,
        data: eventData,
        //remove title
        title: 'Kalender',
        textSize: 13,
        timeSeparator: '-',
        allowCalEventOverlap: true,
        allowEventDelete: true,
        height: function($calendar) {
            return $(window).height() - $('h1').outerHeight(true);
        },
        /* Needs a styling here*/
        eventRender: function(calEvent, $event) {
            if (calEvent.end.getTime() < new Date().getTime()) {
                $event.css('backgroundColor', '#aaa');
                $event.find('.time').css({
                    'backgroundColor': '#999',
                    'border': '1px solid #888'
                });
            }
        },
        eventNew: function(calEvent, $event) {
            displayMessage('<strong>La till en händelse</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
        },
        eventDrop: function(calEvent, $event) {
            displayMessage('<strong>Moved Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
        },
        eventResize: function(calEvent, $event) {
            displayMessage('<strong>Resized Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
        },
        eventClick: function(calEvent, $event) {
            displayMessage('<strong>Clicked Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
        },
        eventMouseover: function(calEvent, $event) {
            displayMessage('<strong>Mouseover Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
        },
        eventMouseout: function(calEvent, $event) {
            displayMessage('<strong>Mouseout Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
        },
        noEvents: function() {
            displayMessage('There are no events for this week');
        }

    });

    function displayMessage(message) {
        $('#message').html(message).fadeIn();
    }
};