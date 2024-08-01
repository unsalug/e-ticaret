"use client"

const Category = () => {
    const categoryList = [
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
    ]
  return (
    <div className="flex items-center justify-center gap-3 px-3 md:px-10 md:gap-10 py-5 md:py-8 overflow-x-auto">
        {
            categoryList.map((category,index) => (
                <div className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 items-center justify-center cursor-pointer px-4 py-2" key={index}>{category.name}</div>
            ))
        }
    </div>
  )
}

export default Category