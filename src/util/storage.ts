import IGameSettings from '../interfaces/IGameSettings';

// This module stands for saving game progress in local storage

export const storageManager = {
    addItems: (data: IGameSettings): void => {
        localStorage.setItem('save', JSON.stringify(data));
    },

    readStorage: (): IGameSettings => {
        const save = localStorage.getItem('save');
        return !!save ? JSON.parse(save) : undefined;
    },

    clearStorage: (): void => {
        localStorage.clear();
    },

    checkStorage(): boolean {
        return localStorage.length > 0;
    }

};
Object.freeze(storageManager);
