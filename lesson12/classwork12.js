// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(posts => {
        let div = document.createElement('div');
        div.classList.add('wrap')
        for (const post of posts) {
            let divPost = document.createElement('div');
            let divUserId = document.createElement('div');
            let id = document.createElement('div');
            let title = document.createElement('div');
            let body = document.createElement('div');
            let btn1 = document.createElement('button');
            btn1.innerText = 'Подивитись коменти'
            divPost.classList.add('post')
            divUserId.innerText = post.userId
            id.innerText = post.id
            title.innerText = post.title
            body.innerText = post.body
            divPost.append(divUserId, id, title, body, btn1)
            div.appendChild(divPost)
            btn1.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(comment => comment.json())
                    .then(commentId => {
                        for (const element of commentId) {
                            if (post.id === element.postId) {
                                let divComments = document.createElement('div');
                                divComments.classList.add('comments');
                                divComments.innerHTML = `
                                        <h3>ID: ${element.id}</h3>
                                        <h4>Name: ${element.name}</h4>
                                        <h5>Email: ${element.email}</h5>
                                        <h6>Body: ${element.body}</h6>`
                                divPost.append(divComments)
                                btn1.disabled=true
                            }

                        }
                    })
            }
        }

        document.body.appendChild(div)
    })

