import { List, ListRowRenderer } from 'react-virtualized'

import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddToWishList: (id: number) => void;
}

//

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {
    const rowRenderer: ListRowRenderer = ({ index, key ,style }) => {
        return(
            <div key={key} style={style}>
                <ProductItem 
                    product={results[index]}
                    onAddToWishList={onAddToWishList}
                />
            </div>
        );
    }

    return(
        <div>
            <h2>{totalPrice}</h2>

            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />

            {/*results.map(product => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <ProductItem 
                      key={product.id}
                      product={product}
                      onAddToWishList={onAddToWishList}
                    />
                );
            })*/}
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