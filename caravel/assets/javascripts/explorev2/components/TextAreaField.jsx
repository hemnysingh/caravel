import React, { PropTypes } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import ControlLabelWithTooltip from './ControlLabelWithTooltip';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  label: null,
  description: null,
  onChange: () => {},
};

export default class TextAreaField extends React.Component {
  onChange(event) {
    this.props.onChange(this.props.name, event.target.value);
  }
  render() {
    return (
      <FormGroup controlId="formControlsTextarea">
        <ControlLabelWithTooltip label={this.props.label} description={this.props.description} />
        <FormControl
          componentClass="textarea"
          placeholder="textarea"
          onChange={this.onChange.bind(this)}
        />
      </FormGroup>
    );
  }
}

TextAreaField.propTypes = propTypes;
TextAreaField.defaultProps = defaultProps;
