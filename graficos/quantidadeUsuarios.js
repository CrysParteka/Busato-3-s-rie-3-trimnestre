import Plotly from 'https://cdn.plot.ly/plotly-2.27.0.min.js';

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
                color: 'var(--primary-color)' // Cor dos gráficos
            }
        }
    ];

    const layout = {
        title: 'Quantidade de Usuários por Rede Social',
        plot_bgcolor: '#222831',
        paper_bgcolor: '#222831',
        xaxis: { title: 'Redes Sociais' },
        yaxis: { title: 'Número de Usuários (milhões)' }
    };

    const grafico = document.getElementById('grafico2'); // Renderiza no segundo gráfico
    Plotly.newPlot(grafico, data, layout);
}

quantidadeUsuariosPorRede();
