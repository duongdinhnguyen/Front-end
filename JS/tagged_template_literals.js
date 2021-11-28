// Cách dùng khác của ...rest

var product_name = "Quần bò";
var product_description = "được sản xuất ở Việt Nam,";

function convert([header_string, ...body_string], ...data){
    // console.log(header_string);
    // console.log(body_string);
    // console.log(data);
    var item = document.getElementById("comment-box");
    
    var html = data.reduce((header_string, item_string)=>{
        return header_string + `<b>${item_string}</b>` + body_string.shift();
        
    },header_string);
    
    item.innerHTML = html;
}
convert`Giới thiêu: ${product_name} là một sản phẩm ${product_description} có giá thành hợp lí.`;