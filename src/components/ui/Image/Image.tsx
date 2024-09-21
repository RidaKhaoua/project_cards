type TPrpos = {
  imgUlr: string;
  alt: string;
  className: string;
};

function Image({ imgUlr, alt, className }: TPrpos) {
  return <img src={imgUlr} alt={alt} className={className} />;
}

export default Image;
