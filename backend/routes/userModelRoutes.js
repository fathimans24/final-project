
const express = require('express');
const router = express.Router();
const ClientModel = require('../model/userModel');


router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.get('/', async (req, res) => {
    try {
        const clients = await ClientModel.find();
        res.status(200).json(clients);  
    } catch (error) {
        console.error('Error fetching clients:', error);  
        res.status(500).json({ error: 'Failed to retrieve clients' });
    }
});


router.post('/add', async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = new ClientModel(clientData);
        await newClient.save();
        res.status(201).json({ message: 'Client added successfully' });
    } catch (error) {
        console.error('Error adding client:', error);  
        res.status(400).json({ error: 'Error occurred while adding client' });
    }
});


router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedClient = await ClientModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedClient) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).json({ message: 'Client updated successfully', updatedClient });
    } catch (error) {
        console.error('Error updating client:', error); 
        res.status(400).json({ error: 'Error occurred while updating client' });
    }
});


router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedClient = await ClientModel.findByIdAndDelete(id);
        if (!deletedClient) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
        console.error('Error deleting client:', error);  
        res.status(400).json({ error: 'Error occurred while deleting client' });
    }
});

module.exports = router;
