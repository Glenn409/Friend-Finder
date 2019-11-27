let friendsArray = [
    {
        name:'bob',
        image:'https://cg3.cgsociety.org/uploads/images/medium/gpepper-bald-guy-1-033129fc-70tn.jpg',
        survey: [1,3,5,2,3,4,1,1,2,5]
    },
    {
        name:'byron',
        image:'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F42977075%2F960x0.jpg%3Ffit%3Dscale',
        survey: [5,5,5,5,5,5,5,5,5,5]
    },
    {
        name:'tim',
        image:'adfhttps://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F42977075%2F960x0.jpg%3Ffit%3Dscale',
        survey: [3,3,3,3,3,3,3,3,3,3]
    },
    {
        name:'ed',
        image:'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F42977075%2F960x0.jpg%3Ffit%3Dscale',
        survey: [1,1,1,1,1,1,1,1,1,1]
    }
]

function addUser(userObj){
    friendsArray.push(userObj)
    console.log(userAdded)
}

module.exports = friendsArray,addUser