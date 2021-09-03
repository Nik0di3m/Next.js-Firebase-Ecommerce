import FreshCard from './FreshCard'

const FreshDrop = () => {
    return (
        <div className="py-6 lg:py-12">
            <h1 className="text-4xl">Fresh Drop</h1>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-9 mt-8">
                <FreshCard
                    price={200}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/fresh1.webp"
                />
                <FreshCard
                    price={200}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh6.webp"
                />
                <FreshCard
                    price={200}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh3.webp"
                />
                <FreshCard
                    price={200}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh4.webp"
                />
                <FreshCard
                    price={200}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/fresh5.webp"
                />
                <FreshCard
                    price={200}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/fresh2.webp"
                />
                <FreshCard
                    price={200}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh7.webp"
                />
                <FreshCard
                    price={200}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/fresh8.jpg"
                />
            </div>
        </div>
    )
}

export default FreshDrop
