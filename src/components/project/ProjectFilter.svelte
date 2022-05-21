<script lang="ts">
  import type { IFilter } from "./IFilter";
  import type { IProject } from "./IProject";

  // export let projects: IProject[];
  const filters: IFilter[] = [
    { title: "ALL", id: "all", value: null },
    { title: "Programming", id: "programming", value: 127 },
    { title: "E-learning", id: "elearning", value: 129 },
    { title: "Design", id: "design", value: 126 },
  ];

  let activeFilter;
</script>

<div
  name="filters"
  class="btn-group w-100"
  role="group"
  aria-label="Filter Group"
>
  {#each filters as filter}
    <button
      class={`btn btn-${activeFilter == filter ? "primary" : "secondary"}`}
      on:click={() => (activeFilter = filter)}
      type="button"
    >
      {filter.title}
      <span class="badge badge-light ml-2">
        00
        <!-- {{ getFilteredArray(filter).length }} -->
      </span>
    </button>
  {/each}
</div>
