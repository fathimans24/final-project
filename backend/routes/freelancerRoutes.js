const express=require ('express');
const router=express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}));
const freelancerModel=require('../model/FreelancerData')

router.get('/',async(req,res)=>{
    try {
        const Freelancer=await freelancerModel.find()
        res.status(200).send(Freelancer);
    } catch (error) {
        res.status(404).send('Freelancer is not found');
        
    }
});


router.post('/add', async(req,res)=>{
    try {
        const course=req.body;
        const newFreelancer=new freelancerModel(course);
        await newFreelancer.save();
        res.status(200).send('Freelancer added successfully');
    } catch (error) {
        console.error(error); // Log the actual error
        res.status(404).send('Error is occured');
    }
});
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await freelancerModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('Freelancer updated successfully');
    } catch (error) {
        res.status(404).send('Error occured');
    }
});
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await freelancerModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('Freelancer deleted successfully');
    } catch (error) {
        res.status(404).send('Error occured');
    }
});

module.exports = router;