import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
    onAddToWishList: (id: number) => void;
}

//

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0)
    }, [results])

    return(
        <div>
            <h2>Preço total = R$ {totalPrice}</h2>

            {results.map(product => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <ProductItem 
                      key={product.id}
                      product={product}
                      onAddToWishList={onAddToWishList}
                    />
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

/**
 * useMemo
 * 
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando a gente repassa aqual informação a um componente filho)
 * 
 * 
 * useCallback
 * 
 * 1. Armazenar funções
 */