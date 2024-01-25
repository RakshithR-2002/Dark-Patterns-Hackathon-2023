// popup.js

document.addEventListener('DOMContentLoaded', function () {
  const captureBtn = document.getElementById('captureBtn');
  const responseContainer = document.getElementById('responseContainer');

  // Establish a connection with the background script
  const port = chrome.runtime.connect({ name: 'popup' });

  // Listen for messages from the background script
  port.onMessage.addListener(function (message) {
      if (message.action === 'displayResponse') {
          // Process the response and display it in an organized manner
          const organizedResponse = formatOrganizedResponse(message.response);
          createVisualRepresentation(organizedResponse);
      }
  });

  // Trigger capturing the screenshot when the button is clicked
  captureBtn.addEventListener('click', function () {
      // Send a message to the background script to capture the screenshot
      port.postMessage({ action: 'captureScreenshot' });
  });
});

// Function to create a visual representation of the parsed response
function createVisualRepresentation(parsedResponse) {
  const mainContainer = document.createElement('div');
  responseContainer.appendChild(mainContainer);

  // Create headings and lists for different categories of dark patterns
  if (parsedResponse.seriousDarkPatterns.length > 0) {
      const seriousHeading = createHeadingElement('Serious Dark Patterns');
      mainContainer.appendChild(seriousHeading);
      const seriousList = createListElement(parsedResponse.seriousDarkPatterns);
      mainContainer.appendChild(seriousList);
  }

  if (parsedResponse.milderDarkPatterns.length > 0) {
      const milderHeading = createHeadingElement('Milder Dark Patterns');
      mainContainer.appendChild(milderHeading);
      const milderList = createListElement(parsedResponse.milderDarkPatterns);
      mainContainer.appendChild(milderList);
  } else {
      const noPatternsMessage = document.createElement('p');
      noPatternsMessage.textContent = 'No significant dark patterns were detected.';
      mainContainer.appendChild(noPatternsMessage);
  }

  // Function to create a heading element
  function createHeadingElement(text) {
      const heading = document.createElement('h2');
      heading.textContent = text;
      return heading;
  }

  // Function to create a list element with images (if applicable)
  function createListElement(patterns) {
      const list = document.createElement('ul');
      patterns.forEach(pattern => {
          const listItem = document.createElement('li');
          listItem.textContent = pattern.description;

          if (pattern.imageUrl) {
              const image = document.createElement('img');
              image.src = pattern.imageUrl;
              image.alt = 'Visual representation of the dark pattern';
              listItem.appendChild(image);
          }

          list.appendChild(listItem);
      });
      return list;
  }
}

// Function to parse and organize the LLM response
function parseAndOrganizeResponse(response) {
  // Adjust this logic based on the actual response structure from your LLM
  const seriousDarkPatterns = [];
  const milderDarkPatterns = [];

  response.forEach(pattern => {
    if (pattern.severity === "severe") {
      // Extract relevant information
      const description = pattern.description;
      const location = pattern.location;
      const keywords = pattern.keywords;
      const imageUrl = pattern.imageUrl; // Optional

      seriousDarkPatterns.push({
        description,
        location,
        keywords,
        imageUrl,
      });
    } else {
      milderDarkPatterns.push({
        description,
        imageUrl, // Optional
      });
    }
  });

  return {
    seriousDarkPatterns,
    milderDarkPatterns,
  };
}