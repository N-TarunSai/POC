export default function QuantityStepper({ value, onChange, min = 0, max = 20 }) {
  return (
    <div className="stepper" role="group" aria-label="Select quantity">
      <button onClick={() => onChange(Math.max(min, value - 1))} aria-label="decrease">−</button>
      <span>{value}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))} aria-label="increase">+</button>
    </div>
  )
}
