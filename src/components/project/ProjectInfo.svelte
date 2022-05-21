<script lang="ts">
  import type { IProject } from "./IProject";

  export let project: IProject;
</script>

<div class="col-12 col-md-6 text-center d-flex align-items-center info child">
  <div>
    <h5>{project.title}</h5>
    <div class="text-muted">
      <p>{@html project.body}</p>
      {#if project.field_link.length}
        <p>
          <a
            href={project.field_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="btn btn-dark">Launch</button>
          </a>
        </p>
      {/if}
    </div>
    <div
      style={`background-image:url(//d9.iamrivas.com${project.field_image})`}
      class="thumb"
    />
  </div>
</div>
