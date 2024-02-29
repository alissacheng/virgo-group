import { SubHeadingType } from "../../types/SubHeadingType";

const SubHeading = ({subheading, instructions}:SubHeadingType) => {
    return(
        <div>
            <h2 className="font-bold text-lg leading-6 text-[#343434]">{subheading}</h2>
            {instructions && <p className="text-[#616161]">{instructions}</p>}
        </div>
    )
}

export default SubHeading;