// Open Changelog
function ChangelogsDropdown(item) {
    const elem = item.children;
    const arr = elem[0].children;
    const arrow = arr[0];
    if (elem[1].style.display == "none" || elem[1].style.display == "") {
        elem[1].style.display = "block";
        arrow.className = "arrow down";
    }
    else {
        elem[1].style.display = "none";
        arrow.className = "arrow left";
    }
}