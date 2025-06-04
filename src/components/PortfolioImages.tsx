import React from 'react';

interface PortfolioImagesProps {
  images: { src: string; alt: string }[];
}

const PortfolioImages: React.FC<PortfolioImagesProps> = ({ images }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
  }}>
    {images.map((img, idx) => (
      <img
        key={idx}
        src={img.src}
        alt={img.alt}
        style={{
          width: 320,
          height: 220,
          borderRadius: 12,
          objectFit: 'cover',
          boxShadow: '0 2px 12px #0002'
        }}
      />
    ))}
  </div>
);

export default PortfolioImages;