// function slideMenu(){
//     //on
//     document.getElementById('tog_menu_btn_menu').onclick = function(){
//         document.getElementById("header").style.marginLeft = "0px";
//         document.getElementById("body").style.marginLeft = "300px";
//         document.getElementById('tog_menu_btn_menu').style.display = "none";
//         document.getElementById('tog_menu_btn_close').style.display = "inline-block";
//     }
//     //off
//     document.getElementById('tog_menu_btn_close').onclick = function(){
//         document.getElementById("header").style.marginLeft = "-300px";
//         document.getElementById("body").style.marginLeft = "0px";
//         document.getElementById('tog_menu_btn_close').style.display = "none";
//         document.getElementById('tog_menu_btn_menu').style.display = "inline-block";
//     }
// }

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