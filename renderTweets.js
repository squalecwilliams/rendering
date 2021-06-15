
function renderTweets(tweetsAbs) {
    const tweetsHTML = tweetsAbs.map( tweet => {
        if(tweet.user.isVerified){
            return `
                <div class='tweet'>
                    <div class='profile-area profile-box'>
                        <img src='${tweet.user.profilePic}' class='profile-pic'>
                        <div class='profile-info'>
                            <b>${tweet.user.username}</b><img src='https://www.pinclipart.com/picdir/middle/539-5394357_twitter-verified-badge-png-transparent-image-twitter-verified.png' class='icon'><br>
                            <p style='font-size:10px; color:blue;'>${tweet.user.handle}</p>
                        </div>
                    </div>
                    <div class='box'>
                        <h4>${tweet.text}</h4>
                        <hr>
                    </div>
                    <div class='tweet-extras'>
                        <div class='extras'>
                            <img src='https://cdn3.iconfinder.com/data/icons/twitter-ui/48/jee01-25-512.png' class='icon'>
                            <div style='align-self:center;'>${tweet.replies}</div>
                        </div>   
                        <div class='extras'>
                            <img src='https://www.pikpng.com/pngl/m/16-169951_retweet-twitter-png-retweet-icon-clipart.png' class='icon'>
                            <div style='align-self:center;'>${tweet.retweets}</div>
                        </div>
                        <div class='extras'>
                            <img src='https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png' class='icon'>
                            <div style='align-self:center;'>${tweet.likes}</div>
                        </div>
                        <img src='http://getdrawings.com/free-icon/direct-message-icon-51.png' class='icon' style='align-self:center;'> 
                    </div>
                </div>
            `
        } else{
            return `
            <div class='tweet'>
                <div class='profile-area profile-box'>
                    <img src='${tweet.user.profilePic}' class='profile-pic'>
                    <div class='profile-info'>
                        <b>${tweet.user.username}</b><br>
                        <p style='font-size:10px; color:blue;'>${tweet.user.handle}</p>
                    </div>
                </div>
                <div class='box'>
                    <h4>${tweet.text}</h4>
                    <hr>
                </div>
                <div class='tweet-extras'>
                    <div class='extras'>
                        <img src='https://cdn3.iconfinder.com/data/icons/twitter-ui/48/jee01-25-512.png' class='icon'>
                        <div style='align-self:center;'>${tweet.replies}</div>
                    </div>   
                    <div class='extras'>
                        <img src='https://www.pikpng.com/pngl/m/16-169951_retweet-twitter-png-retweet-icon-clipart.png' class='icon'>
                        <div style='align-self:center;'>${tweet.retweets}</div>
                    </div>
                    <div class='extras'>
                        <img src='https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png' class='icon'>
                        <div style='align-self:center;'>${tweet.likes}</div>
                    </div>
                    <img src='http://getdrawings.com/free-icon/direct-message-icon-51.png' class='icon' style='align-self:center;'> 
                </div>
            </div>
            `
        }

    })
    
    return `
        <div class="text-left mt-5" style='display:flex; flex-direction:column; align-content:space-evenly;'>
            ${tweetsHTML.join('')}
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}