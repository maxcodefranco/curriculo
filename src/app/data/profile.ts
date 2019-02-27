
export const profileBasic = {
    nome: "Max Cruz Franco",
    profissao: "Desenvolvedor PHP Full-Stack",
    sobre: `
        Formado em Análise e Desenvolvimento de Sistemas.
        Programador PHP (Laravel), ênfase em back-end, com experiência nas seguintes linguagens e ferramentas como: NodeJS, C#, Android, Git, VueJS, Angular, ReactjS, Banco de dados Relacional e Não Relacional, Wordpress, Git, Amazon AWS, conexões remotas (SSH) e experiência em ambiente Linux e Windows.
        <br/>
        Desde meus 11 anos venho programando e aprofundando cada vez mais neste mundo.
        Atualmente, estou me dedicando ao Laravel e Angular para desenvolvimento de Sistemas.
        Já desenvolvi módulo para controle de planos de usuário, interação com gatways de pagamento (pagseguro),
        rotinas para sincronização de dados de Erp com serviços externos, além de sites desenvolvidos em Wordpress.
    `,
    nascimento: "15/12/1993",
    urlcurriculo: 'https://maxcodefranco.github.io'
}

export const profileContato = {
    email: "maxcodefranco@gmail.com",
    telefone: "+55 (71) 99414-9729",
    facebook: "https://www.facebook.com/maxcodefranco",
    github: "https://github.com/maxcodefranco",
    instagram: null
}

export const profileEndereco = {
    logradouro: "Rua Eduardo Carlos Pereira",
    numero: "300",
    bairro: "Consolação",
    cidade: "São Paulo",
    uf: "SP"
}

export const profileAcademico = {
    timeline: [
        {
            instituicao: "Unopar",
            curso: "Análise e Desenvolvimento de Sistemas",
            tipo: "Graduação",
            inicio: "2014",
            local: "Jacobina/BA",
            fim: "2017"
        }
    ]
}

export const profileSkills = {
    "list":[
        {
            id: 'php',
            titulo: "PHP",
            historia: "Desde meus 11 anos, tive meus primeiros contatos com a linguagem",
            ano: 1940
        },
        {
            id:'laravel',
            titulo:'Laravel'
        },{
            id:'javascript',
            titulo: 'JavaScript'
        },{
            id: 'nodejs',
            titulo: 'NodeJS'
        },

        { id: 'mysql', titulo: 'MySQL'},
        { id: 'angular', titulo: 'Angular'},
        { id: 'linux', titulo: 'Linux'},
        { id: 'wordpress', titulo: 'Wordpress'},
        { id: 'git', titulo: 'Git'},
        { id: 'webpack', titulo: 'Webpack'},
        { id: 'aws', titulo: 'Amazon AWS'},
        { id: 'ssh', titulo: 'SSH'}
    ]
}

export const profileXp = {
    jobs: [

        {
            cargo: "Desenvolvedor de software Web",
            empresa: "Viswall | Autônomo",
            atividade: "Sinalização Digital",
            local: "Jacobina/BA",
            latlong: [],
            inicio: "07/2014",
            fim: "11/2017",
            descricao: `
            Manutenção de plataforma open-source e desenvolvimento de módulos como sistema de pagamento utilizando os gateways pagseguro e paypal, planos para licença de uso do produto. 
            Principais linguagens: Javascript (Nodejs, Angularjs), PHP, C#.
            `
        },
        {
            cargo: "Estagiário em TI",
            empresa: "Unopar",
            atividade: "Educação",
            local:"Jacobina/BA",
            latlong: [],
            inicio: "11/2017",
            fim: "02/2018",
            descricao: `
                Supervisão das estruturas para aulas. Desenvolvimento de conteúdo para redes sociais.
            `
        },
        {
            cargo: "Web Designer",
            empresa: "Laboratório Lapec",
            atividade: "Análises Clínicas",
            local:"Jacobina/BA",
            latlong: [],
            inicio: "01/2018",
            fim: null,
            descricao: `
                Empresa com cerca de 90-100 funcionários, certificado padrão ISO9001.
                Gestão de marketing inbound e outbound. Desenvolvimento.
                Desenvolvimento de planilhas e ferramentas de apoio à decisão. Desenvolvimento do site com integração ao Banco de Dados do ERP do laboratório. 
                Principais Linguagens/Tecnologias: PHP (Laravel), Javascript (Nodejs, Vue, Angular).
            `
        }
    ]
}

export const projetos = [
    {
        empresa: "Laboratório Lapec",
        descricao:"Desenvolvimento do site do laboratório com informações integradas ao banco de dados principal do ERP para consultas de exames. (Estágio: Etapa Final)",
        url: "http://v2.lapec.com.br"
    }
]

export const profileCerts = {

}