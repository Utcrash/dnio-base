const router = require('express').Router();

router.use('/', require('./main.controller'));
router.use('/utils', require('./utils.controller'));
router.use('/utils/callback', require('./callback.controller'));
router.use('/utils/experienceHook', require('./experienceHook.controller'));
router.use('/utils/export', require('./export.controller'));
router.use('/utils/file', require('./file.controller'));
router.use('/utils/fileMapper', require('./fileMapper.controller'));
router.use('/utils/fileTransfers', require('./fileTransfers.controller'));
router.use('/utils/health', require('./health.controller'));
router.use('/utils/workflow', require('./workflow.controller'));

module.exports = router;