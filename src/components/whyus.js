const WhyUs = () => {
    const items = [
        {
            icon: "",
            title: "Low Prices",
            text: "Provides top-class services at an affordable price."
        },
        {
            icon: "",
            title: "Experienced staff",
            text: "We hire the best experts in everything concerning car rental."
        },
        {
            icon: "",
            title: "Convenient",
            text: "Book rickshaw anywhere, anytime."
        },
        {
            icon: "",
            title: "Reliable support",
            text: "Our team guarantees reliable support in addition to the offered services."
        },

    ];
    return (
        <div className="py-10 px-10 text-center">
            <div className="mb-10 ">
                <h1 className="text-5xl font-bold mb-3">Why choose us?</h1>
                <p className="text-lg">At RickshawRide, our expert staff offer lots of benefits and advantages to our clients.
                </p>
            </div>
            <div className="flex justify-between items-center px-10 lg:flex-row flex-col">
                {
                    items.map(item => (
                        <div className="border rounded-xl shadow-sm lg:w-[23%] p-4 h-48 mb-5">
                            <img src={item.icon} alt="" />
                            <h3 className="text-3xl mb-1 font-semibold my-2">{item.title}</h3>
                            <p className="text-md text-gray-500">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default WhyUs