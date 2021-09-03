import Image from 'next/image'
import { PlusCircleIcon, SearchIcon, HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as SolidHeart } from '@heroicons/react/solid'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
interface CoolProps {
    img: string
    limited: boolean
    price: number
    category: string
}

const FreshCard = ({ img, limited, price, category }: CoolProps) => {
    const [liked, setLiked] = useState<boolean>(false)

    const control = useAnimation()

    const animation = {
        hidden: {
            x: 20,
            opacity: 0,
            display: 'none',
        },
        visible: {
            x: 0,
            display: 'flex',
            opacity: 1,
        },
    }

    return (
        <article
            className="flex flex-col w-[310px] h-[366px] xl:w-[400px] xl:h-[420px] 2xl:w-[350px] 2xl:h-[450px] items-center relative"
            onMouseOver={() => control.start('visible')}
            onMouseLeave={() => control.start('hidden')}
        >
            <div className="w-full h-[310px] lg:h-[400px] 2xl:h-[500px] relative">
                <Image src={img} alt="item" layout="fill" objectFit="cover" />
            </div>
            <div className="flex justify-between items-center  w-full">
                <div>
                    <h2 className="capitalize font-medium">
                        Nike Air Max 90 Laser
                    </h2>
                    <h3 className="capitalize font-light text-secondary">
                        {category}
                    </h3>
                    {limited && (
                        <h3 className="capitalize font-light text-secondary">
                            Limited Edition
                        </h3>
                    )}
                </div>
                <div>${price}</div>
            </div>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    animate={control}
                    initial="hidden"
                    variants={animation}
                    transition={{ type: 'spring', bounce: 0.2 }}
                    className="absolute flex flex-col top-5 right-5 space-y-4"
                >
                    <PlusCircleIcon className="h-6 text-secondary hover:scale-105 duration-100 cursor-pointer active:scale-95" />
                    <SearchIcon className="h-6 text-secondary hover:scale-105 duration-100 cursor-pointer active:scale-95" />
                    {liked ? (
                        <SolidHeart
                            className="h-6 text-like hover:scale-105 duration-100 cursor-pointer active:scale-95"
                            onClick={() => setLiked(!liked)}
                        />
                    ) : (
                        <HeartIcon
                            className="h-6 text-secondary hover:scale-105 duration-100 cursor-pointer active:scale-95"
                            onClick={() => setLiked(!liked)}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </article>
    )
}

export default FreshCard