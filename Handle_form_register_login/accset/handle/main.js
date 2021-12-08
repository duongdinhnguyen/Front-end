
var error_notification = "*Chưa điền thông tin";
var list_input = document.querySelectorAll(".form-element-input");
var btn_submit = document.querySelector("button[type='submit']");
var value_password ="";
var listForm =[];
function checkInput(item, callback,index){
    var error_Element = item.parentElement.querySelector(".form-element-errorNotification");
    // xóa thông báo lỗi khi đang nhập dữ liệu
    item.oninput = function(){
        if(item.classList.contains("input-success", "input-error")){
            item.classList.remove("input-success");
            this.classList.remove("input-error");
        }
        
        error_Element.innerText = ``;
    }
    // thông báo khi blur ra khỏi trường input
    item.onblur = function(){
        var value_input = this.value.trim();
        
        if(!value_input){
            error_Element.innerText = error_notification;
            this.classList.add("input-error");

        }
        else{
            // kiểm tra đúng định dang chưa
            callback(this, error_Element, value_password);
        }

        // truyền data vào mảng
        listForm[index] ={value: item.value};
            
        
    }
}
// Đúng định dạng text
function textInput(item){
    item.classList.add("input-success");
}

// đúng định dạng email
function emailInput(item, error_Element){
    var errorEmail = "*Sai định dạng email.";
    var emailInnitial =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInnitial.test(item.value)){
        item.classList.add("input-success");
        
    }
    else {
        if(item.classList.contains("input-success")){
            item.classList.remove("input-success");
        }
        error_Element.innerText = errorEmail;
        item.classList.add("input-error");
    }
}


// đúng đính dạng password
function passwordInput(item, error_Element){
    var errorPassword = "*6-20 ký tự gồm 1 kí tự hoa, 1 kí tự số, 1 kí tự đặc biệt.";
    var passWordInitial  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    // Password từ 6-20 ký tự chứa 1 chữ số, 1 chữ hoa, 1 chữ thường
    if(item.value.match(passWordInitial)){
        item.classList.add("input-success");
        value_password = item.value;
    }
    else{
        if(item.classList.contains("input-success")){
            item.classList.remove("input-success");
        }
        error_Element.innerText = errorPassword;
        item.classList.add("input-error");
    }
    
}

// Kiểm tra retype-password với password
function passwordRetypeInput(item, error_Element, value_email){
    var errorRetype = "*Không đúng password";
    if(String(item.value) === String(value_email) ){
        item.classList.add("input-success");
    }
    else{
        if(item.classList.contains("input-success")){
            item.classList.remove("input-success");
        }
        error_Element.innerText = errorRetype;
        item.classList.add("input-error");
    }
}

// 
list_input.forEach((item,index) =>{
    
    if(item.id == "user-name" ){
        checkInput(item, textInput, index);
    }
    else if(item.id == "email"){
        checkInput(item, emailInput, index);
    }
    else if(item.id == "password"){
        checkInput(item, passwordInput, index);
    }
    else if(item.id == "retype-password"){
        checkInput(item, passwordRetypeInput, index);
    }
    
});


// handle event click submit form when no input data
btn_submit.onclick = function(e){
    e.preventDefault();
    if(listForm.length <= 0){
        list_input.forEach(item =>{
            item.classList.add("input-error");
            item.parentElement.querySelector("span").innerText = error_notification;
        });
    }
    else{
        // Lấy được data khi nhập
        console.log(listForm);
    }
}

// handle when submit
//return data when submit