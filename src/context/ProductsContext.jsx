import { createContext, useState, useContext, useEffect } from 'react';
import { getProducts } from '../utils/firebase';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedGrades, setSelectedGrades] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
            setFilteredProducts(products);
        };
        fetchProducts();
    }, []);

    const filterProducts = () => {
        let filtered = [...products];

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(item => 
                item.data.cat.includes(selectedCategory)
            );
        }

        if (selectedGrades.length > 0) {
            filtered = filtered.filter(item =>
                item.data.grades.some(grade => selectedGrades.includes(grade))
            );
        }

        setFilteredProducts(filtered);
    };

    useEffect(() => {
        filterProducts();
    }, [selectedCategory, selectedGrades, products]);

    return (
        <ProductsContext.Provider value={{ 
            products,
            filteredProducts,
            selectedCategory,
            setSelectedCategory,
            selectedGrades,
            setSelectedGrades
        }}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProducts = () => useContext(ProductsContext);
