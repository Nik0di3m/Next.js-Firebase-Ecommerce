import FreshCard from '../FreshDrop/FreshCard'

const PromotionSection = () => {
    return (
        <section className="py-6 lg:py-12">
            <h1 className="text-4xl">{`Hot Deal's`}</h1>
            <h2>{`Catch best deal's in the world `}</h2>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-9 mt-8">
                <FreshCard
                    name="Nike React Live"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom1.webp"
                />
                <FreshCard
                    name="LeBron 18 Low Cartoon"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom2.webp"
                />
                <FreshCard
                    name="Nike Air Force 1 Next Nature"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom3.webp"
                />
                <FreshCard
                    name="Nike Air Max 90 Sanddrift"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom4.webp"
                />
                <FreshCard
                    name="Nike Air Force 1 Crater"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom5.webp"
                />
                <FreshCard
                    name="Nike Air Jordan 4"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom6.webp"
                />
                <FreshCard
                    name="Nike Air Huarache"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom7.webp"
                />
                <FreshCard
                    name="Nike Dunk High SE"
                    price={200}
                    promotion={true}
                    category="Women's Shoes"
                    limited={false}
                    img="/images/prom8.webp"
                />
            </div>
        </section>
    )
}

export default PromotionSection
