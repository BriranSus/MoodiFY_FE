interface displayType {
    img: string | undefined,
    title: string 
}

function RecommendedDisplay({ img, title }: displayType) {
    return (
        <>
            <img src={img} alt="" />
            <title>{title}</title>
        </>
    )
}

export default RecommendedDisplay