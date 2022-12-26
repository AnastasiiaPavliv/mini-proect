const url = new URL(location.href);
const id = url.searchParams.get('data');
const container=document.createElement('div');
document.body.appendChild(container);

const container2=document.createElement('div');
document.body.appendChild(container2);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {


            container.classList.add('userDiv');
            const userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {

                userDiv.innerHTML = `<b>${item} --</b> ${value[item]}`;
            } else {
                userDiv.innerHTML = `<b>${item} :</b>`

                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerHTML = `<b>${key} --</b> ${value[item][key]}`;

                    } else {
                        userInnerDiv.innerHTML = `<b>${key} :</b>`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerHTML = `<b>${element} --</b> ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            document.body.append(userDiv);
            userDiv.classList.add('user');
             document.body.appendChild(container);
             container.append(userDiv);
             container2.append(container)
        }

    });




const container1=document.createElement('div');
document.body.appendChild(container1);
let target=document.querySelector('.target');
let btn=document.querySelector('.btn');
btn.onclick=function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let postDiv = document.createElement('div');
                postDiv.innerText = post.title;
                const a = document.createElement('a')
                a.innerHTML=  `<b><p> Detail of post </p></b>`;
                postDiv.append(a);
                a.href = `post-details.html?asd=` +JSON.stringify(post);
                document.body.appendChild(postDiv);
                postDiv.classList.add('post');
                 document.body.appendChild(container1);
                 container1.append(postDiv);
                container1.classList.add('container1');


            }

        })
btn.disabled= true;
}
document.body.appendChild(container2);
container2.append(btn);
container2.append(container);
container2.classList.add('container2')