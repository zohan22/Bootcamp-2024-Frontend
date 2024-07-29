const posts = [
    {
        id:1,
        title: 'My first post',
        image: 'https://img.com/1',
        tags: ['javascript', 'webdevelopment'],
    },
    {
        id:2,
        title: 'My experience with React',
        image: 'https://img.com/2',
        tags: ['javascript', 'webdevelopment', 'react'],
    },
    {
        id:1,
        title: 'Why leave angular?',
        image: 'https://img.com/3',
        tags: ['javascript', 'webdevelopment', 'angular'],
    }
]

//FIND
let finded = posts.find(post => post.id === 1);
console.log(finded);