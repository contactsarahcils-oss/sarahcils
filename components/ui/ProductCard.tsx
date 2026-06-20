import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { PRODUCTS } from '@/lib/products'

type Product = typeof PRODUCTS[number]

export default function ProductCard({ product }: { product: Product }) {
  const imageSrc = IMAGES.products[product.image]
  const isBestSeller = product.badge === 'BEST SELLER'

  return (
    <a
      href={product.wixUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card block"
    >
      {/* Image container — warm bg, aspect-square, rounded */}
      <div className="relative bg-[#F5F0E8] rounded-xl aspect-square overflow-hidden">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-contain p-3 md:p-4"
          sizes="(max-width: 768px) 33vw, 25vw"
        />
        {product.badge && (
          <span className={`absolute top-2 left-2 text-[9px] uppercase tracking-[0.06em] rounded-full px-2 py-0.5 text-white ${isBestSeller ? 'bg-[#1A1A18]' : 'bg-[#C9A882]'}`}>
            {product.badge}
          </span>
        )}
      </div>
      <p className="text-[10px] md:text-[12px] uppercase tracking-[0.04em] font-medium mt-2 truncate text-[#1A1A18]">
        {product.name}
      </p>
      <p className="text-[12px] md:text-[14px] font-semibold text-[#1A1A18]">{product.price}</p>
    </a>
  )
}
