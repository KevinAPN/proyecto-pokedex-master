/*import { useState } from "react";

export const usePagination = <T,>(data: T[], itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return { currentData, currentPage, totalPages, goToPage };
};
*/

import { useMemo } from "react";

export const usePagination = <T,>(data: T[], itemsPerPage: number, currentPage: number) => {
    // Calcula el total de páginas basado en la cantidad de datos (máximo 100)
    const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data, itemsPerPage]);

    // Obtiene los datos correspondientes a la página actual
    const currentData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return data.slice(startIndex, startIndex + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);



    return { currentData, totalPages };
};
