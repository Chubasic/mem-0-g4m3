export const timer = (deadline: number) => {
    const time = Date.parse(new Date(deadline).toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    return { seconds, minutes };
};
