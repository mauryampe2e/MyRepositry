/**
 * Numeric validation input form widget
 * @module opus/form/FloatTextBox
 */
define([
	'dojo/_base/declare',
	'dojo/string',
	'opus/form/ValidationTextBox',
	'dojo/i18n!opus/form/nls/Validation'
], function (declare, string, ValidationTextBox, i18n) {
	/**
	 * constructor
	 * @alias opus/form/FloatTextBox
	 */
	return declare([ValidationTextBox], {
		/**
		 * @see dijit/form/ValidationTextBox
		 */
		pattern: '^[\-0-9][0-9]*\\.{0,1}[0-9]*$',
		/**
		 * @see dijit/form/ValidationTextBox
		 */
		invalidMessage: i18n.invalidNumber,
		/**
		 * Minimum allowable
		 */
		minValue: null,
		/**
		 * Maximum allowable
		 */
		maxValue: null,
		/**
		 * @see dijit/_WidgetBase
		 */
		postMixInProperties: function () {
			this.inherited(arguments);
		},
		/**
		 * @see dijit/form/ValidationTextBox
		 */
		validator: function (value, constraints) {
			var isValid = this.inherited(arguments),
				currentValue = this.textbox.value;

			this.invalidMessage = string.substitute(i18n.invalidNumber, [this.minValue, this.maxValue]);
			if (!isValid) {
				return isValid;
			}
			if ((this.maxValue != null && currentValue > this.maxValue) || (this.minValue != null && currentValue < this.minValue)) {
				return false;
			}
			return isValid;
		}
	});
});
