import { animate } from '../utils';

export default Ember.Mixin.create({
  animate(animationType, target) {
    return animate(this.$(target), animationType);
  }
});
