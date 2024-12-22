import { motion } from 'framer-motion';
import type { MediaItem } from '../../data/media';

interface ProjectCardProps {
  item: MediaItem;
  index: number;
}

export function ProjectCard({ item, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={item.url}
          alt={item.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{item.description}</p>
        <span className="inline-block bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
}