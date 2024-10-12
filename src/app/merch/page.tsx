import BaseLayout from "@/components/BaseLayout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/dummy-data";


const MerchPage = () => {
  return (
    <BaseLayout renderRightPanel={false}>
     <div className="px-3 md:px-10 my-10">
      <h1 className="text-3xl text-center my-5 font-bold tracking-tight">Our Products</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
     </div>
    </BaseLayout>
  )
}

export default MerchPage;