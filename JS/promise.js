var users = [
    {
        id: 1,
        name: "Duong"
    },
    {
        id: 2,
        name:"Dinhnguyen"
    },
    {
        id : 3,
        name: "duonqdinhnquyen"
    }
];
var comments = [
    {
        id: 1,
        user_id: 1,
        comment : "say Hi"
    },
    {
        id : 2,
        user_id: 3,
        comment: "What sup man"
    },
    {
        id : 3,
        user_id: 3,
        comment:"ây zo"
    }
];

// Lấy comment
// Từ comment lấy ra user_id
// Lấy ra user từ user_id


// Fake API, viết hàm lấy comment ra từ API fake
// vì lấy dữ liệu trên internet, trên sever là xử lý bất 
//đồng bộ,cần thời gian để xử lý nên sẽ sử dụng Promise
function getComments(){
    return new Promise((resole)=>{
        setTimeout(()=>{
            resole(comments);
        },2000);
    });
}
function getUsers(array){
    return new Promise((resole)=>{

        var result = users.filter((user)=>{
            return array.includes(user.id);
        });
        setTimeout(()=>{
            resole(result);
        },3000);
    });
}

getComments().then((comments)=>{
    console.log("Lấy dữ liệu từ API của comment: ",comments);
    var user_ids = comments.map((comment)=>{
        return comment.user_id;
    });
    console.log(user_ids);
    return getUsers(user_ids).then((users)=>{
        return new Promise((resole)=>{
            resole([users, comments]);
        });
    });

}).then((data)=>{
    var comments = data[1];
    var users = data[0];
    
    var html = ``;
    comments.forEach(comment => {
        
         var user = users.find((user)=>{
             return user.id === comment.user_id;
         });
         html += `<li>${user.name} : ${comment.comment}</li>`;
    });
    
     document.getElementById("comment-box").innerHTML= html;
});

