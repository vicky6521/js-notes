window.onload = function() {
    let btn = document.querySelectorAll('.tablinks');
    let content = document.querySelectorAll('.tabcontent');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function(e) {
            for (let j = 0; j < btn.length; j++) {
                btn[j].className = btn[j].className.replace("active", "");
                content[j].style.display = "none";
            }
            e.target.className += " active";
            content[i].style.display = "block";
        });
    }
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let sum = document.querySelector('.sum');
    sum.textContent = parseFloat(num1.value) + parseFloat(num2.value);

    num1.addEventListener("change", handleChange)
    num2.addEventListener("change", handleChange)

    function handleChange() {
        sum.textContent = parseFloat(num1.value) + parseFloat(num2.value);
    }
}