document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona todas las alertas con la clase 'auto-dismiss'
    var alerts = document.querySelectorAll('.auto-dismiss');

    // Recorre cada alerta y configura un temporizador para ocultarla después de 5 segundos
    alerts.forEach((alert) => {
      setTimeout(() => {
        // Oculta la alerta suavemente
        alert.classList.add('fade');
        setTimeout(() => {
          alert.classList.remove('show');
          // Elimina la alerta del DOM después de que la animación de desvanecimiento termine
          setTimeout(() => {
            alert.remove();
          }, 150); // Tiempo para la animación de desvanecimiento (150ms)
        }, 150); // Asegura que la clase 'fade' se aplica antes de remover 'show'
      }, 5000); // 5000ms = 5 segundos
    });
  });