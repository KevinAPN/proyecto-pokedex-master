import React, { useState } from "react";

export interface FilterCriteria {
    name?: string;
    type?: string;
    minWeight?: number;
    maxWeight?: number;
    minHeight?: number;
    maxHeight?: number;
}

interface FilterProps {
    onFilterChange: (filter: FilterCriteria) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [minWeight, setMinWeight] = useState("");
    const [maxWeight, setMaxWeight] = useState("");
    const [minHeight, setMinHeight] = useState("");
    const [maxHeight, setMaxHeight] = useState("");

    const handleFilterChange = () => {
        onFilterChange({
            name: name.trim() || undefined,
            type: type || undefined,
            minWeight: minWeight ? parseFloat(minWeight) : undefined,
            maxWeight: maxWeight ? parseFloat(maxWeight) : undefined,
            minHeight: minHeight ? parseFloat(minHeight) : undefined,
            maxHeight: maxHeight ? parseFloat(maxHeight) : undefined,
        });
    };

    return (
        <div className="mb-4">
            <div className="row g-2">
                <div className="col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Todos los tipos</option>
                        <option value="fire">Fuego</option>
                        <option value="water">Agua</option>
                        <option value="grass">Planta</option>
                        <option value="electric">Eléctrico</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Peso mínimo"
                        value={minWeight}
                        onChange={(e) => setMinWeight(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Peso máximo"
                        value={maxWeight}
                        onChange={(e) => setMaxWeight(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Altura mínima"
                        value={minHeight}
                        onChange={(e) => setMinHeight(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Altura máxima"
                        value={maxHeight}
                        onChange={(e) => setMaxHeight(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100" onClick={handleFilterChange}>
                        Filtrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
