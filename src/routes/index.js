const { Router } = require('express');
const router = Router();

const { getPacient, getPacientById, createPacient, deletePacient, updatePacient, getDoctor, getDoctorById, createDoctor, deleteDoctor, updateDoctor, getCompanion, getCompanionById, createCompanion, deleteCompanion, updateCompanion } = require('../controllers/index.controller');

router.get('/pacient', getPacient);
router.get('/pacient/:id', getPacientById);
router.post('/pacient', createPacient);
router.delete('/pacient/:id', deletePacient);
router.put('/pacient/:id', updatePacient);

router.get('/doctor', getDoctor);
router.get('/doctor/:id', getDoctorById);
router.post('/doctor', createDoctor);
router.delete('/doctor/:id', deleteDoctor);
router.put('/doctor/:id', updateDoctor);

router.get('/companion', getCompanion);
router.get('/companion/:id', getCompanionById);
router.post('/companion', createCompanion);
router.delete('/companion/:id', deleteCompanion);
router.put('/companion/:id', updateCompanion);

module.exports = router;