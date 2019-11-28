let friendsArray = [
    {
        name:'Bob Stine',
        image:'https://cg3.cgsociety.org/uploads/images/medium/gpepper-bald-guy-1-033129fc-70tn.jpg',
        survey: [1,3,5,2,3,4,1,1,2,5]
    },
    {
        name:'Terri Grapes',
        image:'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg',
        survey: [4,5,5,3,5,5,5,2,5,1]
    },
    {
        name:'Mark Mainecoon',
        image:'https://news.nd.edu/assets/113411/james_brockmole_300.jpg',
        survey: [3,3,3,3,3,3,3,3,3,3]
    },
    {
        name:'ed',
        image:'https://bloximages.chicago2.vip.townnews.com/bozemandailychronicle.com/content/tncms/assets/v3/editorial/0/7b/07b9d51a-9036-5b76-88c7-c486bf995a2d/5d795cd0e4a96.image.jpg',
        survey: [1,2,3,5,1,1,2,1,2,1]
    }
]

function addUser(userObj){
    friendsArray.push(userObj)
    console.log(userAdded)
}

module.exports = friendsArray,addUser