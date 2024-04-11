import ProductDetails from "@/components/product/ProductDetails";
import ProductImage from "@/components/product/ProductImage";

const Product = () => {
  return (
    <div className="flex flex-col items-center justify-between py-6 overflow-hidden md:grid md:grid-cols-2 md:max-w-screen-lg md:mx-auto md:py-16">
      <ProductImage />
      <ProductDetails />
    </div>
  );
};

export default Product;
