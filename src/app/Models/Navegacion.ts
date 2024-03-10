export interface barradenaviegacion{
    items: SideBarItem[];
}
export interface SideBarItem {
	text: string;
	route?: string;
}
export const sidebar_data: barradenaviegacion = {
    items: [
        {
            text: 'Salir del Sistema',
            route: '/app/Perfil'
        },
    ],
};
