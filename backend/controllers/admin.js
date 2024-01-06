const Appointment = require("../models/product");

const getAppointments = async (req, res) => {
  try {
    // Fetch appointments from the database or any other source
    const appointments = await Appointment.findAll(); // Assuming Appointment is your Sequelize model

    // Respond with the fetched appointments
    res.status(200).json({ status: true, data: appointments });
  } catch (err) {
    // Handle errors if any occurred during the process
    res.status(500).json({ status: false, msg: err.message });
  }
};
const createAppointment = async (req, res) => {
  try {
    // const id = req.body.id;
    const fullName = req.body.fullName;
    const email = req.body.email;
    const phone = req.body.phone;
    const appointmentDate = req.body.appointmentDate;

    // Check if fullName is present and not empty
    if (!fullName || fullName.trim() === '') {
      return res.status(400).json({ status: false, message: "Please enter a valid full name" });
    }

    // Check if email is present and matches a basic email pattern
    // if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    //   return res.status(400).json({ status: false, message: "Please enter a valid email address" });
    // }

    // // Check if phone is present and is a valid phone number
    // if (!phone || !/^\d{10}$/.test(phone)) {
    //   return res.status(400).json({ status: false, message: "Please enter a valid phone number" });
    // }

    // Check if appointmentDate is present and is a valid date format (you can use a more specific date validation library)
    // if (!appointmentDate || !isValidDate(appointmentDate)) {
    //   return res.status(400).json({ status: false, message: "Please enter a valid appointment date" });
    // }

    // Create a new appointment using the provided data
    const newAppointment = await Appointment.create({
      fullName,
      email,
      phone,
      appointmentDate,
    });

    // Respond with the created appointment data
    res.status(201).json({ status: true, data: newAppointment });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message }); // Handle any errors
  }
};

const deleteAppointmentById = async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters

  try {
    // Find the appointment by ID
    const appointment = await Appointment.findByPk(id);

    // Check if the appointment exists
    if (!appointment) {
      return res.status(404).json({ status: false, message: "Appointment not found" });
    }

    // Delete the appointment
    await appointment.destroy();

    // Respond with a success message
    res.status(200).json({ status: true, message: "Appointment deleted successfully" });
  } catch (err) {
    // Handle errors if any occurred during the process
    res.status(500).json({ status: false, error: err.message });
  }
};

module.exports = { createAppointment, getAppointments, deleteAppointmentById };
