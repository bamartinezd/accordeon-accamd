const tabs = document.getElementsByClassName("container-tabs");

for (var i = 0; i < tabs.length; i++){
    const item = tabs[i];
    item.addEventListener("click", e => {
        showOrHidePanel(item);
    });
}

function showOrHidePanel(item){
    const panel = item.children[1];
    if (panel.classList.contains("hide-panel")) {
        panel.classList.replace("hide-panel","show-panel");
    }else{
        panel.classList.replace("show-panel","hide-panel");
    }
}