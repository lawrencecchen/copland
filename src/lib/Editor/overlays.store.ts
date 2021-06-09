import { writable } from 'svelte/store';

interface ComponentOverlay {
	name: string;
	id: string;
	x: number;
	y: number;
	width: number;
	height: number;
}

export const componentOverlays = writable<ComponentOverlay[]>([]);

export function createComponentOverlay({ name, id, x, y, width, height }) {
	return {
		name,
		id,
		x,
		y,
		width,
		height
	};
}

interface GridOverlay {
	id: string;
	gridTemplateColumns: string;
	gridTemplateRows: string;
	rowGap: string;
	columnGap: string;
	x: number;
	y: number;
	width: number;
	height: number;
}

export const gridOverlays = writable<GridOverlay[]>([]);

export function createGridOverlay(element: HTMLElement, id: string) {
	const { gridTemplateColumns, gridTemplateRows, rowGap, columnGap } = window.getComputedStyle(
		element
	);
	const { offsetLeft: x, offsetTop: y, offsetWidth: width, offsetHeight: height } = element;

	return { gridTemplateColumns, gridTemplateRows, rowGap, columnGap, id, x, y, width, height };
}
