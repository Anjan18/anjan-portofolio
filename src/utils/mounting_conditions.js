export const view_by_window = (
	size: number,
	component: Object
) => {
	if (window.innerWidth < size) return component
}
