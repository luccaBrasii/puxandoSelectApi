
const url = 'http://localhost:3000/api';
const select = document.querySelector('#select')

fetch(url)
    .then(response => response.json())
    .then(atendentes => {
        console.log(atendentes);

        atendentes.forEach((obj) => {
            
            const option = document.createElement('option');
        
            option.value = obj.nome;
            option.text = obj.nome;
        
            select.appendChild(option);
        });

    });
