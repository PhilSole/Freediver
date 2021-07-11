const FD = {};

function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        callbackFunc();
    } else {
        document.addEventListener('DOMContentLoaded', callbackFunc);
    }
}

ready(function () {
    console.log('under way');
});