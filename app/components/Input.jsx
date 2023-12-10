import React from 'react';

const Input = ({
  value,
  onChange,
  placeholder = 'Enter text here',
  ...restProps
}) => {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="rounded-md border border-gray-200 bg-white shadow-dropdown w-full">
      <input
        className="w-full py-3 rounded-md border-none focus:outline-none bg-transparent"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        {...restProps}
      />
    </div>
  );
};

export default Input;
