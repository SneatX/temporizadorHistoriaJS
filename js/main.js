let inputs = document.querySelectorAll(".inputCaracter")

inputs.forEach(function(input){
    input.addEventListener("input", function() {
        console.log(this) /* this == input*/
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    })

    input.addEventListener("click" , event =>{
        input.value = ''
    })
})
