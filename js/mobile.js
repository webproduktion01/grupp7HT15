$(document).ready(function() {
    //Preventing any new animations to start while one is still in progress
    var animated = false;

    $(".vehicle").click(function() {
        //console.log(this);
        var index = $(this).index();
        //Entities i use in this listener
        var current = $(this);
        var parent = $(this).parent();
        //Speed for animation
        var animationTime = 1000;
        //console.log("IS something animated?: " + animated);
        if (!animated) {
            //It be animated if it isn't animated
            animated = true;
            //Emptying entity queues. Should probably do this at end of animation o.o
            current.dequeue();
            parent.dequeue();
            //console.log(index);
            //Using index to differentiate which vehicles are visible
            if (index === 1) {
                //Left animation, dependant on margin-left of current vehicle
                current.animate({
                    "margin-left": "-25%"
                }, animationTime, animationEnd).queue(function() {
                    current.prev().appendTo(current.parent());
                    current.css("margin-left", 0);
                });
            }
            else if (index === 2) {
                //Right animation. Wholly dependant on parent container
                parent.animate({
                    "padding-left": "50%"
                }, animationTime, animationEnd).queue(function() {
                    current.next().prependTo(parent);
                    parent.css("padding-left", 0);
                });
            }
        }
        //Function that runs att end of animation, makes sure animation is set to false again.
        function animationEnd() {
            animated = false;
            //console.log("Animation has ended");
        }
    });
});