import RevealObserver from '@/components/ui/RevealObserver'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import BestSellerPromo from '@/components/home/BestSellerPromo'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import BestSellerSection from '@/components/home/BestSellerSection'
import AboutSection from '@/components/home/AboutSection'
import AllProductsSection from '@/components/home/AllProductsSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import ServiceCards from '@/components/home/ServiceCards'
import FormationsSection from '@/components/home/FormationsSection'
import InstagramSection from '@/components/home/InstagramSection'

export default function Home() {
  return (
    <>
      <RevealObserver />
      {/* 1 — Hero plein écran */}
      <Hero />
      {/* 2 — Trust bar 4 colonnes */}
      <TrustBar />
      {/* 3 — Promo Best Seller (image locale + texte) */}
      <BestSellerPromo />
      {/* 4 — 3 produits vedettes */}
      <FeaturedProducts />
      {/* 5 — Focus La Colle (dark split) */}
      <BestSellerSection />
      {/* 6 — Notre histoire */}
      <AboutSection />
      {/* 7 — Slider gamme complète (juste avant les avis) */}
      <AllProductsSection />
      {/* 8 — Avis clients */}
      <ReviewsSection />
      {/* 9 — Services cards */}
      <ServiceCards />
      {/* 10 — Formations */}
      <FormationsSection />
      {/* 11 — Instagram */}
      <InstagramSection />
    </>
  )
}
