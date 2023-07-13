import PropTypes from "prop-types"
import React from "react";

export default class Form extends React.Component {
  render() {
    const {
      handleChange,
      email,
      func,
      age,
      motive,
      willGo,
    } = this.props;
    return (
      <form>
        <h1>Formulário</h1>
        <h5>
          Email
          <input
            type="email"
            name="email"
            id=""
            value={email}
            onChange={handleChange}
          />
        </h5>
        <h5>
          Idade
          <input
            type="number"
            name="age"
            id=""
            value={age}
            onChange={handleChange}
          />
        </h5>
        <h5>
          Função
          <input
            type="text"
            name="func"
            id=""
            value={func}
            onChange={handleChange}
          />
        </h5>
        <textarea
          name="text"
          id=""
          cols="30"
          type="text"
          rows="10"
          placeholder="escreva aqui seus motivos"
          value={motive}
          onChange={handleChange}
        ></textarea>
        <input
          type="checkbox"
          name="check"
          id=""
          checked={willGo}
          onChange={handleChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  handleChange: PropTypes.any
}
