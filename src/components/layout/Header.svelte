<script type="ts">
  import { Link } from "svelte-routing";
  const links: string[] = ["projects", "bio", "resume"];
  let scrolled;
</script>

<svelte:window on:scroll={() => (scrolled = window.scrollY > 100)} />

<nav class="navbar navbar-expand-md sticky-top" class:scrolled>
  <div class="container p-0">
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
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          {#each links as link}
            <li class="nav-item">
              <Link
                to={link}
                getProps={({ isCurrent }) => ({
                  class: "nav-link " + (isCurrent && "text-primary"),
                })}
              >
                {link}
              </Link>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</nav>
