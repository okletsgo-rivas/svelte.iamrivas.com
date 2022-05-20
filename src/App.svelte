<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import Header from "./components/layout/Header.svelte";
  import PageBio from "./components/pages/PageBio.svelte";
  import PageProjects from "./components/pages/PageProjects.svelte";
  import PageResume from "./components/pages/PageResume.svelte";

  export let url = "";
</script>

<main>
  <Router {url}>
    <div class="app">
      <Header />
      <Route path="/">{navigate("/projects")}</Route>
      <Route path="projects" component={PageProjects} />
      <Route path="bio" component={PageBio} />
      <Route path="resume" component={PageResume} />
    </div>
  </Router>
</main>
