if (typeof gafisa.alphabook.home == 'undefined') { gafisa.alphabook.home = new Object(); }

gafisa.alphabook.home.powerBi = {
    botaoExcluir: null,
    idtaxonomia: null,
    uploader: {},
    temArquivo: false,
    inicializada: false,

    urlsPowerBi: {
        Cobranca: {
            Cobrança: "https://app.powerbi.com/reportEmbed?reportId=7ebf9ad2-3548-4333-b482-7333df5726b0&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
        },
        Compliance: {
            'Relatório SI': "https://app.powerbi.com/reportEmbed?reportId=b0c988ea-b6eb-4bb0-93b1-1bcb3a52edb2&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
        },
        Controladoria: {
            'Acompanhamento de Razão_CP_Provisorio': "https://app.powerbi.com/reportEmbed?reportId=76f2316b-17b0-46f4-899f-58ea23739b4e&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Acompanhamento de Razão_SP': "https://app.powerbi.com/reportEmbed?reportId=45e86cd3-17bf-4b70-b46f-edf753923382&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Diagrama de Estruturas': "https://app.powerbi.com/reportEmbed?reportId=549e0688-5927-4536-9fd7-cd3be9288046&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
        },

        Facilities: {
            'Dashboard Facilities': "https://app.powerbi.com/reportEmbed?reportId=7f7401bb-4b7f-4a0b-b3f5-19e0fd8dddec&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
        },
        marketing: {
            midia: "https://app.powerbi.com/reportEmbed?reportId=6ae256da-b88b-4f97-9116-635c4851ceed&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            comercial: "https://app.powerbi.com/reportEmbed?reportId=92e6c0fe-ef50-4c79-ade2-63dd23da0003&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            Marketing: "https://app.powerbi.com/reportEmbed?reportId=e4713028-4131-401d-ac84-dfb45cc4e39f&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d"
        },
        novosnegocios: {
            'Relatório Mensal_Diretoria': "https://app.powerbi.com/reportEmbed?reportId=677b17b3-b207-4ce3-a15a-b53c9f4f377e&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
        },
        comercial: {
            'Acompanhamento de Lançamento': "https://app.powerbi.com/reportEmbed?reportId=1771a910-44f0-4d2b-9078-ad6044c6588c&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Desenvolvimento Comercial': "https://app.powerbi.com/reportEmbed?reportId=09ee2ad6-2905-4618-b5eb-f550846be068&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d"
        },
        relacionamento: {
            'Controle de Ocupações': "https://app.powerbi.com/reportEmbed?reportId=44e7b1d6-c28d-4a69-9185-58c8f3b5edf9&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            Relacionamento: "https://app.powerbi.com/reportEmbed?reportId=394eb81d-755b-4703-8698-2e0108d629d0&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d"
        },
        informacao: {
            'Cronograma de Fechamento': "https://app.powerbi.com/reportEmbed?reportId=9d889e65-6de6-4e2e-9ca9-73211ea95501&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Projeto PMO': "https://app.powerbi.com/reportEmbed?reportId=9ec7a459-595b-42a7-aba8-09e0aafc7282&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Report_Date': "https://app.powerbi.com/reportEmbed?reportId=bfd83cb3-7d88-4b9d-8c54-737a2b02cd3a&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d"
        },
        suprimentos: {
            Suprimentos: "https://app.powerbi.com/reportEmbed?reportId=55bba593-09d2-49de-9900-557f5c154484&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
        },

        tvs: {
            'Indicadores TV - Vendas': "https://app.powerbi.com/reportEmbed?reportId=606915e6-a8cc-46eb-a1cd-34c64d7347dc&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Indicadores TV - Cobrança': "https://app.powerbi.com/reportEmbed?reportId=6e95f2ee-0af8-41bc-86aa-dc16f7f220e1&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Indicadores TV - Marketing': "https://app.powerbi.com/reportEmbed?reportId=6f4d406d-abc6-4e38-aef0-783c702bb3c0&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
            'Indicadores TV - Relacionamento': "https://app.powerbi.com/reportEmbed?reportId=05dcc1ab-4711-49be-ad10-59030b9d908a&autoAuth=true&ctid=9479b49f-8d62-489d-aa2d-5df3e676b96d",
        },

       
        // Adicione mais categorias e relatórios conforme necessário
    },

    inicializar: function () {
        gafisa.alphabook.home.powerBi.registrarAcoes();
    },



    registrarAcoes: function () {
        $('#powerbirelatorios').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTile);
        //$('.tile-Marketing').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileMarketing);
        //$('.tile-Relacionamento').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileRelacionamento);
        //$('.tile-Suprimentos').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileSuprimentos);
        //$('.tile-Informacao').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileInformacao);
        //$('.tile-Facilitites').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileFacilitites);
        //$('.tile-Comercial').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileComercial);
        //$('.tile-Controladoria').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileControladoria);
        //$('.tile-ativo').livequery('click', gafisa.alphabook.home.powerBi.aoClicarTileMarketing);
        $('.tile-ativo').livequery('click', function () {
            const categoria = $(this).data('categoria');
            gafisa.alphabook.home.powerBi.exibirRelatoriosDetalhados(categoria);
        });
        $('.tile-Click').livequery('click', function () {
            const url = $(this).data('url');
            gafisa.alphabook.home.powerBi.exibirIframe(url);
        });
        $('#controleArquivosManuais').livequery(gafisa.alphabook.home.powerBi.inicializarTela);
    },



    inicializarTela: function () {


    },


    exibirRelatoriosDetalhados: function (categoria) {
        const documentosContainer = $('#documentos-container');
        const controleRelatorios = $('#controleRelatorios');
        const controleRelatoriosItem = $('#controleRelatoriosItem');
        const urls = this.urlsPowerBi[categoria];

        if (urls) {
            documentosContainer.empty();
            for (const [nome, url] of Object.entries(urls)) {
                const tile = `<a class="tile-ativo tile-Click" data-url="${url}">
                                <span class="nome-tile">${nome}</span>
                              </a>`;
                documentosContainer.append(tile);
            }
            $('#title-relatorios').text(categoria.charAt(0).toUpperCase() + categoria.slice(1));
            controleRelatorios.hide();
            controleRelatoriosItem.show();
        }
    },

    exibirIframe: function (url) {
        const iframeContainer = $('#iframe-container');
        const iframeDiv = $('#iframe');
        iframeContainer.html(`
            <iframe title="Relatório PowerBI" width="100%" height="541.25" 
                    src="${url}" frameborder="0" allowFullScreen="true">
            </iframe>
        `);
        iframeDiv.show();
        $('#controleRelatorios, #controleRelatoriosItem').hide();
    },

    aoClicarTileMarketing: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento3 = document.getElementById('documentos-market');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'block';
            elemento3.style.display = 'block';
        }

    },

    aoClicarTileRelacionamento: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento3 = document.getElementById('documentos-relacionamento');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'block';
            elemento3.style.display = 'block';
        }

    },

    aoClicarTileSuprimentos: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento3 = document.getElementById('documentos-Suprimentos');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'block';
            elemento3.style.display = 'block';
        }

    },

    aoClicarTileInformacao: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento3 = document.getElementById('documentos-informacao');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'block';
            elemento3.style.display = 'block';
        }

    },

    aoClicarTileFacilitites: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento3 = document.getElementById('documentos-facilities');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'block';
            elemento3.style.display = 'block';
        }

    },

    aoClicarTileComercial: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento2 = document.getElementById('documentos-Comercial');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'block';
            elemento3.style.display = 'block';
        }

    },

    aoClicarTileControladoria: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento3 = document.getElementById('documentos-controladoria');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'block';
            elemento3.style.display = 'block';
        }

    },

    aoClicarTileIframe: function () {

        var elemento = document.getElementById('controleRelatorios');
        var elemento2 = document.getElementById('controleRelatoriosItem');
        var elemento3 = document.getElementById('documentos-controladoria');
        var elemento4 = document.getElementById('iframe');
        $('#title-relatorios').text("Marketing")


        if (elemento) {
            elemento.style.display = 'none';
            elemento2.style.display = 'none';
            elemento3.style.display = 'none';
            elemento4.style.display = 'block';
        }

    },



    aoClicarTile: function () {
        if (!$(this).hasClass('inativo')) {
            if ($('body').data('ids'))
                $('body').removeData('ids');

            $.navegar.proximo(gafisa.alphabook.rotas.powerBi.index, null, function () { $('body').data('hashPai', window.location.hash); });
        }
    },

    erro: function (up, erro) {
        var listaErros = [];

        if (erro.code == plupload.FILE_SIZE_ERROR)
            listaErros.push(gafisa.mensagens.upload.tamanhoMaximoExcedido.format(50));

        if (listaErros.length > 0) {
            gafisa.alphabook.mensagens.exibirMensagemErro(listaErros);
        }
    },


};

$(document).ready(gafisa.alphabook.home.powerBi.inicializar);