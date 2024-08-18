export const HeadBox = ({ label, sub }) => {
    return (
        <>
            <p className='font-[Lato] font-bold flex gap-3 text-2xl relative'>
                <span className='bg-[#152b8a] text-3xl font-bold  text-[#152b8a] from-pink-500 to-red-500 bg-clip-text text-transparent'>{label}</span>
                <br />
            </p>
            {
                sub && (
                    <small className='lg:px-20 px-5'>{sub}</small>
                )
            }
        </>
    )
}