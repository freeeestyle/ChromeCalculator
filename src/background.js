chrome.app.runtime.onLaunched.addListener(function() {
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = 120;
    var height = 135;
    
    chrome.app.window.create("src/calc.html",{
        bounds: {
            width: width,
            height: height,
            left: 100/*Math.round((screenWidth - width)/2)*/,
            top: 100/*Math.round((screenHeight - height)/2)*/

        }/*,
		frame: "none"
		*/
    });
});