import { writable } from 'svelte/store';
import type { IProject } from '../components/project/IProject';

export const projects = writable<IProject[]>([]);