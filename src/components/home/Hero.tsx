import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wujudkan Ruangan Impian Anda
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Ciptakan interior yang sempurna sesuai dengan gaya dan kepribadian Anda
          </p>
          <Button href="#contact">Mulai Sekarang</Button>
        </motion.div>
      </div>
    </section>
  );
}