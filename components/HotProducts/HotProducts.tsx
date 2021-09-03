import HotCard from './HotCard'

const HotProducts = () => {
    return (
        <div className="py-6 lg:py-12">
            <h1 className="text-4xl">Hot Products</h1>
            <h2>{`Bestseller's especially for You `}</h2>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                <HotCard
                    price={200}
                    limited={true}
                    promotion={false}
                    img="/images/butyHot.webp"
                />
                <HotCard
                    price={200}
                    limited={false}
                    promotion={true}
                    img="/images/buty2.webp"
                />
                <HotCard
                    price={150}
                    limited={false}
                    promotion={true}
                    img="/images/hotButy3.webp"
                />
            </div>
        </div>
    )
}

export default HotProducts
