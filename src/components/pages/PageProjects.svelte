<script type="ts">
  import { onMount } from "svelte";
  import Project from "../project/Project.svelte";
  import type { IProject } from "../project/IProject";
  import ProjectFilter from "../project/ProjectFilter.svelte";

  import { projects, filteredProjects } from "../../stores/store";

  let error = null;

  onMount(async () => {
    if ($projects.length == 0) {
      try {
        const res = await fetch("https://d10.iamrivas.com/json/projects2");
        $projects = await res.json();
      } catch (e: any) {
        error = e.message;
      }
    }
  });

  async function fetchProjects() {}
</script>

<div class="container projects">
  {#await fetchProjects()}
    <div class="row">
      <div class="col-12">
        <em>Loading...</em>
      </div>
    </div>
  {:then}
    <ProjectFilter />
    {#each $filteredProjects as project, i}
      <Project {project} isEven={i % 2 > 0} />
    {/each}
  {:catch}
    <div class="row">
      <div class="col-12">
        <div class="alert alert-danger" role="alert">
          Error: {{ error }}
        </div>
      </div>
    </div>
  {/await}
</div>
