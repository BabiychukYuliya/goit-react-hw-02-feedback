// import { btnList } from "./Feedback.styled"

export const Feedback = ({ options, onLeaveFeedback }) =>
    <div>
        {options.map((option, index) => (
            <button
                key={index}
                onClick={() => onLeaveFeedback(option)}>
      {option}
        </button>
     ))}
  </div>

