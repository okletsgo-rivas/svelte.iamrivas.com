<script lang="ts">
  import type { IProject } from "./IProject";

  export let project: IProject;
</script>

<main>
  <div
    style={`background-image: url(//d9.iamrivas.com${project.field_image})`}
    class="col-md-6 full child"
  />
</main>

<style>
  div {
    pointer-events: none;
  }
</style>
