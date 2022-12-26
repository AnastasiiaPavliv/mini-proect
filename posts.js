let url = new URL(location.href);
const post = url.searchParams.get('asd');
console.log(post);

 let parse=JSON.parse(post);
 console.log(parse);

 fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}` )
    .then(value => value.json())
    .then(posts => {
        const container=document.createElement('div');
        document.body.appendChild(container);

        for (const item in posts) {
            let tDiv=document.createElement('div');
          let p=document.createElement('p');
           p.innerHTML= `<b>${item}:</b> ${posts[item]}`;
           tDiv.appendChild(p);
            document.body.append(tDiv);
            container.classList.add('container');
            container.append(tDiv)
        }


        const text=document.createElement('div');
        text.innerHTML='<b>COMMENTS:</b>'
        text.classList.add('text');
        document.body.appendChild(text);
        text.classList.add('text');

        fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments `)
            .then(value => value.json())
            .then(valueC =>{
                const container1=document.createElement('div');
                document.body.appendChild(container1);
                for (const comment of valueC) {
                    let div=document.createElement('div');
                    let p = document.createElement('p');
                     p.innerHTML= `<b>postId:</b> ${comment.postId}
                    <p><b>id:</b> ${comment.id}</p>
                    <p><b>name:</b> ${comment.name}</p>
                    <p><b>email:</b> ${comment.email}</p>
                  <p><b> body:</b> ${comment.body}</p>`
                    div.appendChild(p);
                    div.classList.add('div')
                    document.body.append(div);
                    container1.classList.add('container1');
                    container1.append(div)
                }

            })
    });
