<script lang="ts">
  import { onMount } from "svelte";

  import { Router, Route, navigate, link } from "svelte-routing";
  import Header from "./components/layout/Header.svelte";
  import PageBio from "./components/pages/PageBio.svelte";
  import PageProjects from "./components/pages/PageProjects.svelte";
  import PageResume from "./components/pages/PageResume.svelte";

  export let url = "";

  onMount(() => {
    if (window.location.pathname == "/") navigate("/projects");
  });
</script>

<main>
  <Router {url}>
    <div class="app">
      <Header />
      <Route path="/">Redirecting</Route>
      <Route path="projects" component={PageProjects} />
      <Route path="bio" component={PageBio} />
      <Route path="resume" component={PageResume} />
    </div>
  </Router>
</main>
