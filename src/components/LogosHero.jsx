import React from "react";

const LogosHero = () => {
  const heroImages = [
    {
      id: 1,
      imagen:
        "https://hbomax-images.warnermediacdn.com/2022-06/hbo.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com",
    },
    {
      id: 2,
      imagen:
        "https://hbomax-images.warnermediacdn.com/2022-06/dc.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com",
    },
    {
      id: 3,
      imagen:
        "https://hbomax-images.warnermediacdn.com/2022-06/wb.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com",
    },
    {
      id: 4,
      imagen:
        "https://hbomax-images.warnermediacdn.com/2022-06/cartoon-network_neutral.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com",
    },
    {
      id: 5,
      imagen:
        "https://hbomax-images.warnermediacdn.com/2022-06/max_originals.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com",
    },
  ];
  return (
    <div className=' justify-evenly flex'>
      {heroImages.map((images) => {
        const { imagen, id } = images;

        return (
          <div key={id} className='flex items-center justify-center'>
            <img className='w-full h-auto scale-125 md:scale-150' src={imagen} alt='imagen' />
          </div>
        );
      })}
    </div>
  );
};

export { LogosHero };
