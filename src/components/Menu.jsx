import { Link as Anchor } from "react-router-dom"

export default function Menu({option, setOpen}) {
    return (
        <div className='absolute z-20 right-4 top-16 p-[10px] rounded-lg border-2 bg-white'>
            {option?.map((each, index) => each.title === 'Sign Out' ? (
                <a onClick={each.onClick} className="flex flex-col items-center hover:cursor-pointer hover:bg-[#0077B6] hover:text-white font-semibold rounded-xl p-2 text-[#0077B6]" key={index}>{each.title}</a>
            ):(
            <Anchor onClick={() => setOpen(false)} className="flex flex-col items-center hover:cursor-pointer hover:bg-[#0077B6] hover:text-white font-semibold rounded-xl p-2 text-[#0077B6]" to={each.to} key={index}>{each.title}</Anchor>
            ))}
        </div>
    )
}
