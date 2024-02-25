const dropdownToggle = document.getElementById("dropdownbtn");
const listDropdown = document.getElementById("myDropdown");
dropdownToggle.addEventListener('mouseover', () => {
    listDropdown.classList.add("show");
});

dropdownToggle.addEventListener('mouseout', () => {
    listDropdown.classList.remove("show");
});


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}