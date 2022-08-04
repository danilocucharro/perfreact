import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
}

export function SearchResults({ results }: SearchResultsProps) {
    return(
        <div>
            {results.map(product => {
                return(
                    <ProductItem product={product} />
                );
            })}
        </div>
    );
}

/**
 * RENDERIZAÇÃO DO REACT
 * 
 * 1. Criar uma nova versão do componente (acontece sempre que o componente pai autalizar um filho)
 * 2. Comparar com a versão anterior
 * 3. Se houverem alterações, vai atualizar o que alterou
 */


/**
 * MEMO - Quando posso usar?
 * 
 * 1. Pure Functional Components 
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size (quantidade de dados dentro de um component só)
 */