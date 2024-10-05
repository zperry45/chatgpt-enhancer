// Log to confirm that the script is loaded
console.log('Chat counter script loaded.');

function addChatCounter() {
    console.log('Running chat counter function...');

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
        // Select chat elements (you'll need to update the selector)
        const chats = document.querySelectorAll('.group.w-full');
        console.log('Number of chats found:', chats.length);  // Log the number of chats found
        counterElement.textContent = 'Chats used: ' + chats.length;
    }

    // Initial counter update
    updateCounter();

    // Observe changes in the chat container (you may need to adjust this selector too)
    const chatContainer = document.querySelector('div.flex.flex-col.items-center.text-sm.dark:bg-gray-800');
    if (chatContainer) {
        const observer = new MutationObserver(updateCounter);
        observer.observe(chatContainer, { childList: true, subtree: true });
    } else {
        console.log('Chat container not found');
    }
}

// Wait for the DOM to be fully loaded before running the function
window.addEventListener('DOMContentLoaded', addChatCounter);
