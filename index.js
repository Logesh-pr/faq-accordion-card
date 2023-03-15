let faq = document.querySelectorAll("#faq");

faq.forEach((btn) => {
    btn.addEventListener("click" , () => {

        if(btn.classList.contains("active")){
            btn.classList.toggle("active")
        }
        else {
            faq.forEach(btn_items => btn_items.classList.remove("active"))
            btn.classList.add("active")
        }
    } )
} )