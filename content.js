// content.js

function addChatCounter() {
    // Create a counter element
    const counterElement = document.createElement('div');
    counterElement.id = 'chat-counter';
    counterElement.textContent = 'Chats used: 0';
  
    // Apply styles to the counter
    counterElement.style.position = 'fixed';
    counterElement.style.bottom = '20px';
    counterElement.style.right = '20px';
    counterElement.style.backgroundColor = '#333';
    counterElement.style.color = '#fff';
    counterElement.style.padding = '10px';
    counterElement.style.borderRadius = '5px';
    counterElement.style.fontSize = '14px';
    counterElement.style.zIndex = '1000';
  
    // Append the counter to the body
    document.body.appendChild(counterElement);
  
    // Function to update the counter
    function updateCounter() {
      // Select chat elements (modify the selector based on actual ChatGPT DOM)
      const chats = document.querySelectorAll('.group.w-full'); // Update this selector as needed
      counterElement.textContent = 'Chats used: ' + chats.length;
    }
  
    // Initial counter update
    updateCounter();
  
    // Observe changes in the chat container
    const chatContainer = document.querySelector('div.flex.flex-col.items-center.text-sm.dark:bg-gray-800'); // Update as needed
    if (chatContainer) {
      const observer = new MutationObserver(updateCounter);
      observer.observe(chatContainer, { childList: true, subtree: true });
    }
  }
  
  // Wait for the window to load before executing
  window.addEventListener('load', addChatCounter);
  // Remove inline styles
function addChatCounter() {
    const counterElement = document.createElement('div');
    counterElement.id = 'chat-counter';
    counterElement.textContent = 'Chats used: 0';
  
    // Append the counter to the body
    document.body.appendChild(counterElement);
  
    // Rest of the code remains the same...
  }  