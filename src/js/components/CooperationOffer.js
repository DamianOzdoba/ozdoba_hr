import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContactForm from "./ContactForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 600,
    maxHeight: '60vh',
    textAlign: 'center',
    color: 'white',
    bgcolor: 'primary.main',
    border: '4px solid',
    borderColor: 'secondary.main',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'

};

function Offer({title, description}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function OfferForm() {
        const [openForm, setOpenForm] = useState(false);
        const handleOpenForm = () => setOpenForm(true);
        const handleCloseForm = () => setOpenForm(false);

        return (
            <div>
                <Button sx={{
                    mt: 2,
                    width: 'auto',
                    fontWeight: 'bold',
                    color: 'secondary.main',
                    bgcolor: 'white',
                    border: '2px solid',
                    borderColor: 'secondary.main'
                }}
                        onClick={handleOpenForm}
                >KONTAKT</Button>
                <Modal
                    open={openForm}
                    onClose={handleCloseForm}
                >
                    <Box sx={style}>
                        <ContactForm/>
                    </Box>
                </Modal>

            </div>
        )
    }

    return (
        <div>
            <div className="offer" onClick={handleOpen}>
                <h2 className="offer__role">{title}</h2>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Typography component="h2" sx={{fontSize: '1.5rem', fontWeight: '700'}}>
                            {title}
                        </Typography>
                        <Typography sx={{overflowY: 'auto'}}>{description}</Typography>
                        <OfferForm/>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default Offer;
