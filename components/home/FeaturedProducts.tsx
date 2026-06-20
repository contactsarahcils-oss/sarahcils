import { PRODUCTS } from '@/lib/products'
import ProductCard from '@/components/ui/ProductCard'

export default function FeaturedProducts() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-12 bg-[#FAFAF8]">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-[12px] uppercase tracking-[0.15em] text-[#C9A882]">Nos indispensables</p>
        <h2 className="reveal font-[family-name:var(--font-cormorant)] font-normal text-[24px] md:text-[30px] leading-[1.15] mt-1.5 mb-6">
          La gamme essentielle
        </h2>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {PRODUCTS.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
