<script lang="ts">
  let showMenu = false;
  let isMenuMobileOpen = false;

  import logo from "$lib/images/rainbow_lotus.png";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Button } from "$lib/components/ui/button/index.js";

  const SHEET_SIDES = ["left"] as const;
</script>

<header>
  <div class="grid grid-cols-2">
    {#each SHEET_SIDES as side, _ (side)}
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="outline"
            class="text-left mt-2 ml-2 p-5 position-absolute fixed">MENU</Button
          >
        </Sheet.Trigger>
        <Sheet.Content {side}>
          <Sheet.Header>
            <Sheet.Title class="text-center">MENU</Sheet.Title>
          </Sheet.Header>
          <div class="grid gap-2 py-4">
            <Sheet.Close class="text-right hover:text-orange-500"
              ><a href="/" class="">HOME</a></Sheet.Close
            >
            <Sheet.Close class="text-right  hover:text-orange-500"
              ><a href="about" class="text-right">ABOUT</a></Sheet.Close
            >
            <Sheet.Close class="text-right  hover:text-orange-500"
              ><a href="timeline" class="text-right">TIMELINE</a></Sheet.Close
            >
            <Sheet.Close class="text-right  hover:text-orange-500"
              ><a href="portfolio" class="text-right">PORTFOLIO</a></Sheet.Close
            >
            <Sheet.Close class="text-right  hover:text-orange-500"
              ><a href="social" class="text-right">SOCIAL</a></Sheet.Close
            >
            <Sheet.Close class="text-right  hover:text-orange-500"
              ><a href="blog" class="text-right">BLOG</a></Sheet.Close
            >
          </div>
          <Sheet.Footer></Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    {/each}
  </div>
</header>

<style>
  a{
    font-weight: 800;
  }
</style>
