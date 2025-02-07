import { useProducts } from '../../../../context/ProductsContext';
import './ShopFilter.styles.css';

export default function ShopCategories() {
    const {
        selectedCategory,
        setSelectedCategory,
        selectedGrades,
        setSelectedGrades
    } = useProducts();

    const onCategoryClick = (e) => {
        const category = e.target.innerText;
        setSelectedCategory(category);
    };

    const onGradeChange = (e) => {
        const grade = e.target.value;
        const isChecked = e.target.checked;

        setSelectedGrades(prevGrades =>
            isChecked
                ? [...prevGrades, grade]
                : prevGrades.filter(g => g !== grade)
        );
    };

    return (
        <div className="left-section">
            <div className="first-filter">
                <h1 className='left-section-title'>Categories</h1>
                <ul className="shop-categories">
                    <li className={`shop-category ${selectedCategory === 'All' ? 'active' : ''}`} onClick={onCategoryClick}>All</li>
                    <li className={`shop-category ${selectedCategory === 'Biology' ? 'active' : ''}`} onClick={onCategoryClick}>Biology</li>
                    <li className={`shop-category ${selectedCategory === 'Chemistry' ? 'active' : ''}`} onClick={onCategoryClick}>Chemistry</li>
                    <li className={`shop-category ${selectedCategory === 'Physics' ? 'active' : ''}`} onClick={onCategoryClick}>Physics</li>
                    <li className={`shop-category ${selectedCategory === 'Mathematics' ? 'active' : ''}`} onClick={onCategoryClick}>Mathematics</li>
                    <li className={`shop-category ${selectedCategory === 'STEM' ? 'active' : ''}`} onClick={onCategoryClick}>STEM</li>
                </ul>
            </div>

            <div className="second-filter">
                <h1 className='left-section-title'>Grades</h1>
                <div className="grade-checkboxes">
                    {['5', '6', '7', '8', '9', '10', '11', '12'].map((grade) => (
                        <label key={grade} className="grade-checkbox-label">
                            <input
                                type="checkbox"
                                value={grade}
                                checked={selectedGrades.includes(grade.toString())}
                                onChange={onGradeChange}
                                className="grade-checkbox"
                            />
                            {grade} grade
                        </label>
                    ))}
                </div>
            </div>
        </div >
    );
}