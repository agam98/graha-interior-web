import { useState } from 'preact/hooks';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { portfolioMedia } from '../../data/media';

const categories = ['Semua', ...new Set(portfolioMedia.map(item => item.category))];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProjects = activeCategory === 'Semua'
    ? portfolioMedia
    : portfolioMedia.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Portofolio Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat hasil karya desain interior dapur yang telah kami kerjakan
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${
                activeCategory === category
                  ? 'category-button-active'
                  : 'category-button-inactive'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}