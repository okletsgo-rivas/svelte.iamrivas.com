<script type="ts">
  import { Link } from "svelte-routing";
  const links: string[] = ["projects", "bio", "resume"];
  let scrolled;
</script>

<svelte:window on:scroll={() => (scrolled = window.scrollY > 100)} />

<nav class="navbar navbar-expand-md sticky-top" class:scrolled>
  <div class="container">
    <div>
      <a class="navbar-brand" href="/">
        <img src="./logo.svg" alt="logo" />
      </a>
    </div>
    <div class="flex-grow-1 text-right">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse ml-auto" id="navbar-nav">
        <div class="ml-auto navbar-nav">
          {#each links as link}
            <Link
              to={link}
              getProps={({ isCurrent }) => ({
                class: "nav-link " + (isCurrent && "text-primary"),
              })}
            >
              {link}
            </Link>
          {/each}
        </div>
      </div>
    </div>
  </div>
</nav>
