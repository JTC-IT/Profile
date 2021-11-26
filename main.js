function activeMenu(){
    const menuItems = document.querySelectorAll('.menuItem');
    const menuLength = menuItems.length;
    for(let i = 0; i < menuLength; i++){
        menuItems[i].onclick = function(){
            let j = 0;
            while(j < menuLength){
               menuItems[j++].className = "menuItem"; 
            }
            menuItems[i].className = "menuItem active";
        }
    }
}

function winScroll(){
    if($(this).scrollTop()){
        $(".nav_menu").addClass("sticky");
    }else $(".nav_menu").removeClass("sticky");
}

$(window).scroll(winScroll);
activeMenu();