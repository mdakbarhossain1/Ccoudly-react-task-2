import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
const ProductDetails = () => {
    const { id } = useParams()
    const [detailsProduct, setDetailsProduct] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setDetailsProduct(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, [id]);


    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);


    const detailsImages = detailsProduct;
    const detailImage = detailsImages.images ;
    console.log(detailImage?.length );
    // if (!detailsProduct) return <div>Loading...</div>;
    return (
        <div className="p-4 mt-14">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col space-y-4">
                        {
                          detailImage?.length === 1? <div>
                            <img src={detailImage[0]} alt="Product Images"  width={500} />
                            <hr />
                            <img src={detailImage[0]} alt="Product Images"  width={100}/>
                          </div>  : <div className="slider-container p-2">
                            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                                {
                                    detailImage?.map((image) => <div key={image}>
                                        <img src={image} alt="Product Images" width={500} />
                                    </div>)
                                }
                            </Slider>
                            <hr />
                            <Slider
                                asNavFor={nav1}
                                ref={slider => (sliderRef2 = slider)}
                                slidesToShow={3}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                                {
                                    detailImage?.map((image) => <div key={image}>
                                        <img src={image} alt="Product Images" width={100} />
                                    </div>)
                                }

                            </Slider>
                        </div>
                        }
                        
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl font-bold mb-2">{detailsProduct.title}</h1>
                    <p className="text-xl text-gray-800 mb-2">${detailsProduct.price}</p>
                    <p className="text-gray-600 mb-4">Rating: {detailsProduct.rating}</p>
                    <p className="mb-4">{detailsProduct.description}</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
                </div>
            </div>

            <div className="my-3">
                <h1 className="text-2xl font-bold">Product Description</h1>
                <p className="mb-4">{detailsProduct.description}</p>

            </div>
            {/* <RelatedProducts /> */}
            <h1 className="text-2xl font-bold mb-2">Related Products</h1>
            <RelatedProducts categories={detailsProduct.category} />

        </div>
    )
}

export default ProductDetails