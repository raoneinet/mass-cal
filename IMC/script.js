 function calcular(){
            let res = document.querySelector('#res')
            let altura = document.querySelector('#altura')
            let peso = document.querySelector('#peso')
            let alt = Number(altura.value)
            let pes = Number(peso.value)

            let soma = pes / alt **2

            if(soma < 18.5){
                res.innerHTML = `<p>IMC: <strong>${soma.toFixed(1)} / MAGREZA</strong></p>`
            }else if(soma > 18.5 && soma < 24.9){
                res.innerHTML = `<p>IMC: <strong>${soma.toFixed(1)} / NORMAL</strong></p>`
            }else if(soma > 24.9 && soma < 30){
                res.innerHTML = `<p>IMC: <strong>${soma.toFixed(1)} / SOBREPESO</strong></p>`
            }else if(soma > 30){
                res.innerHTML = `<p>IMC: <strong>${soma.toFixed(1)} / OBESIDADE</strong></p>`
            }
        }