<script type="ts">
  import { onMount } from "svelte";
  import Project from "../project/Project.svelte";
  import type { IProject } from "../project/IProject";
  import ProjectFilter from "../project/ProjectFilter.svelte";

  import { projects } from "../../stores/store";

  let error = null;

  onMount(async () => {
    try {
      const res = await fetch("https://d9.iamrivas.com/json/projects2");
      $projects = await res.json();
    } catch (e: any) {
      error = e.message;
    }
  });

  async function fetchProjects() {}
</script>

<div class="container projects">
  {#await fetchProjects()}
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
  {:then}
    <div class="row filters">
      <div class="col-xs-12 w-100">
        <ProjectFilter />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        {#each $projects as project, i}
          <Project {project} isEven={i % 2 > 0} />
        {/each}
      </div>
    </div>
  {:catch}
    <div class="row">
      <div class="col">
        <div class="alert alert-danger" role="alert">
          Error: {{ error }}
        </div>
      </div>
    </div>
  {/await}
</div>
