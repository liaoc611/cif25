    const namePrompt = document.getElementById('namePrompt');
    const greetingMessage = document.getElementById('greetingMessage');
    const goodbyeName = document.getElementById('goodbyeName')

        namePrompt.addEventListener('click', function() {
        const userName = prompt('what should i call you?');
        if (userName !== null && userName.trim() !== '') {
            greetingMessage.textContent = `it's nice to finally meet you, ${userName}.`;
            goodbyeName.textContent = `, ${userName}. \u2661`;
        } else if (userName !== null && userName.trim() === '') {
            greetingMessage.textContent = 'well, okay. no matter. eventually i will get to know you.';
            goodbyeName.textContent = `.`;
        }

    });