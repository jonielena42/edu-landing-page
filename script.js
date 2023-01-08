// Create the menu element
var menu = document.createElement('div');
menu.classList.add('popout-menu');
menu.innerHTML = `
  <div class="menu-items">
    <a class="menu-item" href="#">Menu item 1</a>
    <a class="menu-item" href="#">Menu item 2</a>
    <a class="menu-item" href="#">Menu item 3</a>
  </div>
`;

// Add the menu to the page
document.body.appendChild(menu);

// Create the menu toggle button
var toggleButton = document.createElement('button');
toggleButton.classList.add('menu-toggle-button');
toggleButton.innerHTML = 'Projects';
document.body.appendChild(toggleButton);

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the 'menu-open' class on the menu
  menu.classList.toggle('menu-open');
});
