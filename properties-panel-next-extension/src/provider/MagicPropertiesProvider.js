import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import SpellProperty from './properties/SpellProperty';

export default class MagicPropertiesProvider {

  constructor(propertiesPanel, modeling, translate) {

    // @pinussilvestrus: use WIP key providers here
    propertiesPanel.registerProvider('magic', this);

    this._modeling = modeling;
    this._translate = translate;
  }

  getGroups(element) {

    const translate = this._translate;

    return (groups) => {

      if(is(element, 'bpmn:StartEvent')) {
        groups.push({
          id: 'magic',
          label: translate('Magic Properties'),
          entries: [
            {
              id: 'spell',
              component: <SpellProperty 
                element={ element }
                modeling={ this._modeling }
                translate={ this._translate }
              />
            }
          ]
        });
      }
      
      return groups;
    };
  }

}

MagicPropertiesProvider.$inject = [ 'propertiesPanel', 'modeling', 'translate' ];