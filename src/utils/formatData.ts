export const formatHeight = (height: number): string => {
    // Convierte decímetros a metros
    return `${height / 10} m`;
};

export const formatWeight = (weight: number): string => {
    // Convierte hectogramos a kilogramos
    return `${weight / 10} kg`;
};
