

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        const container=document.createElement('div');
        document.body.appendChild(container);
        for (const item of value) {
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('Div');
        usersDiv.innerText = `${item.id} -- ${item.name}`;
        container.classList.add('con')
        container.append(usersDiv);


            const a = document.createElement('a');
            a.innerText = `Details`;
            usersDiv.append(a);
            a.href = `user-details.html?data=${item.id}`;
            a.classList.add('a');
    }
    });

