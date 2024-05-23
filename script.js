document.addEventListener('DOMContentLoaded', function() {
  emailjs.init('YOUR_USER_ID'); // Substitua 'YOUR_USER_ID' pelo seu User ID do EmailJS

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const serviceID = 'YOUR_SERVICE_ID'; // Substitua pelo seu Service ID do EmailJS
    const templateID = 'YOUR_TEMPLATE_ID'; // Substitua pelo seu Template ID do EmailJS
    
    const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    emailjs.send(serviceID, templateID, templateParams)
      .then(function(response) {
        alert('Mensagem enviada com sucesso!', response.status, response.text);
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Falha ao enviar a mensagem...', error);
      });
  });
});