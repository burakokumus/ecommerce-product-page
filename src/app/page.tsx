import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 overflow-hidden">

      <div className="fixed w-full h-1/3 m-auto overflow-hidden">
        <Image src="/images/image-product-1.jpg" alt="Product image"
          width={0}
          height={0}
          quality={100}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="mt-72 py-12 px-8">
        <p className="text-orange-primary font-semibold uppercase text-xs tracking-widest mb-4">Sneaker Company</p>

        <p className="text-3xl font-bold mb-4">Fall Limited Edition Sneakers</p>

        <p>
          These low-profile sneakers
          are your perfect casual wear companion. Featuring a durable rubber outer
          sole, they’ll withstand everything the weather can offer.
        </p>


        $125.00 50%
        $250.00 0 Add to cart
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
