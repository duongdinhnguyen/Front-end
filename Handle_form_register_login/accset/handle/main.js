var error_notification = "Chưa điền thông tin";
var list_input = document.querySelectorAll(".form-element-input");

// function blurUserName(value){
    
// }
list_input.forEach(input_item =>{
    input_item.onblur = function(){
        var value_input = this.value;
        var error_Element = this.parentElement.querySelector(".form-element-errorNotification");

        if(!value_input){
            error_Element.innerText = error_notification;
        }
        else{
            error_Element.innerText = ``;
        }
    }
    
});