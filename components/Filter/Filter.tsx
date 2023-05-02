import { useState } from "react";
import Button from '../Button/Button'
import styles from "./Filter.module.css"


const Filter = () => {

    type Filter = {
        filterCategory: string;
        filterItems: string[];
      };
      
      type SelectedFilters = {
        [key: string]: string | null;
        category: string | null;
        time: string | null;
        price: string | null;
        age: string | null;
      };
      
      type FiltersProps = {
        filters: Filter[];
    };
    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        category: "",
        time: "",
        price: "",
        age: "",
      });
        
    const filters = [
        {filterCategory: "lesson category", filterItems: ["math", "science", "coding", "spanish", "english", "french", "chinese", "art"]},
        {filterCategory: "lesson time", filterItems: ["30", "45", "60"]},
        {filterCategory: "pricing", filterItems: ["highest to lowest", "lowest to highest"]},
        {filterCategory: "age", filterItems: ["5-8", "9-13", "14-18"]}
    ]

    const handleFilterSelect = (filterCategory: string, filterItem: string) => {
        console.log(selectedFilters)
        setSelectedFilters({
          ...selectedFilters,
          [filterCategory]: filterItem,
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Find the Best Tutor for Your Child's Needs</h1>
                <h2>Unlock your child's full potential with Playful Minds' expert tutors. 
                Our personalized approach ensures that your child receives individual attention and support from a qualified and experienced tutor.</h2>
            </div>
            <div className={`${styles.filterContainer} dropdown`}>
                {filters.map((filter) => (
                <div key={filter.filterCategory}>
                    <button
                        className={`${styles.filterBtn} dropdown-toggle`}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        {filter.filterCategory}
                    </button>
                    <ul className={`${styles.filterItems} dropdown-menu`}>
                    {filter.filterItems.map((filterItem) => (
                        <li key={filterItem}>
                            <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                handleFilterSelect(filter.filterCategory, filterItem)
                                }
                            >
                                {filterItem}
                            </button>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
                <div className={styles.searchContainer}>
                    <input 
                        className={styles.searchBar}
                        type="text"
                        placeholder="enter any keyword"
                    />
                </div>
            </div>
        </div>
    
         
    )
}

export default Filter