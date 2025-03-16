import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
                title = 'Abdoulaye Saliou SECK | Ingénieur Full Stack Sénior',
                description = 'Portfolio d\'Abdoulaye Saliou SECK, ingénieur Full Stack spécialisé dans le développement mobile et la création d\'architectures backend robustes et évolutives.',
                keywords = 'développeur, full stack, flutter, react, mobile, back-end, node.js, développement web',
                image = '/profile-image.jpg', // Path to your profile image for social sharing
                url = 'https://saliousowce4.github.io/portfolio/',
              }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Mobile specific */}
      <meta name="theme-color" content="#0d1117" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />

      {/* Browser specific */}
      <link rel="canonical" href={url} />
      <meta name="author" content="Abdoulaye Saliou SECK" />
    </Helmet>
  );
};

export default Meta;
