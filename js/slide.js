/* 	
	Minimum itemcount needs to be 4 minimum
	containerContainer needs to be wide enough to fit all items on the x-axis:
    Example containerContainer size:  4 items at 50% each = 200%
 	Viewport maximum size is atleast (number of items - 2) 
	Viewport minimum size is atleast 2 items wide
*/
function slideShow(tClass, animationSpeed, viewableItems) {
    this.tClass = tClass;
    this.animationSpeed = animationSpeed;
    this.viewableItems = viewableItems;
    //console.log(tClass);
    //console.log($(tClass));
    var items = $(tClass).length;
    //console.log(items);

    // calculate itemwidth = 100/ viewableitems = item width size
    // containerContainer size = (item width * items);
    // viewport = 100%
    // 
    //Setting components size
    // 100px
    var itemWidth;
    //200px
    var viewport = 100;
    //100px
    itemWidth = viewport / viewableItems;
    //400px
    var containerWidth = (items * itemWidth);
    //% is always a percentage of parent
    var adaptedItemWidth = (((viewport/containerWidth) * (itemWidth/100))*100);
    //console.log("((("+viewport+"/"+containerWidth+") * (100/"+itemWidth+"))*100) ="+adaptedItemWidth);
    //console.log(0.5*0.5*100);
    $(tClass).css({
        "min-width": adaptedItemWidth + "%",
        "max-width": adaptedItemWidth + "%",
        "width": adaptedItemWidth + "%",
        "display":"block",
    	"float":"left",
    	//"background-color":"yellow",
    	"margin":0
    });
    //Setting container width
    $(tClass).parent().css({
        "min-width": containerWidth + "%",
        "max-width": containerWidth + "%",
        "width": containerWidth + "%",
    	"margin":0,
        "margin-left":"-"+itemWidth + "%",
    	"display":"block"
        //"background-color":"green"
    });
    $(tClass).parent().parent().css({
       "min-width": "100%",
       "max-width": "100%",
       "width": "100%",
    	"overflow":"hidden",
    	"margin":0
    });
    var leftClickable = (containerWidth/viewableItems);
    var rightClickable = adaptedItemWidth;
	/* Creating the actuall slide*/
    this.createSlide = function() {
    	var animated = false;        
        $(tClass).click(function() {
            console.log($(tClass));
            var current = $(this);
            var posX = current.position().left;
            console.log("Position:"+posX);
            var index = current.index();
            console.log("index: "+index);
            var parent = current.parent();
            console.log("Är något animaterat?: " + animated);
            if (!animated) {
                animated = true;
                current.dequeue();
                parent.dequeue();
                //Element farthest left in viewpoint
                if (posX  < adaptedItemWidth) {
                    //Left animation
                    current.animate({
                        "margin-left": "-" + adaptedItemWidth + "%"
                    }, animationSpeed, animationEnd).queue(function() {
                        current.parent().children().first().appendTo(current.parent());
                        current.css("margin-left", 0);
                    });
                }
                //Right trigger is approximate
                else if (posX >=adaptedItemWidth*index) {
                    //Right animation
                    parent.animate({
                        "padding-left": itemWidth + "%"
                    }, animationSpeed, animationEnd).queue(function() {
                        current.parent().children().last().prependTo(parent);
                        parent.css("padding-left", 0);
                    });
                }
            }

            function animationEnd() {
                animated = false;
                console.log("Animation has ended");
            }
        });
    };
}