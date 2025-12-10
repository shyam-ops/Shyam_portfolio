<script defer>
    document.addEventListener("DOMContentLoaded", () => {
      const navButtons = document.querySelectorAll('.nav-link');
      navButtons.forEach(button => {
        button.addEventListener('click', () => {
          navButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        });
      });
    });
  </script>