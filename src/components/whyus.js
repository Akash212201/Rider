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
        <div className="py-10 px-10 text-center bg-[#00000080] text-white">
            <div className="mb-10 ">
                <h1 className="text-4xl">Why choose us?</h1>
                <p className="text-xl">At RickshawRide, our expert staff offer lots of benefits and advantages to our clients.
                </p>
            </div>
            <div className="flex justify-between items-center px-10 kk">
                {
                    items.map(item => (
                        <div className="border-[2px] rounded-xl shadow-sm w-1/5 p-6 min-h-44">
                            <img src={item.icon} alt="" />
                            <h3 className="text-2xl mb-1">{item.title}</h3>
                            <p className="text-xl">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default WhyUs