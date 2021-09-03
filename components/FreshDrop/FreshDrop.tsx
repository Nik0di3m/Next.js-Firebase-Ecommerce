import FreshCard from './FreshCard'

const FreshDrop = () => {
    return (
        <div className="py-6 lg:py-12">
            <h1 className="text-4xl">Fresh Drop</h1>
            <h2>Fresh sneakers especially for you</h2>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-9 mt-8">
                <FreshCard
                    name="Nike Air Force 1 Fontanka"
                    price={200}
                    category="Women's Shoes"
                    promotion={false}
                    limited={false}
                    img="/images/fresh1.webp"
                />
                <FreshCard
                    name="Nike Air Force 1 '07"
                    price={200}
                    promotion={false}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh6.webp"
                />
                <FreshCard
                    name="Nike Air Max 2021"
                    price={200}
                    promotion={false}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh3.webp"
                />
                <FreshCard
                    name="Nike Air max Bolt"
                    price={200}
                    promotion={false}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh4.webp"
                />
                <FreshCard
                    name="Nike Air Force 1 Shadow"
                    price={200}
                    promotion={false}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/fresh5.webp"
                />
                <FreshCard
                    name="Nike Air Force 1 Carter"
                    price={200}
                    promotion={false}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/fresh2.webp"
                />
                <FreshCard
                    name="Nike Air Force 1 '07 LX"
                    price={200}
                    promotion={false}
                    category="Men's Shoes"
                    limited={false}
                    img="/images/fresh7.webp"
                />
                <FreshCard
                    name="Nike Air Force 1 '07 LX"
                    price={200}
                    promotion={false}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/fresh8.jpg"
                />
            </div>
        </div>
    )
}

export default FreshDrop
