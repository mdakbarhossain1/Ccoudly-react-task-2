import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../RelatedProducts/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AllCatProducts = ({ catProduct }) => {
    // console.log(catProduct);
    const [catProducts, setCatProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${catProduct.slug}`)
            .then(response => {
                setCatProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, [catProduct]);

    const categoriesProducts = catProducts.products;
    return (
        <div className="mt-14">
            <h1 className="text-2xl font-bold mb-2 m-3">{catProduct.name}</h1>
            {/* <div className="p-4 flex flex-col"> */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categoriesProducts?.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div> */}
           <div className="p-4">
           <Swiper
                className="mySwiper py-12"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay , Pagination]}
                // pagination={true} 
                grabCursor={true}
                slidesPerView={3}
                speed={400}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 1,

                    },
                    500: {
                        slidesPerView: 1,

                    },
                    700: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }}
            >
                {categoriesProducts?.map(service => (
                    <SwiperSlide key={service.id} className=" mb-9">
                        <ProductCard key={service.id} product={service} />
                    </SwiperSlide>
                ))}
            </Swiper>
           </div>

        </div>
    )
}

export default AllCatProducts