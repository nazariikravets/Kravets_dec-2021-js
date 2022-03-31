let url = new URL(location.href)
let element = JSON.parse(url.searchParams.get('date'))

let postInfiDiv = document.createElement('div');
postInfiDiv.innerText=`userId: ${element.userId}; id: ${element.id}; title: ${element.title}; body: ${element.body}`
postInfiDiv.classList.add('postInfiDiv')

let  commentPost= document.createElement('div');
commentPost.classList.add('commentPost')
document.body.append(postInfiDiv,commentPost)

fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}/comments`)
    .then(users => users.json())
    .then(posts => {
        console.log(posts)
        for (const post of posts) {
let bodyComment = document.createElement('div');
bodyComment.classList.add('bodyComment')
bodyComment.innerText=post.body
commentPost.appendChild(bodyComment)

        }


    })