import "./ProductImageGallery.css";
const ProductImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="product-aside">
      {images.map((img, i) => (
        <div className="aside-image" onClick={() => onImageClick(img)} key={i}>
          <img src={img} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default ProductImageGallery;
