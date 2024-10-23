
const Banner = () => {
    return (
        <div className="px-2">
            <div
                className="container mx-auto mt-5 rounded-3xl bg-top md:bg-center py-16 md:py-20 lg:py-24 xl:py-36"
                style={{ backgroundImage: "url(https://i.imgur.com/ATVvMsP.png)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content text-center w-full">
                    <div className="w-5/6 md:w-4/6 lg:w-3/6 mx-auto">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white leading-snug">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-8">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className="flex justify-center space-x-3">
                            <button className="btn bg-green-500 rounded-full border-none px-8 text-base md:text-lg md:font-bold">Explore Now</button>
                            <button className="btn rounded-full px-8 bg-transparent border border-white text-white md:font-bold hover:text-black text-base md:text-lg">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;