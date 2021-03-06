import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
const Item = ({ post }) => {
    const { categories } = JSON.parse(post.categories)
    const animations = {
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            stiffness: 500,
            damping: 50
        }
    }
    return (
        <motion.div {...animations} layout className="trending-post">
        <div className="categories">
            {categories.map((category, index) => <Link to={`/blog?category=${ category.toLowerCase().replace('/', '') }`} key={ index } className="category">{ category }</Link>)}
        </div>
        <Link to={`/blog/${post.slug}`}>
            <h2>
                {post.blogTitle}
            </h2>
        </Link>
        </motion.div>
    )
}

export default Item