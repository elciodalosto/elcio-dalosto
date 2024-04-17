<script>
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>404</h1>
  <h1>GAME OVER</h1>
  <br />
  Parece que você se perdeu no limbo... ou procurou algum caminho inexistente
  <br />
  <br />
  Clica nesse botãozinho mágico que ele vai te conjurar novamente na página inicial.
  <br />
  <br />
  <br />
  <a href="/" class="btn-magico bg-yellow-500 text-white hover:text-purple-500 hover:bg-yellow-500 rounded-2xl p-2"
    >Botão Mágico</a
  >
  <br />
  <br />
</section>

<style>
  section {
    text-align: center;
    background-color: #222;
    color: lightyellow;
    border-radius: 75px 0 75px 75px;
    padding: 50px;
  }
  .btn-magico {
    text-align: center;
  }

  h1 {
    color: white;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.3em;
  }
</style>
