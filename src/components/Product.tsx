import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="what-is">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          There is an opportunity to create a new model that incorporates the best elements of both in-person and virtual conferences. We propose an alternative: locally-grouped "unconferences". Unconferences are gatherings that combat the hierarchical structure of standard conference design, by minimizing formal speeches and emphasizing informal connections through participant-driven content. 

          </p>

        {product.items.map((feature) => (
              <div key={feature.name} className="relative" style={{marginTop: "30px"}}>
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Product;
