import { motion } from 'framer-motion';

export function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Nama</label>
        <input 
          type="text"
          className="form-input"
          placeholder="Nama Anda"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Email</label>
        <input 
          type="email"
          className="form-input"
          placeholder="Email Anda"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Pesan</label>
        <textarea 
          className="form-input h-32 resize-none"
          placeholder="Tulis pesan Anda"
        ></textarea>
      </div>
      
      <motion.button 
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold
          transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
      >
        Kirim Pesan
      </motion.button>
    </form>
  );
}