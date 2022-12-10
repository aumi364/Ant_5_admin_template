import create from 'zustand';

export const appStore = create(set => ({
  collapsed: false,
  openDrawer: false,
  toggleCollapsed: collapsed => set(state => ({ collapsed: collapsed })),
  toggleOpenDrawer: () => set(state => ({ openDrawer: !state.openDrawer })),
}));
