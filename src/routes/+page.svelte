<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Página inicial" />
</svelte:head>

<section>
  <h1>Home</h1>
  <h3>Seja bem vindo(a) ao meu espaço virtual!</h3>
  <br />
  <Avatar.Root class="w-48 h-48">
    <Avatar.Image
      src="https://avatars.githubusercontent.com/u/15917796"
      alt="@shadcn"
    />
    <Avatar.Fallback>EAD</Avatar.Fallback>
  </Avatar.Root>

  <br />

  <br />
  <br />
  <div class="text-center">
    <b>
      Visite a aba{" "}
      <a href="about" class="links"> ABOUT </a>{" "}
      para saber mais
    </b>
  </div>
</section>

<style>
  h3 {
    text-align: center;
  }
</style>
