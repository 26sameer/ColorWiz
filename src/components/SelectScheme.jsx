const SelectScheme = ({ mode, handleChange }) => {
  return (
    <>
      <label htmlFor="chooseScheme" className="scheme-label">
        Choose a Scheme
      </label>
      <select
        id="chooseScheme"
        name="chooseScheme"
        onChange={ev => handleChange(ev)}
        value={mode}
        className="scheme-select"
        required
      >
        <option value="analogic">Analogic</option>
        <option value="monochrome">Monochrome</option>
        <option value="analogic-complement">Analogic-Complement</option>
        <option value="quad">Quad</option>
      </select>
    </>
  );
};

export default SelectScheme;
