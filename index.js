'use strict'

const { AppleHealthKit } = require('react-native').NativeModules;

import { Permissions } from './Constants/Permissions'
import { Units } from './Constants/Units'

const HealthKit = Object.assign({}, AppleHealthKit, {
	Constants: {
		Permissions: Permissions,
		Units: Units,
	}
});

export default HealthKit;
module.exports = HealthKit;
