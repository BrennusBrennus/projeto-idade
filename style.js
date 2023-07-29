function enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = 'lightblue'
            if (idade >= 0 && idade < 3) {
                // bebê
                img.setAttribute('src', 'bebe.png')

            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'menino.png')

            } else if (idade < 18) {
                // jovem
                img.setAttribute('src', 'rapaz.png')

            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'homem.png')

            } else if (idade < 60) {
                // meia-idade 
                img.setAttribute('src', 'quarento.png')

            } else {
                // idoso 
                img.setAttribute('src', 'velho.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = 'pink'
            if (idade >= 0 && idade < 3) {
                // bebê
                img.setAttribute('src', 'bebe.png')

            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'menina.png')

            } else if (idade < 18) {
                // jovem
                img.setAttribute('src', 'moça.png')

            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'mulher.png')

            } else if (idade < 60) {
                // meia-idade 
                img.setAttribute('src', 'quarenta.png')
                
            } else {
                // idoso 
                img.setAttribute('src', 'velha.png')
            }
            
        }
        
        
    }
    res.innerHTML = `Você é <strong>${genero}</strong> e tem ${idade} anos de idade`
    res.appendChild(img)
}