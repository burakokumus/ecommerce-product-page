import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 overflow-hidden">

      <div className="relative w-full h-[33vh] top-12 overflow-hidden">
        <Image src="/images/image-product-1.jpg" alt="Product image"
          quality={100}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="-mt-12 px-8">
        <p className="text-orange-primary font-semibold uppercase text-xs tracking-widest mb-4">Sneaker Company</p>

        <p className="text-3xl font-bold mb-4">Fall Limited Edition Sneakers</p>

        <p className="text-blue-dark-grayish text-md mb-12">
          These low-profile sneakers
          are your perfect casual wear companion. Featuring a durable rubber outer
          sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-3xl font-bold">$125.00</p>
          <p className="text-orange-primary font-bold bg-orange-pale px-2 py-0.5 rounded-lg">50%</p>
          <p className="line-through font-semibold text-blue-grayish">$250.00</p>
        </div>

        0 Add to cart
      </div>
      <div className="mt-8">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Implemented by <a href="#">Burak Okumus</a>.
      </div>
    </main>
  );
}
