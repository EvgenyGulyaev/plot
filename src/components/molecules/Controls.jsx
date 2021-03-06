import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Switch from '../atoms/Switch';
import styled from 'styled-components';
import RangeSlider from '../atoms/RangeSlider';
import RangeSliderViaInputs from '../atoms/RangeSliderViaInputs';

const Controls = ({
  formula,
  onChangeFormula,
  type,
  onChangeType,
  offHeaderValue,
  onHeaderValue,
  onChangeRange,
  rangeValue,
  onBlur
}) =>
  <StyledControls>
    <Input
      value={formula}
      onChange={onChangeFormula}
      onBlur={onBlur}
      autoFocus
    />
    {
      type ? <RangeSlider
        onChange={onChangeRange}
        value={rangeValue}
      /> : <RangeSliderViaInputs
        onChange={onChangeRange}
        value={rangeValue}
        onBlur={onBlur}
      />
    }
    <CustomSwitch
      value={type}
      offHeaderValue={offHeaderValue}
      onHeaderValue={onHeaderValue}
      onChange={onChangeType}
    />
  </StyledControls>;

const StyledControls = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  height: 57px;
`;

const CustomSwitch = styled(Switch)`
  width: 230px;
  padding-left: 10px;
  height: inherit;
`;

Controls.propTypes = {
  formula: PropTypes.string,
  offHeaderValue: PropTypes.string,
  onHeaderValue: PropTypes.string,
  type: PropTypes.bool,
  onChangeFormula: PropTypes.func,
  onChangeType: PropTypes.func,
  onChangeRange: PropTypes.func,
  rangeValue: PropTypes.array,
  onBlur: PropTypes.func,
};

Controls.defaultProps = {
  formula: '',
  offHeaderValue: 'Custom',
  onHeaderValue: 'Wolfram',
  type: false,
  onChangeFormula: () => null,
  onChangeType: () => null,
  onChangeRange: () => null,
  rangeValue: [],
  onBlur : () => null,
};

export default Controls;