const router = require('express').Router();
const log4js = require('log4js');

const specialFields = require('../utils/special-fields.utils');

const logger = log4js.getLogger(global.loggerName);

router.get('/hasAccess', async (req, res) => {
	try {
		let type = req.query.type.split(',');
		let permission = false;

		if (type.includes('GET')) {
			if (specialFields.hasPermissionForGET(req, (req?.user?.appPermissions || []))) {
				permission = true;
			} else {
				permission = false;
			}
		}
		if (type.includes('PUT')) {
			if (specialFields.hasPermissionForPUT(req, (req?.user?.appPermissions || []))) {
				permission = true;
			} else {
				permission = false;
			}
		}
		if (type.includes('POST')) {
			if (specialFields.hasPermissionForPOST(req, (req?.user?.appPermissions || []))) {
				permission = true;
			} else {
				permission = false;
			}
		}
		if (type.includes('DELETE')) {
			if (specialFields.hasPermissionForDELETE(req, (req?.user?.appPermissions || []))) {
				permission = true;
			} else {
				permission = false;
			}
		}

		return res.status(permission ? 200 : 400).json({ permission });
	} catch (err) {
		logger.error(err);
		res.status(500).json({
			message: err.message
		});
	}
});



module.exports = router;