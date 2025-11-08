// Ждем когда вся страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    
    form.addEventListener('submit', function(event) {
        const nameInput = document.querySelector('.name_input');
        const emailInput = document.querySelector('.email_input');
        const subjectInput = document.querySelector('.subject_input');
        const messageInput = document.querySelector('.message_input');
        
        let hasErrors = false;
        
        // Проверяем имя
        if (nameInput.value.trim().length < 2) {
            alert('Имя должно содержать минимум 2 символа');
            hasErrors = true;
        }
        
        // Проверяем email
        if (!emailInput.value.includes('@')) {
            alert('Введите корректный email адрес');
            hasErrors = true;
        }
        
        // Проверяем тему
        if (subjectInput.value.trim().length < 3) {
            alert('Тема должна содержать минимум 3 символа');
            hasErrors = true;
        }
        
        // Проверяем сообщение
        if (messageInput.value.trim().length < 10) {
            alert('Сообщение должно содержать минимум 10 символов');
            hasErrors = true;
        }
        
        // Если есть ошибки - останавливаем отправку
        if (hasErrors) {
            event.preventDefault();
        } else {
            alert('✅ Сообщение отправлено! Мы скоро с вами свяжемся.');
            // Здесь будет отправка на PHP
        }
    });
});