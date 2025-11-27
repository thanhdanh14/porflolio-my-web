const translations = {
  vi: {
    nav: {
      home: 'Trang Chủ',
      about: 'Về Tôi',
      skills: 'Kỹ Năng',
      projects: 'Dự Án',
      resume: 'Hồ Sơ',
      music: 'Âm Nhạc',
      blog: 'Blog',
      contact: 'Liên Hệ'
    },
    hero: {
      greeting: 'Xin chào, tôi là',
      name: 'Biện Thành Danh',
      roles: ['Full Stack Developer', 'UI/UX Enthusiast', 'Creative Coder', 'Problem Solver'],
      viewProjects: 'Xem Dự Án',
      contactMe: 'Liên Hệ'
    },
    about: {
      title: 'Về Tôi',
      intro1: 'Xin chào! Tôi là một developer đam mê học hỏi và tạo ra những trải nghiệm web tuyệt vời. Tôi luôn tìm kiếm cơ hội để phát triển kỹ năng và làm việc trên các dự án thú vị.',
      intro2: 'Tôi đang học và làm việc với React, Node.js, và các công nghệ web hiện đại. Mục tiêu của tôi là trở thành một Full Stack Developer giỏi và đóng góp vào những dự án có ý nghĩa.',
      stats: {
        yearsExperience: 'Năm Kinh Nghiệm',
        projectsCompleted: 'Dự Án Hoàn Thành',
        majorCompanies: 'Công Ty Lớn'
      }
    },
    skills: {
      title: 'Kỹ Năng',
      techUsing: 'Công nghệ tôi đang sử dụng:'
    },
    projects: {
      title: 'Dự Án',
      comingSoon: 'Dự Án Sắp Ra Mắt',
      description: 'Tôi đang làm việc trên những dự án thú vị. Hãy quay lại sau nhé!'
    },
    resume: {
      title: 'Thông Tin Chi Tiết',
      download: 'Tải CV',
      viewCV: 'Xem CV',
      close: 'Đóng',
      downloadCV: 'Tải xuống CV',
      frontendDeveloper: 'Frontend Developer',
      education: 'Học Vấn',
      experience: 'Kinh Nghiệm',
      certifications: 'Chứng Chỉ',
      hobbies: 'Sở Thích',
      funFacts: 'Sự Thật Thú Vị',
      educationData: {
        degree: 'Cử nhân Kỹ thuật Phần mềm',
        school: 'Đại học Công nghệ TP.HCM (HUTECH)',
        period: 'Tháng 9/2017 - Tháng 4/2021',
        description: 'Chuyên ngành Kỹ thuật Phần mềm và Phát triển Web'
      },
      experienceData: [
        {
          title: 'Frontend Developer',
          company: 'Prudential Vietnam',
          period: 'Tháng 12/2024 - Hiện tại',
          description: 'Xây dựng tính năng hiển thị dữ liệu với ReactJs và ReactNative. Học BackEnd với Java. Làm việc trên POF, CFI và HTML email templates cho SalesForce MKT.'
        },
        {
          title: 'Software Engineer',
          company: 'BuyMed',
          period: 'Tháng 9/2023 - Tháng 7/2024',
          description: 'Xây dựng UI với SolidJs, Solid-Start (CSR, SSR, Streaming). Làm việc trên nền tảng Billing, E-Contract và Procurement Budget với hơn 80 thành viên.'
        },
        {
          title: 'Frontend Developer ReactJS',
          company: 'Hitachi Vantara Vietnam',
          period: 'Tháng 5/2021 - Tháng 7/2023',
          description: 'Có kinh nghiệm với Redux-toolkit, Redux-thunk, Material-UI, React-hook-form. Làm việc trên nền tảng ServiceNow, OpSI, EQUIOS, HVN Website và CareU-Bot với tích hợp ChatGPT.'
        }
      ],
      certificationsData: [
        { name: 'Cloud Computing Fundamentals', issuer: 'AWS Introduction', year: '2023' },
        { name: 'Micro-Certification - Agile and Test Management', issuer: 'ServiceNow Implementation', year: '2022' },
        { name: 'High Achievement Award', issuer: 'HUTECH University', year: '2020' }
      ],
      hobbiesData: [
        { icon: '💻', name: 'Lập trình', description: 'React & SolidJs' },
        { icon: '📚', name: 'Học hỏi', description: 'Công nghệ mới' },
        { icon: '🤝', name: 'Làm việc nhóm', description: 'Kỹ năng lãnh đạo' },
        { icon: '🎯', name: 'Giải quyết vấn đề', description: 'Yêu cầu phức tạp' },
        { icon: '🌱', name: 'Tình nguyện', description: 'Hỗ trợ cộng đồng' },
        { icon: '🔧', name: 'IOT', description: 'Câu lạc bộ Mã nguồn mở' }
      ],
      funFactsData: [
        '💼 4 năm kinh nghiệm phát triển Frontend',
        '🚀 Chuyên gia về React.js và SolidJs',
        '👥 Kinh nghiệm quản lý nhóm và hướng dẫn',
        '🎓 Thành viên Câu lạc bộ IOT Mã nguồn mở',
        '❤️ Tích cực trong gây quỹ và hỗ trợ cộng đồng',
        '🏆 Được trao giải thành tích học tập cao'
      ]
    },
    contact: {
      title: 'Liên Hệ',
      subtitle: 'Hãy kết nối với tôi',
      description: 'Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội hợp tác.',
      email: 'Email',
      phone: 'Điện thoại',
      phoneText: 'Liên hệ qua email',
      address: 'Địa chỉ',
      addressText: 'Việt Nam',
      facebook: 'Kết nối Facebook',
      scanQR: 'Quét mã để kết nối',
      form: {
        name: 'Tên của bạn',
        email: 'Email của bạn',
        message: 'Tin nhắn của bạn',
        submit: 'Gửi Tin Nhắn',
        success: 'Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.'
      }
    },
    footer: {
      madeWith: 'Được tạo với',
      using: 'sử dụng React'
    },
    music: {
      title: 'Nhạc Yêu Thích',
      subtitle: 'Những bản nhạc truyền cảm hứng khi tôi code 🎵',
      proTip: 'Mẹo hay:',
      proTipText: 'Tôi nghe những bài này khi làm việc với các vấn đề phức tạp. Âm nhạc giúp tôi tập trung và sáng tạo hơn!'
    },
    typingGame: {
      title: 'Test Tốc Độ Gõ',
      subtitle: 'Kiểm tra tốc độ và độ chính xác của bạn!',
      wpm: 'WPM',
      accuracy: 'Độ chính xác',
      time: 'Thời gian',
      start: 'Bắt đầu',
      reset: 'Làm lại',
      startTyping: 'Bắt đầu gõ...',
      clickStart: 'Click Bắt đầu để chơi',
      complete: 'Hoàn thành!',
      wordsPerMinute: 'Từ mỗi phút',
      tryAgain: 'Thử lại'
    },
    codeShowcase: {
      title: 'Showcase Code',
      subtitle: 'Một số code snippets và utilities yêu thích của tôi',
      copyCode: 'Sao chép',
      copied: 'Đã sao chép!'
    },
    github: {
      title: 'Thống Kê GitHub',
      viewProfile: 'Xem Hồ Sơ Đầy Đủ'
    },
    blog: {
      title: 'Blog',
      subtitle: 'Chia sẻ kiến thức và kinh nghiệm lập trình',
      readMore: 'Đọc thêm',
      readFull: 'Đọc bài viết đầy đủ',
      viewAll: 'Xem tất cả bài viết'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      resume: 'Resume',
      music: 'Music',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Bien Thanh Danh',
      roles: ['Full Stack Developer', 'UI/UX Enthusiast', 'Creative Coder', 'Problem Solver'],
      viewProjects: 'View Projects',
      contactMe: 'Contact Me'
    },
    about: {
      title: 'About Me',
      intro1: 'I\'m a Frontend Developer with 4 years of experience specializing in React.js and SolidJs. Equipped with strong analytical skills in React\'s component-based architecture, I excel at breaking down complex requirements into manageable tasks and delivering efficient solutions.',
      intro2: 'With a continuous learning mindset and focus on professional growth, I have worked with leading companies like Prudential Vietnam, BuyMed, and Hitachi Vantara. My expertise includes Redux-toolkit, TypeScript, Material-UI, and modern web technologies. I also have team management experience and enjoy mentoring new developers.',
      stats: {
        yearsExperience: 'Years Experience',
        projectsCompleted: 'Projects Completed',
        majorCompanies: 'Major Companies'
      }
    },
    skills: {
      title: 'Skills',
      techUsing: 'Technologies I use:'
    },
    projects: {
      title: 'Projects',
      comingSoon: 'Coming Soon',
      description: 'I am working on exciting projects. Stay tuned!'
    },
    resume: {
      title: 'Detailed Information',
      download: 'Download CV',
      viewCV: 'View CV',
      close: 'Close',
      downloadCV: 'Download CV',
      frontendDeveloper: 'Frontend Developer',
      education: 'Education',
      experience: 'Experience',
      certifications: 'Certifications',
      hobbies: 'Hobbies & Interests',
      funFacts: 'Fun Facts',
      educationData: {
        degree: 'Bachelor of Software Engineering',
        school: 'University of Technology (HUTECH University)',
        period: 'September 2017 - April 2021',
        description: 'Focused on Software Engineering and Web Development'
      },
      experienceData: [
        {
          title: 'Frontend Developer',
          company: 'Prudential Vietnam',
          period: 'December 2024 - Present',
          description: 'Building data display features with ReactJs and ReactNative. Learning BackEnd with Java. Working on POF, CFI, and HTML email templates for SalesForce MKT.'
        },
        {
          title: 'Software Engineer',
          company: 'BuyMed',
          period: 'September 2023 - July 2024',
          description: 'Built UI with SolidJs, Solid-Start (CSR, SSR, Streaming). Worked on Billing, E-Contract, and Procurement Budget platforms with 80+ team members.'
        },
        {
          title: 'Frontend Developer ReactJS',
          company: 'Hitachi Vantara Vietnam',
          period: 'May 2021 - July 2023',
          description: 'Experienced with Redux-toolkit, Redux-thunk, Material-UI, React-hook-form. Worked on ServiceNow platform, OpSI, EQUIOS, HVN Website, and CareU-Bot with ChatGPT integration.'
        }
      ],
      certificationsData: [
        { name: 'Cloud Computing Fundamentals', issuer: 'AWS Introduction', year: '2023' },
        { name: 'Micro-Certification - Agile and Test Management', issuer: 'ServiceNow Implementation', year: '2022' },
        { name: 'High Achievement Award', issuer: 'HUTECH University', year: '2020' }
      ],
      hobbiesData: [
        { icon: '💻', name: 'Coding', description: 'React & SolidJs' },
        { icon: '📚', name: 'Learning', description: 'New technologies' },
        { icon: '🤝', name: 'Team Work', description: 'Leadership skills' },
        { icon: '🎯', name: 'Problem Solving', description: 'Complex requirements' },
        { icon: '🌱', name: 'Volunteering', description: 'Community support' },
        { icon: '🔧', name: 'IOT', description: 'Open Source Club' }
      ],
      funFactsData: [
        '💼 4 years of Frontend Development experience',
        '🚀 Expert in React.js and SolidJs frameworks',
        '👥 Team management and mentoring experience',
        '🎓 Member of School\'s IOT Open Source Club',
        '❤️ Active in fundraising and community support',
        '🏆 Awarded for high academic achievements'
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's Connect",
      description: 'I am always open to discussing new projects, creative ideas, or opportunities to collaborate.',
      email: 'Email',
      phone: 'Phone',
      phoneText: 'Contact via email',
      address: 'Address',
      addressText: 'Vietnam',
      facebook: 'Connect on Facebook',
      scanQR: 'Scan to connect',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you for contacting me! I will respond as soon as possible.'
      }
    },
    footer: {
      madeWith: 'Made with',
      using: 'using React'
    },
    music: {
      title: 'Favorite Music',
      subtitle: 'Music that keeps me inspired while coding 🎵',
      proTip: 'Pro tip:',
      proTipText: 'I listen to these while working on complex problems. Music helps me stay focused and creative!'
    },
    typingGame: {
      title: 'Typing Speed Test',
      subtitle: 'Test your typing speed and accuracy!',
      wpm: 'WPM',
      accuracy: 'Accuracy',
      time: 'Time',
      start: 'Start Test',
      reset: 'Reset',
      startTyping: 'Start typing...',
      clickStart: 'Click Start to begin',
      complete: 'Test Complete!',
      wordsPerMinute: 'Words Per Minute',
      tryAgain: 'Try Again'
    },
    codeShowcase: {
      title: 'Code Showcase',
      subtitle: 'Some of my favorite code snippets and utilities',
      copyCode: 'Copy Code',
      copied: 'Copied!'
    },
    github: {
      title: 'GitHub Statistics',
      viewProfile: 'View Full Profile'
    },
    blog: {
      title: 'Blog',
      subtitle: 'Sharing knowledge and coding experiences',
      readMore: 'Read more',
      readFull: 'Read full article',
      viewAll: 'View all posts'
    }
  },
  ko: {
    nav: {
      home: '홈',
      about: '소개',
      skills: '기술',
      projects: '프로젝트',
      resume: '이력서',
      music: '음악',
      contact: '연락'
    },
    hero: {
      greeting: '안녕하세요, 저는',
      name: '비엔 탄 단',
      roles: ['풀스택 개발자', 'UI/UX 애호가', '크리에이티브 코더', '문제 해결사'],
      viewProjects: '프로젝트 보기',
      contactMe: '연락하기'
    },
    about: {
      title: '소개',
      intro1: '안녕하세요! 저는 배우고 멋진 웹 경험을 만드는 것을 좋아하는 열정적인 개발자입니다. 저는 항상 기술을 개발하고 흥미로운 프로젝트에서 일할 기회를 찾고 있습니다.',
      intro2: '저는 React, Node.js 및 현대 웹 기술을 배우고 작업하고 있습니다. 제 목표는 숙련된 풀스택 개발자가 되어 의미 있는 프로젝트에 기여하는 것입니다.',
      stats: {
        yearsExperience: '경력 년수',
        projectsCompleted: '완료된 프로젝트',
        majorCompanies: '주요 회사'
      }
    },
    skills: {
      title: '기술',
      techUsing: '사용하는 기술:'
    },
    projects: {
      title: '프로젝트',
      comingSoon: '곧 출시',
      description: '흥미로운 프로젝트를 진행 중입니다. 기대해 주세요!'
    },
    resume: {
      title: '상세 정보',
      download: 'CV 다운로드',
      viewCV: 'CV 보기',
      close: '닫기',
      downloadCV: 'CV 다운로드',
      frontendDeveloper: '프론트엔드 개발자',
      education: '학력',
      experience: '경력',
      certifications: '자격증',
      hobbies: '취미 및 관심사',
      funFacts: '재미있는 사실',
      educationData: {
        degree: '소프트웨어 공학 학사',
        school: '기술 대학교 (HUTECH 대학교)',
        period: '2017년 9월 - 2021년 4월',
        description: '소프트웨어 공학 및 웹 개발 전공'
      },
      experienceData: [
        {
          title: '프론트엔드 개발자',
          company: 'Prudential Vietnam',
          period: '2024년 12월 - 현재',
          description: 'ReactJs 및 ReactNative로 데이터 표시 기능 구축. Java로 백엔드 학습. SalesForce MKT용 POF, CFI 및 HTML 이메일 템플릿 작업.'
        },
        {
          title: '소프트웨어 엔지니어',
          company: 'BuyMed',
          period: '2023년 9월 - 2024년 7월',
          description: 'SolidJs, Solid-Start (CSR, SSR, Streaming)로 UI 구축. 80명 이상의 팀원과 함께 Billing, E-Contract 및 Procurement Budget 플랫폼 작업.'
        },
        {
          title: '프론트엔드 개발자 ReactJS',
          company: 'Hitachi Vantara Vietnam',
          period: '2021년 5월 - 2023년 7월',
          description: 'Redux-toolkit, Redux-thunk, Material-UI, React-hook-form 경험. ServiceNow 플랫폼, OpSI, EQUIOS, HVN 웹사이트 및 ChatGPT 통합 CareU-Bot 작업.'
        }
      ],
      certificationsData: [
        { name: '클라우드 컴퓨팅 기초', issuer: 'AWS 소개', year: '2023' },
        { name: '마이크로 인증 - 애자일 및 테스트 관리', issuer: 'ServiceNow 구현', year: '2022' },
        { name: '우수 성취상', issuer: 'HUTECH 대학교', year: '2020' }
      ],
      hobbiesData: [
        { icon: '💻', name: '코딩', description: 'React & SolidJs' },
        { icon: '📚', name: '학습', description: '새로운 기술' },
        { icon: '🤝', name: '팀워크', description: '리더십 기술' },
        { icon: '🎯', name: '문제 해결', description: '복잡한 요구사항' },
        { icon: '🌱', name: '자원봉사', description: '커뮤니티 지원' },
        { icon: '🔧', name: 'IOT', description: '오픈소스 클럽' }
      ],
      funFactsData: [
        '💼 4년의 프론트엔드 개발 경험',
        '🚀 React.js 및 SolidJs 프레임워크 전문가',
        '👥 팀 관리 및 멘토링 경험',
        '🎓 학교 IOT 오픈소스 클럽 회원',
        '❤️ 모금 및 커뮤니티 지원 활동',
        '🏆 높은 학업 성취도로 수상'
      ]
    },
    contact: {
      title: '연락',
      subtitle: '연결하기',
      description: '새로운 프로젝트, 창의적인 아이디어 또는 협업 기회에 대해 논의하는 것을 환영합니다.',
      email: '이메일',
      phone: '전화',
      phoneText: '이메일로 연락',
      address: '주소',
      addressText: '베트남',
      facebook: 'Facebook 연결',
      scanQR: '스캔하여 연결',
      form: {
        name: '이름',
        email: '이메일',
        message: '메시지',
        submit: '메시지 보내기',
        success: '연락해 주셔서 감사합니다! 최대한 빨리 답변드리겠습니다.'
      }
    },
    footer: {
      madeWith: '제작:',
      using: 'React 사용'
    },
    music: {
      title: '좋아하는 음악',
      subtitle: '코딩할 때 영감을 주는 음악 🎵',
      proTip: '팁:',
      proTipText: '복잡한 문제를 해결할 때 이 음악을 듣습니다. 음악은 집중력과 창의성을 높여줍니다!'
    },
    typingGame: {
      title: '타이핑 속도 테스트',
      subtitle: '타이핑 속도와 정확도를 테스트하세요!',
      wpm: 'WPM',
      accuracy: '정확도',
      time: '시간',
      start: '시작',
      reset: '재시작',
      startTyping: '타이핑 시작...',
      clickStart: '시작을 클릭하세요',
      complete: '테스트 완료!',
      wordsPerMinute: '분당 단어 수',
      tryAgain: '다시 시도'
    },
    codeShowcase: {
      title: '코드 쇼케이스',
      subtitle: '제가 좋아하는 코드 스니펫과 유틸리티',
      copyCode: '코드 복사',
      copied: '복사됨!'
    },
    github: {
      title: 'GitHub 통계',
      viewProfile: '전체 프로필 보기'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '私について',
      skills: 'スキル',
      projects: 'プロジェクト',
      resume: '履歴書',
      music: '音楽',
      contact: 'お問い合わせ'
    },
    hero: {
      greeting: 'こんにちは、私は',
      name: 'ビエン・タン・ダン',
      roles: ['フルスタック開発者', 'UI/UX愛好家', 'クリエイティブコーダー', '問題解決者'],
      viewProjects: 'プロジェクトを見る',
      contactMe: 'お問い合わせ'
    },
    about: {
      title: '私について',
      intro1: 'こんにちは！私は学ぶことと素晴らしいウェブ体験を作ることが大好きな情熱的な開発者です。スキルを磨き、面白いプロジェクトに取り組む機会を常に探しています。',
      intro2: 'React、Node.js、そして最新のウェブ技術を学び、作業しています。私の目標は、熟練したフルスタック開発者になり、意味のあるプロジェクトに貢献することです。',
      stats: {
        yearsExperience: '経験年数',
        projectsCompleted: '完了したプロジェクト',
        majorCompanies: '主要企業'
      }
    },
    skills: {
      title: 'スキル',
      techUsing: '使用している技術:'
    },
    projects: {
      title: 'プロジェクト',
      comingSoon: '近日公開',
      description: 'エキサイティングなプロジェクトに取り組んでいます。お楽しみに！'
    },
    resume: {
      title: '詳細情報',
      download: 'CV ダウンロード',
      viewCV: 'CV を見る',
      close: '閉じる',
      downloadCV: 'CV をダウンロード',
      frontendDeveloper: 'フロントエンド開発者',
      education: '学歴',
      experience: '経験',
      certifications: '資格',
      hobbies: '趣味と興味',
      funFacts: '面白い事実',
      educationData: {
        degree: 'ソフトウェア工学学士',
        school: '工科大学 (HUTECH大学)',
        period: '2017年9月 - 2021年4月',
        description: 'ソフトウェア工学とWeb開発に焦点'
      },
      experienceData: [
        {
          title: 'フロントエンド開発者',
          company: 'Prudential Vietnam',
          period: '2024年12月 - 現在',
          description: 'ReactJsとReactNativeでデータ表示機能を構築。Javaでバックエンドを学習。SalesForce MKT用のPOF、CFI、HTMLメールテンプレートに取り組む。'
        },
        {
          title: 'ソフトウェアエンジニア',
          company: 'BuyMed',
          period: '2023年9月 - 2024年7月',
          description: 'SolidJs、Solid-Start (CSR、SSR、Streaming)でUIを構築。80人以上のチームメンバーとBilling、E-Contract、Procurement Budgetプラットフォームに取り組む。'
        },
        {
          title: 'フロントエンド開発者 ReactJS',
          company: 'Hitachi Vantara Vietnam',
          period: '2021年5月 - 2023年7月',
          description: 'Redux-toolkit、Redux-thunk、Material-UI、React-hook-formの経験。ServiceNowプラットフォーム、OpSI、EQUIOS、HVN Website、ChatGPT統合のCareU-Botに取り組む。'
        }
      ],
      certificationsData: [
        { name: 'クラウドコンピューティング基礎', issuer: 'AWS入門', year: '2023' },
        { name: 'マイクロ認定 - アジャイルとテスト管理', issuer: 'ServiceNow実装', year: '2022' },
        { name: '優秀成績賞', issuer: 'HUTECH大学', year: '2020' }
      ],
      hobbiesData: [
        { icon: '💻', name: 'コーディング', description: 'React & SolidJs' },
        { icon: '📚', name: '学習', description: '新しい技術' },
        { icon: '🤝', name: 'チームワーク', description: 'リーダーシップスキル' },
        { icon: '🎯', name: '問題解決', description: '複雑な要件' },
        { icon: '🌱', name: 'ボランティア', description: 'コミュニティサポート' },
        { icon: '🔧', name: 'IOT', description: 'オープンソースクラブ' }
      ],
      funFactsData: [
        '💼 4年のフロントエンド開発経験',
        '🚀 React.jsとSolidJsフレームワークの専門家',
        '👥 チーム管理とメンタリング経験',
        '🎓 学校のIOTオープンソースクラブのメンバー',
        '❤️ 募金活動とコミュニティサポートに積極的',
        '🏆 高い学業成績で受賞'
      ]
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'つながりましょう',
      description: '新しいプロジェクト、クリエイティブなアイデア、またはコラボレーションの機会について話し合うことを歓迎します。',
      email: 'メール',
      phone: '電話',
      phoneText: 'メールでお問い合わせ',
      address: '住所',
      addressText: 'ベトナム',
      facebook: 'Facebookで繋がる',
      scanQR: 'スキャンして接続',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
        submit: 'メッセージを送信',
        success: 'お問い合わせありがとうございます！できるだけ早く返信いたします。'
      }
    },
    footer: {
      madeWith: '制作:',
      using: 'React使用'
    },
    music: {
      title: 'お気に入りの音楽',
      subtitle: 'コーディング中にインスピレーションを与えてくれる音楽 🎵',
      proTip: 'ヒント:',
      proTipText: '複雑な問題に取り組むときにこれらを聴きます。音楽は集中力と創造性を高めてくれます！'
    },
    typingGame: {
      title: 'タイピング速度テスト',
      subtitle: 'タイピング速度と正確性をテストしましょう！',
      wpm: 'WPM',
      accuracy: '正確性',
      time: '時間',
      start: 'スタート',
      reset: 'リセット',
      startTyping: 'タイピング開始...',
      clickStart: 'スタートをクリック',
      complete: 'テスト完了！',
      wordsPerMinute: '1分あたりの単語数',
      tryAgain: 'もう一度'
    },
    codeShowcase: {
      title: 'コードショーケース',
      subtitle: 'お気に入りのコードスニペットとユーティリティ',
      copyCode: 'コードをコピー',
      copied: 'コピーしました!'
    },
    github: {
      title: 'GitHub統計',
      viewProfile: '完全なプロフィールを見る'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      resume: 'Lebenslauf',
      music: 'Musik',
      contact: 'Kontakt'
    },
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Bien Thanh Danh',
      roles: ['Full Stack Entwickler', 'UI/UX Enthusiast', 'Kreativer Programmierer', 'Problemlöser'],
      viewProjects: 'Projekte ansehen',
      contactMe: 'Kontaktiere mich'
    },
    about: {
      title: 'Über mich',
      intro1: 'Hallo! Ich bin ein leidenschaftlicher Entwickler, der gerne lernt und großartige Web-Erlebnisse schafft. Ich suche immer nach Möglichkeiten, meine Fähigkeiten zu entwickeln und an spannenden Projekten zu arbeiten.',
      intro2: 'Ich lerne und arbeite mit React, Node.js und modernen Webtechnologien. Mein Ziel ist es, ein erfahrener Full Stack Entwickler zu werden und zu bedeutungsvollen Projekten beizutragen.',
      stats: {
        yearsExperience: 'Jahre Erfahrung',
        projectsCompleted: 'Abgeschlossene Projekte',
        majorCompanies: 'Große Unternehmen'
      }
    },
    skills: {
      title: 'Fähigkeiten',
      techUsing: 'Technologien, die ich verwende:'
    },
    projects: {
      title: 'Projekte',
      comingSoon: 'Demnächst verfügbar',
      description: 'Ich arbeite an spannenden Projekten. Bleiben Sie dran!'
    },
    resume: {
      title: 'Detaillierte Informationen',
      download: 'Lebenslauf herunterladen',
      viewCV: 'Lebenslauf ansehen',
      close: 'Schließen',
      downloadCV: 'Lebenslauf herunterladen',
      frontendDeveloper: 'Frontend-Entwickler',
      education: 'Ausbildung',
      experience: 'Berufserfahrung',
      certifications: 'Zertifizierungen',
      hobbies: 'Hobbys & Interessen',
      funFacts: 'Interessante Fakten',
      educationData: {
        degree: 'Bachelor of Software Engineering',
        school: 'Technische Universität (HUTECH Universität)',
        period: 'September 2017 - April 2021',
        description: 'Schwerpunkt auf Software Engineering und Webentwicklung'
      },
      experienceData: [
        {
          title: 'Frontend-Entwickler',
          company: 'Prudential Vietnam',
          period: 'Dezember 2024 - Heute',
          description: 'Entwicklung von Datenanzeigefunktionen mit ReactJs und ReactNative. Backend-Lernen mit Java. Arbeit an POF, CFI und HTML-E-Mail-Vorlagen für SalesForce MKT.'
        },
        {
          title: 'Software-Ingenieur',
          company: 'BuyMed',
          period: 'September 2023 - Juli 2024',
          description: 'UI-Entwicklung mit SolidJs, Solid-Start (CSR, SSR, Streaming). Arbeit an Billing-, E-Contract- und Procurement Budget-Plattformen mit über 80 Teammitgliedern.'
        },
        {
          title: 'Frontend-Entwickler ReactJS',
          company: 'Hitachi Vantara Vietnam',
          period: 'Mai 2021 - Juli 2023',
          description: 'Erfahrung mit Redux-toolkit, Redux-thunk, Material-UI, React-hook-form. Arbeit an ServiceNow-Plattform, OpSI, EQUIOS, HVN Website und CareU-Bot mit ChatGPT-Integration.'
        }
      ],
      certificationsData: [
        { name: 'Cloud Computing Grundlagen', issuer: 'AWS Einführung', year: '2023' },
        { name: 'Mikro-Zertifizierung - Agile und Testmanagement', issuer: 'ServiceNow Implementierung', year: '2022' },
        { name: 'Auszeichnung für hohe Leistungen', issuer: 'HUTECH Universität', year: '2020' }
      ],
      hobbiesData: [
        { icon: '💻', name: 'Programmieren', description: 'React & SolidJs' },
        { icon: '📚', name: 'Lernen', description: 'Neue Technologien' },
        { icon: '🤝', name: 'Teamarbeit', description: 'Führungsqualitäten' },
        { icon: '🎯', name: 'Problemlösung', description: 'Komplexe Anforderungen' },
        { icon: '🌱', name: 'Freiwilligenarbeit', description: 'Community-Unterstützung' },
        { icon: '🔧', name: 'IOT', description: 'Open Source Club' }
      ],
      funFactsData: [
        '💼 4 Jahre Frontend-Entwicklungserfahrung',
        '🚀 Experte für React.js und SolidJs Frameworks',
        '👥 Team-Management und Mentoring-Erfahrung',
        '🎓 Mitglied des IOT Open Source Clubs der Schule',
        '❤️ Aktiv bei Spendenaktionen und Community-Unterstützung',
        '🏆 Ausgezeichnet für hohe akademische Leistungen'
      ]
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Lass uns verbinden',
      description: 'Ich bin immer offen für Diskussionen über neue Projekte, kreative Ideen oder Möglichkeiten zur Zusammenarbeit.',
      email: 'E-Mail',
      phone: 'Telefon',
      phoneText: 'Kontakt per E-Mail',
      address: 'Adresse',
      addressText: 'Vietnam',
      facebook: 'Auf Facebook verbinden',
      scanQR: 'Scannen zum Verbinden',
      form: {
        name: 'Ihr Name',
        email: 'Ihre E-Mail',
        message: 'Ihre Nachricht',
        submit: 'Nachricht senden',
        success: 'Vielen Dank für Ihre Kontaktaufnahme! Ich werde so schnell wie möglich antworten.'
      }
    },
    footer: {
      madeWith: 'Erstellt mit',
      using: 'mit React'
    },
    music: {
      title: 'Lieblingsmusik',
      subtitle: 'Musik, die mich beim Programmieren inspiriert 🎵',
      proTip: 'Profi-Tipp:',
      proTipText: 'Ich höre diese beim Arbeiten an komplexen Problemen. Musik hilft mir, konzentriert und kreativ zu bleiben!'
    },
    typingGame: {
      title: 'Tippgeschwindigkeitstest',
      subtitle: 'Testen Sie Ihre Tippgeschwindigkeit und Genauigkeit!',
      wpm: 'WPM',
      accuracy: 'Genauigkeit',
      time: 'Zeit',
      start: 'Start',
      reset: 'Zurücksetzen',
      startTyping: 'Beginnen Sie zu tippen...',
      clickStart: 'Klicken Sie auf Start',
      complete: 'Test abgeschlossen!',
      wordsPerMinute: 'Wörter pro Minute',
      tryAgain: 'Nochmal versuchen'
    },
    codeShowcase: {
      title: 'Code-Showcase',
      subtitle: 'Einige meiner Lieblings-Code-Snippets und Utilities',
      copyCode: 'Code kopieren',
      copied: 'Kopiert!'
    },
    github: {
      title: 'GitHub-Statistiken',
      viewProfile: 'Vollständiges Profil anzeigen'
    }
  }
};

export default translations;
