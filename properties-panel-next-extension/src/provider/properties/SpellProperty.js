import {
  debounce
} from 'min-dash';

// todo: expose basic entries
// todo: expose useService hooks

export default function SpellProperty(props) {
  const {
    element,
    modeling,
    translate
  } = props;

  const description = translate('Apply a black magic spell');

  const getValue = () => {
    return element.businessObject.spell;
  }

  const setValue = (value) => {
    return modeling.updateProperties(element, {
      spell: value
    });
  }

  const handleInput = debounce(({ target }) => setValue(target.value.length ? target.value : undefined));

  return (
    <div class="bio-properties-panel-entry" data-entry-id="name">
      <div class="bio-properties-panel-textfield">
        <label for="bio-properties-panel-spell" class="bio-properties-panel-label">{ translate('Name') }</label>
        <input 
          id="bio-properties-panel-spell" 
          type="text" 
          name="spell" 
          value={ getValue() }
          onInput={ handleInput }
          spellcheck="false" 
          autocomplete="off" 
          class="bio-properties-panel-input" />
      </div>
      <div class="bio-properties-panel-description">{ description }</div>
    </div>
  )
}