function calcular(tipo, valor){
    if (tipo === "acao"){
        // limpando campo do resultado
        if(valor === 'c'){
            document.getElementById('resultado').value = ''
        }

        // adicionando as operações nos valores
        if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "."){
            document.getElementById('resultado').value += valor
        }

        //verificar o resultado do cálculo
        if(valor === "="){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }

    } else if (tipo === "valor"){
        document.getElementById('resultado').value += valor
    }
}