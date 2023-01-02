import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const SearchResults = ({ resultados }) => {
  return (
    <div className='flex flex-wrap gap-4'>
      {resultados.map((item) => {
        return item?.poster_path ? (
          <Link to={`/watch/${item.media_type}/${item.id}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              key={item?.id}
              className='max-w-[200px] relative transition-all
                   duration-300 ease-in-out'
            >
              <p className='text-slate-100 text-lg absolute top-0 left-0'>
                {item.name ?? item.title}
              </p>
              <img
                className='w-full h-full'
                src={`https://image.tmdb.org/t/p/w400/${item?.poster_path}`}
                alt=''
              />
            </motion.div>
          </Link>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default SearchResults;
