import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import CopyEmailButton from './CopyEmailButton';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Gửi email qua FormSubmit
      const response = await fetch('https://formsubmit.co/thanhdanh010499@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact from Portfolio: ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        alert(t('contact.form.success'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Có lỗi xảy ra. Vui lòng thử lại!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('contact.title')}
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>{t('contact.subtitle')}</h3>
            <p>{t('contact.description')}</p>
            
            <div className="info-items">
              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>{t('contact.email')}</h4>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>thanhdanh010499@gmail.com</p>
                    <CopyEmailButton email="thanhdanh010499@gmail.com" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaPhone className="info-icon" />
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <p>0938174684</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>{t('contact.address')}</h4>
                  <p>67/108B Bui Dinh Tuy, Ward 12, Binh Thanh District</p>
                </div>
              </motion.div>
            </div>

            {/* Facebook QR Code */}
            <motion.div 
              className="qr-code-section"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h4>
                <FaFacebook className="fb-icon" />
                {t('contact.facebook') || 'Kết nối Facebook'}
              </h4>
              <div className="qr-code-wrapper">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.facebook.com/thanhdanh010499" 
                  alt="Facebook QR Code"
                  className="qr-code-image"
                />
                <p className="qr-code-text">{t('contact.scanQR') || 'Quét mã để kết nối'}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('contact.form.submit')}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
