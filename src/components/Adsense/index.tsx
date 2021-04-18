import React from 'react';

// For test uses placeholders = https://support.google.com/adsense/answer/185665?hl=en#zippy=%2Cother---vertical
interface AdsenseProps extends React.HTMLAttributes<HTMLDivElement> {
  disposition: 'vertical-small' | 'leaderboard' | 'vertical';
  client?: string;
  slot?: string;
  layout?: string;
  layoutKey?: string;
  format?: string;
  responsive?: string;
  test?: boolean;
}

const sizes = {
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
  ...props
}) => {
  const height = (): number => {
    return sizes[disposition].height;
  };

  const width = (): number => {
    return sizes[disposition].width;
  };
  React.useEffect(() => {
    if (window) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  return (
    <div
      style={{
        height: height(),
        width: width(),
        maxWidth: '90vw',
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      {...props}
    >
      {test && <img src={sizes[disposition].link} alt="test ads" />}
    </div>
  );
};

export default Adsense;
