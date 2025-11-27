import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCalendar, FaClock, FaArrowRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Blog.css';

const Blog = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'React 19: What\'s New and Breaking Changes',
      titleVi: 'React 19: Tính năng mới và Breaking Changes',
      excerpt: 'Explore the latest features in React 19 including Actions, use() hook, and improved performance.',
      excerptVi: 'Khám phá các tính năng mới trong React 19 bao gồm Actions, use() hook và cải thiện hiệu suất.',
      content: 'React 19 introduces several groundbreaking features that will change how we build React applications. The new Actions API simplifies form handling and async operations. The use() hook allows you to read resources in components. Server Components are now stable, offering better performance and SEO. Improved hydration makes your apps faster. The compiler optimizes your code automatically, reducing bundle size significantly.',
      contentVi: 'React 19 giới thiệu nhiều tính năng đột phá sẽ thay đổi cách chúng ta xây dựng ứng dụng React. Actions API mới đơn giản hóa xử lý form và async operations. Hook use() cho phép đọc resources trong components. Server Components giờ đã stable, mang lại hiệu suất và SEO tốt hơn. Hydration được cải thiện giúp app nhanh hơn. Compiler tự động tối ưu code, giảm đáng kể bundle size.',
      date: '2024-12-20',
      readTime: '8 min',
      category: 'React',
      categoryVi: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      link: 'https://react.dev/blog/2024/04/25/react-19'
    },
    {
      id: 2,
      title: 'Modern CSS Techniques Every Developer Should Know',
      titleVi: 'Kỹ thuật CSS hiện đại mọi Developer nên biết',
      excerpt: 'Master Container Queries, :has() selector, and CSS Grid subgrid for modern web layouts.',
      excerptVi: 'Làm chủ Container Queries, :has() selector và CSS Grid subgrid cho layout web hiện đại.',
      content: 'CSS has evolved dramatically in recent years. Container Queries allow responsive design based on parent container size, not just viewport. The :has() selector enables parent selection based on children. CSS Grid subgrid makes nested grids easier. View Transitions API creates smooth page transitions. CSS Nesting improves code organization. These features eliminate the need for many JavaScript solutions.',
      contentVi: 'CSS đã phát triển mạnh mẽ trong những năm gần đây. Container Queries cho phép responsive design dựa trên kích thước container cha, không chỉ viewport. Selector :has() cho phép chọn parent dựa trên children. CSS Grid subgrid giúp nested grids dễ dàng hơn. View Transitions API tạo page transitions mượt mà. CSS Nesting cải thiện tổ chức code. Những tính năng này loại bỏ nhu cầu nhiều giải pháp JavaScript.',
      date: '2024-12-15',
      readTime: '10 min',
      category: 'CSS',
      categoryVi: 'CSS',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
      link: 'https://web.dev/articles/css-2023'
    },
    {
      id: 3,
      title: 'TypeScript 5.3: New Features and Best Practices',
      titleVi: 'TypeScript 5.3: Tính năng mới và Best Practices',
      excerpt: 'Learn about Import Attributes, narrowing improvements, and performance optimizations.',
      excerptVi: 'Tìm hiểu về Import Attributes, cải thiện narrowing và tối ưu hiệu suất.',
      content: 'TypeScript 5.3 brings significant improvements to developer experience. Import Attributes provide better control over module imports. Type narrowing is smarter with switch(true) patterns. Performance optimizations make compilation faster. Better error messages help debug issues quickly. The new satisfies operator ensures type safety without losing inference. These updates make TypeScript more powerful and easier to use.',
      contentVi: 'TypeScript 5.3 mang đến cải thiện đáng kể cho trải nghiệm developer. Import Attributes cung cấp kiểm soát tốt hơn cho module imports. Type narrowing thông minh hơn với switch(true) patterns. Tối ưu hiệu suất giúp compilation nhanh hơn. Error messages tốt hơn giúp debug nhanh chóng. Operator satisfies mới đảm bảo type safety mà không mất inference. Những cập nhật này làm TypeScript mạnh mẽ và dễ dùng hơn.',
      date: '2024-12-10',
      readTime: '7 min',
      category: 'TypeScript',
      categoryVi: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
      link: 'https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="blog-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('blog.title')}
        </motion.h2>

        <motion.p 
          className="blog-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {t('blog.subtitle')}
        </motion.p>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogs.map((blog, index) => (
            <motion.article 
              key={blog.id}
              className="blog-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-category">
                  {t('language') === 'vi' ? blog.categoryVi : blog.category}
                </div>
              </div>
              
              <div className="blog-content">
                <h3>{t('language') === 'vi' ? blog.titleVi : blog.title}</h3>
                <p>{t('language') === 'vi' ? blog.excerptVi : blog.excerpt}</p>
                
                <div className="blog-meta">
                  <span className="blog-date">
                    <FaCalendar /> {new Date(blog.date).toLocaleDateString(t('language') === 'vi' ? 'vi-VN' : 'en-US')}
                  </span>
                  <span className="blog-read-time">
                    <FaClock /> {blog.readTime}
                  </span>
                </div>

                <motion.button
                  className="blog-read-more"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(blog.link, '_blank');
                  }}
                >
                  {t('blog.readMore')} <FaExternalLinkAlt />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="blog-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="#" 
            className="btn-view-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('blog.viewAll')}
          </motion.a>
        </motion.div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div 
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div 
              className="blog-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedBlog(null)}
              >
                <FaTimes />
              </button>

              <div className="modal-image">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
                <div className="modal-category">
                  {t('language') === 'vi' ? selectedBlog.categoryVi : selectedBlog.category}
                </div>
              </div>

              <div className="modal-content">
                <h2>{t('language') === 'vi' ? selectedBlog.titleVi : selectedBlog.title}</h2>
                
                <div className="modal-meta">
                  <span>
                    <FaCalendar /> {new Date(selectedBlog.date).toLocaleDateString(t('language') === 'vi' ? 'vi-VN' : 'en-US')}
                  </span>
                  <span>
                    <FaClock /> {selectedBlog.readTime}
                  </span>
                </div>

                <p className="modal-text">
                  {t('language') === 'vi' ? selectedBlog.contentVi : selectedBlog.content}
                </p>

                <motion.button
                  className="modal-read-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(selectedBlog.link, '_blank')}
                >
                  {t('blog.readFull')} <FaExternalLinkAlt />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
