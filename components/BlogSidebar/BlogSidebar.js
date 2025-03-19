// /components/BlogSidebar/BlogSidebar.js
import React, { useState } from 'react';
import Link from 'next/link';
import blogs from '../../api/blogs';

const BlogSidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Voorbeeld: alle categorieën uit blogs verzamelen
    const allCategories = Array.from(
        new Set(blogs.flatMap((blog) => blog.category))
    );

    // Voorbeeld: alle tags uit blogs verzamelen
    const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Logica voor je zoekactie, bijv. filteren of routeren
        console.log('Zoeken naar:', searchTerm);
    };

    return (
        <div className="col-lg-4 col-md-8 col-12">
            <aside className="blog-sidebar">

                {/* Zoekveld */}
                <div className="widget search-widget">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Zoeken..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">Zoek</button>
                    </form>
                </div>

                {/* Categorieën */}
                <div className="widget category-widget">
                    <h3>Categorieën</h3>
                    <ul>
                        {allCategories.map((cat, index) => (
                            <li key={index}>
                                <Link href={`/blog?category=${cat.toLowerCase()}`}>
                                    {cat}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags */}
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        {allTags.map((tag, index) => (
                            <li key={index}>
                                <Link href={`/blog?tag=${tag.toLowerCase()}`}>
                                    {tag}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA Naar contactpagina */}
                <div className="widget cta-widget">
                    <h3>Hulp Nodig?</h3>
                    <p>
                        Heeft u snel hulp nodig of wilt u meer weten over onze
                        loodgietersdiensten? Neem vandaag nog contact met ons op!
                    </p>
                    <Link href="/contact">
                        Neem Contact Op
                    </Link>
                </div>

            </aside>
        </div>
    );
};

export default BlogSidebar;
