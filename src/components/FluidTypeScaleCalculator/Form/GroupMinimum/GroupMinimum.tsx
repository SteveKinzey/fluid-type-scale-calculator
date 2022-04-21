import { QUERY_PARAM_CONFIG } from '../../../../api/api.constants';
import Input from '../../../Input/Input';
import Label from '../../../Label/Label';
import LabelGroup from '../../../Label/LabelGroup/LabelGroup';
import { useFormState } from '../../FluidTypeScaleCalculator.context';
import TypeScalePicker from '../../TypeScalePicker/TypeScalePicker';

const GroupMinimum = () => {
  const { state, dispatch } = useFormState();
  return (
    <Label
      as="fieldset"
      title="Minimum (Mobile)"
      description="Define the minimum font size and viewport width for your type scale's baseline step. The minimum font size for all other steps is this baseline font size scaled up/down by your chosen type scale ratio."
    >
      <LabelGroup>
        <Label>
          Base font size (pixels)
          <Input
            type="number"
            name="minFontSize"
            required={true}
            min={QUERY_PARAM_CONFIG.minFontSize.min}
            max={QUERY_PARAM_CONFIG.minFontSize.max}
            defaultValue={state.min.fontSize}
            onChange={(e) =>
              dispatch({
                type: 'setMin',
                payload: {
                  fontSize: e.target.valueAsNumber,
                },
              })
            }
          />
        </Label>
        <Label>
          Screen width (pixels)
          <Input
            name="minWidth"
            type="number"
            required={true}
            min={QUERY_PARAM_CONFIG.minWidth.min}
            max={state.max.screenWidth - 1}
            defaultValue={state.min.screenWidth}
            onChange={(e) =>
              dispatch({
                type: 'setMin',
                payload: {
                  screenWidth: e.target.valueAsNumber,
                },
              })
            }
          />
        </Label>
        <TypeScalePicker
          name="minRatio"
          id="type-scale-min"
          ratio={state.min.ratio}
          min={QUERY_PARAM_CONFIG.minRatio.min}
          max={QUERY_PARAM_CONFIG.minRatio.max}
          onChange={(e) => dispatch({ type: 'setMin', payload: { ratio: e.target.valueAsNumber } })}
        />
      </LabelGroup>
    </Label>
  );
};

export default GroupMinimum;