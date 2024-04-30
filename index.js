const express = require('express');
const app = express();

const estiloCss = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}
h1 {
    text-align: center;
}
.resultado {
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
`;

function gerarTabuada(numero, sequencia) {
    let resultado = '';
    for (let i = 0; i <= sequencia; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    return resultado;
}

app.get('/', (req, res) => {
    const tabuada = parseInt(req.query.tabuada) || 1;
    const sequencia = parseInt(req.query.sequencia) || 10;

    res.write('<html>');
    res.write('<head>');
    res.write('<title>Tabuada</title>');
    res.write('<style>' + estiloCss + '</style>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Tabuada do ' + tabuada + '</h1>');
    res.write('<div class="resultado">');
    
    for (let i = 0; i <= sequencia; i++) {
        res.write(`${tabuada} x ${i} = ${tabuada * i}<br>`);
    }
    
    res.write('</div>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
