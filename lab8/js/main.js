window.onload = () => {
    
    var ft = document.getElementsByClassName('footer__inner')[0]    
    var btn = document.getElementById('footer__button')    
    var x = document.getElementsByClassName("footer__close")[0]
    var inp = document.getElementById('txt')   
    var btn2 = document.getElementById('accept')

    btn.onclick = function() {
        ft.style.display = "flex"
        ft.scrollIntoView(top)
    }

    x.onclick = function() {
        ft.style.display = "none"
    }   

        btn2.onclick = function() {
        var txt = inp.value
        try{
            alert(eval(txt))
        }

        catch(a){
             alert(txt)
        }
           
    }
	

}


