import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "The user team is very supportive and they are always there to help. Amazing UI and design.",
        name: "Erica Johnson",
        title: "Product Manager - BlockLink",
        avatarImage: "/assets/images/avatar-erica-wyatt.jpg"
    },
    {
        text: "Our productivity and performance has increased a lot since we started using BlockSmith.",
        name: "Noel Baldwind",
        title: "Lead Developer - Dowski Inc",
        avatarImage: "/assets/images/avatar-noel-baldwin.jpg"
    },
    {
        text: "High quality process integration, with the performance improving our own platofrom.",
        name: "Harry Bender",
        title: "CTO - CryptoPepe",
        avatarImage: "/assets/images/avatar-harry-bender.jpg"
    },
];


export const Testimonials = () => {

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-zinc-800">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12 px-2 md:px-0">
                    {testimonials.map((testimonial, testimonialIndex) => (
                        <motion.blockquote 
                            key={testimonialIndex} 
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: testimonialIndex * 0.5,
                                ease: 'easeInOut',
                                duration: 1,
                            }}
                            className={twMerge(testimonialIndex === 2 && "md:hidden lg:block")}
                        >
                            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-black">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <cite className="mt-8 block">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <div className="size-16 bg-zinc-700 rounded-full bg-cover" style={{backgroundImage: `url(${testimonial.avatarImage})`}}></div>
                                    </div>
                                    <div>
                                        <div className="text-lg not-italic font-black">{testimonial.name}</div>
                                        <div className="text-zinc-400 not-italic">{testimonial.title}</div>
                                    </div>
                                </div>
                            </cite>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}

