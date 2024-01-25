chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'displayResponse') {
        // Call a function to display the response on the webpage
        displayResponse(message.response);
    }
});

function displayResponse(response) {
    console.log('Content.js received response:', response);
    // You can customize how to display the response on the webpage if needed
    // For example, you might want to append the response to a specific element.
}