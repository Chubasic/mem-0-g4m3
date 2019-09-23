import IGameSettings from "../interfaces/IGameSettings";

export const storageManager = {
    addItems: (data: IGameSettings): void => {
        Object.keys(data).forEach((key) => {
            localStorage.setItem(key, data[key])
        })
    },

    readStorage: (): IGameSettings => {
        return Object.keys(localStorage)
            .reduce<IGameSettings>((accumulator: IGameSettings, key: string): any => {
                accumulator[key] = localStorage.getItem(key);
                return accumulator;
            }, {} as IGameSettings)
    },

    clearStorage: (): void => {
        localStorage.clear()
    }

}
Object.freeze(storageManager);