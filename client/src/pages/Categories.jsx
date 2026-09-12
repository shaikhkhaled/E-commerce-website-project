import { useState } from "react";

function Categories() {
  const [categories] = useState([
    {
      id: 1,
      name: "Electronics",
      slug: "electronics",
      description: "Electronic devices and accessories",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661"
    },
    {
      id: 2,
      name: "Fashion",
      slug: "fashion",
      description: "Clothing and fashion products",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050"
    },
    {
      id: 3,
      name: "Shoes",
      slug: "shoes",
      description: "Latest shoes and footwear",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }
  ]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Categories</h1>
          <p>Browse product categories</p>
        </div>

        <button className="primary-btn">
          + Add Category
        </button>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-content">
              <h2>{category.name}</h2>

              <p>{category.description}</p>

              <span className="slug">
                /{category.slug}
              </span>

              <div className="card-actions">
                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;