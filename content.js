console.log("Listner Registering");
document.addEventListener('transitionend', function (e) {
    var HTMLcollection = document.getElementsByClassName('ytp-ad-skip-button');
    for (var i = 0; i < HTMLcollection.length; i++) {
        console.log("Found Element");
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        // If cancelled, don't dispatch our event
        var canceled = !HTMLcollection[i].dispatchEvent(evt);
    }
});