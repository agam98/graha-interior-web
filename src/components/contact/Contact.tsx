import { ContactItem } from './ContactItem';
import { ContactForm } from './ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/contact';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hubungi kami untuk mewujudkan ruangan impian Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ContactItem 
              Icon={FaPhone}
              title="Telepon"
              content={
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-accent hover:underline"
                >
                  {contactInfo.phone}
                </a>
              }
              delay={0.2}
            />
            
            <ContactItem 
              Icon={FaEnvelope}
              title="Email"
              content={
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-accent hover:underline"
                >
                  {contactInfo.email}
                </a>
              }
              delay={0.4}
            />
            
            <ContactItem 
              Icon={FaMapMarkerAlt}
              title="Alamat"
              content={
                <>
                  {contactInfo.address.street}<br />
                  {contactInfo.address.area}<br />
                  {contactInfo.address.city}, {contactInfo.address.postalCode}<br />
                  {contactInfo.address.country}
                </>
              }
              delay={0.6}
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}