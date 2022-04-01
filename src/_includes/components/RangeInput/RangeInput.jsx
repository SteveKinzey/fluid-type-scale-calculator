import Input from '../Input/Input';
import Label from '../Label/Label';
import styles from './RangeInput.module.scss';

/**
 * @typedef RangeInputProps
 * @property {string} label A string to label the range input
 */

/**
 * Displays a range input slider along with a custom input box to allow for manual inputs.
 * @param {RangeInputProps & Omit<React.HTMLProps<HTMLInputElement>, 'label'>} props
 */
const RangeInput = (props) => {
  const { id, label, ...otherProps } = props;
  return (
    <div className={styles.range}>
      <Label htmlFor={id} title={label} />
      <div className={styles['range-display']}>
        <Input type="range" id={id} step={1} {...otherProps} />
        <Label direction="horizontal" title="Custom">
          <Input type="number" step={1} delay={0} {...otherProps} />
        </Label>
      </div>
    </div>
  );
};

export default RangeInput;