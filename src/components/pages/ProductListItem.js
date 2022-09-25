import React from "react";

function ProductListItem({ imgNo, name, price }) {
    return (
        <>
            <div className="flex flex-col gap-[10px]">
                <img src={`https://picsum.photos/id/${imgNo}/400/400`} alt="images" />
                <div className="text-center font-bold">
                    {name}
                </div>
                <div className="after:content-['원'] text-center">
                    {price}
                </div>
            </div>
        </>
    );
}

export default ProductListItem;