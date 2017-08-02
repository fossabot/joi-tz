import BaseJoi from 'joi';
import {assert} from 'chai';

import JoiTimezone from '../lib';

const Joi = BaseJoi.extend(JoiTimezone);

describe('string', () => {
  describe('Timezone()', () => {
    it('return error for invalid timezone', () => {
      const testValue = Joi.validate('Blah', Joi.string().timezone());
      assert.isOk(testValue.error, 'should produce an error');
      assert.isOk(testValue.error.name, 'should produce a ValidationError');
    });

    it('validates strings with a valid timezone', () => {
      const testZone = 'Australia/Melbourne';
      const testValue = Joi.validate(testZone, Joi.string().timezone());
      assert.isNotOk(testValue.error, 'should not produce an error');
      assert.equal(testValue.value, testZone);
    });
  });
});
