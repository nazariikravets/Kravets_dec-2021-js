// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts=>posts.json())
    .then(posts=>{
        console.log(posts)
        let div = document.createElement('div');
        div.classList.add('wrap')
        for (const post of posts) {
            let divPost = document.createElement('div');
            let divUserId = document.createElement('div');
            let id = document.createElement('div');
            let title = document.createElement('div');
            let body = document.createElement('div');
            divPost.classList.add('post')
            divUserId.innerText=post.userId
            id.innerText=post.id
            title.innerText=post.title
            body.innerText=post.body
            divPost.append(divUserId,id,title,body)
            div.appendChild(divPost)
        }
        document.body.appendChild(div)
    })






//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(comments=>comments.json())
    .then(comments=>{
        console.log(comments)
        let divComments = document.createElement('div');
        divComments.classList.add('wrap')
        for (const element of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('comment')
            let postId = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('h3');
            let email = document.createElement('div');
            let body = document.createElement('p');
            postId.innerText=element.postId
            id.innerText=element.id
            name.innerText=element.name
            email.innerText=element.email
            body.innerText=element.body
            divComment.append(postId,id,name,email,body)
            divComments.append(divComment)

        }
        document.body.appendChild(divComments)
    })