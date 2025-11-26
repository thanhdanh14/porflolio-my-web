import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCode, FaReact, FaNodeJs, FaCopy, FaCheck } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import './CodeShowcase.css';

const CodeShowcase = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const code = codeSnippets[activeTab].code;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const codeSnippets = [
    {
      title: 'React Custom Hook',
      icon: <FaReact />,
      language: 'javascript',
      description: 'Custom hook for handling API calls with loading and error states',
      code: `const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};`
    },
    {
      title: 'TypeScript Utility',
      icon: <SiTypescript />,
      language: 'typescript',
      description: 'Type-safe deep merge utility function',
      code: `type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

function deepMerge<T extends object>(
  target: T,
  source: DeepPartial<T>
): T {
  const output = { ...target };
  
  for (const key in source) {
    if (source[key] instanceof Object) {
      output[key] = deepMerge(
        output[key],
        source[key]
      );
    } else {
      output[key] = source[key] as T[Extract<keyof T, string>];
    }
  }
  
  return output;
}`
    },
    {
      title: 'Node.js Middleware',
      icon: <FaNodeJs />,
      language: 'javascript',
      description: 'Express middleware for rate limiting',
      code: `const rateLimit = (maxRequests, windowMs) => {
  const requests = new Map();

  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    
    if (!requests.has(ip)) {
      requests.set(ip, []);
    }
    
    const userRequests = requests.get(ip);
    const recentRequests = userRequests.filter(
      time => now - time < windowMs
    );
    
    if (recentRequests.length >= maxRequests) {
      return res.status(429).json({
        error: 'Too many requests'
      });
    }
    
    recentRequests.push(now);
    requests.set(ip, recentRequests);
    next();
  };
};`
    }
  ];

  return (
    <section id="code-showcase" className="code-showcase" ref={ref}>
      <div className="code-container">
        <motion.div
          className="code-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <FaCode className="code-icon-header" />
          <h2 className="section-title">{t('codeShowcase.title')}</h2>
          <p style={{ color: '#b0b0b0', marginTop: '1rem' }}>
            {t('codeShowcase.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="code-tabs"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {codeSnippets.map((snippet, index) => (
            <motion.button
              key={index}
              className={`code-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tab-icon">{snippet.icon}</span>
              <span className="tab-title">{snippet.title}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="code-content"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="code-info">
            <h3>{codeSnippets[activeTab].title}</h3>
            <p>{codeSnippets[activeTab].description}</p>
          </div>
          
          <div className="code-block">
            <div className="code-header-bar">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-header-right">
                <span className="code-language">
                  {codeSnippets[activeTab].language}
                </span>
                <motion.button
                  className="copy-code-btn"
                  onClick={handleCopyCode}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={copied ? t('codeShowcase.copied') : t('codeShowcase.copyCode')}
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                  <span>{copied ? t('codeShowcase.copied') : t('codeShowcase.copyCode')}</span>
                </motion.button>
              </div>
            </div>
            <pre>
              <code>{codeSnippets[activeTab].code}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeShowcase;
