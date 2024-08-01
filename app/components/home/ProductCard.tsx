"use client"
import { Rating } from "@/node_modules/@mui/material/index"
import Image from "@/node_modules/next/image"
import { useRouter } from "@/node_modules/next/navigation"
import textClip from "@/utils/TextClip"


const ProductCard = ({product}: {product: any}) => {

    const router = useRouter()
    let productRating = product?.reviews?.reduce((acc:number,item:any) => acc + item?.rating, 0) / product?.reviews?.length
  return (
    <div onClick={() => router.push(`product/${product.id}`)} className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md">
        <div className="relative h-[150px]">
            <Image src={product?.image} fill alt="" className="object-contain"/>
        </div>
        <div>
            <div className="text-center mt-2 space-y-1">
              <div>{textClip(product?.name)}</div>
              <Rating name="read-only" value={productRating} readOnly />
              <div className="text-orange-600 font-bold text-lg md:text-xl">{product?.price}</div>
            </div>
        </div>

    </div>
  )
}

export default ProductCard