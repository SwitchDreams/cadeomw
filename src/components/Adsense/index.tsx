import React from 'react';

// For test uses placeholders = https://support.google.com/adsense/answer/185665?hl=en#zippy=%2Cother---vertical
interface AdsenseProps extends React.HTMLAttributes<HTMLDivElement> {
  disposition:
    | 'vertical-small'
    | 'leaderboard'
    | 'vertical'
    | 'mobile-leaderboard';
  client?: string;
  slot?: string;
  layout?: string;
  layoutKey?: string;
  format?: string;
  responsive?: string;
  test?: boolean;
}

const sizes = {
  'mobile-leaderboard': {
    width: 320,
    height: 50,
    link:
      'https://storage.googleapis.com/support-kms-prod/SNP_40CDC3FE322AB07CD3E5860E126FF906B05D_2922298_en_v3',
  },
  leaderboard: {
    width: 728,
    height: 90,
    link:
      'https://storage.googleapis.com/support-kms-prod/SNP_40CDC3FE322AB07CD3E5860E126FF906B05D_2922298_en_v3',
  },
  vertical: {
    width: 160,
    height: 600,
    link:
      'https://lh4.ggpht.com/8w5rhmn-M8IKcoktSlyKjXLUt5ABPwA8DVcPMz2JpzVc89kdJyntWb-RttwuurauryMR4lH3vw=w160',
  },
  'vertical-small': {
    width: 120,
    height: 600,
    link:
      'https://lh3.ggpht.com/fnbHmzCuSGCd6tpdIR1byKk75uSr19ezq9rHxaXmKancx07uM8DHPAiNZYnGDhmvpSr-HQY=w120',
  },
};

const Adsense: React.FC<AdsenseProps> = ({
  client = process.env.REACT_APP_ADSENSE_CLIENT,
  slot = process.env.REACT_APP_ADSENSE_SLOT,
  test = !!process.env.REACT_APP_ADSENSE_TEST,
  disposition,
  className,
  ...props
}) => {
  const [height, setHeight] = React.useState(sizes[disposition].height);
  const [width, setWidth] = React.useState(sizes[disposition].width);
  const [type, setType] = React.useState(disposition);
  React.useEffect(() => {
    // If Screens is small all mobile banners has mobile-leaderboard disposition
    if (window.innerWidth < 728) {
      setType('mobile-leaderboard');
      setHeight(sizes['mobile-leaderboard'].height);
      setWidth(sizes['mobile-leaderboard'].width);
    }
  }, []);
  return (
    <div
      className={`mx-auto ${className}`}
      style={{
        height,
        width,
        maxWidth: '90vw',
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      {...props}
    >
      {test && (
        <img
          style={{ maxHeight: '100%' }}
          className="w-100"
          src={sizes[type].link}
          alt="test ads"
        />
      )}
    </div>
  );
};

export default Adsense;
