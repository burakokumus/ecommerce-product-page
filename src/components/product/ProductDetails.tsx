import AddToCart from "../AddToCart";

const ProductDetails = () => {
  return (
    <div className="mt-24 px-8 md:px-16 md:mt-0">
      {/* Product Details */}
      <p className="text-orange-primary font-semibold uppercase text-xs tracking-widest mb-4">
        Sneaker Company
      </p>
      <p className="text-3xl font-bold mb-4">Fall Limited Edition Sneakers</p>
      <p className="text-blue-dark-grayish text-md mb-8 leading-7">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="grid grid-cols-3 items-center gap-24 mb-4 md:gap-0">
        <p className="text-3xl font-bold">$125.00</p>
        <p className="text-orange-primary font-bold bg-orange-pale px-2 py-0.5 rounded-lg md:w-12">
          50%
        </p>
        <p className="line-through font-semibold text-blue-grayish md:row-start-2">
          $250.00
        </p>
      </div>
      <AddToCart
        title="Fall Limited Edition Sneakers"
        img="/images/image-product-1-thumbnail.jpg"
        price={125}
      />
    </div>
  );
};

export default ProductDetails;
