document.getElementById('openSidebarButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('translate-x-full');
  });
  
  document.getElementById('closeSidebarButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('translate-x-full');
  });
  document.querySelectorAll('.expand').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const submenu = this.previousElementSibling;
  
      // Toggle the hidden class
      submenu.classList.toggle('hidden');
  
      // Change the icon from plus to minus
      this.innerHTML = submenu.classList.contains('hidden') 
        ? '<i class="far fa-plus"></i>' 
        : '<i class="fas fa-times"></i>';
    });
  });
    