extractUserPosts=(response) =>{
    res = []
    for (let i = 0; i < response.length; i++) {
        userId = response[i].id;
        userName = response[i].name;
        postTitles = "";
        for (let j = 0; j < response[i].posts.length; j++) {
            postTitles += response[i].posts[j].title + " ";
        }
        res.push({ userId, userName, postTitles });
    }
    return res;
}
const apiResponse = [
    {
        id: 126156019,
        name: 'hari',
        posts: [
            { title: 'Hello World', content: 'This is my first post!' },
            { title: 'React', content: 'useful tips for react' }
        ]
    },
    {
        id: 126156029,
        name: 'sai',
        posts: [
            { title: 'JavaScript', content: 'simple methods' },
            { title: 'Python', content: 'easy methods.' }
        ]
    }
];

console.log(extractUserPosts(apiResponse));
