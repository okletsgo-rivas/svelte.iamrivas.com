<script lang="ts">
  import type { IProject } from "./IProject";
  import ProjectInfo from "./ProjectInfo.svelte";
  import ProjectImage from "./ProjectImage.svelte";

  export let project: IProject;
  export let isEven: boolean;
</script>

<div class="row project">
  {#if isEven} <ProjectInfo {project} /> {/if}

  <ProjectImage {project} />

  {#if !isEven} <ProjectInfo {project} /> {/if}
</div>
