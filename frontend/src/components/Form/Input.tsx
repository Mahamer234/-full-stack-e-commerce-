interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, ...props }: InputProps) => (
  <div className="flex flex-col">
    <input
      {...props}
      className="outline-none border border-green-700 rounded px-2 py-4"
    />
    {error && <span className="text-red-500">{error}</span>}
  </div>
);

export default Input;
