const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '06082003',
    database: 'firstapi',
    port: '5432'
});

const getPacient = async (req, res) => {
    const response = await pool.query('SELECT * FROM paciente');
    res.status(200).json(response.rows);
};

const getPacientById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM paciente WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updatePacient = async(req, res) => {
    const id = req.params.id;
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, alergias, enfermedades, historia_med, id_responsable, peso, altura } = req.body;
    const response = await pool.query('UPDATE paciente SET nombre = $1, apellidos = $2, direccion = $3, ciudad = $4, fecha_nacimiento = $5, rh = $6, alergias = $7, enfermedades = $8, historia_med = $9, id_responsable = $10, peso = $11, altura = $12  WHERE id = $13', [
        nombre,
        apellidos,
        direccion,
        ciudad,
        fecha_nacimiento,
        rh,
        alergias,
        enfermedades,
        historia_med,
        id_responsable,
        peso,
        altura,
        id
    ]);
    console.log(response);
    res.send('Pacient updated successfully');
};

const deletePacient = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM paciente WHERE id = $1', [id]);
    console.log(response);
    res.json(`Pacient ${id} deleted successfully`);
};

const createPacient = async (req, res) => {
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, alergias, enfermedades, historia_med, id_responsable, peso, altura } = req.body;
    const response = await pool.query('INSERT INTO paciente (nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, alergias, enfermedades, historia_med, id_responsable, peso, altura) VALUES ($1, $2)', [nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, alergias, enfermedades, historia_med, id_responsable, peso, altura]);
    console.log(response);
    res.json({
        message: 'Pacient added succesfully',
        body: {
            user: {nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, alergias, enfermedades, historia_med, id_responsable, peso, altura}
        }
    })
};

const getDoctor = async (req, res) => {
    const response = await pool.query('SELECT * FROM medico');
    res.status(200).json(response.rows);
};

const getDoctorById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM medico WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updateDoctor = async(req, res) => {
    const id = req.params.id;
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, especialidad, turno } = req.body;
    const response = await pool.query('UPDATE paciente SET nombre = $1, apellidos = $2, direccion = $3, ciudad = $4, fecha_nacimiento = $5, rh = $6, especialidad = $7, turno = $8  WHERE id = $9', [
        nombre,
        apellidos,
        direccion,
        ciudad,
        fecha_nacimiento,
        rh,
        especialidad,
        turno,
        id
    ]);
    console.log(response);
    res.send('Doctor updated successfully');
};

const deleteDoctor = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM medico WHERE id = $1', [id]);
    console.log(response);
    res.json(`Doctor ${id} deleted successfully`);
};

const createDoctor = async (req, res) => {
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, especialidad, turno } = req.body;
    const response = await pool.query('INSERT INTO paciente (nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, especialidad, turno) VALUES ($1, $2)', [nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, especialidad, turno]);
    console.log(response);
    res.json({
        message: 'Doctor added succesfully',
        body: {
            user: {nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, especialidad, turno}
        }
    })
};

const getCompanion = async (req, res) => {
    const response = await pool.query('SELECT * FROM responsable');
    res.status(200).json(response.rows);
};

const getCompanionById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM responsable WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updateCompanion = async(req, res) => {
    const id = req.params.id;
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh } = req.body;
    const response = await pool.query('UPDATE responsable SET nombre = $1, apellidos = $2, direccion = $3, ciudad = $4, fecha_nacimiento = $5, rh = $6  WHERE id = $7', [
        nombre,
        apellidos,
        direccion,
        ciudad,
        fecha_nacimiento,
        rh,
        id
    ]);
    console.log(response);
    res.send('Acompañante updated successfully');
};

const deleteCompanion = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM responsable WHERE id = $1', [id]);
    console.log(response);
    res.json(`Acompañante ${id} deleted successfully`);
};

const createCompanion = async (req, res) => {
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh } = req.body;
    const response = await pool.query('INSERT INTO responsable (nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh) VALUES ($1, $2)', [nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh]);
    console.log(response);
    res.json({
        message: 'Acompañante added succesfully',
        body: {
            user: {nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh}
        }
    })
};

module.exports = {
    getPacient,
    getDoctor,
    getCompanion,
    getPacientById,
    getDoctorById,
    getCompanionById,
    updatePacient,
    updateDoctor,
    updateCompanion,
    deletePacient,
    deleteDoctor,
    deleteCompanion,
    createPacient,
    createDoctor,
    createCompanion
}