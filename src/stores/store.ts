import { writable, derived } from "svelte/store";
import type { IFilter } from "../components/project/IFilter";
import type { IProject } from "../components/project/IProject";

export const projects = writable<IProject[]>([]);
export const activeFilter = writable<IFilter>();
export const filteredProjects = derived(
  [projects, activeFilter],
  ([$projects, $activeFilter]) => getFiltered($projects, $activeFilter)
);
export const getFiltered = (
  projects: IProject[],
  filter: IFilter
): IProject[] => {
  return projects.filter((_, i, a) =>
    filter.value == -1
      ? a.findIndex((t) => t.nid == _.nid) == i
      : _.field_type == filter.value
  );
};
export const getFilteredCount = (
  projects: IProject[],
  filter: IFilter
): number => getFiltered(projects, filter).length;
