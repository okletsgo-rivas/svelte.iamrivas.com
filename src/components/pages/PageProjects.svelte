<script type="ts">
  import { onMount } from "svelte";
  import Project from "../project/Project.svelte";
  import type { IProject } from "../project/IProject";
  import ProjectFilter from "../project/ProjectFilter.svelte";

  import { projects } from "../../stores/store";

  let error = null;

  onMount(async () => {
    const res = await fetch("https://d9.iamrivas.com/json/projects2");
    $projects = await res.json();
    console.log($projects);
  });
</script>

<main>
  <div v-if="!projects" class="container">
    <div class="row">
      <div class="col">
        {#if error}
          <div class="alert alert-danger" role="alert">
            Error: {{ error }}
          </div>
        {:else}
          <em>Loading...</em>
        {/if}
      </div>
    </div>
  </div>
  <div v-else class="container projects">
    <div class="row filters">
      <div class="col-xs-12 w-100">
        <ProjectFilter />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        {#each $projects as project}
          <Project {project} />
        {/each}
      </div>
    </div>
  </div>
</main>
