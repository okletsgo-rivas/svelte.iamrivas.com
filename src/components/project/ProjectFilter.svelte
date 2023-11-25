<script lang="ts">
  import type { IFilter } from "./IFilter";
  import { projects, activeFilter, getFilteredCount } from "../../stores/store";
  import { onMount } from "svelte";

  const filters: IFilter[] = [
    { title: "ALL", id: "all", value: -1 },
    { title: "Programming", id: "programming", value: 127 },
    { title: "E-learning", id: "elearning", value: 129 },
    { title: "Design", id: "design", value: 126 },
  ];

  onMount(() => {
    setFilter(filters[0]);
  });

  function setFilter(filter: IFilter): void {
    $activeFilter = filter;
  }
</script>

<div class="row">
  <div
    name="filters"
    class="filters btn-group btn-group-toggle w-100 bg-danger"
    role="group"
    aria-label="Filter Group"
  >
    {#each filters as filter}
      <button
        class={`col btn btn-${
          $activeFilter == filter ? "primary" : "secondary"
        }`}
        on:click={() => setFilter(filter)}
        type="button"
      >
        {filter.title}
        <span class="badge badge-light ml-2">
          {getFilteredCount($projects, filter)}
        </span>
      </button>
    {/each}
  </div>
</div>
