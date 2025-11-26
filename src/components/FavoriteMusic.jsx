import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMusic, FaPlay } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './FavoriteMusic.css';

const FavoriteMusic = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // YouTube videos yêu thích
  const musicVideos = [
    {
      id: 'Tr5Ty9ZngvE',
      title: 'Favorite Song 1',
      artist: 'Music Artist',
      description: 'This song always motivates me while coding'
    },
    {
      id: 's76BtB81Oms',
      title: 'Favorite Song 2',
      artist: 'Music Artist',
      description: 'Perfect for focus and concentration'
    },
    {
      id: 'R0mjrRYBf2o',
      title: 'Favorite Song 3',
      artist: 'Music Artist',
      description: 'My go-to playlist for late night coding'
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="music" className="favorite-music" ref={ref}>
      <div className="music-container">
        <motion.div
          className="music-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <FaMusic className="music-icon-header" />
          <h2 className="section-title">{t('music.title')}</h2>
          <p className="music-subtitle">
            {t('music.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="music-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {musicVideos.map((video, index) => (
            <motion.div 
              key={index}
              className="music-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                />
                <div className="video-overlay">
                  <FaPlay className="play-icon" />
                </div>
              </div>
              <div className="music-info">
                <h3>{video.title}</h3>
                <p className="artist">{video.artist}</p>
                <p className="description">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="music-note"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p>
            💡 <strong>{t('music.proTip')}</strong> {t('music.proTipText')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FavoriteMusic;
