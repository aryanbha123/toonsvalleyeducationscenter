import React from "react";

const Title = ({ head, subhead = false }) => {
    return (
        <section className="bg-white dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
                <div className="dark:border-dark-3">
                    <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                        {head}
                    </h2>
                    {
                        subhead && 
                        <p className="mb-6 text-sm font-medium text-body-color dark:text-dark-6">
                            {subhead}
                        </p>
                    }
                </div>
            </div>
        </section>
    );
};

export default Title;