<script lang="ts">
  import type { IProject } from "./IProject";

  export let project: IProject;
</script>

<div
  style={`background-image: url(//d9.iamrivas.com${project.field_image})`}
  class="col-12 col-md-6 full child"
/>

<style>
  div {
    pointer-events: none;
  }
</style>
