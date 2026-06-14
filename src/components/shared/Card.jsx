

function Card({children}) {
  return (
    <div className="border border-black w-[350px] text-center rounded-lg shadow-xl pb-[10px]">
        {children}
    </div>
  )
}

export default Card