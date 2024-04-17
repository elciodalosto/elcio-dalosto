<script lang="ts">
  const estudos: [
    {
      ano: string;
      evento: string;
      instituicao: string;
      local: string;
    },
  ][] = [
    {
      ano: "2023 a 2025",
      evento: "Análise e Desenvolvimento de Sistemas",
      instituicao: "Centro Universitário SENAC",
      local: "Taquara/RS (EAD)",
    },
    {
      ano: "2021 a 2022",
      evento: "Licenciatura em Computação e Robótica Educativa",
      instituicao: "UFRGS - Universidade Federal do Rio Grande do Sul",
      local: "Taquara/RS",
    },
    {
      ano: "2020 a 2021",
      evento: "Programa Reset",
      instituicao: "CWI Software",
      local: "São Leopoldo/RS (remotamente de Taquara/RS)",
    },
    {
      ano: "2016 a 2019",
      evento: "Técnico em Informática",
      instituicao: "CIMOL - Escola Tecnica Estadual Monteiro Lobato",
      local: "Taquara/RS",
    },
    {
      ano: "2013 a 2015",
      evento: "Tecnlólogo em Desenvolvimento de Jogos Digitais(não concluído)",
      instituicao: "Universidade FEEVALE",
      local: "Novo Hamburgo/RS",
    },
    {
      ano: "2011 a 2012",
      evento: "Sistemas para Internet(não concluído)",
      instituicao: "FACCAT - Faculdades Integradas de Taquara",
      local: "Taquara/RS",
    },
    {
      ano: "2015 a 2015",
      evento: "Qualificação Profissional em Computação Gráfica",
      instituicao: "Universidade FEEVALE",
      local: "Novo Hamburgo/RS",
    },
  ];

  const trabalhos: [
    {
      ano: string;
      evento: string;
      empresa: string;
      local: string;
    },
  ][] = [
    {
      ano: "2021 até hoje",
      evento: "Testador de Software / QA",
      empresa: "CWI Software",
      local: "Taquara/RS(remoto) e São Leopoldo/RS",
      // pagina: "cwi",
    },
    {
      ano: "2020 a 2021",
      evento: "Autônomo",
      empresa: "High Tech Spirit (Projeto pessoal)",
      local: "Taquara/RS",
      // pagina: "hts",
    },
    {
      ano: "2011 a 2021",
      evento: "Agente Administrativo (Concursado)",
      empresa: "Prefeitura Municipal de Três Coroas/RS",
      local: "Três Coroas/RS",
      // pagina: "pmtc",
    },
    {
      ano: "2011 a 2011",
      evento: "Consultor de Negócios (Vendedor)",
      empresa: "Lojas Colombo S/A",
      local: "Taquara/RS",
      // pagina: "lojas-colombo",
    },
    {
      ano: "2009 a 2010",
      evento: "Técnico de Apoio de Microinformática NM1",
      empresa: "TLD TELEDATA Tecnologia em Conectividade Ltda",
      local: "Curitiba/PR",
      // pagina: "teledata",
    },
    {
      ano: "2009 a 2009",
      evento: "Representante de marcas - Repositor",
      empresa: "PROMOTERSUL",
      local: "Curitiba/PR",
      // pagina: "promotersul",
    },
    {
      ano: "2008 a 2009",
      evento: "Aprendiz de Técnicas Básicas Bancárias",
      empresa: "Banco HSBC - ESPRO",
      local: "Curitiba/PR",
      // pagina: "hsbc-espro",
    },
    {
      ano: "2007 a 2007",
      evento: "Auxiliar de Loja (Operador de Caixa)",
      empresa: "Lojas Americanas",
      local: "Curitiba/PR",
      // pagina: "lojas-americanas",
    },
    {
      ano: "2006 a 2007",
      evento: "Operador II - (Repositor)",
      empresa: "Walmart",
      local: "Taquara/RS",
      // pagina: "walmart",
    },
    {
      ano: "2005 a 2006",
      evento: "Serviços Gerais (Empacotador)",
      empresa: "Comercial RISSUL",
      local: "Taquara/RS",
      // pagina: "rissul",
    },
  ];
</script>

<svelte:head>
  <title>Timelines</title>
  <meta name="description" content="Timelines" />
</svelte:head>

<div>
  <h1 class="h1 text-center">Timelines</h1>
  <h3>Profissional e Acadêmica</h3>

  <h2>Profissional</h2>
  <div class="text-left text-xs">
    <ul class="timeline timeline-vertical text-left">
      <li>
        {#each trabalhos as trabalho}
          <div class="timeline timeline-start">{trabalho.ano}</div>
          <div class="timeline timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div
            class="timeline-end timeline-box border-2 text-black border-blue-400"
          >
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="timeline timeline-middle">
              <p>
                <b>Função:</b>
                {trabalho.evento}
              </p>
              <p>
                <b>Empresa:</b>
                {trabalho.empresa}
              </p>
              <p>
                <b>Local:</b>
                {trabalho.local}
              </p>
            </a>
          </div>
        {/each}
      </li>
    </ul>
  </div>

  <h2>Acadêmica</h2>
  <div class="text-center justify-left text-xs">
    <ul class="timeline timeline-vertical justify-left text-left">
      <li>
        {#each estudos as estudo}
          <div class="timeline timeline-end">{estudo.ano}</div>
          <div class="timeline timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="blue"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="timeline-start">
            <div
              class="timeline-end timeline-box border-2 text-black border-blue-400"
            >
              <p>
                <b>Curso:</b>
                {estudo.evento}
              </p>
              <p>
                <b>Instituição:</b>
                {estudo.instituicao}
              </p>
              <p>
                <b>Local:</b>
                {estudo.local}
              </p>
            </div>
          </a>
        {/each}
      </li>
    </ul>

    <b>
      Visite a aba{" "}
      <a href="social" class="links"> SOCIAL </a>{" "}
      para se conectar comigo pelas redes
    </b>
  </div>
</div>
