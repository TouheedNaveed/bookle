document.getElementById('openSidebarButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('translate-x-full');
  });
  
  document.getElementById('closeSidebarButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('translate-x-full');
  });
  

  document.querySelectorAll('.expand').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const submenu = this.closest('li').querySelector('.submenu');
  
      // Toggle the hidden class and expand/collapse the submenu
      if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        submenu.style.maxHeight = submenu.scrollHeight + "px"; // Expand
        this.innerHTML = '<i class="fas fa-times"></i>'; // Change to cross icon
      } else {
        submenu.style.maxHeight = "0px"; // Collapse
        submenu.addEventListener('transitionend', () => {
          submenu.classList.add('hidden');
        }, { once: true });
        this.innerHTML = '<i class="far fa-plus"></i>'; // Change back to plus icon
      }
    });
  });
  