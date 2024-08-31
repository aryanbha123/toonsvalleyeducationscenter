import React from "react";

const Title = ({ head, subhead = false }) => {
    return (
        <section className="">
            <div className="mx-auto sm:container">
                <div className="dark:border-dark-3">
                    <h2 className="text-2xl font-semibold text-dark dark:text-white">
                        {head}
                    </h2>
                    {
                        subhead && 
                        <p className="font-bold text-[#010101] font-[Raleway] text-xl text-body-color dark:text-dark-6">
                            {subhead}
                        </p>
                    }
                </div>
            </div>
        </section>
    );
};

export default Title;